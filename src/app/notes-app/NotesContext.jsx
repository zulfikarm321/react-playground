'use client';

import { initialNotes } from '@/data/initialNotes';

import { createContext, useContext, useState, useEffect } from 'react';

export const NotesContext = createContext({
  notes: [],
  selectedNote: null
});

export const NotesContextProvider = ({ children }) => {
  const getItem = (key) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  };

  const setItem = (key, value) => {
    const item = JSON.stringify(value);
    localStorage.setItem(key, item);
  };

  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    const getFromLocalStorage = () => {
      const items = getItem('notes');
      if (items) {
        setNotes(items);
        return;
      }
      setNotes([]);
    };

    getFromLocalStorage();
  }, []);

  // useEffect(() => {
  //   setNotes((prevNotes) => {
  //     const updatedNotes = [...prevNotes];
  //     setItem('notes', updatedNotes);
  //     return updatedNotes;
  //   });
  // }, [notes]);

  const addNotes = (newNote) => {
    const updatedNotes = [...notes, newNote];

    setNotes(updatedNotes);
    setItem('notes', updatedNotes);
  };

  const updateNotes = (newContent) => {
    const updatedNotes = notes.map((note) =>
      note.id === selectedNote.id ? { ...note, content: newContent } : note
    );

    setNotes(updatedNotes);
    setItem('notes', updatedNotes);
  };

  const deleteNotes = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);

    if (window.confirm('Are u sure to delete this note?')) {
      setNotes(newNotes);
      setSelectedNote(null);
      setItem('notes', newNotes);
    }
  };

  const value = {
    notes,
    addNotes,
    deleteNotes,
    selectedNote,
    setSelectedNote,
    updateNotes
  };

  return (
    <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
  );
};

export const useNotesContext = () => useContext(NotesContext);
