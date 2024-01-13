'use client';

import BreadCrumbs from '@/components/BreadCrumbs';

import { NoteContextProvider } from './Context';
import FormNotes from './components/FormNotes';
import DetailNotes from './components/DetailNotes';
import NotesList from './components/NotesList';
import NotesHeader from './components/NotesHeader';

const NotesApp = () => {
  return (
    <NoteContextProvider>
      <BreadCrumbs name={'Notes App'} />
      <NotesHeader />
      <FormNotes />
      <DetailNotes />
      <NotesList />
    </NoteContextProvider>
  );
};

export default NotesApp;
