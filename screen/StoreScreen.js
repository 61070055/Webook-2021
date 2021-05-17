import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Navbar from "../components/Navbar";
import Carousel, { Pagination } from "react-native-snap-carousel";

const window = Dimensions.get("window");

const StoreScreen = (props) => {
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
          height: 300,
          padding: 50,
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
      <Navbar props={props} />
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.box}>
            <Text style={styles.Header}>Featured</Text>
            <View>
              <Carousel
                layout={"stack"}
                data={carouselItems}
                sliderWidth={1000}
                itemWidth={300}
                itemHeight={150}
                renderItem={_renderItem}
                onSnapToItem={(index) => setActiveIndex(index)}
              />
              <Paginations />
            </View>
          </View>
          <View style={styles.box2}>
            <Text style={{ paddingLeft: 20, fontSize: 20, marginBottom: 10 }}>
              You May Like
            </Text>
            <Carousel
              layout={"default"}
              data={carouselItems}
              sliderWidth={window.width}
              itemWidth={200}
              renderItem={_renderItem}
              onSnapToItem={(index) => setActiveIndex(index)}
            />
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

export default StoreScreen;
