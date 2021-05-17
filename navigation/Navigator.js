import React from "react";
import { StyleSheet } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";

import LandingScreen from "../screen/LandingScreen";
import SigninScreen from "../screen/SignInScreen";
import SignupScreen from "../screen/SignUpScreen";
import StoreScreen from "../screen/StoreScreen";
import LibraryScreen from "../screen/LibraryScreen";
import CheckoutScreen from "../screen/CheckoutScreen";
import ProfileScreen from "../screen/ProfileScreen";
import ReaderScreen from "../screen/ReaderScreen";
import BookDetail from "../screen/BookDetail";

import color from "../utils/color";

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: color.lightBrown,
  },
  drawerContent: {},
  labelStyle: {
    fontWeight: "bold",
    fontSize: 20,
  },
});

const AppNavigator = createDrawerNavigator(
  {
    Library: LibraryScreen,
    Store: StoreScreen,
    Profile: ProfileScreen,
  },
  {
    style: styles.drawer,
    contentOptions: {
      inactiveTintColor: color.white,
      inactiveBackgroundColor: color.lightBrown,
      activeBackgroundColor: color.brown,
      labelStyle: styles.labelStyle,
    },
    contentContainerStyle: styles.drawerContent,
  }
);

const MyNavigator = createStackNavigator(
  {
    LandingPage: LandingScreen,
    SignIn: SigninScreen,
    SignUp: SignupScreen,
    Checkout: CheckoutScreen,
    Reader: ReaderScreen,
    Detail: BookDetail,
    App: AppNavigator,
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

export default createAppContainer(MyNavigator);
