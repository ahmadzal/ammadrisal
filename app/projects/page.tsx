'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, FileText } from 'lucide-react';
import Image from 'next/image';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

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
    {
      id: 5,
      title: 'Magazine Design Showcase',
      description: 'An editorial design portfolio featuring magazine layouts, cover designs, and print publications that combine modern aesthetics, structured layouts, and effective visual storytelling.',
      image: '/images/Cover Majalah.jpg',
      tags: ['CorelDRAW'],
      github: undefined,
      demo: '/Karya/Magazine.pdf#toolbar=0&navpanes=0',
      category: 'Graphic Design',
    },
    {
      id: 6,
      title: 'Mouse Packaging Design Showcase',
      description: 'A packaging design project for a computer mouse featuring modern layouts, compelling product presentation, and clear information hierarchy to create an attractive and professional retail packaging experience.',
      image: '/images/Mouse.png',
      tags: ['CorelDRAW'],
      github: undefined,
      demo: '/Karya/Kemasan Mouse.pdf#toolbar=0&navpanes=0',
      category: 'Graphic Design',
    },
    {
      id: 7,
      title: 'Japan Travel Poster Design Showcase',
      description: 'This project was created based on a client design brief to promote travel packages to Japan. The objective was to design an eye-catching promotional flyer that effectively communicates key information while reflecting the beauty and cultural identity of Japan through compelling visuals, typography, and a well-structured layout.',
      image: '/images/PTJ.jpg',
      imagePosition: 'object-top',
      tags: ['Adobe Illustrator'],
      github: undefined,
      demo: '/Karya/PTJ.pdf#toolbar=0&navpanes=0',
      category: 'Graphic Design',
    },
    {
      id: 8,
      title: 'Coffee Promotional Flyer Design Showcase',
      description: 'This promotional flyer was designed based on a clients creative brief for Kopi Kala. The objective was to create an eye-catching marketing material that highlights the products premium quality while strengthening brand identity through engaging visuals, bold typography, and a clean information hierarchy.',
      image: '/images/Koffe.jpg',
      imagePosition: 'object-top',
      tags: ['Adobe Illustrator'],
      github: undefined,
      demo: '/Karya/Koffe.pdf#toolbar=0&navpanes=0',
      category: 'Graphic Design',
    },
    {
      id: 9,
      title: 'Merdeka Run Event Poster Showcase',
      description: 'TThis event poster was designed based on a clients creative brief to promote the "Merdeka Run 2026" campaign in celebration of Indonesia Independence Day. The design focuses on creating a dynamic and energetic visual identity while presenting essential event information through bold typography, strong visual hierarchy, and engaging promotional elements.',
      image: '/images/MerdekaRun.jpg',
      imagePosition: 'object-top',
      tags: ['Adobe Photoshop'],
      github: undefined,
      demo: '/Karya/MerdekaRun.pdf#toolbar=0&navpanes=0',
      category: 'Graphic Design',
    },
    {
      id: 10,
      title: 'Custom Merchandise Mug Design Showcase',
      description: 'This custom mug design was created based on a design brief, featuring a gaming and anime-inspired theme. The project focuses on transforming digital artwork into a visually appealing merchandise design by combining balanced composition, high-quality mockup presentation, and print-ready layout for promotional and collectible purposes.',
      image: '/images/mug.png',
      imagePosition: 'object-top',
      tags: ['Adobe Illustrator'],
      github: undefined,
      demo: '/Karya/mockup MUG.pdf#toolbar=0&navpanes=0',
      category: 'Graphic Design',
    },
    {
      id: 11,
      title: 'Graphic Design T-Shirt Design',
      description: 'Desain apparel merchandise yang dikembangkan berdasarkan design brief dari klien dengan menekankan branding modern, konsistensi visual, serta artwork yang siap cetak untuk kebutuhan promosi maupun identitas organisasi.',
      image: '/images/baju desain.jpeg',
      imagePosition: 'object-top',
      tags: ['Adobe Illustrator'],
      github: undefined,
      demo: '/Karya/baju.pdf#toolbar=0&navpanes=0',
      category: 'Graphic Design',
    },
  ];

  const categories = ['All', 'UI/UX Design', 'Full Stack', 'Graphic Design'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 px-4">
            My <span className="bg-gradient-to-r from-primary-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            A collection of my work in UI/UX design, full stack web development, and graphic design.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${selectedCategory === cat
                ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20 scale-105'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
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
                  className={`object-cover ${project.imagePosition || 'object-center'} group-hover:scale-110 transition-transform duration-300`}
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
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-primary-400 transition-colors text-sm sm:text-base"
                    >
                      {project.demo.includes('.pdf') ? (
                        <>
                          <FileText size={18} className="sm:w-5 sm:h-5 text-primary-400" />
                          <span>View PDF</span>
                        </>
                      ) : (
                        <>
                          <ExternalLink size={18} className="sm:w-5 sm:h-5" />
                          <span>Demo</span>
                        </>
                      )}
                    </a>
                  )}
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
