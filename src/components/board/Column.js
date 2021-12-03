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
      <TouchableOpacity
        disabled={props.winner[0] ? true : false}
        onPress={ () => {

          for ( let i = column.length - 1; i >= 0; i-- ) {
            if ( column[i] === 0 ) {
              column[i] = props.player;

              columnVisible[i] =
                <Slot player={column[i]} index={i} key={i}/>;

              break;
            }
          }

          props.setPlayer( props.player === 1 ? 2 : 1 );

          setColumn([ ...column ]);
          setColumnVisible([ ...columnVisible ]);
        }}
      >
        <>
          {columnVisible}
        </>
      </TouchableOpacity>
    </>

  );
}
