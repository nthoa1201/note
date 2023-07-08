import React from 'react';
import Note from './Note.jsx';
import AddNote from './AddNote.jsx';

const NoteList = ({notes, handleAddNote, handleDeleteNote}) => {
    return (
        <div className="notes-list">

            {notes.map(item => {
                return <Note id={item.id} text={item.text} date={item.date} handleDeleteNote={handleDeleteNote}/>
            })}
        </div>
    );
};

export default NoteList;