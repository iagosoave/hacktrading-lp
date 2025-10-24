import React from 'react';
import { motion } from 'framer-motion';

// Importa as duas imagens
import image1 from './receba01.png'; // Imagem para "Materiais Didáticos"
import image2 from './receba02.png'; // Imagem para "O que você Receberá"

export default function WhatYouGet() {
  
  // Lista 1
  const whatYouGetItems = [
    "AULAS GRAVADAS",
    "COMUNIDADE NO DISCORD",
    "ANÁLISES E BATE PAPO",
    "LIVES OPERACIONAIS",
    "LIVES DE CONTEÚDO",
    "LIVES DE ANÁLISES",
    "PLATAFORMA DE TREINAMENTO"
  ];

  // Lista 2
  const didacticMaterialsItems = [
    "PLANO DE TRADING",
    "ORDEM E FLUXO",
    "MAPAS DAS ESTRUTURAS"
  ];

  // Variantes de animação (reutilizáveis)
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  // SVG de Checkmark
  const CheckIcon = () => (
    <svg 
      className="w-5 h-5 text-green-400 flex-shrink-0" // Adicionado flex-shrink-0
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );

  return (
    <section 
      id="what-you-get" 
      // Fundo rico (como estava antes)
      className="relative bg-black text-zinc-100 py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden" 
      style={{ fontFamily: "'Space Grotesk', sans-serif" }} 
    >
      {/* Importa a 'Space Grotesk' */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        `
      }} />

      {/* --- Início dos Elementos de Fundo --- */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px] opacity-50"></div>
      
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.03, 0.05, 0.03],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-green-500 rounded-full blur-[180px]"
      />
      {/* --- Fim dos Elementos de Fundo --- */}

      {/* Container Principal */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        
        {/* Título Principal da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-100 leading-tight">
            O que está{' '}
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
              Incluso
            </span>
          </h2>
        </motion.div>
        
        {/* Grid para os Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          
          {/* --- Card 1: O que você Receberá --- */}
          <motion.div 
            className="group relative bg-gradient-to-b from-zinc-900/60 to-zinc-950/60 border border-zinc-800 rounded-xl overflow-hidden backdrop-blur-sm transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Efeito 1: Glow Verde no Hover */}
            <div className="absolute -inset-1 bg-gradient-to-b from-green-500/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300 -z-10"></div>
            
            {/* Efeito 2: "Shine" no Hover */}
            <motion.div 
              className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
              initial={{ x: '-150%' }}
              whileHover={{ x: '250%' }}
              transition={{ duration: 0.8, ease: "linear" }}
            />

            <div className="p-6 sm:p-8">
              {/* Título do Card 1 */}
              <h3 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-6">
                O que você{' '}
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
                  Receberá
                </span>
              </h3>

              {/* Lista de Itens 1 */}
              <motion.ul 
                className="space-y-3"
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {whatYouGetItems.map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center gap-3 text-left"
                    variants={itemVariants}
                  >
                    <CheckIcon />
                    <span className="text-base sm:text-lg font-semibold uppercase text-zinc-300 tracking-wider">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
            
            {/* Imagem 2 (O que você Receberá) */}
            <div className="overflow-hidden">
              <img 
                src={image2} 
                alt="O que você Receberá" 
                className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-105" // Efeito de Zoom
              />
            </div>
          </motion.div>

          {/* --- Card 2: Materiais Didáticos --- */}
          <motion.div 
            className="group relative bg-gradient-to-b from-zinc-900/60 to-zinc-950/60 border border-zinc-800 rounded-xl overflow-hidden backdrop-blur-sm transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Efeito 1: Glow Verde no Hover */}
            <div className="absolute -inset-1 bg-gradient-to-b from-green-500/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300 -z-10"></div>
            
            {/* Efeito 2: "Shine" no Hover */}
            <motion.div 
              className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
              initial={{ x: '-150%' }}
              whileHover={{ x: '250%' }}
              transition={{ duration: 0.8, ease: "linear" }}
            />

            <div className="p-6 sm:p-8">
              {/* Título do Card 2 */}
              <h3 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-6">
                Materiais{' '}
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
                  Didáticos
                </span>
              </h3>

              {/* Lista de Itens 2 */}
              <motion.ul 
                className="space-y-3"
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {didacticMaterialsItems.map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center gap-3 text-left"
                    variants={itemVariants}
                  >
                    <CheckIcon />
                    <span className="text-base sm:text-lg font-semibold uppercase text-zinc-300 tracking-wider">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
            
            {/* Imagem 1 (Materiais Didáticos) */}
            <div className="overflow-hidden">
              <img 
                src={image1} 
                alt="Materiais Didáticos" 
                className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-105" // Efeito de Zoom
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}