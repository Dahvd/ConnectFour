import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Column from "./Column";

export default function Board( props ) {
  const [ player, setPlayer ] = useState( 1 );
  const [ winner, setWinner ] = useState( [ false, 0 ] );
  const temp = new Array( 7 ).fill( null );
  const board = temp.map( ( column, index ) =>
    <Column winner={winner} setWinner={setWinner}
      key={index} player={player} setPlayer={setPlayer}/> );
  let winnerShow = null;
  if( winner[0] ) winnerShow = "Player " + winner[1] + " has won the game!";
  return (
    <>
      <View>
        {winnerShow}
      </View>
      <View style={styles.container}>
        {board}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  }

});