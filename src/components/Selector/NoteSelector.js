import React from 'react';

import './css/NoteSelector.css';

const scales = [
  { value: 'Major', label: 'Major' },
  { value: 'Minor', label: 'Minor' }
];

class NoteSelector extends React.Component {
  constructor(props) {
    super(props);
    this.handleNoteSelectionClick = this.handleNoteSelectionClick.bind(this);
    this.state = {
      selectedNotes: [],
    };
  }

  handleNoteSelectionClick(event) {
    event.currentTarget.classList.toggle('Selected');

    if (event.currentTarget.classList.contains('Selected')) {
      let selectedNotesArray = [...this.state.selectedNotes];
      selectedNotesArray = selectedNotesArray.concat(event.currentTarget.dataset.note);
      this.setState({selectedNotes: selectedNotesArray},
        () => this.props.handleNoteSelectionChange(this.state.selectedNotes));
    } else {
      let selectedNotesArray = [...this.state.selectedNotes];
      const filteredSelectedNotes = selectedNotesArray.filter(function(item) {
        return item !== event.currentTarget.dataset.note
      })
      this.setState({selectedNotes: filteredSelectedNotes},
        () => this.props.handleNoteSelectionChange(this.state.selectedNotes));
    }
  }

  render() {

    return (
      <div className="NoteSelector">
        <div className="Notes">
          <ul className="NotesList">
            {this.props.notes.map(function(item) {
              return <li onClick={this.handleNoteSelectionClick} className="NoteListItem" data-note={item} key={item}>{item}</li>;
            }, this)}
          </ul>
        </div>
      </div>
    );
  }
}

export default NoteSelector;
