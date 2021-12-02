import React, { useState } from "react";
import { TouchableHighlight, Text, TouchableOpacity } from "react-native";
import Slot from "./Slot";


export default function Column( props ) {

  const [ column, setColumn ] = useState( new Array( 6 ).fill( 0 ) );
  const [ columnVisible, setColumnVisible ] =
    useState( column.map( ( replaced, index ) =>
      <Slot player={column[index]} index={index} key={index}/> ) );


  return (
    <>
      <TouchableOpacity disabled={props.winner[0] ? true : false}
        onPress={() => {
          let colCopy = column;
          let colVisCopy = columnVisible;
          let tempPlayer = props.player;
          for( let i = column.length - 1; i >= 0; i-- ) {
            if( column[i] == 0 ) {
              colCopy[i] = props.player;
              if ( props.player == 1 ) tempPlayer++;
              else tempPlayer--;
              props.setPlayer( tempPlayer );
              colVisCopy[i] =
          <Slot player={colCopy[i]} index={i} key={i}/>;
              break;
            }
          }

          console.log( column );
          setColumn( colCopy );
          setColumnVisible( colVisCopy );

        }}>
        <>
          {columnVisible}
        </>
      </TouchableOpacity>
    </>

  );
}

