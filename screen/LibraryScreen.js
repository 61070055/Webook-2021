import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Text, Button } from "react-native-elements";
import color from "../utils/color";

import Navbar from "../components/Navbar";

const window = Dimensions.get("window");

const LibraryScreen = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState([
    {
      title: "Test",
      text: "Text 1",
    },
    {
      title: "Item 2",
      text: "Text 2",
    },
    {
      title: "Test",
      text: "Text 3",
    },
    {
      title: "Item 4",
      text: "Text 4",
    },
    {
      title: "Test",
      text: "Text 5",
    },
    {
      title: "Item 6",
      text: "Text 6",
    },
  ]);

  _renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: "floralwhite",
          borderRadius: 5,
          height: 250,
          padding: 50,
          marginLeft: 25,
          marginRight: 0,
        }}
      >
        <Text style={{ fontSize: 30 }}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    );
  };

  Paginations = () => {
    return (
      <View>
        <Pagination
          dotsLength={carouselItems.length}
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
      <Navbar />
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
                />
                {/* <Text style={{alignSelf: 'flex-end', textAlign: 'center', fontSize: 10}}>Fantasy · Adventure</Text> */}
              </View>
            </View>
          </View>
          {/* Favorite */}
          <View style={{ flex: 1 }}>
            <Text h3 style={styles.headerText}>
              {" "}
              Favorite{" "}
            </Text>
            <Carousel
              layout={"default"}
              data={carouselItems}
              sliderWidth={window.width}
              itemWidth={200}
              renderItem={_renderItem}
              onSnapToItem={(index) => setActiveIndex(index)}
            />
            <Paginations />
          </View>

          {/* Recently Read Book*/}
          <View style={{ flex: 1 }}>
            <Text h3 style={styles.headerText}>
              {" "}
              Recent Book{" "}
            </Text>
            <Carousel
              layout={"default"}
              data={carouselItems}
              sliderWidth={window.width}
              itemWidth={200}
              renderItem={_renderItem}
              onSnapToItem={(index) => setActiveIndex(index)}
            />
            <Paginations />
          </View>
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
