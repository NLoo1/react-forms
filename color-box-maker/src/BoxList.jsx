import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { v4 as uuidv4 } from 'uuid';
import './BoxList.css'

function BoxList({ allBoxes }) {
  const [boxes, setBoxes] = useState(allBoxes);

  function addBox(newBox) {
    setBoxes(boxes => [...boxes, { ...newBox }]);
  }

  return (
    <div className="boxList">
      {boxes.map(box => (
        <Box
          key={uuidv4()}
          width={box.width}
          height={box.height}
          backgroundColor={box.backgroundColor}
        />
      ))}
      <NewBoxForm addBox={addBox} />
    </div>
  );
}

BoxList.defaultProps = {
  allBoxes: [
    { width: "50", height: "50", backgroundColor: "blue" },
    { width: "50", height: "50", backgroundColor: "gray" }
  ]
};

export default BoxList;
