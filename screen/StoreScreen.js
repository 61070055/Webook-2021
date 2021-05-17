import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Navbar from "../components/Navbar";
import Carousel, { Pagination } from "react-native-snap-carousel";
import axios from "axios";

const window = Dimensions.get("window");

const StoreScreen = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  // const [carouselItems, setCarouselItems] = useState([
  //   {
  //     img: "Test",
  // ]);
  const [Profile, setProfile] = useState([]);
  const [Books, setBooks] = useState([]);

  const User = props.navigation.getParam("user");

  useEffect(() => {
    function setUserData() {
      setProfile(User);
    }

    function fatchData() {
      axios.get("http://3.113.31.126:3000/book").then((res) => {
        // console.log(res.data.data);
        setBooks(res.data.data);
      });
    }

    setUserData();
    fatchData();
  }, []);

  // console.log(Profile);

  // console.log(UserId);

  // axios.get("http://3.113.31.126:3000/user/" + UserId + "/").then((res) => {
  //   // console.log(res.data);
  //   setProfile(res.data.data);
  // });

  // console.log("this Profile is :", Profile);
  // console.log("this Books is :", Books);

  _renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: "floralwhite",
          borderRadius: 10,
          height: 300,
        }}
        onPress={() =>
          props.navigation.navigate("Detail", {
            book: item,
            UserId: Profile.id,
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
        <ScrollView>
          <View style={styles.box}>
            <Text style={styles.Header}>Featured</Text>
            <View>
              <Carousel
                layout={"stack"}
                data={Books}
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
              data={Books}
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
