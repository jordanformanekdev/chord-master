import React from 'react';

import './css/Instrument.css';
import Guitar from '../../container/Guitar/Guitar';
import Selector from '../../container/Selector/Selector';
import { getNotes, getChords, getChordNotes } from '../../components/Utilities/Utilities'

class Instrument extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyChange = this.handleKeyChange.bind(this);
    this.handleScaleChange = this.handleScaleChange.bind(this);
    this.handleScaleTypeChange = this.handleScaleTypeChange.bind(this);
    this.handleNoteSelectionChange = this.handleNoteSelectionChange.bind(this);
    this.handleChordSelectionChange = this.handleChordSelectionChange.bind(this);
    this.state = {
                  musicKey: 'C',
                  musicScale: 'Major',
                  musicScaleType: 'Natural',
                  musicScaleNotes: ["C", "D", "E", "F", "G", "A", "B"],
                  musicSelectorNotes: ["C", "D", "E", "F", "G", "A", "B"],
                  musicSelectorChords: ["C", "Dm", "Em", "F", "G", "Am", "Bdim"],
                  selectedNotes: [],
                  selectedChords: []
                };
  }


  handleKeyChange(musicKey) {
    this.setState({musicKey: musicKey});
    let instrumentScaleNotes = getNotes(musicKey, this.state.musicScale, this.state.musicScaleType);
    let instrumentScaleChords = getChords(musicKey, this.state.musicScale, this.state.musicScaleType);
    this.setState({musicScaleNotes: instrumentScaleNotes});
    this.setState({musicSelectorNotes: instrumentScaleNotes});
    this.setState({musicSelectorChords: instrumentScaleChords});
  }

  handleScaleChange(musicScale) {
    this.setState({musicScale: musicScale});
    let instrumentScaleNotes = getNotes(this.state.musicKey, musicScale, this.state.musicScaleType);
    let instrumentScaleChords = getChords(this.state.musicKey, musicScale, this.state.musicScaleType);
    this.setState({musicScaleNotes: instrumentScaleNotes});
    this.setState({musicSelectorNotes: instrumentScaleNotes});
    this.setState({musicSelectorChords: instrumentScaleChords});
  }

  handleScaleTypeChange(musicScaleType) {
    this.setState({musicScaleType: musicScaleType});
    let instrumentScaleNotes = getNotes(this.state.musicKey, this.state.musicScale, musicScaleType);
    let instrumentScaleChords = getChords(this.state.musicKey, this.state.musicScale, musicScaleType);
    this.setState({musicScaleNotes: instrumentScaleNotes});
    this.setState({musicSelectorNotes: instrumentScaleNotes});
    this.setState({musicSelectorChords: instrumentScaleChords});
  }

  handleNoteSelectionChange(selectedNotes) {
    this.setState({selectedNotes: selectedNotes});
    let instrumentScaleNotes = null;
    let musicSelectorNotes = null;
    //Write Filter Method Here
    if (selectedNotes.length) {
      instrumentScaleNotes = selectedNotes;
      musicSelectorNotes = getNotes(this.state.musicKey, this.state.musicScale, this.state.musicScaleType);
    } else {
      instrumentScaleNotes = getNotes(this.state.musicKey, this.state.musicScale, this.state.musicScaleType);
      musicSelectorNotes = instrumentScaleNotes;
    }

    this.setState({musicSelectorNotes: musicSelectorNotes});
    this.setState({musicScaleNotes: instrumentScaleNotes});
  }

  handleChordSelectionChange(selectedChords) {
    this.setState({selectedChords: selectedChords});
    let instrumentScaleNotes = null;
    let musicSelectorNotes = null;

    //Write Filter Method Here
    if (selectedChords.length) {
      instrumentScaleNotes = getNotes(this.state.musicKey, this.state.musicScale, this.state.musicScaleType);;
      musicSelectorNotes = getChordNotes(selectedChords, this.state.musicScaleNotes);
      this.setState({musicSelectorNotes: instrumentScaleNotes});
      this.setState({musicScaleNotes: musicSelectorNotes});
    } else {
      instrumentScaleNotes = getNotes(this.state.musicKey, this.state.musicScale, this.state.musicScaleType);
      musicSelectorNotes = instrumentScaleNotes;
      this.setState({musicSelectorNotes: musicSelectorNotes});
      this.setState({musicScaleNotes: musicSelectorNotes});
    }


  }

  render() {
    return (

      <div className="Instrument">
        <Selector onKeyChange={this.handleKeyChange}
          onScaleChange={this.handleScaleChange}
          onScaleTypeChange={this.handleScaleTypeChange}
          musicScaleNotes={this.state.musicSelectorNotes}
          musicScaleChords={this.state.musicSelectorChords}
          onNoteSelectChange={this.handleNoteSelectionChange}
          onChordSelectChange={this.handleChordSelectionChange}/>

        <Guitar musicKey={this.state.musicKey}
          musicScale={this.state.musicScale}
          musicScaleType={this.state.musicScaleType}
          musicScaleNotes={this.state.musicScaleNotes}/>
      </div>
    );
  }
}

export default Instrument;
