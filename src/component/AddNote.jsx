import React, {useState} from 'react';

const AddNote = ({handleAddNote}) => {

    const [noteText, setNoteText] = useState('')
    const characterLimit = 250

    const handleChange = (event) => {
        if (characterLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value)
        }
    }
    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText)
            setNoteText('')
        }
    }

    const handleClearClick = () => {
        if (noteText.trim().length > 0) {
            setNoteText('')
        }
    }

    const renderClear = () => {
        if (noteText.length > 0) {
            return (
                <button
                    className="save clear"
                    onClick={handleClearClick}>Clear Text
                </button>
            )
        }
    }

    return (
        <div
            className="note new"
            style={{marginBottom: '1rem'}}>
            <textarea
                name=""
                id=""
                cols="10"
                rows="8"
                placeholder="Type to add a note ..."
                value={noteText}
                onChange={handleChange}
            ></textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length} Remaining</small>

                <div className="button-section">
                    {renderClear()}
                    <button
                        className="save"
                        onClick={handleSaveClick}>Save
                    </button>
                </div>

            </div>
        </div>
    );
};

export default AddNote;