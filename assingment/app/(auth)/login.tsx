import { router } from "expo-router";
import { useState } from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TopBar from "../Components/TopBar";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.mainContainer}>
          <Text style={styles.TextStyles}>Uov Student Care</Text>
        </View>
        <TopBar />

        <View style={styles.imageContainer}>
          <Text style={styles.TextStyles1}>Student Login</Text>
          <TextInput
            value={username}
            placeholder="Username"
            style={styles.inputStyles}
          />
          <TextInput placeholder="Password" style={styles.inputStyles} />

          <TouchableOpacity
            style={styles.btnStyles}
            onPress={() => {
              router.push("./(home)/(tabs)/Profile");
            }}
          >
            <Text style={styles.TextStyles}>Login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  btnStyles: {
    height: 50,
    width: 200,
    borderRadius: 999,
    backgroundColor: "blue",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
  },
  inputStyles: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  TextStyles1: {
    color: "#000",
    fontSize: 30,
    fontWeight: "bold",
  },
  TextStyles: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  mainContainer: {
    flex: 0.2,
    backgroundColor: "#6e3fff",
    width: 500,

    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    flex: 0.3,
    alignItems: "center",
    top: 0,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    top: 0,
  },
});
