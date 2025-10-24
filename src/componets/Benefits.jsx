import { motion } from 'framer-motion';
import { 
  IoBookOutline, 
  IoPeopleOutline, 
  IoTrendingUpOutline, 
  IoFlashOutline, 
  IoTimeOutline, 
  IoRocketOutline 
} from 'react-icons/io5';

export default function Benefits() {
  const benefits = [
    {
      icon: IoBookOutline,
      title: "Aprendizado Prático",
      description: "Conteúdo direto ao ponto com estratégias testadas e aplicáveis no mercado real, sem enrolação."
    },
    {
      icon: IoPeopleOutline,
      title: "Suporte Diário",
      description: "Acompanhamento próximo com mentores experientes e uma comunidade ativa disponível todos os dias."
    },
    {
      icon: IoTrendingUpOutline,
      title: "Estratégias Testadas",
      description: "Métodos comprovados e validados por traders profissionais com resultados consistentes no mercado."
    },
    {
      icon: IoFlashOutline,
      title: "Resultados Reais",
      description: "Foco total em performance e evolução consistente, com traders comprometidos em alcançar metas concretas."
    },
    {
      icon: IoTimeOutline,
      title: "No Seu Ritmo",
      description: "Desenvolva-se de acordo com seu próprio tempo, sem pressão, mas com todo o suporte necessário."
    },
    {
      icon: IoRocketOutline,
      title: "Comunidade Engajada",
      description: "Faça parte de um grupo de traders que compartilham experiências, aprendizados e crescem juntos."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section className="relative bg-black py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-green-500 rounded-full blur-[120px] sm:blur-[150px] md:blur-[180px]"
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px] sm:bg-[size:60px_60px] md:bg-[size:80px_80px]"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-100 mb-4 sm:mb-6 leading-tight px-2">
            Transforme{' '}
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
              Conhecimento em Ação
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed px-4 sm:px-0">
            A HackTrading Community oferece tudo que você precisa para evoluir de forma consistente e profissional no trading. 
            Junte-se à nova geração de traders comprometidos com resultados reais.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                {/* Card Background with Glow */}
                <div className="absolute -inset-[1px] bg-gradient-to-b from-green-500/20 via-green-500/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500"></div>
                
                {/* Card */}
                <div className="relative h-full p-5 sm:p-6 md:p-8 bg-gradient-to-b from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl border border-zinc-800 rounded-lg overflow-hidden transition-all duration-500 group-hover:border-green-500/40 group-hover:bg-gradient-to-b group-hover:from-zinc-900/80 group-hover:to-zinc-950/80">
                  
                  {/* Animated Top Border */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden">
                    <motion.div
                      className="h-full w-1/2 bg-gradient-to-r from-transparent via-green-400 to-transparent"
                      initial={{ x: '-100%' }}
                      whileInView={{ x: '200%' }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 2,
                        delay: index * 0.2,
                        repeat: Infinity,
                        repeatDelay: 3
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 space-y-3 sm:space-y-4 md:space-y-5">
                    {/* Icon */}
                    <div className="inline-flex p-3 sm:p-3.5 md:p-4 rounded-lg sm:rounded-xl bg-zinc-950/80 text-green-400 border border-green-500/20 group-hover:border-green-500/40 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.15)]">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-xl md:text-2xl font-bold text-zinc-100 group-hover:text-green-400 transition-colors duration-300">
                      {benefit.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Bottom Right Glow */}
                  <div className="absolute -bottom-20 -right-20 w-32 h-32 sm:w-40 sm:h-40 bg-green-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12 sm:mt-14 md:mt-16 lg:mt-20 px-4"
        >
          <p className="text-base sm:text-lg text-zinc-400 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Nossa missão é ajudar cada membro a se desenvolver no seu ritmo e conquistar resultados concretos. 
            <span className="text-green-400 font-semibold"> Faça parte da nova geração de traders.</span>
          </p>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative w-full sm:w-auto px-8 sm:px-10 md:px-12 py-4 sm:py-5 bg-gradient-to-r from-green-500 to-emerald-500 text-black text-base sm:text-lg font-bold overflow-hidden"
          >
            {/* Animated Shine Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '200%' }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />

            {/* Button Content */}
            <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
              <span className="text-sm sm:text-base md:text-lg">Entrar para a Comunidade</span>
              <motion.svg
                className="w-4 h-4 sm:w-5 sm:h-5"
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
    </section>
  );
}