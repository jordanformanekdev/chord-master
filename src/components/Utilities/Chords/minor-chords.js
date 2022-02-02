export const MINOR_TIADS = ["m", "dim", "", "m", "m", "", ""];
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

//TODO::Complete Scalre Type
export const MINOR_NATURAL_TIADS = ["m", "dim", "", "m", "m", "", ""];
export const MINOR_NATURAL = {"C": ["Cm", "Ddim", "D#/Eb", "Fm", "Gm", "G#/Ab", "A#/Bb"],
                      "C#/Db": ["C#/Dbm", "D#/Ebdim", "E", "F#/Gbm", "G#/Abm", "A", "B"],
                      "D": ["Dm", "Edim", "F", "Gm", "Am", "A#/Bb", "C"],
                      "D#/Eb": ["D#/Ebm", "Fdim", "F#", "G#/Abm", "A#/Bbm", "B", "C#/Db"],
                      "E": ["Em", "F#/Gbdim", "G", "Am", "Bm", "C", "D"],
                      "F": ["Fm", "Gdim", "G#/Ab", "A#/Bbm", "Cm", "C#/Db", "D#/Eb"],
                      "F#/Gb": ["F#/Gbm", "G#/Abdim", "A", "Bm", "C#/Dbm", "D", "E"],
                      "G": ["Gm", "Adim", "A#/Bb", "Cm", "Dm", "D#/Eb", "F"],
                      "G#/Ab": ["G#/Abm", "Bbdim", "B", "C#/Dbm", "D#/Ebm", "E", "F#/Gb"],
                      "A": ["Am", "Bdim", "C", "Dm", "Em", "F", "G"],
                      "A#/Bb": ["A#/Bbm", "Cdim", "C#/Db", "D#/Ebm", "Fm", "F#/Gb", "G#/Ab"],
                      "B": ["Bm", "C#/Dbdim", "D", "Em", "F#/Gbm", "G", "A"]
                    };
//TODO::Complete Scalre Type
export const MINOR_HARMONIC_TIADS = ["m", "dim", "", "m", "m", "", ""];
export const MINOR_HARMONIC = {"C": ["C", "D", "D#/Eb", "F", "G", "G#/Ab", "B"],
                      "C#/Db": ["C#/Db", "D#/Eb", "E", "F#/Gb", "G#/Ab", "A", "C"],
                      "D": ["D", "E", "F", "G", "A", "A#/Bb", "C#/Db"],
                      "D#/Eb": ["D#/Eb", "F", "G", "G#/Ab", "A#/Bb", "C", "D"],
                      "E": ["E", "F#/Gb", "G", "A", "B", "C", "D#/Eb"],
                      "F": ["F", "G", "G#/Ab", "A#/Bb", "C", "C#/Db", "E"],
                      "F#/Gb": ["F#/Gb", "G#/Ab", "A", "B", "C#/Db", "D", "F"],
                      "G": ["G", "A", "A#/Bb", "C", "D", "D#/Eb", "F#/Gb"],
                      "G#/Ab": ["G#/Ab", "Bb", "B", "C#/Db", "D#/Eb", "E", "G"],
                      "A": ["A", "B", "C", "D", "E", "F", "G#/Ab"],
                      "A#/Bb": ["A#/Bb", "C", "C#/Db", "D#/Eb", "F", "F#/Gb", "A"],
                      "B": ["B", "C#/Db", "D", "E", "F#/Gb", "G", "A#/Bb"]
                    };
//TODO::Complete Scalre Type
export const MINOR_PENTATONIC_TIADS = ["m", "", "m", "m", ""];
export const MINOR_PENTATONIC = {"C": ["Cm", "D#/Eb", "Fm", "Gm", "A#/Bb"],
                      "C#/Db": ["C#/Dbm", "E", "F#/Gbm", "G#/Abm", "B"],
                      "D": ["Dm", "F", "Gm", "Am", "C"],
                      "D#/Eb": ["D#/Ebm", "F#", "G#/Abm", "A#/Bbm", "C#/Db"],
                      "E": ["Em", "G", "Am", "Bm", "D"],
                      "F": ["Fm", "G#/Ab", "A#/Bbm", "Cm", "D#/Eb"],
                      "F#/Gb": ["F#/Gbm", "A", "Bm", "C#/Dbm", "E"],
                      "G": ["Gm", "A#/Bb", "Cm", "Dm", "F"],
                      "G#/Ab": ["G#/Abm", "B", "C#/Dbm", "D#/Ebm", "F#/Gb"],
                      "A": ["Am", "C", "Dm", "Em", "G"],
                      "A#/Bb": ["A#/Bbm", "C#/Db", "D#/Ebm", "Fm", "G#/Ab"],
                      "B": ["Bm", "D", "Em", "F#/Gbm", "A"]
                    };
//TODO::Complete Scalre Type
export const MINOR_BLUES_TIADS = ["m", "dim", "", "m", "m", "", ""];;
export const MINOR_BLUES = {"C": ["C", "D#/Eb", "F", "F#/Gb", "G", "A#/Bb"],
                      "C#/Db": ["C#/Db", "E", "F#/Gb", "G", "G#/Ab", "B"],
                      "D": ["D", "F", "G", "G#/Ab", "A", "C"],
                      "D#/Eb": ["D#/Eb", "F#", "G#/Ab", "A", "A#/Bb", "C#/Db"],
                      "E": ["E", "G", "A", "A#/Bb", "B", "D"],
                      "F": ["F", "G#/Ab", "A#/Bb", "B", "C", "D#/Eb"],
                      "F#/Gb": ["F#/Gb", "A", "B", "C", "C#/Db", "E"],
                      "G": ["G", "A#/Bb", "C", "C#/Db", "D", "F"],
                      "G#/Ab": ["G#/Ab", "B", "C#/Db", "D", "D#/Eb", "F#/Gb"],
                      "A": ["A13th", "C", "Dmaj6", "D#/Ebmaj9", "E7th", "G9th"],
                      "A#/Bb": ["A#/Bb", "C#/Db", "D#/Eb", "E", "F", "G#/Ab"],
                      "B": ["B", "D", "E", "F", "F#/Gb", "A"]
                    };
