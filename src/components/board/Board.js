import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Column from "./Column";

export default function Board( props ) {
  const [ player, setPlayer ] = useState( 1 );
  const temp = new Array( 7 ).fill( null );
  const board = temp.map( ( column, index ) =>
    <Column key={index} player={player} setPlayer={setPlayer}/> );
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