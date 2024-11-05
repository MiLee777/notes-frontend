import axios from 'axios';

const url = 'https://notes-backend-72rh.onrender.com/';

const getAllNotes = async (setNote) => {
  try {
    const { data } = await axios.get(`${url}`);
    console.log(data);
    setNote(data);
  } catch (error) {
    console.error('Error fetching notes:', error);
  }
}

const addNote = async (title, setTitle, setNote) => {
  try {
    const { data } = await axios.post(`${url}addNotes`, { title });
    console.log(data);
    setTitle('');
    getAllNotes(setNote);
  } catch (error) {
    console.error('Error adding note:', error);
  }
};

const updateNote = async (editingNoteId, title, setTitle, setNote, clearEditing) => {
  try {
    const { data } = await axios.put(`${url}updateNote`, { _id: editingNoteId, title });
    console.log(data);
    setTitle('');
    clearEditing();
    getAllNotes(setNote);
  } catch (error) {
    console.error('Error updating note:', error);
  }
};

const deleteNote = async (_id, setNote) => {
  try {
    const { data } = await axios.delete(`${url}deleteNote/${_id}`);
    console.log(data);
    getAllNotes(setNote);
  } catch (error) {
    console.error('Error deleting note:', error);
  }
};

export { getAllNotes, addNote, updateNote, deleteNote };