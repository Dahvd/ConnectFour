import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Slot( props ) {
  return (
    <View style={styles.container} >
      <View style={styles.hole}>
        <Text>
          {props.index}
        </Text>
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
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21
  },
  yellow: {
    width: 42,
    height: 42,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 21
  },
});
