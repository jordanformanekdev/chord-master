export const CHORDS = {
  ////////////Dominant
  //ROOT,THIRD,FIFTH
  //MAJOR
  "M": ["1", "3", "5"],
  //ROOT,THIRD,FIFTH,FLAT_SEVENTH
  //SEVENTH
  "7": ["1", "3", "5", "7b"],
  //ROOT,THIRD,FLAT_FIFTH,FLAT_SEVENTH
  //SEVENTH_FLAT_FIFTH
  "7b5": ["1", "3", "5b", "7b"],
  //ROOT,FOURTH,FIFTH,FLAT_SEVENTH
  // SEVENETH_SUSPENDED_FOURTH
  "7sus4": ["1", "4", "5", "7b"],
  //ROOT,THIRD,SIXTH
  // SIXTH
  "6": ["1", "3", "6"],
  //ROOT,THIRD,FIFTH,FLAT_SEVENTH,NINTH
  // NINTH
  "9": ["1", "3", "5", "7b","2"],
  //ROOT,FLAT_THIRD,SHARP_FIFTH,SEVENTH,NINTH
  // NINTH_SHARP_FIFTH
  "9#5": ["1", "3", "5#", "7","2"],
  //ROOT,FLAT_THIRD,FLAT_FIFTH,SEVENTH,NINTH
  // NINTH_FLAT_FIFTH
  "9b5": ["1", "3", "5b", "7","2"],

  ////////////Minor
  //ROOT,FLAT_THIRD,FIFTH
  //MINOR
  "m": ["1", "3b", "5"],
  //ROOT,FLAT_THIRD,FIFTH,FLAT_SEVENTH
  //MINOR_SEVENTH
  "m7": ["1", "3b", "5", "7b"],
  //ROOT,FLAT_THIRD,FLAT_FIFTH,FLAT_SEVENTH
  // MINOR_SEVENTH_FLAT_FIFTH
  "m7b5": ["1", "3b", "5b", "7b"],
  //ROOT,FLAT_THIRD,SIXTH
  // MINOR_SIXTH
  "m6": ["1", "3b", "6"],
  //ROOT,FLAT_THIRD,FIFTH,FLAT_SEVENTH,NINTH
  //MINOR_NINTH
  "m9": ["1", "3b", "5", "7b","2"],

  ////////////Major
  //ROOT,THIRD,FIFTH,SEVENTH
  //MAJOR_SEVENTH
  "Maj7": ["1", "3", "5", "7"],
  //ROOT,THIRD,FLAT_FIFTH,SEVENTH
  // MAJOR_SEVENTH_FLAT_FIFTH
  "Maj7b5": ["1", "3", "5b", "7"],
  //ROOT,FLAT_THIRD,FIFTH,SEVENTH,NINTH
  // MAJOR_NINTH
  "Maj9": ["1", "3", "5", "7","2"],

  ////////////Diminished
  //ROOT,FLAT_THIRD,FLAT_FIFTH,FLAT_SEVENTH
  //DIMINISHED
  "dim": ["1", "3b", "5b", "7b"],

  ////////////Augmented
  //ROOT,THIRD,SHARP_FIFTH
  //AUGMENTED
  "aug": ["1", "3", "5#"],
  //ROOT,THIRD,SHARP_FIFTH,FLAT_SEVENTH
  //SEVENTH_AUGMENTED_FIFTH
  "7#5": ["1", "3", "5#", "7b"],
  //ROOT,THIRD,FIFTH,SEVENTH,NINTH,SHARP_ELEVENTH,THIRTEENTH
  //AUGMENTED_ELEVENTH
  "9#11": ["1", "3", "5", "7","2","4#","6"],
  //ROOT,THIRD,FIFTH,SEVENTH,NINTH,THIRTEENTH
  //THIRTEENTH
  "13": ["1", "3", "5", "7","6"]
}
