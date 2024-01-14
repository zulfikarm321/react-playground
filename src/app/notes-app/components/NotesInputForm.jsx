'use client';

import { uuid } from 'uuidv4';
import { useNotesContext } from '../NotesContext';
import { useState } from 'react';

const NotesInputForm = () => {
  const { addNotes, selectedNote } = useNotesContext();
  const [formData, setFormData] = useState({
    id: null,
    title: '',
    content: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formData.title || !formData.content) return;

    const newNote = { ...formData, id: uuid() };

    addNotes(newNote);
    setFormData({ id: null, title: '', content: '' });
  };

  if (selectedNote) return null;

  return (
    <form
      className="flex flex-col gap-2 max-w-[500px] mx-auto"
      onSubmit={submitHandler}
    >
      <input
        className="box py-2 px-4"
        type="text"
        placeholder="Input Title..."
        name="title"
        value={formData.title}
        onChange={handleInputChange}
        required
      />
      <textarea
        className="box py-2 px-4"
        placeholder="Input Content..."
        name="content"
        value={formData.content}
        onChange={handleInputChange}
        required
      />
      <button className="btn bg-blue-500 text-white p-2 font-medium">
        Submit
      </button>
    </form>
  );
};

export default NotesInputForm;
