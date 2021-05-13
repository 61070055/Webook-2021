import React, { Component } from "react";
import Navigator from "./navigation/Navigator";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

export default class App extends Component {
  state = {
    fontLoaded: false,
  };

  componentDidMount() {
    this.loadAssetsAsync();
  }

  async loadAssetsAsync() {
    await Font.loadAsync({
      // Load a font `Montserrat` from a static resource
      "material-community": require("@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf"),
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    if (!this.state.fontLoaded) {
      return null; // render some progress indicator
    }
    return <Navigator />;
  }
}
