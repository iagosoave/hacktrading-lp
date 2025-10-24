import React from 'react';
import { motion } from 'framer-motion';
import logo from './logo.png'; // Importa o logo

export default function FinalCallToAction() {
  
  // O texto que você forneceu
  const ctaText = "A HackTrading Community é a comunidade definitiva para quem quer evoluir de forma consistente e profissional no trading. Oferecemos aprendizado prático, suporte diário, estratégias testadas e acompanhamento próximo, além de um grupo de traders comprometidos com resultados reais. Nossa missão é transformar conhecimento em ação, ajudando cada membro a se desenvolver no seu ritmo e conquistar resultados concretos. Se você quer fazer parte da nova geração de traders e crescer em um ambiente de aprendizado e troca de experiências, a HackTrading Community é o lugar certo para você.";

  return (
    <section 
      id="final-cta" 
      // Fundo rico (idêntico às outras seções)
      className="relative bg-black py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden" 
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
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.02, 0.04, 0.02],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] bg-green-500 rounded-full blur-[150px]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px] sm:bg-[size:80px_80px]"></div>
      {/* --- Fim dos Elementos de Fundo --- */}

      {/* Container Principal */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        
        {/* Layout de Duas Colunas */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Coluna 1: Imagem (Logo com Animação) */}
          <motion.div 
            className="w-full lg:w-1/3 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            {/* Reutilizando a animação de 'glow' do Hero */}
            <motion.img 
              src={logo} 
              alt="HackTrading Logo" 
              className="w-48 h-48 lg:w-64 lg:h-64 object-contain"
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

          {/* Coluna 2: Conteúdo (Texto e Botão) */}
          <motion.div 
            className="w-full lg:w-2/3 text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            {/* Título da Seção */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-100 mb-6 leading-tight">
              Faça Parte da Nova {' '}
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
                Geração de Traders
              </span>
            </h2>
            
            {/* Texto */}
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-3xl mx-auto lg:mx-0">
              {ctaText}
            </p>

            {/* Botão (Estilo idêntico ao do Testimonials) */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-green-500 to-emerald-500 text-black text-base sm:text-lg font-bold overflow-hidden mt-10" // Adicionado margin-top
            >
              {/* Animated Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '200%' }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />

              {/* Button Content */}
              <span className="relative z-10 flex items-center justify-center gap-3">
                Quero Fazer Parte
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </span>

              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 blur-xl"></div>
              </div>
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}