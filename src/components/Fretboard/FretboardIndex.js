import React from 'react';
import './css/FretboardIndex.css';

const FretboardIndex = () => {

  let frets = new Array(21);
  for (var i = 0; i < frets.length; i++) {
    frets[i] = i;
  }

  var index = frets.map(function (element, j) {

    return (
      <div className="fretIndex" key={j}>{element}</div>
    );
  });
  return (
    <div className="fretboardIndex">
      {index}
    </div>
  );
}


export default FretboardIndex;
