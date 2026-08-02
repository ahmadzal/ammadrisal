'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Code, Palette, Database, Figma, Mail, MapPin, Layers, Terminal, Sparkles, ExternalLink, Github, Award, Briefcase, GraduationCap, Calendar, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import TypewriterText from '@/components/TypewriterText';

export default function Home() {
  const highlights = [
    {
      name: 'UI/UX Design',
      icon: Palette,
      badge: 'User Experience',
      description: 'Creating intuitive, accessible, and visually captivating digital products.'
    },
    {
      name: 'Graphic Design',
      icon: Sparkles,
      badge: 'Brand & Visuals',
      description: 'Crafting memorable logos, print media, and distinctive brand identities.'
    },
    {
      name: 'Web Development',
      icon: Code,
      badge: 'Full Stack',
      description: 'Building fast, responsive, and scalable web applications with clean code.'
    },
    {
      name: 'Creative Tools',
      icon: Figma,
      badge: 'Industry Standard',
      description: 'Leveraging professional software for seamless design and development.'
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-purple-900/20 to-gray-900"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 px-4"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary-400 to-purple-500 bg-clip-text text-transparent">
                <TypewriterText
                  text="Muhammad Rizal"
                  delay={1000}
                  speed={150}
                  pauseEnd={3000}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 px-4"
            >
              UI/UX Designer | Graphic Designer | Full Stack Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-4"
            >
              I craft intuitive user experiences, compelling visual designs, and modern web applications. By combining creativity, design thinking, and development, I transform ideas into impactful digital solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/projects"
                className="px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                View My Work
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                href="/#contact"
                className="px-8 py-3 border-2 border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white rounded-lg font-semibold transition-all duration-200"
              >
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              About <span className="bg-gradient-to-r from-primary-400 to-purple-500 bg-clip-text text-transparent">Me</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center mb-12">
              {/* Profile Photo - Larger version */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
                  {/* Animated gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-400 via-purple-500 to-pink-500 rounded-2xl animate-pulse"></div>
                  {/* Photo container */}
                  <div className="absolute inset-2 bg-gray-900 rounded-2xl overflow-hidden">
                    <img
                      src="/images/adminss.png"
                      alt="Profile Photo"
                      className="w-full h-full object-cover scale-150"
                      style={{ objectPosition: 'center 25%' }}
                    />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-500/20 rounded-full blur-xl"></div>
                  <div className="absolute -top-4 -left-4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"></div>
                </div>
              </motion.div>

              {/* About Text */}
              <div className="md:col-span-2">
                <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6">
                  I am a passionate UI/UX Designer, Graphic Designer, and Full Stack Developer who enjoys creating meaningful digital experiences. By combining user-centered design, visual creativity, and modern web development, I strive to build products that are both functional and visually engaging.
                </p>
                <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6">
                  My journey began with a curiosity for technology and digital design, which has grown into a passion for designing intuitive interfaces, developing responsive web applications, and creating impactful visual content. I enjoy turning ideas into practical solutions that provide value to users.
                </p>
                <p className="text-base sm:text-lg text-gray-300">
                  I am always eager to learn new technologies, improve my design skills, and explore innovative ways to solve real-world problems through creativity and technology.
                </p>
              </div>
            </div>

            {/* Core Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-800/60 border border-gray-700/50 p-6 rounded-xl hover:bg-gray-800 hover:border-primary-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg group relative overflow-hidden flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400 group-hover:scale-110 transition-transform">
                          <Icon size={22} />
                        </div>
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-gray-900/80 text-primary-400 border border-primary-500/20">
                          {item.badge}
                        </span>
                      </div>
                      <h3 className="font-bold text-lg text-white mb-2">{item.name}</h3>
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background glow circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-xs sm:text-sm font-medium mb-4">
                <Sparkles size={16} /> MY TECH STACK & TOOLS
              </span>
              <h2 className="text-4xl md:text-5xl font-bold">
                Technical <span className="bg-gradient-to-r from-primary-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              {/* 1. UI/UX Design */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/40 backdrop-blur-xl border border-gray-700/60 rounded-2xl p-6 sm:p-8 hover:border-primary-500/40 transition-all duration-300 relative group overflow-hidden shadow-xl"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 to-purple-500 opacity-80 group-hover:opacity-100 transition-opacity"></div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/30 flex items-center justify-center text-primary-400 group-hover:scale-110 transition-transform duration-300">
                    <Palette size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">UI/UX Design</h3>
                    <p className="text-xs text-gray-400">User Research & Interface Architecture</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    'UI Design', 'UX Design', 'Wireframing', 'Prototyping',
                    'User Research', 'Design System', 'Responsive Design', 'User Flows'
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-gray-900/80 border border-gray-700/70 text-gray-300 text-xs sm:text-sm font-medium hover:border-primary-400 hover:text-white hover:bg-primary-500/20 hover:scale-105 transition-all duration-200 cursor-default shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* 2. Graphic Design */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800/40 backdrop-blur-xl border border-gray-700/60 rounded-2xl p-6 sm:p-8 hover:border-purple-500/40 transition-all duration-300 relative group overflow-hidden shadow-xl"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 opacity-80 group-hover:opacity-100 transition-opacity"></div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform duration-300">
                    <Sparkles size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Graphic Design</h3>
                    <p className="text-xs text-gray-400">Brand Identity & Print Media</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    'Logo Design', 'Brand Identity', 'Packaging Design',
                    'Poster & Banner Design', 'Apparel Design', 'Merchandise Design',
                    'Print Production'
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-gray-900/80 border border-gray-700/70 text-gray-300 text-xs sm:text-sm font-medium hover:border-purple-400 hover:text-white hover:bg-purple-500/20 hover:scale-105 transition-all duration-200 cursor-default shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* 3. WEB Development */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gray-800/40 backdrop-blur-xl border border-gray-700/60 rounded-2xl p-6 sm:p-8 hover:border-pink-500/40 transition-all duration-300 relative group overflow-hidden shadow-xl"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-primary-400 opacity-80 group-hover:opacity-100 transition-opacity"></div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform duration-300">
                    <Code size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">WEB Development</h3>
                    <p className="text-xs text-gray-400">Frontend, Backend & APIs</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    'Next.js', 'React.js', 'TypeScript', 'JavaScript',
                    'Node.js', 'Supabase', 'Tailwind CSS', 'PostgreSQL',
                    'HTML5 & CSS3', 'Python Programming', 'RESTful API'
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-gray-900/80 border border-gray-700/70 text-gray-300 text-xs sm:text-sm font-medium hover:border-pink-400 hover:text-white hover:bg-pink-500/20 hover:scale-105 transition-all duration-200 cursor-default shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* 4. Tools & Software */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gray-800/40 backdrop-blur-xl border border-gray-700/60 rounded-2xl p-6 sm:p-8 hover:border-blue-500/40 transition-all duration-300 relative group overflow-hidden shadow-xl"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-80 group-hover:opacity-100 transition-opacity"></div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    <Figma size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Software & Tools</h3>
                    <p className="text-xs text-gray-400">Design & Development Stack</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    'Figma', 'Adobe Photoshop', 'Adobe Illustrator',
                    'CorelDRAW', 'Adobe XD', 'VS Code', 'Git & GitHub'
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-gray-900/80 border border-gray-700/70 text-gray-300 text-xs sm:text-sm font-medium hover:border-blue-400 hover:text-white hover:bg-blue-500/20 hover:scale-105 transition-all duration-200 cursor-default shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-800/30 border-y border-gray-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
              <div>
                <span className="text-primary-400 text-xs sm:text-sm font-medium tracking-wider uppercase mb-2 block">Portfolio Highlights</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                  Featured <span className="bg-gradient-to-r from-primary-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
                </h2>
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-semibold group transition-colors"
              >
                View All Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  id: 1,
                  title: 'TourJateng WebApp',
                  description: 'Interactive tourism web app featuring recommendations, cultural content, and an AI chatbot.',
                  image: '/images/Tourjateng.png',
                  tags: ['Next.js', 'Figma', 'Supabase'],
                  category: 'Full Stack',
                  demo: 'https://tourjateng.vercel.app',
                },
                {
                  id: 2,
                  title: 'Prototype of Imunicil',
                  description: 'Health support application prototype designed to digitalize Posyandu immunization records.',
                  image: '/images/Imunicil.png',
                  tags: ['Figma', 'UI Design', 'UX Research'],
                  category: 'UI/UX Design',
                  demo: 'https://www.figma.com/proto/8FLBqEBRqqTZ2QaZDOwqrX/Team-Ariel--Copy---Copy-?node-id=294-63',
                },
                {
                  id: 3,
                  title: 'Prototype of FarmaGym',
                  description: 'Health tracking application prototype monitoring diet, workouts, and doctor consultations.',
                  image: '/images/FarmaGym.png',
                  tags: ['Figma', 'UI Design', 'Prototyping'],
                  category: 'UI/UX Design',
                  demo: 'https://www.figma.com/proto/VbJkQAfx6vUJmBepOPbH1g/FarmaGym--Copy-?node-id=881-9743',
                },
              ].map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/80 border border-gray-700/60 rounded-2xl overflow-hidden hover:border-primary-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
                >
                  <div>
                    <div className="relative h-48 overflow-hidden bg-gray-900">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 bg-gray-900/90 backdrop-blur-md text-primary-400 text-xs font-semibold px-3 py-1 rounded-full border border-primary-500/30">
                        {project.category}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-[11px] px-2.5 py-0.5 rounded-md bg-gray-900 text-gray-300 border border-gray-700/50">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-0">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-gray-900 hover:bg-primary-500 text-gray-300 hover:text-white border border-gray-700/60 hover:border-primary-500 font-medium text-xs sm:text-sm transition-all duration-200"
                    >
                      View Prototype / Demo <ExternalLink size={14} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Certificates Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
              <div>
                <span className="text-purple-400 text-xs sm:text-sm font-medium tracking-wider uppercase mb-2 block">Verified Credentials</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                  Top <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Certifications</span>
                </h2>
              </div>
              <Link
                href="/certificates"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold group transition-colors"
              >
                View All Certificates
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  id: 1,
                  title: 'Alterra Academy UI/UX Bootcamp',
                  issuer: 'PT Marka Kreasi Persada (Kampus Merdeka Batch 6)',
                  date: 'Feb 2024 - Jun 2024',
                  badge: 'UI/UX Design',
                  skills: ['Customer Discovery', 'Product Design', 'Design Thinking, Figma, Prototyping, Usability Testing, Product, Cross-Functional Collaboration'],
                  link: '/certificates/Sertifikat 100_SER_B2G-MKP_VII_2024 - MUHAMMAD RIZAL (2).pdf',
                },
                {
                  id: 2,
                  title: 'Startup Campus UI/UX Bootcamp',
                  issuer: 'Yayasan Bakti Achmad Zaky (Kampus Merdeka Batch 5)',
                  date: 'Aug 2023 - Dec 2023',
                  badge: 'UI/UX Design',
                  skills: ['UX Research', 'Figma', 'Prototyping', 'Usability Testing'],
                  link: '/certificates/KM5-UI242D_StartupCampus.pdf',
                },
                {
                  id: 3,
                  title: 'Python Programming',
                  issuer: 'Huawei ICT Academy',
                  date: 'February 2026',
                  badge: 'Programming',
                  skills: ['Python', 'Data Processing', 'Data Visualization'],
                  link: '/certificates/Python Proggraming.png',
                },
              ].map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/40 backdrop-blur-xl border border-gray-700/60 rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                        <Award size={20} />
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                        {cert.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-gray-400 mb-3 flex items-center gap-1.5">
                      <Calendar size={13} className="text-purple-400 shrink-0" />
                      {cert.date}
                    </p>
                    <p className="text-xs text-gray-300 mb-4 line-clamp-2">
                      {cert.issuer}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {cert.skills.map((skill) => (
                        <span key={skill} className="text-[10px] px-2 py-0.5 rounded bg-gray-900 text-gray-400 border border-gray-800">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2 px-4 rounded-xl bg-gray-900 hover:bg-purple-600 text-gray-300 hover:text-white border border-gray-700/60 hover:border-purple-500 font-medium text-xs transition-all duration-200"
                  >
                    View Credential <ExternalLink size={13} />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience & Education Timeline Section */}
      <section className="py-20 bg-gray-800/40 border-t border-gray-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <span className="text-primary-400 text-xs sm:text-sm font-medium tracking-wider uppercase mb-2 block">My Journey</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Experience & <span className="bg-gradient-to-r from-primary-400 to-purple-500 bg-clip-text text-transparent">Education</span>
              </h2>
            </div>

            <div className="relative border-l-2 border-primary-500/30 ml-4 sm:ml-8 space-y-10">
              {[
                {
                  title: 'Freelance UI/UX, Graphic Designer & Web Developer',
                  organization: 'Freelance / Client & Remote Projects',
                  period: 'Mid 2025 - Present',
                  description: 'Designing intuitive mobile & web UI/UX interfaces, brand identities, graphic marketing assets, and building responsive web applications using Next.js & modern tools.',
                  icon: Briefcase,
                  badge: 'Experience',
                },
                {
                  title: 'Graphic Design Training — BLK Semarang',
                  organization: 'UPTD Balai Latihan Kerja (BLK) Mijen Semarang',
                  period: '17 Jun 2026 - 31 Jul 2026',
                  description: 'Completed intensive graphic design vocational training covering visual communication, layouting, vector illustration, and print production standards towards BNSP competency certification.',
                  icon: Award,
                  badge: 'Vocational Training',
                },
                {
                  title: 'Universitas Wahid Hasyim Semarang',
                  organization: 'S1 Teknik Informatika',
                  period: '2021 - May 2026',
                  description: 'Graduated with a Bachelor degree in Informatics Engineering, specializing in software engineering, web development, algorithms, and UI/UX design.',
                  icon: GraduationCap,
                  badge: 'Formal Education',
                },
                {
                  title: 'Alterra Academy UI/UX Bootcamp',
                  organization: 'Kampus Merdeka Program - Batch 6',
                  period: 'Feb 2024 - Jun 2024',
                  description: 'Completed intensive end-to-end UI/UX design training, user research, wireframing, interactive prototyping, design systems, and usability testing capstone project.',
                  icon: GraduationCap,
                  badge: 'Bootcamp & Program',
                },
                {
                  title: 'Startup Campus UI/UX Bootcamp',
                  organization: 'Kampus Merdeka Program - Batch 5',
                  period: 'Aug 2023 - Dec 2023',
                  description: 'Mastered product design thinking methodologies, customer discovery, interactive Figma prototyping, and usability testing for digital products.',
                  icon: GraduationCap,
                  badge: 'Bootcamp & Program',
                },
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-8 sm:pl-10 group"
                  >
                    {/* Timeline Node Icon */}
                    <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-gray-900 border-2 border-primary-400 flex items-center justify-center text-primary-400 group-hover:scale-110 group-hover:border-purple-400 transition-all duration-300 shadow-md">
                      <IconComponent size={14} />
                    </div>

                    <div className="bg-gray-800/60 border border-gray-700/60 rounded-2xl p-6 hover:border-primary-500/40 transition-all duration-300 shadow-lg">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary-500/10 text-primary-400 border border-primary-500/20">
                          {item.badge}
                        </span>
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <Calendar size={12} className="text-primary-400" />
                          {item.period}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs font-medium text-purple-400 mb-3">
                        {item.organization}
                      </p>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Work <span className="bg-gradient-to-r from-primary-400 to-purple-500 bg-clip-text text-transparent">Together</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <a
                href="mailto:ammadrisal@gmail.com"
                className="flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base w-full sm:w-auto justify-center"
              >
                <Mail size={20} className="sm:w-6 sm:h-6" />
                <span className="truncate">ammadrisal@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 sm:gap-3 text-gray-300 text-sm sm:text-base">
                <MapPin size={20} className="text-primary-400 sm:w-6 sm:h-6" />
                Semarang , Indonesia
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
