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
      "kanit-regular": {
        uri: require('./assets/fonts/Kanit-Regular.ttf'),
      }
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
