'use client';

import TruncateText from '@/components/TruncateText';
import { useNotesContext } from '../NotesContext';
import {
  ArrowArcLeft,
  ArrowArcRight,
  File,
  Pen,
  Trash
} from '@phosphor-icons/react';
import { useState, useEffect } from 'react';

const NoteDetail = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [content, setContent] = useState('');
  const { selectedNote, setSelectedNote, deleteNotes, updateNotes } =
    useNotesContext();

  useEffect(() => {
    setContent(selectedNote?.content);
    setIsEdit(false);
  }, [selectedNote?.content, selectedNote]);

  const handleUpdate = () => {
    if (!content) return;

    updateNotes(content);
    setSelectedNote((prevNote) => ({ ...prevNote, content: content }));
    setIsEdit(false);
  };

  if (!selectedNote) {
    return null;
  }

  return (
    <div
      className="box p-4 rounded-lg max-w-[500px] mx-auto"
      key={selectedNote.id}
    >
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-lg">{selectedNote.title}</h1>
        <button className="btn" onClick={() => setSelectedNote(null)}>
          <ArrowArcLeft size="24" />
        </button>
      </div>

      {!isEdit ? (
        <p className="text-gray-600 mt-2">{selectedNote.content}</p>
      ) : (
        <textarea
          className="w-full h-[400px] mt-2 outline-none border-b"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      )}

      <div className="flex items-center mt-4 justify-between">
        {!isEdit ? (
          <button
            className="btn text-blue-500"
            onClick={() => setIsEdit(!isEdit)}
          >
            Edit <Pen size={'24'} />
          </button>
        ) : (
          <button className="btn text-green-500" onClick={handleUpdate}>
            Save <File size={'24'} />
          </button>
        )}

        <button
          className="btn text-red-500"
          onClick={() => deleteNotes(selectedNote.id)}
        >
          Delete <Trash size={'24'} />
        </button>
      </div>
    </div>
  );
};

export default NoteDetail;
