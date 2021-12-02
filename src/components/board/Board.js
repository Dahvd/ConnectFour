import React from "react";
import { StyleSheet, View } from "react-native";
import Column from "./Column";

export default function Board( props ) {
  const rows = Number( props.rows );
  const cols = Number( props.cols );
  const temp = new Array( cols ).fill( null );
  const board = temp.map( ( column, index ) =>
    <Column rows={rows} key={index}/> );
  return (
    <View style={styles.container}>
      {board}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  }

});