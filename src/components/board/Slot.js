import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function Slot( props ) {
  return (
    <View style={styles.container} >
      <View
        style={props.player == 0 ? styles.hole :
          props.player == 1 ? styles.red : styles.yellow} >
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    backgroundColor: "#0390fc",
    alignItems: "center",
    justifyContent: "center",
  },
  hole: {
    width: 42,
    height: 42,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21
  },
  red: {
    width: 42,
    height: 42,
    backgroundColor: "#ff0000",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21
  },
  yellow: {
    width: 42,
    height: 42,
    backgroundColor: "#ffff00",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21
  },
});
