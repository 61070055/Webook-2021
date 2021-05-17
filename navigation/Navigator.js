import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";

import LandingScreen from "../screen/LandingScreen";
import SigninScreen from "../screen/SignInScreen";
import SignupScreen from "../screen/SignUpScreen";
import StoreScreen from "../screen/StoreScreen";
import LibraryScreen from '../screen/LibraryScreen'

const AppNavigator = createDrawerNavigator(
  {
    Library: LibraryScreen,
    Store: StoreScreen,
  }
)

const MyNavigator = createStackNavigator(
  {
    LandingPage: LandingScreen,
    SignIn: SigninScreen,
    SignUp: SignupScreen,
    App: AppNavigator
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);


export default createAppContainer(MyNavigator);
