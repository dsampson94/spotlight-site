import React from 'react';
import { Card } from '@/components/Card';
import { SimpleLayout } from '@/components/SimpleLayout';

const projects = [
  {
    name: 'Convo Freaks - Online Education (SaaS)',
    role: 'Lead Next.js Developer',
    description: 'SaaS App build done with Next.js, Vercel, Tailwind, Typescript, Appointlet, Stripe.',
    media: [
      { type: 'image', url: '/convofreaks.png' },
      { type: 'image', url: '/convofre.png' },
      { type: 'video', url: '/cfv.mp4' },
    ],
  },
  {
    name: 'Crabaride - Ride Share (SaaS)',
    role: 'Next.js Engineer',
    description: 'SaaS App UI rework done with Next.js, Tailwind, Typescript.',
    media: [
      { type: 'image', url: '/crabb.png' },
      { type: 'video', url: '/crab1.mp4' },
    ],
  },
  {
    name: 'Realist - Asset Manager (Real Estate)',
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
    name: 'Pulse - Productivity Manager (Agritech) ',
    role: 'React.js Developer',
    description: 'AgriTech Management Front End built with React.js, TailwindCSS, Typescript, Redux Saga.',
    media: [
      { type: 'video', url: '/irrivid.mp4' },
      { type: 'image', url: '/irric.png' },
      { type: 'image', url: '/irricheck.png' },
    ],
  },
  {
    name: 'TANO - Business Tracker (Insurance)',
    role: 'Lead React.js Developer',
    description: 'Insurance Management Front End built with React.js, Azure, MUI, Typescript, Redux Saga.',
    media: [
      { type: 'video', url: '/tanovid.mp4' },
      { type: 'image', url: '/tano.jpg' },
      { type: 'image', url: '/tano.png' },
    ],
  },
  {
    name: 'QIT - Quality Improvement Tracker Web (Healthcare) ',
    role: 'Junior Software Developer',
    description: 'Quality Improvement Web Front End built with React.js, SCSS, JavaScript, Azure.',
    media: [
      { type: 'image', url: '/qit1.jpg' },
      { type: 'image', url: '/qit2.jpg' },
    ],
  },
  {
    name: 'QIT - Quality Improvement Tracker Mobile (Healthcare) ',
    role: 'Junior Software Developer',
    description: 'Quality Improvement Mobile Front End built with React Native, CSS, JavaScript, SQLite',
    media: [],
  },
  {
    name: 'Pumbaa - CRM (Printing) ',
    role: 'Junior Software Developer',
    description: 'CRM Front End built with React.js, SCSS, JavaScript, Redux Saga.',
    media: [
      { type: 'image', url: '/pumbaa.jpg' },
    ],
  },
  {
    name: 'CAVI Brands - Smart Landing Page (Brand) ',
    role: 'Next.js Developer',
    description: 'Brand management site built with Next.js, Vercel, TailwindCSS, Typescript.',
    media: [
      { type: 'video', url: '/cavivid.mp4' },
      { type: 'image', url: '/cavi.png' },
    ],
  },
  {
    name: 'Bakery System - College Project',
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {media.map((item, index) => (
            item.type === 'image' ? (
                <img key={index} src={item.url} alt={`media-${index}`} className="w-full h-full object-cover rounded-lg" />
            ) : (
                <video key={index} controls className="w-full h-full object-cover rounded-lg">
                  <source src={item.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
            )
        ))}
      </div>
  );
}

export const metadata = {
  title: 'David Sampson - Projects',
  description: 'Applications I’ve worked on trying to put my dent in the universe.',
};

export default function Projects() {
  return (
      <SimpleLayout
          title="Professional Projects I have had the fortune of working on."
          // intro="Trying to put my dent in the universe."
      >
        <ul role="list" className="space-y-16">
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
