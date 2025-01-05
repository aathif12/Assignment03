import { Text, View, StyleSheet } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import TopBar from "@/app/Components/TopBar";
export default function Profile() {
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
