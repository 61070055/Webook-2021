import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from "react-native-paper";

// import { AppLoading } from "expo-app-loading";
// import {
//   useFonts,
//   Kanit_100Thin,
//   Kanit_100Thin_Italic,
//   Kanit_200ExtraLight,
//   Kanit_200ExtraLight_Italic,
//   Kanit_300Light,
//   Kanit_300Light_Italic,
//   Kanit_400Regular,
//   Kanit_400Regular_Italic,
//   Kanit_500Medium,
//   Kanit_500Medium_Italic,
//   Kanit_600SemiBold,
//   Kanit_600SemiBold_Italic,
//   Kanit_700Bold,
//   Kanit_700Bold_Italic,
//   Kanit_800ExtraBold,
//   Kanit_800ExtraBold_Italic,
//   Kanit_900Black,
//   Kanit_900Black_Italic,
// } from "@expo-google-fonts/kanit";

const HomeScreen = (props) => {
  // let [fontsLoaded, error] = useFonts({
  //   Kanit_100Thin,
  //   Kanit_900Black,
  // });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // } else {}
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

export default HomeScreen;
