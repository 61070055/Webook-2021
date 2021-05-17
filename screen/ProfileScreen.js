import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Dimensions,
  FlatList,
  StatusBar,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Text } from "react-native-elements";
import color from "../utils/color";
import Navbar from "../components/Navbar";
import * as ImagePicker from "expo-image-picker";
import { TextInput, Button } from "react-native-paper";
import ImgToBase64 from "react-native-image-base64";
import axios from "axios";

const window = Dimensions.get("window");

const ProfileScreen = (props) => {
  const [image, setImage] = useState(null);
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);

  const handleEdit = () => {
    let body = {
      email: email,
      profilePicture: image,
    };
  };

  useEffect(() => {
    function getUser() {
      axios.get("http://3.113.31.126:3000/user/2").then((res) => {
        setUser(res.data.data);
      });
    }
    getUser();
  }, []);
  console.log(user);

  // axios
  //   .get("http://3.113.31.126:3000/user/2")
  //   .then((response) => {
  //     console.log("axios got");
  //     setUser(response);
  //     console.log(user);
  //     // do something about response
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });

  // useEffect(() => {
  //   (async () => {
  //     if (Platform.OS !== "web") {
  //       const { status } =
  //         await ImagePicker.requestMediaLibraryPermissionsAsync();
  //       if (status !== "granted") {
  //         alert("Sorry, we need camera roll permissions to make this work!");
  //       }
  //     }
  //   })();
  // }, []);

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        base64: true,
      });
      if (!result.cancelled) {
        setImage(result.uri);
        // console.log(result);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.container}>
        <Text style={styles.header}>Account Setting</Text>
        <TouchableOpacity
          onPress={pickImage}
          activeOpacity={1} // default is .2
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: "10%",
            borderRadius: 1000,
            marginTop: "7%",
            width: "80%",
            height: "38%",
            marginBottom: "13%",
          }}
        >
          <Image
            source={{ uri: user.profilePicture }}
            resizeMode="contain"
            style={{
              flex: 1,
              borderRadius: 1000,
              width: "100%",
              height: "100%",
            }}
          />
          {image && (
            <Image
              source={{ uri: image }}
              style={{
                width: 250,
                height: 250,
                borderRadius: 125,
                position: "absolute",
                top: "50%",
                right: "50%",
                transform: [{ translateY: -125 }, { translateX: 125 }],
              }}
            />
          )}
        </TouchableOpacity>
        <TextInput
          style={styles.text_field2}
          theme={{ colors: { primary: "#C87941" } }}
          label="Email"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => {
            // axios
            //   .post("http://localhost:3000/user/image/1", {
            //     imageBinary: "xxxxxxxxxxxx",
            //   })
            //   .then((res) => {
            //     console.log("response: ", response);
            //     // do something about response
            //   })
            //   .catch(() => {
            //     console.error("error");
            //   });
          }}
        >
          Register
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text_field2: {
    backgroundColor: "#DBCBBD",
    width: "90%",
    // margin: 5,
    marginHorizontal: "5%",
  },
  text_field: {
    backgroundColor: "#DBCBBD",
    width: "85%",
    height: "100%",
    margin: 5,
  },
  header: {
    marginTop: "10%",
    marginBottom: "10%",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  container: {
    flex: 9,
    backgroundColor: "#DBCBBD",
    width: "100%",
    height: "100%",
  },
  logo_box: {
    flex: 2,
    left: "25%",
    top: "50%",
    position: "relative",
    transform: [{ translateY: -300 }],
  },
  option_box: {
    flex: 3,
    alignItems: "center",
  },
  text_field: {
    backgroundColor: "#C87941",
    width: "85%",
    margin: 5,
  },
  button: {
    backgroundColor: "#87431D",
    width: "85%",
    height: "8%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    marginTop: 30,
    marginHorizontal: "7.5%",
  },
});

export default ProfileScreen;
