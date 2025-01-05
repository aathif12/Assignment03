import TopBar from "@/app/Components/TopBar";
import { View, StyleSheet } from "react-native";

export default function Course() {
  return (
    <View style={styles.container}>
      <TopBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
