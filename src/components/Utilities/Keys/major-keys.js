export const MAJOR_TRIADS = ["", "m", "m", "", "", "m", "dim"];
export const CHROMATIC = ["C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B"];
export const C_MAJOR = ["C", "D", "E", "F", "G", "A", "B"];
export const CS_DF_MAJOR = ["C#/Db", "D#/Eb", "F", "F#/Gb", "G#/Ab", "A#/Bb", "C"];
export const D_MAJOR = ["D", "E", "F#/Gb", "G", "A", "B", "C#/Db"];
export const DS_EF_MAJOR = ["D#/Eb", "F", "G", "G#/Ab", "A#/Bb", "C", "D"];
export const E_MAJOR = ["E", "F#/Gb", "G#/Ab", "A", "B", "C#/Db", "D#/Eb"];
export const F_MAJOR = ["F", "G", "A", "A#/Bb", "C", "D", "E", "F"];
export const FS_GF_MAJOR = ["F#/Gb", "G#/Ab", "A#/Bb", "B", "C#/Db", "D#/Eb", "F"];
export const G_MAJOR = ["G", "A", "B", "C", "D", "E", "F#/Gb"];
export const GS_AF_MAJOR = ["G#/Ab", "Bb", "C", "C#/Db", "D#/Eb", "F", "G"];
export const A_MAJOR = ["A", "B", "C#/Db", "D", "E", "F#/Gb", "G#/Ab"];
export const AS_BF_MAJOR = ["A#/Bb", "C", "D", "D#/Eb", "F", "G", "A"];
export const B_MAJOR = ["B", "C#/Db", "D#/Eb", "E", "F#/Gb", "G#/Ab", "A#/Bb"];

export const MAJOR_NATURAL_TRIADS = ["", "m", "m", "", "", "m", "dim"];
export const MAJOR_NATURAL = {"C": ["C", "D", "E", "F", "G", "A", "B"],
                      "C#/Db": ["C#/Db", "D#/Eb", "F", "F#/Gb", "G#/Ab", "A#/Bb", "C"],
                      "D": ["D", "E", "F#/Gb", "G", "A", "B", "C#/Db"],
                      "D#/Eb": ["D#/Eb", "F", "G", "G#/Ab", "A#/Bb", "C", "D"],
                      "E": ["E", "F#/Gb", "G#/Ab", "A", "B", "C#/Db", "D#/Eb"],
                      "F": ["F", "G", "A", "A#/Bb", "C", "D", "E"],
                      "F#/Gb": ["F#/Gb", "G#/Ab", "A#/Bb", "B", "C#/Db", "D#/Eb", "F"],
                      "G": ["G", "A", "B", "C", "D", "E", "F#/Gb"],
                      "G#/Ab": ["G#/Ab", "A#/Bb", "C", "C#/Db", "D#/Eb", "F", "G"],
                      "A": ["A", "B", "C#/Db", "D", "E", "F#/Gb", "G#/Ab"],
                      "A#/Bb": ["A#/Bb", "C", "D", "D#/Eb", "F", "G", "A"],
                      "B": ["B", "C#/Db", "D#/Eb", "E", "F#/Gb", "G#/Ab", "A#/Bb"]
                    };

export const MAJOR_HARMONIC_TRIADS = ["", "m", "m", "", "", "m", "dim"];
export const MAJOR_HARMONIC = {"C": ["C", "D", "E", "F", "G", "G#/Ab", "B"],
                      "C#/Db": ["C#/Db", "D#/Eb", "F", "F#/Gb", "G#/Ab", "A", "C"],
                      "D": ["D", "E", "F#/Gb", "G", "A", "A#/Bb", "C#/Db"],
                      "D#/Eb": ["D#/Eb", "F", "G", "G#/Ab", "A#/Bb", "B", "D"],
                      "E": ["E", "F#/Gb", "G#/Ab", "A", "B", "C", "D#/Eb"],
                      "F": ["F", "G", "A", "A#/Bb", "C", "C#/Db", "E"],
                      "F#/Gb": ["F#/Gb", "G#/Ab", "A#/Bb", "B", "C#/Db", "D", "F"],
                      "G": ["G", "A", "B", "C", "D", "D#/Eb", "F#/Gb"],
                      "G#/Ab": ["G#/Ab", "A#/Bb", "C", "C#/Db", "D#/Eb", "E", "G"],
                      "A": ["A", "B", "C#/Db", "D", "E", "F", "G#/Ab"],
                      "A#/Bb": ["A#/Bb", "C", "D", "D#/Eb", "F", "G"],
                      "B": ["B", "C#/Db", "D#/Eb", "E", "F#/Gb", "G", "A#/Bb"]
                    };
export const MAJOR_PENTATONIC_TRIADS = ["", "m", "m", "", "", "m", "dim"];
export const MAJOR_PENTATONIC = {"C": ["C", "D", "E", "G", "A"],
                      "C#/Db": ["C#/Db", "D#/Eb", "F", "G#/Ab", "A#/Bb"],
                      "D": ["D", "E", "F#/Gb", "A", "B"],
                      "D#/Eb": ["D#/Eb", "F", "G", "A#/Bb", "C"],
                      "E": ["E", "F#/Gb", "G#/Ab", "B", "C#/Db"],
                      "F": ["F", "G", "A", "C", "D", "E"],
                      "F#/Gb": ["F#/Gb", "G#/Ab", "A#/Bb", "C#/Db", "D#/Eb"],
                      "G": ["G", "A", "B", "D", "E"],
                      "G#/Ab": ["G#/Ab", "Bb", "C", "D#/Eb", "F"],
                      "A": ["A", "B", "C#/Db", "E", "F#/Gb"],
                      "A#/Bb": ["A#/Bb", "C", "D", "F", "G"],
                      "B": ["B", "C#/Db", "D#/Eb", "F#/Gb", "G#/Ab"]
                    };

export const MAJOR_BLUES = {"C": ["C", "D", "D#/Eb", "E", "G", "A"],
                      "C#/Db": ["C#/Db", "D#/Eb", "E", "F", "G#/Ab", "A#/Bb"],
                      "D": ["D", "E", "F", "F#/Gb", "A", "B", "D"],
                      "D#/Eb": ["D#/Eb", "F", "F#/Gb", "G", "A#/Bb", "C"],
                      "E": ["E", "F#/Gb", "G", "G#/Ab", "B", "C#/Db"],
                      "F": ["F", "G","G#/Ab", "A", "C", "D"],
                      "F#/Gb": ["F#/Gb", "G#/Ab", "A", "A#/Bb", "C#/Db", "D#/Eb"],
                      "G": ["G", "A", "A#/Bb", "B", "D", "E"],
                      "G#/Ab": ["G#/Ab", "A#/Bb", "B", "C", "D#/Eb", "F"],
                      "A": ["A", "B", "C", "C#/Db", "E", "F#/Gb"],
                      "A#/Bb": ["A#/Bb", "C", "C#/Db", "D", "F", "G"],
                      "B": ["B", "C#/Db", "D", "D#/Eb", "F#/Gb", "G#/Ab"]
                    };
