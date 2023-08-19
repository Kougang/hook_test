import React, { useState } from "react";

const FunctionState = () => {
  const [counter, setCounter] = useState(0);

  const addOne = () => {
    setCounter(prevCounter => prevCounter + 1 )
  };

  return (
    <div>
      <p>function state: {counter}</p>
      <button onClick={addOne}>state dans fonction</button>
    </div>
  );
};

export default FunctionState;