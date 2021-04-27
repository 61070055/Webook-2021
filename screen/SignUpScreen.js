import React from "react";
import { StyleSheet, Text, View } from "react-native";
const SignUpScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>this is SignUp page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DBCBBD",
  },
});

export default SignUpScreen;
