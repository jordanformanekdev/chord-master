export const MAJOR_TRIADS = ["", "m", "m", "", "", "m", "dim"];
export const C_MAJOR = ["C", "Dm", "Em", "F", "G", "Am", "Bdim"];
export const CS_DF_MAJOR = ["C#/Db", "D#/Ebm", "Fm", "F#/Gb", "G#/Ab", "A#/Bbm", "Cdim"];
export const D_MAJOR = ["D", "Em", "F#/Gbm", "G", "A", "Bm", "C#/Dbdim"];
export const DS_EF_MAJOR = ["D#/Eb", "Fm", "Gm", "G#/Ab", "A#/Bb", "Cm", "Ddim"];
export const E_MAJOR = ["E", "F#/Gbm", "G#/Abm", "A", "B", "C#/Dbm", "D#/Ebdim"];
export const F_MAJOR = ["F", "Gm", "Am", "A#/Bb", "C", "D", "Em", "Fdim"];
export const FS_GF_MAJOR = ["F#/Gb", "G#/Abm", "A#/Bbm", "B", "C#/Db", "D#/Ebm", "Fdim"];
export const G_MAJOR = ["G", "Am", "Bm", "C", "D", "Em", "F#/Gbdim"];
export const GS_AF_MAJOR = ["G#/Ab", "Bbm", "Cm", "C#/Db", "D#/Eb", "Fm", "Gdim"];
export const A_MAJOR = ["A", "Bm", "C#/Dbm", "D", "E", "F#/Gbm", "G#/Abdim"];
export const AS_BF_MAJOR = ["A#/Bb", "Cm", "Dm", "D#/Eb", "F", "Gm", "Adim"];
export const B_MAJOR = ["B", "C#/Dbm", "D#/Ebm", "E", "F#/Gb", "G#/Abm", "A#/Bbdim"];

export const MAJOR_NATURAL_TRIADS = ["", "m", "m", "", "", "m", "dim"];
export const MAJOR_NATURAL = {"C": ["C", "Dm", "Em", "F", "G", "Am", "Bdim"],
                      "C#/Db": ["C#/Db", "D#/Ebm", "Fm", "F#/Gb", "G#/Ab", "A#/Bbm", "Cdim"],
                      "D": ["D", "Em", "F#/Gbm", "G", "A", "Bm", "C#/Dbdim"],
                      "D#/Eb": ["D#/Eb", "Fm", "Gm", "G#/Ab", "A#/Bb", "Cm", "Ddim"],
                      "E": ["E", "F#/Gbm", "G#/Abm", "A", "B", "C#/Dbm", "D#/Ebdim"],
                      "F": ["F", "Gm", "Am", "A#/Bb", "C", "D", "Em", "Fdim"],
                      "F#/Gb": ["F#/Gb", "G#/Abm", "A#/Bbm", "B", "C#/Db", "D#/Ebm", "Fdim"],
                      "G": ["G", "Am", "Bm", "C", "D", "Em", "F#/Gbdim"],
                      "G#/Ab": ["G#/Ab", "A#/Bbm", "Cm", "C#/Db", "D#/Eb", "Fm", "Gdim"],
                      "A": ["A", "Bm", "C#/Dbm", "D", "E", "F#/Gbm", "G#/Abdim"],
                      "A#/Bb": ["A#/Bb", "Cm", "Dm", "D#/Eb", "F", "Gm", "Adim"],
                      "B": ["B", "C#/Dbm", "D#/Ebm", "E", "F#/Gb", "G#/Abm", "A#/Bbdim"]
                    };

