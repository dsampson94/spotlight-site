import React from 'react';
import { Card } from '@/components/Card';
import { SimpleLayout } from '@/components/SimpleLayout';

const projects = [
  {
    name: 'Realist',
    role: 'Software Engineer',
    description: 'Real Estate Management App built with React.js, AWS, tRPC, Styled Components, Typescript, Nx.',
    media: [
      { type: 'image', url: '/realistlogin.png' },
      { type: 'image', url: '/realistprofile.png' },
      { type: 'image', url: '/realistadd.png' },
      { type: 'image', url: '/realist2.png' },
    ],
  },
  {
    name: 'Tano',
    role: 'Lead React Developer',
    description: 'Insurance Management Front End built with React.js, Azure, MUI, Typescript, Redux Saga.',
    media: [
      { type: 'image', url: '/tano.jpg' },
      { type: 'image', url: '/tano.png' },
      { type: 'video', url: '/tanovid.mp4' },
    ],
  },
  {
    name: 'Cavi',
    role: 'Next Developer',
    description: 'Brand management site built with Next.js, Vercel, TailwindCSS, Typescript.',
    media: [
      { type: 'image', url: '/cavi.png' },
      { type: 'video', url: '/cavivid.mp4' },
    ],
  },
  {
    name: 'Pulse',
    role: 'React Developer',
    description: 'AgriTech Management Front End built with React.js, TailwindCSS, Typescript, Redux Saga.',
    media: [
      { type: 'image', url: '/irric.png' },
      { type: 'image', url: '/irricheck.png' },
      { type: 'video', url: '/irrivid.mp4' },
    ],
  },
  {
    name: 'Pumbaa',
    role: 'Junior Software Developer',
    description: 'CRM Front End built with React.js, SCSS, JavaScript, Redux Saga.',
    media: [
      { type: 'image', url: '/pumbaa.jpg' },
    ],
  },
  {
    name: 'QIT Tracker Mobile',
    role: 'Junior Software Developer',
    description: 'Quality Improvement Mobile Front End built with React Native, CSS, JavaScript, SQLite',
    media: [],
  },
  {
    name: 'QIT Tracker Web',
    role: 'Junior Software Developer',
    description: 'Quality Improvement Web Front End built with React.js, SCSS, JavaScript, Azure.',
    media: [
      { type: 'image', url: '/qit1.jpg' },
      { type: 'image', url: '/qit2.jpg' },
    ],
  },
  {
    name: 'Bakery System',
    role: 'Junior Software Developer',
    description: 'Bakery Management App built with Java, CSS, Java Server Pages, PostgresSQL as a college project.',
    media: [
      { type: 'image', url: '/bakeryt.png' },
      { type: 'image', url: '/bakery.png' },
      { type: 'video', url: '/bakeryvid.mp4' },
    ],
  },
];

function MediaGallery({ media }) {
  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {media.map((item, index) => (
            item.type === 'image' ? (
                <img key={index} src={item.url} alt={`media-${index}`} className="w-full h-48 object-cover rounded-lg" />
            ) : (
                <video key={index} controls className="w-full h-48 object-cover rounded-lg">
                  <source src={item.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
            )
        ))}
      </div>
  );
}

function LinkIcon(props) {
  return (
      <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
        <path
            d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
            fill="currentColor"
        />
      </svg>
  );
}

export const metadata = {
  title: 'David Sampson - Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
};

export default function Projects() {
  return (
      <SimpleLayout
          title="Professional Projects I have had the fortune of working on."
      >
        <ul
            role="list"
            className="space-y-16"
        >
          {projects.map((project) => (
              <Card as="li" key={project.name} className="space-y-4">
                <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                  {project.name}
                </h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {project.role}
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
                <MediaGallery media={project.media} />
              </Card>
          ))}
        </ul>
      </SimpleLayout>
  );
}
