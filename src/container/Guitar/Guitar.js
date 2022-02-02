import React from 'react';

import './css/Guitar.css';
import Fretboard from '../../components/Fretboard/Fretboard';
import FretboardIndex from '../../components/Fretboard/FretboardIndex';

class Guitar extends React.Component{
  constructor(props) {
    super(props);
  }

  handleInstrumentScaleChange(keyValue) {
    this.props.onKeyChange(keyValue);
  }

  render() {

    return (
      <div className="Guitar">
        <FretboardIndex />
        <Fretboard musicKey={this.props.musicKey}
          musicScale={this.props.musicScale}
          musicScaleType={this.props.musicScaleType}
          musicScaleNotes={this.props.musicScaleNotes}/>
      </div>
    );
  }
}

export default Guitar;
