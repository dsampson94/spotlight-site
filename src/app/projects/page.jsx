
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

const projects = [
  {
    name: 'Realist',
    role: 'Full Stack Engineer',
    description:
        'Real Estate Managment App built with React.js, AWS, tRPC, Styled Components, Typescript, Nx.',
  },
  {
    name: 'Cavi',
    role: 'Full Stack Engineer',
    description:
        'Real-time video streaming library, optimized for interstellar transmission.',
  },
  {
    name: 'Tano',
    role: 'Front End Engineer',
    description:
        'The operating system that powers our Planetaria space shuttles.',
  },
  {
    name: 'Pulse',
    role: 'Front End Engineer',
    description:
        'Agritech Management App built with React.js, d3.js, tailwind, Javascript.',
  },
  {
    name: 'Pumbaa',
    role: 'Front End Engineer',
    description:
        'The schematics for the first rocket I designed that successfully made it to orbit.',
  },
  {
    name: 'QIT Tracker',
    role: 'Front End Engineer',
    description:
        'The schematics for the first rocket I designed that successfully made it to orbit.',
  },
  {
    name: 'Bakery System',
    role: 'Front End Engineer',
    description:
        'The schematics for the first rocket I designed that successfully made it to orbit.',
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
  return (
      <SimpleLayout
          title="Projects I have had the fortune of working on."
          // intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
      >
        <ul
            role="list"
            className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
              <Card as="li" key={project.name}>
                <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                  {project.name}
                </h2>
                <Card.Description>{project.role}</Card.Description>
                <Card.Description>{project.description}</Card.Description>
              </Card>
          ))}
        </ul>
      </SimpleLayout>
  )
}
