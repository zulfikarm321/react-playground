import { Atom, FolderSimpleStar } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="box">
      <div className="wrapper flex items-center justify-between py-4">
        <Link className="btn text-blue-600" href={'/'}>
          <h1 className="text-xl font-bold italic">React Playground</h1>
          <Atom className="animate-spin " size={32} />
        </Link>
        <Link className="btn text-gray-500" href={'/favorit'}>
          Favorit <FolderSimpleStar size={24} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
