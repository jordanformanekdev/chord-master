import * as MajorKey from './Keys/major-keys';
import * as MinorKey from './Keys/minor-keys';
import * as MajorChords from './Chords/major-chords';
import * as MinorChords from './Chords/minor-chords';

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
