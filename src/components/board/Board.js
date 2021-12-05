import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Column from "./Column";

export default function Board(  ) {
  const [ player, setPlayer ] = useState( 1 );
  const [ winner, setWinner ] = useState( [ false, 0 ] );
  const temp = new Array( 7 ).fill( null );
  const row = new Array( 6 ).fill( 0 );
  const tempBoardState = temp.map( () => row );


  const [ boardState, setBoardState ] = useState( tempBoardState );

  const board = temp.map( ( column, index ) =>
    <Column winner={winner} setWinner={setWinner}
      key={index} index={index} player={player} setPlayer={setPlayer}
      boardState={boardState} setBoardState={setBoardState}/> );
  let winnerShow = null;
  if( winner[0] ) winnerShow = "Player " + winner[1] + " has won the game!";
  return (
    <>
      <Text>
        {winnerShow}
      </Text>
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
