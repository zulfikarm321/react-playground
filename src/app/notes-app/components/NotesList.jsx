'use client';

import TruncateText from '@/components/TruncateText';
import { useNotesContext } from '../NotesContext';
import { ArrowArcRight, Trash } from '@phosphor-icons/react';

const NotesList = () => {
  const { notes, deleteNotes, setSelectedNote, selectedNote } =
    useNotesContext();

  if (selectedNote) return null;

  if (notes.length === 0) return <h1>No Notes</h1>;

  return (
    <div className="grid grid-cols-auto-fill-250 gap-4 my-8">
      {notes &&
        notes?.map((note) => {
          return (
            <div className="box p-4 rounded-lg" key={note.id}>
              <h1 className="font-bold text-lg">{note.title}</h1>
              <TruncateText line="4">
                <p className="text-gray-600 mt-2">{note.content}</p>
              </TruncateText>
              <div className="flex items-center mt-4 justify-between">
                <button
                  className="btn text-green-500"
                  onClick={() => setSelectedNote(note)}
                >
                  Detail <ArrowArcRight size={'24'} />
                </button>
                <button
                  className="btn text-red-500"
                  onClick={() => deleteNotes(note.id)}
                >
                  Delete <Trash size={'24'} />
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default NotesList;
