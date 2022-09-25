import React from 'react';

import './css/ChordSelector.css';

const scales = [
  { value: 'Major', label: 'Major' },
  { value: 'Minor', label: 'Minor' }
];

class ChordSelector extends React.Component {
  constructor(props) {
    super(props);
    this.handleChordSelectionClick = this.handleChordSelectionClick.bind(this);
    this.state = {
      selectedChords: [],
    };
  }

  handleChordSelectionClick(event) {
    event.currentTarget.classList.toggle('Selected');

    if (event.currentTarget.classList.contains('Selected')) {
      let selectedChordsArray = [...this.state.selectedChords];
      selectedChordsArray = selectedChordsArray.concat(event.currentTarget.dataset.chord);
      this.setState({selectedChords: selectedChordsArray},
        () => this.props.handleChordSelectionChange(this.state.selectedChords));
    } else {
      let selectedChordsArray = [...this.state.selectedChords];
      const filteredSelectedChords = selectedChordsArray.filter(function(item) {
        return item !== event.currentTarget.dataset.chord
      })
      this.setState({selectedChords: filteredSelectedChords},
        () => this.props.handleChordSelectionChange(this.state.selectedChords));
    }
  }

  render() {

    return (
      <div className="ChordSelector">
        <div className="Chords">
          <ul className="ChordList">
            {this.props.chords.map(function(item, i) {
              return <li onClick={this.handleChordSelectionClick} className="ChordListItem" data-chord={item} key={item}>{item}</li>;
            }, this)}
          </ul>
        </div>
      </div>
    );
  }
}

export default ChordSelector;
