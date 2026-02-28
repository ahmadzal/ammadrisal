'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: 'TourJateng WebApp',
      description: 'An interactive tourism web application featuring personalized destination recommendations, cultural content, discussion forums, and an AI-powered chatbot for exploring Central Java.',
      image: '/images/Tourjateng.png',
      tags: ['Next.js', 'Figma', 'PostgreSQL', 'Supabase'],
      github: 'https://github.com/ahmadzal/TourJateng_website',
      demo: 'https://tourjateng.vercel.app',
      category: 'Full Stack',
    },
    {
      id: 2,
      title: 'Prototype of Imunicil',
      description: 'A health support application prototype designed to digitalize Posyandu immunization information and administrative processes, featuring reminders, scheduling, and participant record management to improve service efficiency.',
      image: '/images/Imunicil.png',
      tags: ['Figma', 'UI Design', 'UX Research', 'Prototyping'],
      github: undefined,
      demo: 'https://www.figma.com/proto/8FLBqEBRqqTZ2QaZDOwqrX/Team-Ariel--Copy---Copy-?node-id=294-63&p=f&t=aMJkq08pYXw6ztUC-0&scaling=scale-down&content-scaling=fixed&page-id=47%3A590&starting-point-node-id=346%3A374&show-proto-sidebar=1',
      category: 'UI/UX Design',
    },
    {
      id: 3,
      title: 'Prototype of FarmaGym',
      description: 'A health tracking application prototype that helps users monitor their diet, meditation activities, and access doctor consultations to support a healthier lifestyle in an integrated platform.',
      image: '/images/FarmaGym.png',
      tags: ['Figma', 'UI Design', 'UX Research', 'Prototyping'],
      github: undefined,
      demo: 'https://www.figma.com/proto/VbJkQAfx6vUJmBepOPbH1g/FarmaGym--Copy-?node-id=881-9743&p=f&t=46NSkQkPThVpeJCv-0&scaling=scale-down&content-scaling=fixed&page-id=881%3A9713&starting-point-node-id=881%3A9727',
      category: 'UI/UX Design',
    },
    {
      id: 4,
      title: 'Prototype of TourEase',
      description: 'A tourism application prototype that allows users to explore destinations across Indonesia with a fastest-route feature to support efficient travel planning.',
      image: '/images/TourEase.png',
      tags: ['Figma', 'UI Design', 'UX Research', 'Prototyping'],
      github: undefined,
      demo: 'https://www.figma.com/proto/Wk9kqrJsSftEwvCozFcWmk/Mobile-Design--Copy-?node-id=3047-19114&p=f&t=CHlAV6AFXqmBZFrl-1&scaling=scale-down&content-scaling=fixed&page-id=101%3A6&starting-point-node-id=3047%3A19112&show-proto-sidebar=1',
      category: 'UI/UX Design',
    },
  ];

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 px-4">
            My <span className="bg-gradient-to-r from-primary-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            A collection of my recent work in web development and UI/UX design. 
            Each project represents a unique challenge and learning experience.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden bg-gray-700">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                <div className="absolute top-4 right-4 bg-primary-500 text-white text-xs px-3 py-1 rounded-full">
                  {project.category}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-3 sm:mb-4 line-clamp-3 text-sm sm:text-base">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs sm:text-sm bg-gray-700 text-gray-300 px-2 sm:px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 sm:gap-4 flex-wrap">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-primary-400 transition-colors text-sm sm:text-base"
                    >
                      <Github size={18} className="sm:w-5 sm:h-5" />
                      <span>Code</span>
                    </a>
                  )}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-primary-400 transition-colors text-sm sm:text-base"
                  >
                    <ExternalLink size={18} className="sm:w-5 sm:h-5" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 text-center bg-gradient-to-r from-primary-900/30 to-purple-900/30 rounded-2xl p-8 sm:p-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 px-4">Interested in working together?</h2>
          <p className="text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 text-sm sm:text-base">
            I'm always open to discussing new projects and opportunities.
          </p>
          <a
            href="/#contact"
            className="inline-block px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-all duration-200"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
}
