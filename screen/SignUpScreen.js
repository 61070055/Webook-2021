import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import axios from "axios";

const SignUpScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [error, setError] = useState("");

  const handleRegister = () => {
    let body = {
      firstName: firstname,
      lastName: lastname,
      email: email,
      password: password,
      profilePicture: "link.to.pic",
    };

    if (password === confirmPassword) {
      axios
        .post("http://3.113.31.126:3000/user/register", body)
        .then((res) => {
          console.log(res);
          // console.log(res.data);
          props.navigation.navigate("SignIn");
        })
        .catch((e) => {
          console.log(e);
          setError("Something went wrong!");
        });
    } else {
      console.log("password doesn't match");
      setError("password doesn't match");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.Header}>WeBook</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.text_field}
            theme={{ colors: { primary: "#C87941" } }}
            label="Email"
            value={email}
            onChangeText={(email) => setEmail(email)}
          />
          <TextInput
            style={styles.text_field}
            theme={{ colors: { primary: "#C87941" } }}
            label="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(password) => setPassword(password)}
          />
          <TextInput
            style={styles.text_field}
            theme={{ colors: { primary: "#C87941" } }}
            label="Comfirm Password"
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={(confirmPassword) =>
              setConfirmPassword(confirmPassword)
            }
          />
          <TextInput
            style={styles.text_field}
            theme={{ colors: { primary: "#C87941" } }}
            label="Firstname"
            value={firstname}
            onChangeText={(firstname) => setFirstname(firstname)}
          />
          <TextInput
            style={styles.text_field}
            theme={{ colors: { primary: "#C87941" } }}
            label="Lastname"
            value={lastname}
            onChangeText={(lastname) => setLastname(lastname)}
          />
          <Button
            style={styles.button}
            mode="contained"
            onPress={() => handleRegister()}
          >
            Register
          </Button>
          <Text style={styles.error}>{error}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DBCBBD",
    width: "100%",
    height: "100%",
  },
  box: {
    flex: 2,
    alignItems: "center",
    marginTop: "10%",
    height: "100%",
  },
  Header: {
    fontSize: 40,
    fontWeight: "bold",
  },
  form: {
    marginTop: "15%",
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  text_field: {
    backgroundColor: "#DBCBBD",
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
  },
  error: {
    fontSize: 20,
    color: "red",
  },
});

export default SignUpScreen;
