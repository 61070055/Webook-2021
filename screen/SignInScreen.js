import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { TextInput, Button } from "react-native-paper";

class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      password: "",
    };
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={{ padding: null }}
      >
        <View style={styles.logo_box}>
          <Image source={require("../assets/Logo.png")} />
        </View>
        <View style={styles.option_box}>
          <TextInput
            style={styles.text_field}
            theme={{ colors: { primary: "#000000" } }}
            label="Email"
            value={this.state.text}
            onChangeText={(text) => this.setState({ text: text })}
          />
          <TextInput
            style={styles.text_field}
            theme={{ colors: { primary: "#000000" } }}
            label="Password"
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={(password) => this.setState({ password: password })}
          />
          <Button
            style={styles.button}
            mode="contained"
            onPress={() => console.log("login")}
          >
            Login
          </Button>
          <Text
            style={{ color: "gray", marginBottom: 30 }}
            onPress={() => console.log(".....")}
          >
            Forgot Email / Password
          </Text>
          <Image source={require("../assets/Or.png")} />
          <View
            style={{ display: "flex", flexDirection: "row", marginTop: 15 }}
          >
            <Image
              style={{ marginRight: 80 }}
              source={require("../assets/Google-Logo.png")}
            />
            <Image source={require("../assets/Facebook-Logo.png")} />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DBCBBD",
    width: "100%",
    height: "100%",
  },
  logo_box: {
    flex: 2,
    left: "25%",
    top: "50%",
    position: "relative",
    transform: [{ translateY: -300 }],
  },
  option_box: {
    flex: 3,
    alignItems: "center",
  },
  text_field: {
    backgroundColor: "#C87941",
    width: "85%",
    margin: 5,
  },
  button: {
    backgroundColor: "#87431D",
    width: "85%",
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    margin: 10,
  },
  // other: {
  //   // height: "10%",
  //   flex: 0.5,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   display: "flex",
  //   flexDirection: "row",
  // },
});

export default SignInScreen;
