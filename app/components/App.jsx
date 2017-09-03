import React, { Component } from 'react';
import uuid from 'uuid';
import Notes from './Notes';
import connect from '../libs/connect';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Add tasks'
        },
        {
          id: uuid.v4(),
          task: 'Edit tasks'
        },
        {
          id: uuid.v4(),
          task: 'Delete tasks'
        },
        {
          id: uuid.v4(),
          task: 'Wash'
        },
        {
          id: uuid.v4(),
          task: 'Rinse'
        },
        {
          id: uuid.v4(),
          task: 'Repeat'
        }
      ]
    }
  }
  render () {
    const {notes} = this.state;
    return (
      <div className="notes-container">
        <h1>To-Dos in React</h1>
        <p>Click a task to edit, press enter to save.</p>
        <Notes
          notes={notes}
          onNoteClick={this.activateNoteEdit}
          onEdit={this.editNote}
          onDelete={this.deleteNote} />
        {this.props.test}
        <button className="add-note" onClick={this.addNote}>Add Task</button>      
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

  activateNoteEdit = (id) => {
    this.setState({
      notes: this.state.notes.map(note => {
        if(note.id === id) {
          note.editing = true;
        }

        return note;
      })
    });
  }

  editNote = (id, task) => {
    this.setState({
      notes: this.state.notes.map(note => {
        if(note.id === id) {
          note.editing = false;
          note.task = task
        }

        return note;
      })
    });
  }
}

export default connect(() => ({
  test: 'test'
}))(App)
