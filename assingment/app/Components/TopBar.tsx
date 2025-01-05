import { View, Image, StyleSheet } from "react-native";

export default function TopBar() {
  return (
    <View style={{ alignItems: "center", top: 0 }}>
      <Image
        style={styles.Image}
        source={require("../../assets/cropped-UoV_Logo.png")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  Image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    top: 0,
  },
});
