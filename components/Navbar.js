import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Avatar } from "react-native-paper";
import { Searchbar } from "react-native-paper";

const StoreScreen = (props) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <View style={styles.container}>
      <View style={styles.option}>
        <Avatar.Text size={40} label="A" style={{ backgroundColor: "red" }} />
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <Text>This is Store</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#290001",
    width: "100%",
    height: "8%",
    display: "flex",
  },
  option: {
    margin: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default StoreScreen;
