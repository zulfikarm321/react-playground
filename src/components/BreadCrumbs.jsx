import { ArrowLeft } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import React from 'react';

const BreadCrumbs = ({ name }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <h1 className="text-lg font-bold text-blue-500">{name}</h1>
      <Link className="btn text-red-600" href={'/'}>
        <ArrowLeft size={24} /> Kembali
      </Link>
    </div>
  );
};

export default BreadCrumbs;
