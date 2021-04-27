import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from "react-native-paper";

const LandingScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.logo_box}>
        <Image source={require("../assets/Logo.png")} />
      </View>
      <View style={styles.option_box}>
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => props.navigation.navigate("SignIn")}
        >
          Sign In
        </Button>
        <Image source={require("../assets/Or.png")} />
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => props.navigation.navigate("SignUp")}
        >
          Sign Up
        </Button>
      </View>
    </View>
  );
};

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
    // fontFamily: "Kanit_100Thin",
  },
});

export default LandingScreen;
