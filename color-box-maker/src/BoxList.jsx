import React, { useState } from 'react'
import Box from './Box'
import NewBoxForm from './NewBoxForm';
import { v4 as uuidv4 } from 'uuid';

function BoxList({allBoxes}) {
  const [boxes, setBoxes] = useState(allBoxes)

  function addBox(box){
    setBoxes(boxes => [...boxes, box]);
  }

  function removeBox(box){
    setBoxes(boxes => boxes.filter(b => b !== box));
  }

  return (
    <div>
      {boxes.map((box => (
        <Box
          key={uuidv4()}
          width={box.width}
          height={box.height}
          backgroundColor={box.backgroundColor}
        />
      ))}

      <NewBoxForm />
    </div>
    
  );
}


BoxList.defaultProps = {
  allBoxes: [
    { width: "50", height: "50", backgroundColor: "blue" },
    { width: "50", height: "50", backgroundColor: "gray" }
  ]
};

export default BoxList
