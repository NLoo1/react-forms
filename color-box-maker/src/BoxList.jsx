import React, { useState } from 'react'
import Box from './Box'

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
      {boxes.map((box, index) => (
        <Box
          key={index}
          width={box.width}
          height={box.height}
          backgroundColor={box.backgroundColor}
        />
      ))}
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
