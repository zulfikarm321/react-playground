import Link from 'next/link';

const apps = [
  {
    id: '1',
    name: 'Notes App',
    href: '/notes-app'
  }
];

export default function Home() {
  return (
    <div className="flex ">
      {apps.map((app) => (
        <Link
          className="box rounded-lg p-2 font-medium"
          key={app.id}
          href={app.href}
        >
          {app.name}
        </Link>
      ))}
    </div>
  );
}
