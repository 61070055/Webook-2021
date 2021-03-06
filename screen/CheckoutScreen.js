import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Text, Button } from "react-native-elements";
import color from "../utils/color";
import axios from "axios";

import Navbar from "../components/Navbar";

const CheckoutScreen = (props) => {
  const [Profile, setProfile] = useState([]);
  const [Book, setBook] = useState([]);

  // console.log(Book[1].name);

  useEffect(() => {
    function getUserData() {
      axios.get("http://3.113.31.126:3000/user/2").then((res) => {
        // console.log(res.data.data);
        setProfile(res.data.data);
      });
    }

    function fatchData() {
      axios
        .get("http://3.113.31.126:3000/cart/" + Profile.id + "/")
        .then((res) => {
          // console.log(res.data.data[0].Books);
          let All_book = res.data.data[0].Books.map((b) => {
            return b;
          });
          // console.log("this is All: ", All_book);
          setBook(All_book);
        });
    }

    getUserData();
    fatchData();
  }, []);

  const purchasehandle = () => {
    Book.map((i) => {
      return axios
        .patch(
          "http://3.113.31.126:3000/user/" +
            Profile.id +
            "/library/add/" +
            i.CartBook.BookId +
            "/"
        )
        .then((res) => {
          console.log("success");

          axios
            .delete("http://3.113.31.126:3000/cart/" + Profile.id + "/delete/")
            .then((res) => {
              console.log("delete success");
              props.navigation.navigate("Store");
            })
            .catch((e) => {
              console.log(e);
            });
        })
        .catch((e) => {
          console.log(e);
        });
    });
  };

  return (
    <View style={styles.container}>
      <Navbar props={props} />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={Book}
          renderItem={({ item }) => (
            <View style={styles.item}>
              {/* <Text style={styles.item}>{item.title}</Text> */}
              <View style={styles.imgcon}>
                <Image
                  source={{
                    uri: item.cover,
                  }} // prop.image?
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
                <Text style={styles.namecon}>{item.name}</Text>
                <Text style={styles.priceson}>{item.price} THB.</Text>
              </View>
            </View>
          )}
        />
        <View style={styles.two}>
          <View style={{ flex: 1, flexDirection: "row", marginRight: "0.2%" }}>
            <Text style={styles.finalcon}>Total</Text>
            <Text style={styles.totalprice}>300 THB.</Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 2 }}></View>
            <TouchableOpacity
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
              onPress={() => purchasehandle()}
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
            </TouchableOpacity>
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
