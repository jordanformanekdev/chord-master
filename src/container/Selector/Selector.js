import React from 'react';

import './css/Selector.css';
import KeySelector from '../../components/Selector/KeySelector';
import ScaleSelector from '../../components/Selector/ScaleSelector';
import ScaleTypeSelector from '../../components/Selector/ScaleTypeSelector';
import NoteSelector from '../../components/Selector/NoteSelector';
import ChordSelector from '../../components/Selector/ChordSelector';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyChange = this.handleKeyChange.bind(this);
    this.handleScaleChange = this.handleScaleChange.bind(this);
    this.handleScaleTypeChange = this.handleScaleTypeChange.bind(this);
    this.handleNoteSelectionChange = this.handleNoteSelectionChange.bind(this);
  }

  handleKeyChange(keyValue) {
    this.props.onKeyChange(keyValue);
  }

  handleScaleChange(scaleValue) {
    this.props.onScaleChange(scaleValue);
  }

  handleScaleTypeChange(scaleTypeValue) {
    this.props.onScaleTypeChange(scaleTypeValue);
  }

  handleNoteSelectionChange(selectedNotesArray) {
    console.log(this.props);
    this.props.onNoteSelectChange(selectedNotesArray);
  }

  render() {
    return (
      <div className="Selector">
        <KeySelector handleKeyChange={this.handleKeyChange}/>

        <NoteSelector notes={this.props.musicScaleNotes} handleNoteSelectionChange={this.handleNoteSelectionChange}/>
        <ChordSelector chords={this.props.musicScaleChords} handleNoteSelectionChange={this.handleNoteSelectionChange}/>
        <Tabs>
          <TabList>
            <Tab>Scale</Tab>
            <Tab>Position</Tab>
          </TabList>

          <TabPanel>
            <ScaleSelector handleScaleChange={this.handleScaleChange}/>
            <ScaleTypeSelector handleScaleTypeChange={this.handleScaleTypeChange}/>
          </TabPanel>
          <TabPanel>
            <h2>Positions Selector</h2>
          </TabPanel>
        </Tabs>


      </div>
    );
  }
}

export default Selector;