export const MAJOR_HARMONIC_TRIADS = ["", "aug", "dim", "min", "", "aug", "dim", "min", "", "bdim", "aug", "dim"];
export const MAJOR_HARMONIC = {"C": ["C", "Caug", "Ddim", "Emin", "E", "Eaug", "Fdim", "Fmin", "G", "G#/Abdim", "G#/Abaug", "Bdim"],
                      "C#/Db": ["C#", "C#aug", "D#dim", "Fmin", "F", "Faug", "F#dim", "F#min", "G#", "Adim", "Aaug", "Cdim"],
                      "D": ["D", "Daug", "Edim", "F#min", "F#", "F#aug", "Gdim", "Gmin", "A", "A#/Bbdim", "A#/Bbaug", "C#/Dbdim"],
                      "D#/Eb": ["D#/Eb", "D#/Ebaug", "Fdim", "Gmin", "G", "Gaug", "G#/Abdim", "G#/Abmin", "A#/Bb", "Bdim", "Baug", "Ddim"],
                      "E": ["E", "Eaug", "F#/Gbdim", "G#/Abmin", "G#/Ab", "G#/Abaug", "Adim", "Amin", "B", "Cdim", "Caug", "D#/Ebdim"],
                      "F": ["F", "Faug", "Gdim", "Amin", "A", "Aaug", "A#/Bbdim", "A#/Bbmin", "C", "C#/Dbdim", "C#/Dbaug", "Edim"],
                      "F#/Gb": ["F#/Gb", "F#/Gbaug", "G#/Abdim", "A#/Bbmin", "A#/Bb", "A#/Bbaug", "Bdim", "Bmin", "C#/Db", "Ddim", "Daug", "Fdim"],
                      "G": ["G", "Gaug", "Adim", "Bmin", "B", "Baug", "Cdim", "Cmin", "D", "D#/Ebdim", "D#/Ebaug", "F#/Gbdim"],
                      "G#/Ab": ["G#/Ab", "G#/Abaug", "A#/Bbdim", "Cmin", "C", "Caug", "C#/Dbdim", "C#/Dbmin", "D#/Eb", "Edim", "Eaug", "Gdim"],
                      "A": ["A", "Aaug", "Bdim", "C#/Dbmin", "C#/Db", "C#/Dbaug", "Ddim", "Dmin", "E", "Fdim", "Faug", "G#/Abdim"],
                      "A#/Bb": ["A#/Bb", "A#/Bbaug", "Cdim", "Dmin", "D", "Daug", "D#/Ebdim", "D#/Ebmin", "F", "F#dim", "F#aug", "Gdim"],
                      "B": ["B", "Baug", "C#/Dbdim", "D#/Ebmin", "D#/Eb", "D#/Ebaug", "Edim", "Emin", "F#/Gb", "Gdim", "Gaug", "A#/Bbdim"]
                    };
export const MAJOR_PENTATONIC_TRIADS = ["", "m", "m", "", "", "m", "dim"];
export const MAJOR_PENTATONIC = {"C": ["C", "Dm", "Em", "F", "G", "Am", "Bdim"],
                      "C#/Db": ["C#/Db", "D#/Ebm", "Fm", "F#/Gb", "G#/Ab", "A#/Bbm", "Cdim"],
                      "D": ["D", "Em", "F#/Gbm", "G", "A", "Bm", "C#/Dbdim"],
                      "D#/Eb": ["D#/Eb", "Fm", "Gm", "G#/Ab", "A#/Bb", "Cm", "Ddim"],
                      "E": ["E", "F#/Gbm", "G#/Abm", "A", "B", "C#/Dbm", "D#/Ebdim"],
                      "F": ["F", "Gm", "Am", "A#/Bb", "C", "D", "Em", "Fdim"],
                      "F#/Gb": ["F#/Gb", "G#/Abm", "A#/Bbm", "B", "C#/Db", "D#/Ebm", "Fdim"],
                      "G": ["G", "Am", "Bm", "C", "D", "Em", "F#/Gbdim"],
                      "G#/Ab": ["G#/Ab", "A#/Bbm", "Cm", "C#/Db", "D#/Eb", "Fm", "Gdim"],
                      "A": ["A", "Bm", "C#/Dbm", "D", "E", "F#/Gbm", "G#/Abdim"],
                      "A#/Bb": ["A#/Bb", "Cm", "Dm", "D#/Eb", "F", "Gm", "Adim"],
                      "B": ["B", "C#/Dbm", "D#/Ebm", "E", "F#/Gb", "G#/Abm", "A#/Bbdim"]
                    };
export const MAJOR_BLUES_TRIADS = ["", "maj6", "maj9", "7th", "9th", "13th"];
export const MAJOR_BLUES = {"C": ["C", "Dmaj6", "D#/Ebmaj9", "E7th", "G9th", "A13th"],
                      "C#/Db": ["C#/Db", "D#/Ebmaj6", "Emaj9", "F7th", "G#/Ab9th", "A#/Bb13th"],
                      "D": ["D", "Emaj6", "Fmaj9", "F#/Gb7th", "A9th", "B13th"],
                      "D#/Eb": ["D#/Eb", "Fmaj6", "F#/Gbmaj9", "G7th", "A#/Bb9th", "C13th"],
                      "E": ["E", "F#/Gbmaj6", "Gmaj9", "G#/Ab7th", "B9th", "C#/Db13th"],
                      "F": ["F", "Gmaj6","G#/Abmaj9", "A7th", "C9th", "D13th"],
                      "F#/Gb": ["F#/Gb", "G#/Abmaj6", "Amaj9", "A#/Bb7th", "C#/Db9th", "D#/Eb13th"],
                      "G": ["G", "Amaj6", "A#/Bbmaj9", "B7th", "D9th", "E13th"],
                      "G#/Ab": ["G#/Ab", "A#/Bbmaj6", "Bmaj9", "C7th", "D#/Eb9th", "F13th"],
                      "A": ["A", "Bmaj6", "Cmaj9", "C#/Db7th", "E9th", "F#/Gb13th"],
                      "A#/Bb": ["A#/Bb", "Cmaj6", "C#/Dbmaj9", "D7th", "F9th", "G13th"],
                      "B": ["B", "C#/Dbmaj6", "Dmaj9", "D#/Eb7th", "F#/Gb9th", "G#/Ab13th"]
                    };
