import React from 'react';
import Select from 'react-select';

import './css/KeySelector.css';

const keys = [
  { value: 'A', label: 'A' },
  { value: 'B', label: 'B' },
  { value: 'C', label: 'C' },
  { value: 'D', label: 'D' },
  { value: 'E', label: 'E' },
  { value: 'F', label: 'F' },
  { value: 'G', label: 'G' },
  { value: 'A#/Bb', label: 'A#/Bb' },
  { value: 'C#/Db', label: 'C#/Db' },
  { value: 'D#/Eb', label: 'D#/Eb' },
  { value: 'F#/Gb', label: 'F#/Gb' },
  { value: 'G#/Ab', label: 'G#/Ab' }
];
class KeySelector extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
      this.props.handleKeyChange(event.value);
  }
  render() {
    return (
      <div className="KeySelector">
        <div className="Key">Key</div>
        <Select options={keys}
          defaultValue={{label: "C", value: "C"}}
          onChange={this.handleChange} />
      </div>
    );
  }
}

export default KeySelector;
