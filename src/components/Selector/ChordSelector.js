import React from 'react';

import './css/ChordSelector.css';

const scales = [
  { value: 'Major', label: 'Major' },
  { value: 'Minor', label: 'Minor' }
];

class ChordSelector extends React.Component {
  constructor(props) {
    super(props);
    this.handleNoteSelectionClick = this.handleNoteSelectionClick.bind(this);
    this.state = {
      selectedChords: [],
    };
  }

  handleNoteSelectionClick(event) {
    event.currentTarget.classList.toggle('Selected');

    if (event.currentTarget.classList.contains('Selected')) {
      let selectedChordsArray = [...this.state.selectedChords];
      selectedChordsArray = selectedChordsArray.concat(event.currentTarget.dataset.note);
      this.setState({selectedChords: selectedChordsArray},
        () => this.props.handleNoteSelectionChange(this.state.selectedChords));
    } else {
      let selectedChordsArray = [...this.state.selectedChords];
      const filteredSelectedChords = selectedChordsArray.filter(function(item) {
        return item !== event.currentTarget.dataset.note
      })
      this.setState({selectedChords: filteredSelectedChords},
        () => this.props.handleNoteSelectionChange(this.state.selectedChords));
    }
  }

  render() {

    return (
      <div className="ChordSelector">
        <div className="Chords">
          <ul className="ChordList">
            {this.props.chords.map(function(item, i) {
              return <li onClick={this.handleNoteSelectionClick} className="ChordListItem" data-note={item} key={item}>{item}</li>;
            }, this)}
          </ul>
        </div>
      </div>
    );
  }
}

export default ChordSelector;
