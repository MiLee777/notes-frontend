import { useEffect, useState } from 'react';
import './App.css';
import { MyNotes } from './MyNotes';
import { addNote, getAllNotes, updateNote, deleteNote } from './FetchNotes';

function App() {

  const [note, setNote] = useState([]);
  const [title, setTitle] = useState('');
  const [editingNoteId, setEditingNoteId] = useState(null);

  useEffect(() => {
    getAllNotes(setNote);
  }, []);

  const handleEditClick = (_id, title) => {
    setTitle(title)
    setEditingNoteId(_id)
  }

  const handleSaveClick = () => {
    if (editingNoteId) {
      updateNote(editingNoteId, title, setTitle, setNote, () => setEditingNoteId(null));
    }
  };

  return (
    <div className="App">
      <h1 className='App__title'>Notes</h1>
      <div className='App__container'>
        <input
          className='App__input'
          type='text'
          placeholder='Add a new note...'
          value={title}
          onChange={(e) => setTitle(e.target.value)} />
        <button
          className='App__btn'
          onClick={editingNoteId
            ? handleSaveClick
            : () => addNote(title, setTitle, setNote)
          }>
          {editingNoteId ? "Save" : "Add"}
        </button>
      </div>
      <div className='notes__list'>
      {note.map((note, index) => <MyNotes
        key={note._id}
        index={index}
        text={note.title}
        onEditClick={() => handleEditClick(note._id, note.title)}
        isEditing={editingNoteId === note._id}
        onSaveClick={handleSaveClick}
        onDeleteClick={() => deleteNote(note._id, setNote)} />)}
      </div>
    </div>
  );
}

export default App;