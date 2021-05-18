import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";

import PDFReader from "rn-pdf-reader-js";

const ReaderScreen = (props) => {

  const url = props.navigation.getParam("url");
  // console.log(props)
  return (
    <PDFReader
      source={{
        uri: url,
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: "#DBCBBD",
    fontFamily: "kanit-regular",
  },
  library: {
    flexDirection: "column",
  },
  pdf: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default ReaderScreen;
