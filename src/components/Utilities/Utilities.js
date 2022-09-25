import * as MajorKey from './Keys/major-keys';
import * as MinorKey from './Keys/minor-keys';
import * as MajorChords from './Chords/major-chords';
import * as MinorChords from './Chords/minor-chords';
import * as ChordLegend from './Chords/chord-legend';

export function getNotes(musicKey, musicScale, musicScaleType) {
  switch (musicScale) {
    case 'Major':
      return getMajorScaleType(musicKey, musicScaleType);
    case 'Minor':
      return getMinorScaleType(musicKey, musicScaleType);
    default:
      return null;
  }
}

export function getChords(musicKey, musicScale, musicScaleType) {
  switch (musicScale) {
    case 'Major':
      return getMajorScaleChords(musicKey, musicScaleType);
    case 'Minor':
      return getMinorScaleChords(musicKey, musicScaleType);
    default:
      return null;
  }
}

export function getChordNotes(scaleChords, scaleNotes) {

  let selectedChordNotes = [];
  let filteredChordNotes = [];

  scaleChords.forEach((chord)=>{
    let root = "";
    let ext = "";

    if (chord.includes("#/")) {
      root = chord.slice(0,5);
      ext = chord.substring(5,scaleChords.toString().length);
    } else {
      root = chord.slice(0,1);
      ext = chord.substring(1,scaleChords.toString().length);
    }

    if(ext == ""){
      ext = "M";
    }

    selectedChordNotes.push(translatePositionToNote(root, ChordLegend.CHORDS[ext]));
  });

  selectedChordNotes.forEach((notes) => {
    notes.forEach((note) => {
      if (filteredChordNotes.indexOf(note) == -1) {
        filteredChordNotes.push(note);
      }
    });
  });

  return filteredChordNotes;
}

function translatePositionToNote(musicKey, positions) {
  let notes = [];

  positions.forEach((position)=>{

    let note = MajorKey.MAJOR_NATURAL[musicKey][position.substring(0,1) - 1];

    if (position.substring(0,2).includes("b")) {

      let current = MajorKey.CHROMATIC.indexOf(note);
      if(current > 0) {
        note = MajorKey.CHROMATIC[current - 1];
      } else {
        note = MajorKey.CHROMATIC[MajorKey.CHROMATIC.length - 1];
      }
    }

    if (position.substring(0,2).includes("#")) {
      let current = MajorKey.CHROMATIC.indexOf(note);
      if(current == (MajorKey.CHROMATIC.length - 1)) {
        note = MajorKey.CHROMATIC[0];
      } else {
        note = MajorKey.CHROMATIC[current + 1];
      }
    }

    if (notes.indexOf(note) == -1) {
      notes.push(note);
    }

  });

  return notes;
}

function getMajorScaleType(musicKey, musicScaleType) {
  switch (musicScaleType) {
    case 'Natural':
      return MajorKey.MAJOR_NATURAL[musicKey];
    case 'Harmonic':
      return MajorKey.MAJOR_HARMONIC[musicKey];
    case 'Pentatonic':
      return MajorKey.MAJOR_PENTATONIC[musicKey];
    case 'Blues':
      return MajorKey.MAJOR_BLUES[musicKey];
    default:
      return null;
  }
}

function getMinorScaleType(musicKey, musicScaleType) {
  
  switch (musicScaleType) {
    case 'Natural':
      return MinorKey.MINOR_NATURAL[musicKey];
    case 'Harmonic':
      return MinorKey.MINOR_HARMONIC[musicKey];
    case 'Pentatonic':
      return MinorKey.MINOR_PENTATONIC[musicKey];
    case 'Blues':
      return MinorKey.MINOR_BLUES[musicKey];
    default:
      return null;
  }
}
function getMajorScaleChords(musicKey, musicScaleType) {

  switch (musicScaleType) {
    case 'Natural':
      return MajorChords.MAJOR_NATURAL[musicKey];
    case 'Harmonic':
      return MajorChords.MAJOR_HARMONIC[musicKey];
    case 'Pentatonic':
      return MajorChords.MAJOR_PENTATONIC[musicKey];
    case 'Blues':
      return MajorChords.MAJOR_BLUES[musicKey];
    default:
      return null;
  }
}

function getMinorScaleChords(musicKey, musicScaleType) {
  switch (musicScaleType) {
    case 'Natural':
      return MinorChords.MINOR_NATURAL[musicKey];
    case 'Harmonic':
      return MinorChords.MINOR_HARMONIC[musicKey];
    case 'Pentatonic':
      return MinorChords.MINOR_PENTATONIC[musicKey];
    case 'Blues':
      return MinorChords.MINOR_BLUES[musicKey];
    default:
      return null;
  }
}
