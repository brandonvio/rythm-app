import React from "react";
import Charts from "./Charts";

function Symbol(props) {
  const location = props.location;
  const arr = location.pathname.split("/");
  const sym = arr[2];
  return (
    <div>
      <Charts symbol={sym} />
    </div>
  );
}

export default Symbol;
