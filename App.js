import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Button } from "react-native";
import Board from "./src/components/board/Board";

export default function App() {
  return (
    <View style={styles.container}>
      <Board cols="7" rows="6"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
