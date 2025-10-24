import { motion } from 'framer-motion';

// Importar as 12 imagens
import img01 from './01.png';
import img02 from './02.png';
import img03 from './03.png';
import img04 from './04.png';
import img05 from './05.png';
import img06 from './06.png';
import img07 from './07.png';
import img08 from './08.png';
import img09 from './09.png';
import img10 from './10.png';
import img11 from './11.png';
import img12 from './12.png';

// ADICIONE AS 8 NOVAS IMPORTAÇÕES DE CERTIFICADOS AQUI
import cert01 from './cert01.png';
import cert02 from './cert02.png';
import cert03 from './cert03.png';
import cert04 from './cert04.png';
import cert05 from './cert05.png';
import cert06 from './cert06.png';
import cert07 from './cert07.png';
import cert08 from './cert08.png';


export default function Testimonials() {
  // Criar a lista de imagens usando as variáveis importadas
  const images = [
    { id: 1, src: img01, alt: 'Depoimento 1' },
    { id: 2, src: img02, alt: 'Depoimento 2' },
    { id: 3, src: img03, alt: 'Depoimento 3' },
    { id: 4, src: img04, alt: 'Depoimento 4' },
    { id: 5, src: img05, alt: 'Depoimento 5' },
    { id: 6, src: img06, alt: 'Depoimento 6' },
    { id: 7, src: img07, alt: 'Depoimento 7' },
    { id: 8, src: img08, alt: 'Depoimento 8' },
    { id: 9, src: img09, alt: 'Depoimento 9' },
    { id: 10, src: img10, alt: 'Depoimento 10' },
    { id: 11, src: img11, alt: 'Depoimento 11' },
    { id: 12, src: img12, alt: 'Depoimento 12' },
  ];

  // Dividir em duas linhas
  const firstRow = images.slice(0, 6);
  const secondRow = images.slice(6, 12);

  // NOVA LISTA DE CERTIFICADOS
  const certificates = [
    { id: 1, src: cert01, alt: 'Certificado 1' },
    { id: 2, src: cert02, alt: 'Certificado 2' },
    { id: 3, src: cert03, alt: 'Certificado 3' },
    { id: 4, src: cert04, alt: 'Certificado 4' },
    { id: 5, src: cert05, alt: 'Certificado 5' },
    { id: 6, src: cert06, alt: 'Certificado 6' },
    { id: 7, src: cert07, alt: 'Certificado 7' },
    { id: 8, src: cert08, alt: 'Certificado 8' },
  ];

  // NOVAS LINHAS PARA OS CERTIFICADOS
  const certFirstRow = certificates.slice(0, 4);
  const certSecondRow = certificates.slice(4, 8);

  return (
    <section id="depoimentos" className="relative bg-black py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
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
      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20 px-4 sm:px-6"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-100 mb-4 sm:mb-6 leading-tight">
            Resultados{' '}
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
              Comprovados
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Veja o que nossos membros estão conquistando. Resultados reais de traders reais que estão evoluindo na HackTrading Community.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="space-y-6 sm:space-y-8">
          {/* First Row - Moving Right */}
          <div className="relative">
            {/* ... Fades ... */}
            <div className="absolute inset-y-0 left-0 w-20 sm:w-32 md:w-40 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-20 sm:w-32 md:w-40 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>

            <div className="flex overflow-hidden">
              {/* First Set */}
              <motion.div
                className="flex gap-4 sm:gap-6 shrink-0"
                animate={{ x: [0, -2400], }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 40,
                    ease: "linear",
                  },
                }}
              >
                {firstRow.map((image) => (
                  <motion.div
                    key={`first-1-${image.id}`}
                    className="relative group shrink-0"
                    whileHover={{ rotate: 2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="max-w-sm rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm group-hover:border-green-500/40 transition-all duration-300">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto object-contain transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-b from-green-500/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300 -z-10"></div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Second Set (Duplicate for seamless loop) */}
              <motion.div
                className="flex gap-4 sm:gap-6 shrink-0"
                animate={{ x: [0, -2400], }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 40,
                    ease: "linear",
                  },
                }}
              >
                {firstRow.map((image) => (
                  <motion.div
                    key={`first-2-${image.id}`}
                    className="relative group shrink-0"
                    whileHover={{ rotate: 2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="max-w-sm rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm group-hover:border-green-500/40 transition-all duration-300">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto object-contain transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-b from-green-500/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300 -z-10"></div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Second Row - Moving Left */}
          <div className="relative">
            {/* ... Fades ... */}
            <div className="absolute inset-y-0 left-0 w-20 sm:w-32 md:w-40 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-20 sm:w-32 md:w-40 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>

            <div className="flex overflow-hidden">
              {/* First Set */}
              <motion.div
                className="flex gap-4 sm:gap-6 shrink-0"
                animate={{ x: [-2400, 0], }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 40,
                    ease: "linear",
                  },
                }}
              >
                {secondRow.map((image) => (
                  <motion.div
                    key={`second-1-${image.id}`}
                    className="relative group shrink-0"
                    whileHover={{ rotate: -2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="max-w-sm rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm group-hover:border-green-500/40 transition-all duration-300">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto object-contain transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-b from-green-500/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300 -z-10"></div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Second Set (Duplicate for seamless loop) */}
              <motion.div
                className="flex gap-4 sm:gap-6 shrink-0"
                animate={{ x: [-2400, 0], }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 40,
                    ease: "linear",
                  },
                }}
              >
                {secondRow.map((image) => (
                  <motion.div
                    key={`second-2-${image.id}`}
                    className="relative group shrink-0"
                    whileHover={{ rotate: -2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="max-w-sm rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm group-hover:border-green-500/40 transition-all duration-300">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto object-contain transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-b from-green-500/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300 -z-10"></div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>


        {/* --- INÍCIO DA NOVA SEÇÃO DE CERTIFICADOS --- */}
        <div className="mt-16 sm:mt-20 md:mt-24"> {/* Espaçamento superior */}
          
          {/* Título dos Certificados */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20 px-4 sm:px-6"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-100 mb-4 sm:mb-6 leading-tight">
              Alunos{' '}
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
                Certificados
              </span>
            </h2>
          </motion.div>

          {/* Carrossel de Certificados */}
          <div className="space-y-6 sm:space-y-8">
            {/* Linha 1 de Certificados (4 imagens) */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 w-20 sm:w-32 md:w-40 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-20 sm:w-32 md:w-40 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
              
              <div className="flex overflow-hidden">
                <motion.div
                  className="flex gap-4 sm:gap-6 shrink-0"
                  animate={{ x: [0, -1650], }} // Ajustado para 4 imagens (aprox 400px * 4)
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 35, // Duração um pouco mais lenta
                      ease: "linear",
                    },
                  }}
                >
                  {certFirstRow.map((image) => (
                    <motion.div
                      key={`cert-first-1-${image.id}`}
                      className="relative group shrink-0"
                      whileHover={{ rotate: 2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="max-w-sm rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm group-hover:border-green-500/40 transition-all duration-300">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-auto object-contain transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="absolute -inset-1 bg-gradient-to-b from-green-500/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300 -z-10"></div>
                    </motion.div>
                  ))}
                </motion.div>
                
                <motion.div
                  className="flex gap-4 sm:gap-6 shrink-0"
                  animate={{ x: [0, -1650], }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 35,
                      ease: "linear",
                    },
                  }}
                >
                  {certFirstRow.map((image) => (
                    <motion.div
                      key={`cert-first-2-${image.id}`}
                      className="relative group shrink-0"
                      whileHover={{ rotate: 2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="max-w-sm rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm group-hover:border-green-500/40 transition-all duration-300">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-auto object-contain transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="absolute -inset-1 bg-gradient-to-b from-green-500/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300 -z-10"></div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Linha 2 de Certificados (4 imagens) */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 w-20 sm:w-32 md:w-40 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-20 sm:w-32 md:w-40 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>

              <div className="flex overflow-hidden">
                <motion.div
                  className="flex gap-4 sm:gap-6 shrink-0"
                  animate={{ x: [-1650, 0], }} // Ajustado para 4 imagens
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 35, // Duração um pouco mais lenta
                      ease: "linear",
                    },
                  }}
                >
                  {certSecondRow.map((image) => (
                    <motion.div
                      key={`cert-second-1-${image.id}`}
                      className="relative group shrink-0"
                      whileHover={{ rotate: -2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="max-w-sm rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm group-hover:border-green-500/40 transition-all duration-300">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-auto object-contain transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="absolute -inset-1 bg-gradient-to-b from-green-500/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300 -z-10"></div>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  className="flex gap-4 sm:gap-6 shrink-0"
                  animate={{ x: [-1650, 0], }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 35,
                      ease: "linear",
                    },
                  }}
                >
                  {certSecondRow.map((image) => (
                    <motion.div
                      key={`cert-second-2-${image.id}`}
                      className="relative group shrink-0"
                      whileHover={{ rotate: -2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="max-w-sm rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm group-hover:border-green-500/40 transition-all duration-300">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-auto object-contain transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="absolute -inset-1 bg-gradient-to-b from-green-500/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300 -z-10"></div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        {/* --- FIM DA NOVA SEÇÃO DE CERTIFICADOS --- */}


        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16 sm:mt-20 px-4"
        >
          <p className="text-base sm:text-lg text-zinc-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Faça parte dessa transformação.{' '}
            <span className="text-green-400 font-semibold">
              Seja o próximo a compartilhar seus resultados com a comunidade.
            </span>
          </p>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-green-500 to-emerald-500 text-black text-base sm:text-lg font-bold overflow-hidden"
          >
            {/* ... (Button content) ... */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '200%' }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
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
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 blur-xl"></div>
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}