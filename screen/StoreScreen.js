import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Navbar from "../components/Navbar";

const StoreScreen = (props) => {
  return (
    <View style={styles.container}>
      <Navbar />
      <Text>This is Store</Text>
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
});

export default StoreScreen;
