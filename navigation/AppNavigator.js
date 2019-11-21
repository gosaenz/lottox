import React from 'react';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';


import SignupScreen from '../screens/SignInScreen';
import LoginScreen from '../screens/LogInScreen'
import InformationScreen from '../screens/InformationScreen'


const SignUpStack = createStackNavigator({ SignUp: SignupScreen });
const LogInStack = createStackNavigator({ LogIn: LoginScreen });
const InformationStack = createStackNavigator({ Information: InformationScreen });

export default createAppContainer(
  createSwitchNavigator({
    Main: MainTabNavigator,
    SignUp: SignUpStack,
    Login: LogInStack,
    Information: InformationStack
  },
    {
      initialRouteName: 'Information',
    }
  )
);
