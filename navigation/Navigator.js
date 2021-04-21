import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Home from "../screen/HomeScreen";
import SigninScreen from "../screen/SignInScreen";
import SignupScreen from "../screen/SignUpScreen";

const MyNavigator = createStackNavigator(
  {
    H: Home,
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
