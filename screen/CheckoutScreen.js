import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Dimensions,
  FlatList,
  StatusBar,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Text, Button } from "react-native-elements";
import color from "../utils/color";

import Navbar from "../components/Navbar";

const window = Dimensions.get("window");

const CheckoutScreen = (props) => {
  const [use, setUse] = useState([
    {
      key: "1",
      title: "1 Harry Potter och De Vises Sten",
      price: "69 THB.",
    },
    {
      key: "2",
      title: "2 Harry Potter och De Vises Sten",
      price: "69 THB.",
    },
    {
      key: "3",
      title: "3 Harry Potter och De Vises Sten",
      price: "69 THB.",
    },
    {
      key: "4",
      title: "4 Harry Potter och De Vises Sten",
      price: "69 THB.",
    },
    {
      key: "5",
      title: "5 Harry Potter och De Vises Sten",
      price: "69 THB.",
    },
    {
      key: "6",
      title: "6 Harry Potter och De Vises Sten",
      price: "69 THB.",
    },
    {
      key: "7",
      title: "7 Harry Potter och De Vises Sten",
      price: "69 THB.",
    },
    {
      key: "8",
      title: "8 Harry Potter och De Vises Sten",
      price: "69 THB.",
    },
    {
      key: "9",
      title: "9 Harry Potter och De Vises Sten",
      price: "69 THB.",
    },
  ]);

  return (
    <View style={styles.container}>
      <Navbar props={props} />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={use}
          renderItem={({ item }) => (
            <View style={styles.item}>
              {/* <Text style={styles.item}>{item.title}</Text> */}
              <View style={styles.imgcon}>
                <Image
                  source={require("../assets/cover-placeholder.jpg")} // prop.image?
                  resizeMode={"stretch"}
                  style={{
                    width: "95%",
                    height: "100%",
                    margin: "5%",
                    flex: 1,
                  }}
                />
              </View>
              <View style={styles.textcon}>
                <Text style={styles.namecon}>{item.title}</Text>
                <Text style={styles.priceson}>{item.price}</Text>
              </View>
            </View>
          )}
        />
        <View style={styles.two}>
          <View style={{ flex: 1, flexDirection: "row", marginRight: "0.2%" }}>
            <Text style={styles.finalcon}>Total</Text>
            <Text style={styles.totalprice}>XXX THB.</Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 2 }}></View>
            <View
              style={{
                flex: 3,
                backgroundColor: color.darkBrown,
                width: "95%",
                height: "90%",
                borderRadius: 100,
                borderWidth: 1,
                borderColor: "white",
                marginRight: "2%",
                marginBottom: "2%",
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  marginTop: "6%",
                }}
              >
                Purchase
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  totalprice: {
    flex: 1,
    color: "white",
    fontSize: 20,
    marginRight: "5%",
    marginTop: "3%",
    textAlign: "right",
  },
  finalcon: {
    flex: 1,
    color: "white",
    fontSize: 20,
    marginLeft: "5%",
    marginTop: "3%",
  },
  two: {
    backgroundColor: color.brown,
    margin: "2.5%",
    flexDirection: "column",
    height: 100,
    borderRadius: 10,
  },
  namecon: {
    color: "white",
    fontSize: 17,
    flex: 2,
  },
  priceson: {
    flex: 1,
    textAlign: "right",
    color: "white",
    fontSize: 20,
    marginRight: "5%",
  },
  textcon: {
    flex: 3,
    marginLeft: "3%",
    marginTop: "3%",
  },
  imgcon: {
    flex: 2,
    height: "100%",
    width: "40%",
  },
  item: {
    backgroundColor: color.brown,
    margin: "2.5%",
    flex: 5,
    flexDirection: "row",
    height: 150,
    borderRadius: 10,
  },
  container: {
    flex: 9,
    backgroundColor: "#DBCBBD",
    width: "100%",
    height: "100%",
    fontFamily: "kanit-regular",
  },
  box: {
    flex: 3,
    alignItems: "center",
    marginTop: "5%",
    height: "100%",
  },
  Header: {
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 5,
  },
  box2: {
    flex: 2,
    marginTop: 30,
    marginBottom: 30,
  },
});

export default CheckoutScreen;
