import React from 'react';
import Note from './Note';
import Editable from './Editable';

export default ({
  notes, 
  onNoteClick = () => {},
  onEdit = () => {},
  onDelete = () => {}
}) => (
  <div>
    <ul className="notes-list">{notes.map(({id, editing, task}) => 
      <li key={id} className="notes-note">
        <Note onClick={onNoteClick.bind(null, id)}>
          <button className="note-delete" onClick={onDelete.bind(null, id)}>x</button>
          <Editable
            editing={editing}
            value={task}
            onEdit={onEdit.bind(null, id)} />
        </Note>
      </li>
    )}</ul>
  </div>
)