import React from 'react';
import { useNotesContext } from '../Context';
import TruncateText from '@/components/TruncateText';
import { ArrowArcRight, Trash } from '@phosphor-icons/react';

const NotesList = () => {
  const {
    notes,
    setSelectedNote,
    setIsDetailOpen,
    isDetailOpen,
    setIsCreating,
    deleteNote
  } = useNotesContext();

  const showDetail = (id) => {
    const selected = notes.find((note) => note.id === id);

    if (selected) {
      setSelectedNote(selected);
      setIsDetailOpen(true);
      setIsCreating(false);
    }
  };

  return (
    <>
      {!isDetailOpen && (
        <div className="grid grid-cols-auto-fill-250 gap-4 my-4">
          {notes.length > 0 ? (
            notes.map((note) => (
              <div className="box p-4 rounded-lg" key={note.id}>
                <h1 className="font-semibold">{note.title}</h1>
                <TruncateText line="3">
                  <p className="text-gray-600 mt-4">{note.content}</p>
                </TruncateText>
                <div className="flex justify-between mt-4">
                  <button
                    className="btn text-green-500"
                    onClick={() => showDetail(note.id)}
                  >
                    Detail <ArrowArcRight size={24} />
                  </button>
                  <button
                    className="btn text-red-600"
                    onClick={() => deleteNote(note.id)}
                  >
                    Delete <Trash size={24} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <h1>No Notes</h1>
          )}
        </div>
      )}
    </>
  );
};

export default NotesList;
