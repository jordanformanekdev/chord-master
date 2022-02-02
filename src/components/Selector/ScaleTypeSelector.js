import React from 'react';
import Select from 'react-select';

import './css/ScaleTypeSelector.css';

const scaleTypes = [
  { value: 'Natural', label: 'Natural' },
  { value: 'Harmonic', label: 'Harmonic' },
  { value: 'Pentatonic', label: 'Pentatonic' },
  { value: 'Blues', label: 'Blues' }
];
class ScaleTypeSelector extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    this.props.handleScaleTypeChange(event.value);
  }

  render() {
    return (
      <div className="ScaleTypeSelector">
        <div className="ScaleType">Scale Type</div>
        <Select options={scaleTypes}
          defaultValue={{label: "None", value: "None"}}
          onChange={this.handleChange} />
      </div>
    );
  }
}

export default ScaleTypeSelector;
