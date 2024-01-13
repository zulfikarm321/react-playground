import { useState } from 'react';
import { useNotesContext } from '../Context';
import { v4 as uuidv4 } from 'uuid';

const FormNotes = () => {
  const { setNotes, isCreating, setIsCreating } = useNotesContext();
  const [newNote, setNewNote] = useState({ id: null, title: '', content: '' });

  const addNotes = (e) => {
    e.preventDefault();

    if (!newNote.title || !newNote.content) return;

    const newId = uuidv4();

    const updatedNewNote = { ...newNote, id: newId };

    setNotes((prevNotes) => [...prevNotes, updatedNewNote]);

    setNewNote({ id: null, title: '', content: '' });

    setIsCreating(false);
  };

  return (
    <>
      {isCreating && (
        <form
          className={`max-w-[500px] mx-auto flex flex-col gap-4 mt-4 transfor overflow-hidden transition-all`}
          onSubmit={addNotes}
        >
          <input
            className="box py-2 px-4"
            type="text"
            placeholder="Input Title..."
            value={newNote.title}
            onChange={(e) => {
              setNewNote((note) => ({ ...note, title: e.target.value }));
            }}
          />
          <textarea
            className="box py-2 px-4"
            placeholder="Content..."
            value={newNote.content}
            onChange={(e) => {
              setNewNote((note) => ({ ...note, content: e.target.value }));
            }}
          />
          <button className="btn bg-blue-500 p-2 text-white font-bold">
            Submit
          </button>
        </form>
      )}
    </>
  );
};

export default FormNotes;
