import React from 'react';
import { motion } from 'framer-motion';

export default function Pricing() {
  
  const features = [
    "Método passo a passo para começar no Airbnb e Booking do zero",
    "Estratégias para criar rendimento passivo todos os dias",
    "Técnicas de otimização que já geraram múltiplos 5 dígitos",
    "Comunidade exclusiva com nosso de sucesso em Portugal",
    "Ferramentas e automações para ter um negócio que funciona sozinho",
    "Garantia: Aplica o método e caso não veja investimento"
  ];

  return (
    <section 
      id="pricing" 
      className="relative bg-black py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden" 
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      {/* Import Google Font */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        `
      }} />

      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>
      
      {/* Animated Gradient Orb */}
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

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px] sm:bg-[size:80px_80px]"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN - Features */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Title */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-100 leading-tight mb-2">
                Essa é a{' '}
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
                  sua oportunidade
                </span>
              </h2>
              <p className="text-xl sm:text-2xl text-zinc-100">
                de entrar no trading e ter acesso a:
              </p>
            </div>

            {/* Features List */}
            <ul className="space-y-4">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="text-green-400 text-xl mt-1">✕</span>
                <span className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                  Aulas gravadas com estratégias testadas e validadas
                </span>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start gap-3"
              >
                <span className="text-green-400 text-xl mt-1">✕</span>
                <span className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                  Comunidade exclusiva no Discord com traders ativos
                </span>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start gap-3"
              >
                <span className="text-green-400 text-xl mt-1">✕</span>
                <span className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                  Lives operacionais e de análises de mercado
                </span>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-start gap-3"
              >
                <span className="text-green-400 text-xl mt-1">✕</span>
                <span className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                  Materiais didáticos: Plano de Trading, Ordem e Fluxo e Mapas
                </span>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-start gap-3"
              >
                <span className="text-green-400 text-xl mt-1">✕</span>
                <span className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                  Plataforma de treinamento completa e atualizada
                </span>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-start gap-3"
              >
                <span className="text-green-400 text-xl mt-1">✕</span>
                <span className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                  Suporte diário e acompanhamento próximo de mentores
                </span>
              </motion.li>
            </ul>
          </motion.div>

          {/* RIGHT COLUMN - Pricing Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Pricing Card */}
            <div className="relative bg-gradient-to-b from-zinc-900/80 to-zinc-950/80 backdrop-blur-sm border-2 border-green-500/30 rounded-2xl overflow-hidden">
              
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-b from-green-500/20 to-transparent rounded-2xl blur-xl opacity-60"></div>

              <div className="relative p-8 sm:p-10 space-y-8">
                
                {/* Title */}
                <div className="text-center">
                  <p className="text-lg sm:text-xl text-zinc-300 mb-4">
                    Garante a sua vaga por apenas:
                  </p>
                  
                  {/* Price */}
                  <div className="relative inline-block">
                    <motion.div
                      className="text-6xl sm:text-7xl md:text-8xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent"
                      animate={{
                        textShadow: [
                          '0 0 20px rgba(34, 197, 94, 0.3)',
                          '0 0 40px rgba(34, 197, 94, 0.5)',
                          '0 0 20px rgba(34, 197, 94, 0.3)'
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      R$59,90
                    </motion.div>
                  </div>
                </div>

                {/* Divider */}
                <div className="relative h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400 to-transparent blur-sm"></div>
                </div>

                {/* Details */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-zinc-400">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm sm:text-base">Acesso imediato após o pagamento</span>
                  </div>

                  <div className="flex items-center gap-3 text-zinc-400">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="text-sm sm:text-base">Entre para a comunidade exclusiva no Discord</span>
                  </div>

                  <div className="flex items-center gap-3 text-zinc-400">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm sm:text-base">Conteúdo atualizado constantemente</span>
                  </div>
                </div>

                {/* CTA Button */}
                <a 
                  href="https://pay.hub.la/cAu7LOeFKkiKKPvmHojU" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative w-full px-8 py-5 bg-gradient-to-r from-green-500 to-emerald-500 text-black text-base sm:text-lg font-bold overflow-hidden shadow-[0_0_40px_rgba(34,197,94,0.4)]"
                  >
                    {/* Animated Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '200%' }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    />

                    {/* Button Content */}
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      <span className="uppercase tracking-wider">Quero Me Inscrever</span>
                      <motion.svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </motion.svg>
                    </span>

                    {/* Glow Effect on Hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 blur-xl"></div>
                    </div>
                  </motion.button>
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}