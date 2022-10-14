import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Articles, Components, Home, Profile, Register, Pro} from '../screens';
import {useScreenOptions, useTranslation} from '../hooks';

const Stack = createStackNavigator();

export default () => {
  const {t} = useTranslation();
  const screenOptions = useScreenOptions();

  return (
    <Stack.Navigator screenOptions={screenOptions.stack}>
      <Stack.Screen name="Home" component={Home} options={{title: 'Home'}} />

      <Stack.Screen
        name="Menu"
        component={Components}
        options={screenOptions.components}
      />

      <Stack.Screen
        name="Cart"
        component={Articles}
        options={{title: t('navigation.articles')}}
      />

      <Stack.Screen name="Pro" component={Pro} options={screenOptions.pro} />

      <Stack.Screen
        name="Order"
        component={Profile}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Profile"
        component={Register}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
