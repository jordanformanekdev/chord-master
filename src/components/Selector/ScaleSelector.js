import React from 'react';
import Select from 'react-select';

import './css/ScaleSelector.css';

const scales = [
  { value: 'Major', label: 'Major' },
  { value: 'Minor', label: 'Minor' }
];
class ScaleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    this.props.handleScaleChange(event.value);
  }

  render() {
    return (
      <div className="ScaleSelector">
        <div className="Scale">Scale</div>
        <Select options={scales}
          defaultValue={{label: "Major", value: "Major"}}
          onChange={this.handleChange} />
      </div>
    );
  }
}

export default ScaleSelector;
