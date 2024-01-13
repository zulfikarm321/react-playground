import React from 'react';
import { useNotesContext } from '../Context';
import { Plus } from '@phosphor-icons/react';

const NotesHeader = () => {
  const { isCreating, setIsCreating, setIsDetailOpen } = useNotesContext();

  const toggleForm = () => {
    setIsCreating((prev) => !prev);
    setIsDetailOpen(false);
  };

  return (
    <div className="box py-2 px-4">
      <Plus
        className={`${
          isCreating ? 'rotate-45' : null
        } transition-all cursor-pointer`}
        onClick={toggleForm}
        size={32}
      />
    </div>
  );
};

export default NotesHeader;
