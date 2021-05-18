import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Text, Button } from "react-native-elements";
import color from "../utils/color";
import axios from "axios";

import Navbar from "../components/Navbar";

const window = Dimensions.get("window");

const LibraryScreen = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [Books, setBooks] = useState([]);


  useEffect(() => {

    function fatchData() {
      axios.get("http://3.113.31.126:3000/user/2/library").then((res) => {
        console.log(res.data.data.Books)
        setBooks(res.data.data.Books)
      });
    }

    fatchData();
  }, []);

  _renderItem = ({ item, index }) => {
    console.log(item)
    return (
      <TouchableOpacity
        style={{
          backgroundColor: "floralwhite",
          borderRadius: 10,
          height: 300,
        }}
        onPress={() =>
          props.navigation.navigate("Reader", {
            url: item.url
          })
        }
      >
        <Image
          source={{
            uri: item.cover,
          }}
          style={{
            height: "100%",
            width: "100%",
            borderRadius: 10,
          }}
        />
      </TouchableOpacity>
    );
  };

  Paginations = () => {
    return (
      <View>
        <Pagination
          dotsLength={Books.length}
          activeDotIndex={activeIndex}
          containerStyle={{ backgroundColor: "#DBCBBD" }}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: "black",
          }}
          inactiveDotStyle={
            {
              // Define styles for inactive dots here
            }
          }
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Navbar props={props} />
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.library}>
          {/* Last Read Book*/}
          <View style={{ flex: 1 }}>
            <View style={styles.lastRead}>
              <View style={{ flex: 1, marginRight: 5 }}>
                <Image
                  source={require("../assets/cover-placeholder.jpg")}
                  resizeMode={"center"}
                  style={{
                    width: "90%",
                    height: "80%",
                    marginTop: "10%",
                    marginBottom: "10%",
                    borderRadius: 10,
                  }}
                />
              </View>
              <View style={{ flex: 1, marginLeft: 5, flexDirection: "column" }}>
                <Text style={styles.lastReadBookName}>
                  Harry Potter och De Vises sten
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 10,
                    color: "white",
                    marginBottom: "100%",
                  }}
                >
                  Fantasy · Adventure
                </Text>
                <Button
                  title="Continue Reading"
                  buttonStyle={{
                    backgroundColor: color.lightBrown,
                    borderRadius: 10,
                  }}
                  onPress={() => props.navigation.navigate("Reader")}
                />
                {/* <Text style={{alignSelf: 'flex-end', textAlign: 'center', fontSize: 10}}>Fantasy · Adventure</Text> */}
              </View>
            </View>
          </View>
          {/* Favorite */}
          <View style={{ flex: 1 }}>
            <Text h3 style={styles.headerText}>
              {" "}
              My BooK{" "}
            </Text>
            <Carousel
              layout={"default"}
              data={Books}
              sliderWidth={window.width}
              itemWidth={200}
              renderItem={_renderItem}
              onSnapToItem={(index) => setActiveIndex(index)}
            />
            <Paginations />
          </View>

          {/* Recently Read Book*/}
          {/* <View style={{ flex: 1 }}>
            <Text h3 style={styles.headerText}>
              {" "}
              Recent Book{" "}
            </Text>
            <Carousel
              layout={"default"}
              data={Book}
              sliderWidth={window.width}
              itemWidth={200}
              renderItem={_renderItem}
              onSnapToItem={(index) => setActiveIndex(index)}
            />
            <Paginations />
          </View> */}
        </ScrollView>
      </SafeAreaView>
    </View>
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
  lastRead: {
    flexDirection: "row",
    padding: 10,
    margin: 20,
    backgroundColor: color.brown,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  lastReadBookName: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    borderBottomColor: "white",
    borderBottomWidth: StyleSheet.hairlineWidth,
    color: "white",
  },

  headerText: {
    margin: 5,
  },
});

export default LibraryScreen;
