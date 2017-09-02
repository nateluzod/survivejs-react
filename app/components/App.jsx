import React, { Component } from 'react';
import uuid from 'uuid';
import Notes from './Notes';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn react'
        },
        {
          id: uuid.v4(),
          task: 'Learn react'
        }        
      ]
    }
  }
  render () {
    const {notes} = this.state;
    return (
      <div>
        <button onClick={this.addNote}>Add Note</button>      
        <Notes notes={notes} onDelete={this.deleteNote} />
      </div>    
    );
  }
  
  addNote = () => {
    this.setState({
      notes: [
        ...this.state.notes, {
          id: uuid.v4(),
          task: 'New task'
        }
      ]
    })
  }  
  
  deleteNote = (id, e) => {
    e.stopPropagation();
    this.setState({
      notes: this.state.notes.filter(note => note.id !== id)
    });
  }
}
