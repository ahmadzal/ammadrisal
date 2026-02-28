import Link from 'next/link';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/ahmadzal', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/muhammad-rizall/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/ahmadzal_rizal/', label: 'Instagram' },
    { icon: Mail, href: 'mailto:ammadrisal@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* About Section */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-primary-400 to-purple-500 bg-clip-text text-transparent mb-3 sm:mb-4">
              RizalDEV
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              UI/UX Designer & Full Stack Developer passionate about creating beautiful and functional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="text-gray-400 hover:text-primary-400 transition-colors text-sm sm:text-base">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-primary-400 transition-colors text-sm sm:text-base">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/certificates" className="text-gray-400 hover:text-primary-400 transition-colors text-sm sm:text-base">
                  Certificates
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Connect With Me</h3>
            <div className="flex space-x-4 justify-center sm:justify-start">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={22} className="sm:w-6 sm:h-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-sm sm:text-base">
          <p>&copy; {currentYear} Muhammad Rizal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
