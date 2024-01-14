import BreadCrumbs from '@/components/BreadCrumbs';
import { NotesContextProvider } from './NotesContext';

import NoteDetail from './components/NoteDetail';
import NotesInputForm from './components/NotesInputForm';
import NotesList from './components/NotesList';

const NotesApp = () => {
  return (
    <div>
      <NotesContextProvider>
        <BreadCrumbs name="Notes App" />
        <NotesInputForm />
        <NoteDetail />
        <NotesList />
      </NotesContextProvider>
    </div>
  );
};

export default NotesApp;
