import React from 'react';
import './css/Fretboard.css';


const Fretboard = (props) => {

  const notes = ['A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb','E', 'F', 'F#/Gb', 'G', 'G#/Ab']
  const standardTuning = [7, 0, 5, 10, 2, 7]
  let strings = new Array(6);
  let musicScaleNotes = props.musicScaleNotes;

  for (var i = 0; i < strings.length; i++) {
    let note = standardTuning[i];
    let frets = new Array(21);
    for (var x = 0; x < frets.length; x++) {
      if ( note === notes.length ) {
        note = 0;
      }
      frets[x] = notes[note];
      note++;
    }
    strings[i] = frets;
  }

  var rows = strings.map(function (item, i){
    var entry = item.map(function (element, j) {

      return (
        <div className={
          "fret" +
          (musicScaleNotes.includes(element) ? " key" : " blank") +
          (musicScaleNotes[0] === element ? " root" : "")
        } key={j}>{element}</div>
        );
    });

      return (
        <div className="string" key={i}> {entry} </div>
      );
  });
  return (
    <div className="FretboardContainer">
      <div className="MusicKey">{props.musicKey} {props.musicScale} {props.musicScaleType}</div>
      <div className="fretboard">
        {rows}
      </div>
    </div>
  );
}


export default Fretboard;
