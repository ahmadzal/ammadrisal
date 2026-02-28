'use client';

import Link from 'next/link';
import { ArrowRight, Code, Palette, Database, Figma, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import TypewriterText from '@/components/TypewriterText';

export default function Home() {
  const skills = [
    { name: 'UI/UX Design', icon: Palette, description: 'Creating intuitive and beautiful user interfaces' },
    { name: 'Frontend Development', icon: Code, description: 'React, Next.js, TypeScript, Tailwind CSS' },
    { name: 'Backend Development', icon: Database, description: 'Node.js, Supabase, PostgreSQL' },
    { name: 'Design Tools', icon: Figma, description: 'Figma, Adobe XD, Sketch, Photoshop' },
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
              UI/UX Designer & Full Stack Developer
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-4"
            >
              I create beautiful, user-centered digital experiences with clean code and stunning design.
              Passionate about solving problems and bringing ideas to life.
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
                      style={{ objectPosition: 'center 50%' }}
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
                  I'm a passionate UI/UX Designer and Full Stack Developer with a love for creating 
                  seamless digital experiences. With expertise in both design and development, 
                  I bridge the gap between beautiful interfaces and robust functionality.
                </p>
                <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6">
                  My journey in tech started with a fascination for how things work, which evolved 
                  into a career where I can blend creativity with technical skills to build 
                  products that make a difference.
                </p>
                <p className="text-base sm:text-lg text-gray-300">
                  When I'm not coding or designing, you can find me exploring new technologies, 
                  contributing to open-source projects, or sharing knowledge with the community.
                </p>
              </div>
            </div>
              
            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-700/50 p-4 sm:p-6 rounded-lg hover:bg-gray-700 transition-all duration-200 hover:scale-105"
                    >
                      <Icon className="text-primary-400 mb-2 sm:mb-3" size={28} />
                      <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{skill.name}</h3>
                      <p className="text-xs sm:text-sm text-gray-400">{skill.description}</p>
                    </motion.div>
                  );
                })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Technical <span className="bg-gradient-to-r from-primary-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Design Skills */}
              <div className="bg-gray-800/50 p-6 sm:p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6 text-primary-400">Design</h3>
                <ul className="space-y-3">
                  {['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator', 'User Research', 'Wireframing', 'Prototyping'].map((skill) => (
                    <li key={skill} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-primary-400 rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Frontend Skills */}
              <div className="bg-gray-800/50 p-6 sm:p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6 text-primary-400">Frontend</h3>
                <ul className="space-y-3">
                  {['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5 & CSS3', 'Responsive Design', 'python programming'].map((skill) => (
                    <li key={skill} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-primary-400 rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Backend Skills */}
              <div className="bg-gray-800/50 p-6 sm:p-8 rounded-lg sm:col-span-2 lg:col-span-1">
                <h3 className="text-2xl font-semibold mb-6 text-primary-400">Backend</h3>
                <ul className="space-y-3">
                  {['Supabase', 'Authentication', 'Git & GitHub', 'node.js'].map((skill) => (
                    <li key={skill} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-primary-400 rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
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
