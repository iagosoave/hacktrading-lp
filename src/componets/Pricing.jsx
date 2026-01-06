import React from 'react';
import { motion } from 'framer-motion';

export default function Pricing() {
  const plans = [
    {
      id: 'monthly',
      name: 'PLANO MENSAL',
      tagline: 'Flexibilidade total',
      price: 'R$149,90',
      period: '/ mês',
      fullPrice: null,
      features: [
        'Acesso completo à comunidade',
        'Conteúdos e análises exclusivas',
        'Cancele quando quiser'
      ],
      savings: null,
      buttonText: 'Assinar mensal',
      highlight: false,
      link: 'https://pay.hub.la/SMD9kAK8LlsYfIL677ap'
    },
    {
      id: 'quarterly',
      name: 'PLANO TRIMESTRAL',
      badge: 'MAIS ESCOLHIDO',
      tagline: 'O melhor custo-benefício',
      price: '3x de R$99,00',
      period: null,
      fullPrice: 'R$297 à vista',
      features: [
        'Tudo do plano mensal',
        'Compromisso ideal para gerar resultado',
        'Economia real desde o primeiro mês'
      ],
      savings: 'Economize R$152,70 em 3 meses',
      buttonText: 'Assinar trimestral',
      highlight: true,
      link: 'https://pay.hub.la/uRFzZM4rTFEWrZ04V4Td'
    },
    {
      id: 'semester',
      name: 'PLANO SEMESTRAL',
      tagline: 'Menor valor por mês',
      price: '6x de R$89,00',
      period: null,
      fullPrice: 'R$534 à vista',
      features: [
        'Tudo dos planos anteriores',
        'Mais tempo, mais consistência',
        'Ideal para quem quer evolução contínua'
      ],
      savings: 'Economize R$365,40 em 6 meses',
      buttonText: 'Assinar semestral',
      highlight: false,
      link: 'https://pay.hub.la/i4nRhq6vB7QWkwJReftm'
    }
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
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-100 leading-tight mb-4">
            Essa é a{' '}
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
              sua oportunidade
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-zinc-300 mb-2">
            de entrar no trading e ter acesso a:
          </p>
        </motion.div>

        {/* Features List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-start gap-3"
            >
              <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-base text-zinc-300">Aulas gravadas com estratégias testadas e validadas</span>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-start gap-3"
            >
              <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-base text-zinc-300">Comunidade exclusiva no Discord com traders ativos</span>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-start gap-3"
            >
              <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-base text-zinc-300">Lives operacionais e de análises de mercado</span>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-start gap-3"
            >
              <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-base text-zinc-300">Materiais didáticos: Plano de Trading, Ordem e Fluxo e Mapas</span>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-start gap-3"
            >
              <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-base text-zinc-300">Plataforma de treinamento completa e atualizada</span>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-start gap-3"
            >
              <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-base text-zinc-300">Suporte diário e acompanhamento próximo de mentores</span>
            </motion.li>
          </ul>
        </motion.div>

        {/* Pricing Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xl sm:text-2xl text-zinc-300 text-center mb-10"
        >
          Escolha o plano ideal para você
        </motion.p>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative ${plan.highlight ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {/* Highlight Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full shadow-lg shadow-yellow-500/30">
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Card */}
              <div className={`relative h-full bg-gradient-to-b from-zinc-900/80 to-zinc-950/80 backdrop-blur-sm border-2 rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.highlight 
                  ? 'border-green-500/60 shadow-[0_0_40px_rgba(34,197,94,0.3)]' 
                  : 'border-zinc-800/50 hover:border-zinc-700/70'
              }`}>
                
                {/* Glow Effect for highlighted card */}
                {plan.highlight && (
                  <div className="absolute -inset-1 bg-gradient-to-b from-green-500/20 to-transparent rounded-2xl blur-xl opacity-60"></div>
                )}

                <div className="relative p-6 sm:p-8 space-y-6 h-full flex flex-col">
                  
                  {/* Plan Header */}
                  <div className="text-center space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-100">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-zinc-400">{plan.tagline}</p>
                  </div>

                  {/* Price */}
                  <div className="text-center py-4">
                    <div className={`font-bold ${plan.highlight ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'}`}>
                      <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-zinc-400 text-lg font-normal">{plan.period}</span>
                      )}
                    </div>
                    {plan.fullPrice && (
                      <p className="text-sm text-zinc-500 mt-1">({plan.fullPrice})</p>
                    )}
                  </div>

                  {/* Divider */}
                  <div className="relative h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent">
                    {plan.highlight && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base text-zinc-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Spacer to push content to bottom */}
                  <div className="flex-grow"></div>

                  {/* Savings Badge */}
                  {plan.savings && (
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg py-3 px-4 text-center">
                      <span className="text-green-400 text-sm font-semibold">
                        {plan.savings}
                      </span>
                    </div>
                  )}

                  {/* CTA Button */}
                  <a 
                    href={plan.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`group relative w-full px-6 py-4 text-base font-bold overflow-hidden transition-all duration-300 rounded-xl ${
                        plan.highlight
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-black shadow-[0_0_30px_rgba(34,197,94,0.4)]'
                          : 'bg-zinc-800 text-zinc-100 border border-zinc-700 hover:border-green-500/50 hover:bg-zinc-800/80'
                      }`}
                    >
                      {/* Animated Shine Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '200%' }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      />

                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <span>{plan.buttonText}</span>
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
                    </motion.button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-6 sm:gap-10"
        >
          <div className="flex items-center gap-2 text-zinc-400">
            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm">Acesso imediato</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-400">
            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-sm">Pagamento seguro</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-400">
            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="text-sm">Comunidade exclusiva</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}