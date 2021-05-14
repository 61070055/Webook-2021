import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Navbar from "../components/Navbar";

const StoreScreen = (props) => {
  return (
    <View style={styles.container}>
      <Navbar />
      <View style={{ flex: 9 }}>
        <Text>
          FEATURED
        </Text>
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
    fontFamily: 'kanit-regular'
  },
});

export default StoreScreen;
