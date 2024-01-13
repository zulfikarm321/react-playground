'use client';

function getItem(key) {
  const item = window.localStorage.getItem(key);
  return JSON.parse(item);
}

function setItem(key, value) {
  const item = JSON.stringify(value);
  window.localStorage.setItem(key, item);
}

function removeItem(key) {
  window.localStorage.removeItem(key);
}

import { initialNotes } from '@/data/initialNotes';
// import { getItem, setItem } from '@/utils/localstorage';
import { createContext, useContext, useState, useEffect } from 'react';

export const NoteContext = createContext({
  notes: [],
  setNotes: () => {},
  isDetailOpen: false,
  setIsDetailOpen: () => {},
  selectedNote: null,
  setSelectedNote: () => {},
  isCreating: false,
  setIsCreating: () => {}
});

export const NoteContextProvider = ({ children }) => {
  const [notes, setNotes] = useState(() => {
    const storedNotes = getItem('notes');
    return storedNotes || initialNotes;
  });
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);
  const [isCreating, setIsCreating] = useState(false);

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);

    if (window.confirm('Are you sure?')) {
      setNotes(newNotes);
      setSelectedNote(null);
      setIsDetailOpen(false);
    }
  };

  useEffect(() => {
    // Memperbarui localStorage setiap kali notes berubah
    setItem('notes', notes);
  }, [notes]);

  const value = {
    notes,
    setNotes,
    isDetailOpen,
    setIsDetailOpen,
    selectedNote,
    setSelectedNote,
    isCreating,
    setIsCreating,
    deleteNote
  };

  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
};

export const useNotesContext = () => useContext(NoteContext);
