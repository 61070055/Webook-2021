import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class SignUpScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>this is SignUp page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DBCBBD",
  },
});

export default SignUpScreen;
