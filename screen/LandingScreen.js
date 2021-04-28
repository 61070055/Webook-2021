import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from "react-native-paper";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

class LandingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: true,
    };
    this._fontsLoaded = this._fontsLoaded.bind(this);
  }

  componentDidMount() {
    this._fontsLoaded();
  }

  async _fontsLoaded() {
    await Font.loadAsync({
      KanitBlack: require("../assets/fonts/Kanit-Black.ttf"),
    });

    this.setState({ fontsLoaded: false });
  }

  render() {
    const { fontsLoaded } = this.state;

    if (fontsLoaded) {
      return <AppLoading />;
    }
    return (
      <View style={styles.container}>
        <View style={styles.logo_box}>
          <Image source={require("../assets/Logo.png")} />
        </View>
        <View style={styles.option_box}>
          <Button
            style={styles.button}
            mode="contained"
            onPress={() => this.props.navigation.navigate("SignIn")}
          >
            Sign In
          </Button>
          <Image source={require("../assets/Or.png")} />
          <Button
            style={styles.button}
            mode="contained"
            onPress={() => this.props.navigation.navigate("SignUp")}
          >
            Sign Up
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DBCBBD",
  },
  logo_box: {
    flex: 2.2,
    marginTop: "15%",
    alignItems: "center",
  },
  option_box: {
    flex: 2,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#87431D",
    width: "85%",
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    margin: 20,
  },
});

export default LandingScreen;
