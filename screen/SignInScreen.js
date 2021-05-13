import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TextInput, Button } from "react-native-paper";

const SignInScreen = (props) => {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.logo_box}>
        <Image source={require("../assets/Logo.png")} />
      </View>
      <View style={styles.option_box}>
        <TextInput
          style={styles.text_field}
          theme={{ colors: { primary: "#000000" } }}
          label="Email"
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <TextInput
          style={styles.text_field}
          theme={{ colors: { primary: "#000000" } }}
          label="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => props.navigation.navigate("Store")}
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
        <View style={{ display: "flex", flexDirection: "row", marginTop: 15 }}>
          <Image
            style={{ marginRight: 80 }}
            source={require("../assets/Google-Logo.png")}
          />
          <Image source={require("../assets/Facebook-Logo.png")} />
        </View>
      </View>
    </View>
  );
};

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
