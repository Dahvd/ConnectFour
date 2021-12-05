import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import Slot from "./Slot";


export default function Column( props ) {

  const [ column, setColumn ] = useState( new Array( 6 ).fill( 0 ) );
  const [ columnVisible, setColumnVisible ] =
    useState( column.map( ( replaced, index ) =>
      <Slot player={column[index]} index={index} key={index}/> ) );

  return (
    <>
      <TouchableOpacity
        disabled={props.winner[0] ? true : false || column[0] != 0}
        onPress={ () => {
          for ( let i = column.length - 1; i >= 0; i-- ) {
            if ( column[i] === 0 ) {
              column[i] = props.player;

              columnVisible[i] =
                <Slot player={column[i]} index={i} key={i}/>;

              props.setPlayer( props.player === 1 ? 2 : 1 );
              setColumn( [ ...column ] );
              setColumnVisible( [ ...columnVisible ] );

              props.boardState[props.index] = column;
              props.setBoardState( props.boardState );
              break;
            }
          }

          // vertical
          for( let j = 0; j < 3; j++ ) {
            if( column[5-j] != 0
              && column[5-j] == column[5-j-1]
              && column[5-j-1] == column[5-j-2]
              && column[5-j-2] == column[5-j-3] ) {
              props.setWinner( [ true, column[5-j] ] );
              break;
            }
          }

          // horizontal
          for( let j = 0; j < 4; j++ ) {
            for( let k = 0; k < 5; k++ ) {
              if( props.boardState[j][5-k] != 0 &&
                props.boardState[j][5-k] == props.boardState[j+1][5-k] &&
                props.boardState[j+1][5-k] == props.boardState[j+2][5-k] &&
                props.boardState[j+2][5-k] == props.boardState[j+3][5-k] ) {
                props.setWinner( [ true, props.boardState[j][5-k] ] );
                break;
              }
            }
          }



          console.log( props.boardState );
          //24 diagonals total

          //12 left to right diagonals
          for( let j = 0; j < 4; j++ ) {
            for( let k = 2; k < 6; k++ ) {
              if( props.boardState[j][k] != 0 &&
                props.boardState[j][k] == props.boardState[j+1][k+1] &&
                props.boardState[j][k] == props.boardState[j+2][k+2] &&
                props.boardState[j][k] == props.boardState[j+3][k+3] ) {
                props.setWinner( [ true, props.boardState[j][k] ] );
              }
            }
          }

          for( let j = 0; j < 4; j++ ) {
            for( let k = 1; k < 5; k++ ) {
              if( props.boardState[j][k] != 0 &&
                props.boardState[j][k] == props.boardState[j+1][k+1] &&
                props.boardState[j][k] == props.boardState[j+2][k+2] &&
                props.boardState[j][k] == props.boardState[j+3][k+3] ) {
                props.setWinner( [ true, props.boardState[j][k] ] );
              }
            }
          }

          for( let j = 0; j < 4; j++ ) {
            for( let k = 0; k < 4; k++ ) {
              if( props.boardState[j][k] != 0 &&
                props.boardState[j][k] == props.boardState[j+1][k+1] &&
                props.boardState[j][k] == props.boardState[j+2][k+2] &&
                props.boardState[j][k] == props.boardState[j+3][k+3] ) {
                props.setWinner( [ true, props.boardState[j][k] ] );
              }
            }
          }

          //12 right to left diagons
          for( let j = 6; j > 2; j-- ) {
            for( let k = 2; k < 6; k++ ) {
              if( props.boardState[j][k] != 0 &&
                props.boardState[j][k] == props.boardState[j-1][k+1] &&
                props.boardState[j][k] == props.boardState[j-2][k+2] &&
                props.boardState[j][k] == props.boardState[j-3][k+3] ) {
                props.setWinner( [ true, props.boardState[j][k] ] );
              }
            }
          }

          for( let j = 6; j > 2; j-- ) {
            for( let k = 1; k < 5; k++ ) {
              if( props.boardState[j][k] != 0 &&
                props.boardState[j][k] == props.boardState[j-1][k+1] &&
                props.boardState[j][k] == props.boardState[j-2][k+2] &&
                props.boardState[j][k] == props.boardState[j-3][k+3] ) {
                props.setWinner( [ true, props.boardState[j][k] ] );
              }
            }
          }

          for( let j = 6; j > 2; j-- ) {
            for( let k = 0; k < 4; k++ ) {
              if( props.boardState[j][k] != 0 &&
                props.boardState[j][k] == props.boardState[j-1][k+1] &&
                props.boardState[j][k] == props.boardState[j-2][k+2] &&
                props.boardState[j][k] == props.boardState[j-3][k+3] ) {
                props.setWinner( [ true, props.boardState[j][k] ] );
              }
            }
          }
        }}
      >
        <>
          {columnVisible}
        </>
      </TouchableOpacity>
    </>

  );
}
