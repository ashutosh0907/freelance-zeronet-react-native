import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../Pages/Splash/Splash';
import Login from '../Pages/Login/Login';
import Claim from '../Pages/Claim';

const Stack = createNativeStackNavigator();
export default LoginStack = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        options={{headerShown: false}}
        name="Splash"
        component={Splash}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Claim"
        component={Claim}
      />
    </Stack.Navigator>
  );
};
