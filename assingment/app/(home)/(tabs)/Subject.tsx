import TopBar from "@/app/Components/TopBar";
import { View, Text, StyleSheet } from "react-native";

export default function Subject() {
  return (
    <View style={styles.container}>
      <TopBar />
      <Text>Welcome to the Subject Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
  },
});
