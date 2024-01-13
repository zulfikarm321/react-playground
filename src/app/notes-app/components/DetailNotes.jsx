import { useState, useEffect } from 'react';
import { useNotesContext } from '../Context';
import { ArrowArcLeft, ArrowArcRight, Trash } from '@phosphor-icons/react';

const DetailNotes = () => {
  const {
    selectedNote,
    setSelectedNote,
    notes,
    setNotes,
    isDetailOpen,
    deleteNote,
    setIsDetailOpen
  } = useNotesContext();

  const [isEdit, setIsEdit] = useState(false);
  const [newContent, setNewContent] = useState('');

  useEffect(() => {
    // Set initial value for newContent when selectedNote changes
    setNewContent(selectedNote?.content);
  }, [selectedNote?.content]);

  const handleChange = (e) => {
    setNewContent(e.target.value);
  };

  const updateNote = () => {
    if (!newContent) return;

    const updatedNotes = notes.map((note) =>
      note.id === selectedNote.id ? { ...note, content: newContent } : note
    );

    setNotes(updatedNotes);
    setSelectedNote((note) => ({ ...note, content: newContent }));
    setIsEdit(false);
  };

  const back = () => {
    setIsEdit(false);
    setIsDetailOpen(false);
  };

  return (
    <>
      {isDetailOpen && (
        <div className="box max-w-[500px] mx-auto my-4 p-4">
          <div className="flex justify-between">
            <h1 className="font-semibold">{selectedNote?.title}</h1>
            <ArrowArcLeft className="cursor-pointer" size={24} onClick={back} />
          </div>

          {!isEdit ? (
            <p className="text-gray-600 mt-4">{selectedNote?.content}</p>
          ) : (
            <textarea
              className="box p-4 w-full min-h-[200px] mt-4"
              value={newContent}
              onChange={handleChange}
            />
          )}

          <div className="flex justify-between mt-4">
            <div className="flex items-center gap-2">
              {!isEdit ? (
                <button
                  className="btn text-blue-500"
                  onClick={() => setIsEdit(!isEdit)}
                >
                  Edit <ArrowArcRight size={24} />
                </button>
              ) : (
                <button className="btn text-green-500" onClick={updateNote}>
                  Save
                </button>
              )}
            </div>

            <button
              className="btn text-red-600"
              onClick={() => deleteNote(selectedNote.id)}
            >
              Delete <Trash size={24} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailNotes;
