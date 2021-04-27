import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import LandingScreen from "../screen/LandingScreen";
import SigninScreen from "../screen/SignInScreen";
import SignupScreen from "../screen/SignUpScreen";

const MyNavigator = createStackNavigator(
  {
    LandingPage: LandingScreen,
    SignIn: SigninScreen,
    SignUp: SignupScreen,
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

export default createAppContainer(MyNavigator);
