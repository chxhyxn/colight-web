'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const sections = [
    'hero',
    'features', 
    'contact',
    'privacy'
  ];

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const sectionIndex = Math.floor(scrollTop / windowHeight);
        setCurrentSection(Math.min(sectionIndex, sections.length - 1));
      }
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        // Scroll handling completed
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [sections.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div 
      ref={containerRef} 
      className="bg-black text-white font-sf-pro overflow-hidden snap-y snap-mandatory"
      style={{ height: '100vh', overflowY: 'auto' }}
    >
      {/* Navigation */}
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          currentSection > 0 ? 'glass' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="text-2xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              CoLight
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {sections.map((section, index) => (
                <motion.button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm transition-colors relative ${
                    currentSection === index ? 'text-blue-400' : 'text-gray-400 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  {currentSection === index && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="h-screen flex items-center justify-center relative snap-start">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 100
            }}
            className="mb-8"
          >
            <div className="text-8xl md:text-9xl font-bold gradient-text">
              CoLight
            </div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-2xl md:text-3xl font-light text-gray-300 mb-12"
          >
            Create. Share. Light.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-sm text-gray-500"
          >
            iOS Only
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div 
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center cursor-pointer"
            onClick={() => scrollToSection('features')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="h-screen flex items-center justify-center snap-start">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-32">
            {[
              {
                title: "쉽지만 전문적인 카메라",
                description: "프로페셔널한 사진 촬영을 위한 직관적인 인터페이스",
                icon: "📸",
                direction: "left"
              },
              {
                title: "Custom Filter Maker",
                description: "터치 몇 번으로 나만의 필터 제작",
                icon: "🎨",
                direction: "right"
              },
              {
                title: "Live Preview",
                description: "적용 전 필터 효과를 실시간으로 미리보기",
                icon: "👁️",
                direction: "left"
              },
              {
                title: "Filter Community",
                description: "만든 필터를 전 세계와 공유",
                icon: "🌍",
                direction: "right"
              },
              {
                title: "Apple-First Experience",
                description: "iOS 26 전용 최신 기술 적용",
                icon: "🍎",
                direction: "left"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: feature.direction === 'left' ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex items-center gap-16 ${
                  feature.direction === 'right' ? 'flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <div className="text-6xl mb-6">{feature.icon}</div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-6">{feature.title}</h3>
                  <p className="text-xl text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
                <div className="flex-1">
                  <motion.div 
                    className="relative"
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-full h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                      <div className="text-gray-500 text-lg relative z-10">iPhone 16 Pro Mockup</div>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                      />
                    </div>
                    <div className="absolute inset-0 rounded-2xl shadow-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="h-screen flex items-center justify-center snap-start">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto px-6"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Have questions or ideas?
          </h2>
          <p className="text-2xl text-gray-400 mb-12">
            Let&apos;s connect.
          </p>
          
          <motion.a
            href="mailto:seancho@colight.app"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300"
          >
            Contact Me
          </motion.a>

          <div className="flex justify-center space-x-6 mt-12">
            <motion.a
              href="https://twitter.com/colight"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </motion.a>
            <motion.a
              href="https://instagram.com/colight"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Privacy Policy Section */}
      <section id="privacy" className="h-screen flex items-center justify-center snap-start">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Privacy Policy
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-12 max-w-2xl mx-auto">
            CoLight는 사용자의 개인정보 보호를 최우선으로 합니다. 
            우리는 최소한의 데이터만 수집하며, 모든 정보는 안전하게 암호화되어 보관됩니다.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full text-sm font-medium transition-colors duration-300"
          >
            Read Full Privacy Policy
          </motion.button>

          <footer className="mt-24 text-gray-500 text-sm">
            <p>&copy; 2024 CoLight. All rights reserved.</p>
            <p className="mt-2">Designed for iOS</p>
          </footer>
        </motion.div>
      </section>
    </div>
  );
}
