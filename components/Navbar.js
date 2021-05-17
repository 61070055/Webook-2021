import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { Avatar } from "react-native-paper";
import { Searchbar, IconButton, Colors } from "react-native-paper";
import color from "../utils/color";

const nevBar = (props) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <View style={styles.option}>
        <Avatar.Text size={40} label="A" style={styles.avatar} />
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.Searchbar}
        />
        <IconButton
          icon="cart"
          color={Colors.white}
          size={25}
          onPress={() => props.navigation.navigate("Checkout")}
          style={styles.cart}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.darkBrown,
    width: "100%",
    height: "8%",
    display: "flex",
    flex: 1,
  },
  option: {
    marginTop: 10,
    flexDirection: "row",
    padding: 10,
  },
  avatar: {
    flex: 1,
  },
  Searchbar: {
    borderRadius: 100,
    flex: 7,
    height: "80%",
    backgroundColor: color.white,
  },
  cart: {
    flex: 1,
  },
});

export default nevBar;
