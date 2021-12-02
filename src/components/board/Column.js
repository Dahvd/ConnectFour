import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import Slot from "./Slot";


export default function Column( props ) {
  const rows = Number( props.rows );
  const col = new Array( rows ).fill( null );
  const column = col.map( ( slot, index ) =>
    <Slot color="#fff" index={index} key={index}/> );
  let [ c, setC ] = useState( column );

  return (
    <TouchableOpacity onPress={() => {
      c.pop();
      console.log( c );
      setC( c );

    }}>
      {c}
    </TouchableOpacity>
  );
}

