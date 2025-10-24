import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from './logo.png';
import bannerDesktop from './banner.png';
import bannerMobile from './mobile.png';

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // <-- FUNÇÃO DE SCROLL ADICIONADA -->
  const scrollToTestimonials = () => {
    const testimonialsSection = document.getElementById('depoimentos');
    if (testimonialsSection) {
      testimonialsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  // Array de logos para o carrossel
  const logos = Array(12).fill(logo);

  // Mobile Version Component
  const MobileVersion = () => (
    <>
      <section className="relative bg-black text-white">
        {/* ... (style tag) ... */}
        <style dangerouslySetInnerHTML={{
          __html: `
            @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
          `
        }} />

        {/* ... (Background Image Container) ... */}
        <div className="relative w-full">
          <img 
            src={bannerMobile || bannerDesktop}
            alt="Banner" 
            className="w-full h-auto object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 px-6 pb-8 -mt-8 bg-black">
          <motion.div 
            className="w-full max-w-sm mx-auto space-y-5"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            
            {/* ... (Logo, Brand, Headline, Description) ... */}
            
            {/* Logo */}
            <motion.div
              variants={fadeIn}
              className="flex justify-center mb-3"
            >
              <motion.img 
                src={logo} 
                alt="HackTrading" 
                className="w-14 h-14 object-contain"
                animate={{
                  filter: ["drop-shadow(0 0 20px rgba(34, 197, 94, 0.3))", "drop-shadow(0 0 30px rgba(34, 197, 94, 0.5))", "drop-shadow(0 0 20px rgba(34, 197, 94, 0.3))"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Brand */}
            <motion.div
              variants={fadeIn}
              className="text-center space-y-2"
            >
              <h2 className="text-base font-semibold text-zinc-400 tracking-[0.3em] uppercase">
                HackTrading
              </h2>
              
              <motion.div 
                className="w-14 h-[1px] bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto"
                animate={{
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            
            {/* Headline */}
            <motion.h1 
              variants={fadeIn}
              className="text-2xl font-bold text-zinc-100 leading-tight text-center"
            >
              Evolua no Trading{' '}
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
                de Forma Profissional
              </span>
            </motion.h1>
            
            {/* Description */}
            <motion.p 
              variants={fadeIn}
              className="text-xs text-zinc-400 leading-relaxed text-center font-light px-2"
            >
              A HackTrading Community é a comunidade definitiva para quem quer evoluir de forma consistente e profissional no trading. 
              Oferecemos aprendizado prático, suporte diário, estratégias testadas e acompanhamento próximo.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              variants={fadeIn}
              className="flex flex-col gap-3 pt-3"
            >
              {/* Primary Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="group relative w-full px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-black text-sm font-bold overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Começar Agora
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </motion.button>
              
              {/* Secondary Button */}
              <motion.button
                onClick={scrollToTestimonials} // <-- ONCLICK ADICIONADO
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="group relative w-full px-6 py-4 bg-zinc-950/50 backdrop-blur-sm text-zinc-300 text-sm font-medium overflow-hidden border border-zinc-800 cursor-pointer" // <-- cursor-pointer adicionado
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Ver Depoimentos
                  <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ... (Infinite Logo Carousel Section - Mobile) ... */}
      <section className="relative bg-black py-12 overflow-hidden border-t border-zinc-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent z-10"></div>
        
        <div className="flex">
          <motion.div
            className="flex gap-8 pr-8"
            animate={{
              x: [0, -960],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {logos.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                className="flex-shrink-0 w-20 h-20 flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt="HackTrading Logo"
                  className="w-16 h-16 object-contain opacity-30 hover:opacity-60 transition-opacity duration-300 grayscale hover:grayscale-0"
                  style={{
                    filter: 'drop-shadow(0 0 10px rgba(34, 197, 94, 0.2))'
                  }}
                />
              </div>
            ))}
          </motion.div>

          <motion.div
            className="flex gap-8 pr-8"
            animate={{
              x: [0, -960],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {logos.map((logo, index) => (
              <div
                key={`logo-2-${index}`}
                className="flex-shrink-0 w-20 h-20 flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt="HackTrading Logo"
                  className="w-16 h-16 object-contain opacity-30 hover:opacity-60 transition-opacity duration-300 grayscale hover:grayscale-0"
                  style={{
                    filter: 'drop-shadow(0 0 10px rgba(34, 197, 94, 0.2))'
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
      </section>
    </>
  );

  // Desktop Version Component
  const DesktopVersion = () => (
    <>
      <section className="relative w-full bg-black">
        {/* ... (style tag) ... */}
        <style dangerouslySetInnerHTML={{
          __html: `
            @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
          `
        }} />

        {/* ... (Container do Banner) ... */}
        <div className="relative w-full">
          <img 
            src={bannerDesktop}
            alt="Banner" 
            className="w-full h-auto object-contain block"
          />
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-between py-12 px-8 md:px-12 lg:px-16">
            
            {/* Logo e Conteúdo juntos */}
            <div className="flex-1 flex flex-col justify-center">
              <motion.div 
                className="max-w-4xl space-y-8"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                
                {/* ... (Logo, Brand, Headline, Description) ... */}

                {/* Logo */}
                <motion.div
                  variants={fadeIn}
                  className="mb-4"
                >
                  <motion.img 
                    src={logo} 
                    alt="HackTrading" 
                    className="w-24 h-24 lg:w-28 lg:h-28 object-contain"
                    animate={{
                      filter: ["drop-shadow(0 0 20px rgba(34, 197, 94, 0.3))", "drop-shadow(0 0 30px rgba(34, 197, 94, 0.5))", "drop-shadow(0 0 20px rgba(34, 197, 94, 0.3))"]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>

                {/* Brand */}
                <motion.div
                  variants={fadeIn}
                  className="space-y-3"
                >
                  <h2 className="text-xl lg:text-2xl font-semibold text-zinc-400 tracking-[0.35em] uppercase">
                    HackTrading
                  </h2>
                  
                  <motion.div 
                    className="w-20 h-[2px] bg-gradient-to-r from-transparent via-green-400 to-transparent"
                    animate={{
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
                
                {/* Headline com quebra de linha personalizada */}
                <motion.h1 
                  variants={fadeIn}
                  className="text-3xl lg:text-4xl xl:text-5xl font-bold text-zinc-100 leading-[1.15] tracking-tight"
                >
                  Evolua no Trading{' '}<br className="hidden xl:inline" />
                  <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
                    de Forma Profissional
                  </span>
                </motion.h1>
                
                {/* Description */}
                <motion.p 
                  variants={fadeIn}
                  className="text-base lg:text-lg text-zinc-400 leading-relaxed max-w-2xl font-light"
                >
                  A HackTrading Community é a comunidade definitiva para quem quer evoluir de forma consistente e profissional no trading. 
                  Oferecemos aprendizado prático, suporte diário, estratégias testadas e acompanhamento próximo.
                </motion.p>
                
                {/* CTA Buttons */}
                <motion.div 
                  variants={fadeIn}
                  className="flex flex-col sm:flex-row gap-4 pt-6"
                >
                  {/* Primary Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-black text-sm font-bold overflow-hidden" 
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.5 }}
                    />
                    <span className="relative z-10 flex items-center gap-2">
                      Começar Agora
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </motion.button>
                  
                  {/* Secondary Button */}
                  <motion.button
                    onClick={scrollToTestimonials} // <-- ONCLICK ADICIONADO
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative px-8 py-3 bg-zinc-950/50 backdrop-blur-sm text-zinc-300 text-sm font-medium overflow-hidden border border-zinc-800 cursor-pointer" // <-- cursor-pointer adicionado
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10 flex items-center gap-2">
                      Ver Depoimentos
                      <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                    
                    {/* ... (Border Glow Effect) ... */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.5), transparent)',
                        backgroundSize: '200% 100%',
                      }}
                      animate={{
                        backgroundPosition: ['200% 0', '-200% 0'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </motion.button>
                </motion.div>
                
              </motion.div>
            </div>
            
          </div>
        </div>
      </section>

      {/* ... (Infinite Logo Carousel Section - Desktop) ... */}
      <section className="relative bg-black py-16 overflow-hidden border-t border-zinc-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
        
        <div className="flex">
          <motion.div
            className="flex gap-16 pr-16"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {logos.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                className="flex-shrink-0 w-32 h-32 flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt="HackTrading Logo"
                  className="w-24 h-24 object-contain opacity-30 hover:opacity-60 transition-opacity duration-300 grayscale hover:grayscale-0"
                  style={{
                    filter: 'drop-shadow(0 0 10px rgba(34, 197, 94, 0.2))'
                  }}
                />
              </div>
            ))}
          </motion.div>

          <motion.div
            className="flex gap-16 pr-16"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {logos.map((logo, index) => (
              <div
                key={`logo-2-${index}`}
                className="flex-shrink-0 w-32 h-32 flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt="HackTrading Logo"
                  className="w-24 h-24 object-contain opacity-30 hover:opacity-60 transition-opacity duration-300 grayscale hover:grayscale-0"
                  style={{
                    filter: 'drop-shadow(0 0 10px rgba(34, 197, 94, 0.2))'
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
      </section>
    </>
  );

  return (
    <>
      {isMobile ? <MobileVersion /> : <DesktopVersion />}
    </>
  );
}