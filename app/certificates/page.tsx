'use client';

import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';

export default function CertificatesPage() {
  const certificates = [
    {
      id: 1,
      title: 'Python Programming',
      issuer: 'Huawei ICT Academy',
      date: 'February 2026',
      credentialId: 'EBG20260217014338',
      description: 'Fundamental and intermediate Python programming concepts including data processing, data visualization, and basic machine learning using pandas, SciPy, and Scikit-learn.',
      skills: ['Python', 'Data Processing', 'Data Visualization', 'Basic Machine Learning'],
      link: '/certificates/Python Proggraming.png',
      isLocal: true,
      category: 'Programming',
    },
    {
      id: 2,
      title: 'Database Oracle',
      issuer: 'Oracle Academy',
      date: 'February 2026',
      credentialId: null,
      description: 'Database design and modeling using modeling tools, as well as database implementation and querying using SQL.',
      skills: ['Database Design', 'ERD Modeling', 'SQL ', 'Database Implementation' , 'Database Normalization'],
      link: '/certificates/Database Oracle.pdf',
      isLocal: true,
      category: 'Backend Development',
    },
    {
      id: 3,
      title: 'Alterra Academy UI/UX Bootcamp – Kampus Merdeka Program, Batch 6',
      issuer: 'PT Marka Kreasi Persada - Kampus Merdeka',
      date: 'February 2024 - June 2024',
      credentialId: '100/SER/B2G-MKP/VII/2024',
      description: 'End-to-end UI/UX design including user research, design system implementation, prototyping with Figma, and product development through a capstone project.',
      skills: ['UX Research', 'UI Design', 'Figma', 'Design Systems', 'Prototyping', 'Product Development', 'Usability Testing', 'AI in Design'],
      link: '/certificates/Sertifikat 100_SER_B2G-MKP_VII_2024 - MUHAMMAD RIZAL (2).pdf',
      isLocal: true,
      category: 'UI/UX Design',
    },
    {
      id: 4,
      title: 'Startup Campus UI/UX Bootcamp -  Kampus Merdeka Program, Batch 5',
      issuer: 'Yayasan Bakti Achmad Zaky - Kampus Merdeka',
      date: 'August 2023 - Desember 2023',
      credentialId: 'KM5-UI242D',
      description: 'Comprehensive UI/UX training covering user research, customer discovery, product design, usability testing, and end-to-end product development through a final showcase project.',
      skills: ['UI/UX Design', 'Customer Discovery', 'Product Design', 'Usability Testing', 'Prototyping','Project Development', 'Design Thinking'],
      link: '/certificates/KM5-UI242D_StartupCampus.pdf',
      isLocal: true,
      category: 'UI/UX Design',
    },
  ];

  const categories = ['All', ...Array.from(new Set(certificates.map(cert => cert.category)))];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <Award className="w-16 h-16 text-primary-400 mx-auto" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Certificates & <span className="bg-gradient-to-r from-primary-400 to-purple-500 bg-clip-text text-transparent">Achievements</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Continuous learning is key to staying relevant in tech. Here are some of the 
            certifications I've earned to enhance my skills and knowledge.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <div className="bg-gradient-to-br from-primary-900/30 to-primary-800/30 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-primary-400 mb-2">{certificates.length}</div>
            <div className="text-gray-300">Total Certificates</div>
          </div>
          <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">{categories.length - 1}</div>
            <div className="text-gray-300">Categories</div>
          </div>
          <div className="bg-gradient-to-br from-pink-900/30 to-pink-800/30 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">2024</div>
            <div className="text-gray-300">Latest Year</div>
          </div>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-all duration-300 border border-gray-700 hover:border-primary-500 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-primary-400 font-semibold mb-1">{cert.issuer}</p>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar size={16} />
                    <span>{cert.date}</span>
                  </div>
                </div>
                <div className="bg-primary-500/20 p-3 rounded-lg">
                  <Award className="text-primary-400" size={24} />
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {cert.description}
              </p>

              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-block bg-purple-500/20 text-purple-300 text-xs px-3 py-1 rounded-full">
                  {cert.category}
                </span>
              </div>

              {/* Skills */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                <span className="text-xs text-gray-500">
                  ID: {cert.credentialId}
                </span>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors text-sm font-semibold"
                >
                  <span>View Certificate</span>
                  <ExternalLink size={16} />
                </a>
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
          className="mt-20 text-center bg-gradient-to-r from-primary-900/30 to-purple-900/30 rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold mb-4">Interested in my skillset?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how my expertise can help bring your project to life.
          </p>
          <a
            href="/#contact"
            className="inline-block px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-all duration-200"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </div>
  );
}
