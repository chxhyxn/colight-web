import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [navBackground, setNavBackground] = useState(false);
  
  // Refs for scroll animations
  const heroRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const privacyRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setNavBackground(currentScrollY > 100);
      
      // Animate elements based on scroll position
      const windowHeight = window.innerHeight;
      
      // Hero parallax effect
      if (heroRef.current) {
        const heroElement = heroRef.current;
        const heroTop = heroElement.offsetTop;
        const heroHeight = heroElement.offsetHeight;
        
        if (currentScrollY >= heroTop && currentScrollY <= heroTop + heroHeight) {
          const progress = (currentScrollY - heroTop) / heroHeight;
          heroElement.style.opacity = (1 - progress * 0.8).toString();
          heroElement.style.transform = `translateY(${progress * 100}px) scale(${1 - progress * 0.1})`;
        }
      }
      
      // Feature sections animation
      const sections = [featuresRef, contactRef, privacyRef];
      sections.forEach((ref) => {
        if (ref.current) {
          const element = ref.current;
          const elementTop = element.offsetTop;
          const elementHeight = element.offsetHeight;
          
          if (currentScrollY + windowHeight > elementTop + 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      title: "쉽지만 전문적인 카메라",
      description: "직관적인 인터페이스로 누구나 쉽게 전문가급 사진을 촬영할 수 있습니다.",
      align: "left"
    },
    {
      title: "Custom Filter Maker",
      description: "터치 몇 번으로 나만의 독특한 필터를 제작하고 저장하세요.",
      align: "right"
    },
    {
      title: "Live Preview",
      description: "필터 적용 전 실시간 미리보기로 완벽한 결과를 확인하세요.",
      align: "left"
    },
    {
      title: "Filter Community",
      description: "전 세계 사용자들과 창작한 필터를 공유하고 발견하세요.",
      align: "right"
    },
    {
      title: "Apple-First Experience",
      description: "iOS 전용으로 설계된 최신 기술과 네이티브 성능을 경험하세요.",
      align: "left"
    }
  ];

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        navBackground ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold tracking-tight">CoLight</div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="hover:text-blue-400 transition-colors duration-300">Features</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors duration-300">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="min-h-screen flex flex-col items-center justify-center relative"
      >
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8 animate-bounce-in">
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center text-4xl font-bold shadow-2xl shadow-blue-500/25">
              C
            </div>
          </div>
          
          {/* Title and Slogan */}
          <h1 className="text-6xl md:text-8xl font-thin mb-4 tracking-tight">
            CoLight
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 font-light tracking-wide">
            Create. Share. Light.
          </p>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        ref={featuresRef}
        id="features" 
        className="py-20 opacity-0 transform translate-y-20 transition-all duration-1000"
      >
        <div className="max-w-7xl mx-auto px-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`flex flex-col ${feature.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center mb-32 gap-16`}
            >
              {/* Content */}
              <div className="md:w-1/2">
                <h3 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              {/* Mock iPhone Image */}
              <div className="md:w-1/2 flex justify-center">
                <div className="w-80 h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-4 shadow-2xl shadow-white/10 hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                      </div>
                      <p className="text-sm text-gray-300">CoLight Preview</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section 
        ref={contactRef}
        id="contact" 
        className="py-20 opacity-0 transform translate-y-20 transition-all duration-1000"
      >
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">
            Have questions or ideas?<br />Let's connect.
          </h2>
          
          <a 
            href="mailto:seancho@colight.app"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105"
          >
            Contact Me
          </a>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-8 mt-12">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <div className="w-6 h-6 bg-current rounded"></div>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <div className="w-6 h-6 bg-current rounded"></div>
            </a>
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section 
        ref={privacyRef}
        className="py-20 opacity-0 transform translate-y-20 transition-all duration-1000"
      >
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-tight">
            Privacy Policy
          </h2>
          
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            당신의 개인정보 보호는 우리의 최우선 과제입니다. 
            CoLight는 Apple의 개인정보 보호 기준에 따라 설계되었습니다.
          </p>
          
          <a 
            href="/privacy"
            className="inline-block border border-white/20 hover:border-white/40 text-white px-8 py-3 rounded-full text-base font-medium transition-all duration-300 hover:bg-white/5"
          >
            Read Full Privacy Policy
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-2xl font-bold mb-4">CoLight</div>
          <p className="text-gray-500 text-sm">
            © 2025 CoLight. iOS Only. Designed with ❤️ for creators.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-bounce-in {
          animation: bounce-in 2s ease-out;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
        }
      `}</style>
    </div>
  );
}