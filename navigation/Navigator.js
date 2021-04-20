import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Home from "../screen/HomeScreen";

const MyNavigator = createStackNavigator({
  H: Home,
});

export default createAppContainer(MyNavigator);
