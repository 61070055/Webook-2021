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
  return (
    <PDFReader
      source={{
        uri: "https://webook-book.s3-ap-southeast-1.amazonaws.com/book.pdf",
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
