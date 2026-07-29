import React from 'react';
import { useLang } from '../context/LangContext';
import { motion } from 'motion/react';
import { Award, GraduationCap, Users } from 'lucide-react';

export const Impact = () => {
  const { t } = useLang();

  return (
    <div className="flex flex-col w-full font-sans bg-[#0B1121] overflow-x-hidden min-h-screen">
      <section className="pt-32 pb-24 relative flex items-center justify-center min-h-[90vh]">
        
        {/* Dynamic Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&fit=crop" 
            alt="Data Network Background" 
            className="w-full h-full object-cover opacity-20 blur-[6px] mix-blend-overlay"
          />
        </div>
        
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/20 blur-[120px] rounded-full pointer-events-none z-0"></div>

        <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 flex flex-col items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-5xl bg-slate-900/40 backdrop-blur-xl border border-emerald-500/30 rounded-[32px] p-8 md:p-12 shadow-[0_0_40px_rgba(16,185,129,0.15)] flex flex-col items-center text-center relative overflow-hidden"
          >
            {/* Top Radar Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/50 bg-emerald-500/10 mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-[14px] font-semibold text-emerald-400 tracking-wider">
                {t({ ES: 'COMPROMISO SOCIAL B2B', EN: 'B2B SOCIAL COMMITMENT', ET: 'B2B SOTSIAALNE PÜHENDUMUS', DE: 'B2B SOZIALES ENGAGEMENT' })}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl [text-shadow:0_2px_20px_rgba(16,185,129,0.3)]">
              {t({
                ES: 'Responsabilidad Social Empresarial: Impulsando el Talento TI',
                EN: 'Corporate Social Responsibility: Empowering IT Talent',
                ET: 'Ettevõtte sotsiaalne vastutus: IT-talendi toetamine',
                DE: 'Soziale Verantwortung: Förderung von IT-Talenten'
              })}
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-slate-300 mb-12 max-w-3xl leading-relaxed">
              {t({
                ES: 'Nos comprometemos de forma transparente a destinar un porcentaje de nuestros ingresos anuales para becar y apoyar financieramente a estudiantes universitarios de carreras de TI, Ciencias de la Computación e Inteligencia Artificial.',
                EN: 'We transparently commit to allocating a percentage of our annual revenue to scholarship and financially support university students in IT, Computer Science, and Artificial Intelligence fields.',
                ET: 'Kohustume läbipaistvalt suunama osa oma aastatulust IT, arvutiteaduse ja tehisintellekti eriala üliõpilaste stipendiaatideks ja rahaliseks toetamiseks.',
                DE: 'Wir verpflichten uns transparent, einen Prozentsatz unseres Jahresumsatzes als Stipendium und finanzielle Unterstützung für Universitätsstudenten in den Bereichen IT, Informatik und Künstliche Intelligenz bereitzustellen.'
              })}
            </p>

            {/* Interactive Grid Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
              <motion.div 
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 flex flex-col items-center gap-4 hover:border-emerald-500/50 hover:shadow-[0_10px_30px_rgba(16,185,129,0.2)] transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                  <Award className="w-8 h-8 text-emerald-400" />
                </div>
                <div className="flex flex-col items-center">
                  <h3 className="text-3xl font-bold text-white mb-2">%</h3>
                  <span className="text-[15px] font-medium text-emerald-400">
                    {t({ ES: '1% Comprometido', EN: '1% Pledged', ET: '1% Lubatud', DE: '1% Zugesagt' })}
                  </span>
                  <p className="text-[14px] text-slate-400 mt-2 text-center">
                    {t({ ES: 'De ingresos anuales', EN: 'Of annual revenue', ET: 'Aastasest tulust', DE: 'Vom Jahresumsatz' })}
                  </p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 flex flex-col items-center gap-4 hover:border-emerald-500/50 hover:shadow-[0_10px_30px_rgba(16,185,129,0.2)] transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                  <GraduationCap className="w-8 h-8 text-emerald-400" />
                </div>
                <div className="flex flex-col items-center">
                  <h3 className="text-3xl font-bold text-white mb-2">TI</h3>
                  <span className="text-[15px] font-medium text-emerald-400">
                    {t({ ES: 'Apoyo Académico', EN: 'Academic Support', ET: 'Akadeemiline Tugi', DE: 'Akademische Unterstützung' })}
                  </span>
                  <p className="text-[14px] text-slate-400 mt-2 text-center">
                    {t({ ES: 'Becas universitarias', EN: 'University scholarships', ET: 'Ülikooli stipendiumid', DE: 'Universitätsstipendien' })}
                  </p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 flex flex-col items-center gap-4 hover:border-emerald-500/50 hover:shadow-[0_10px_30px_rgba(16,185,129,0.2)] transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                  <Users className="w-8 h-8 text-emerald-400" />
                </div>
                <div className="flex flex-col items-center">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {t({ ES: 'Futuro', EN: 'Future', ET: 'Tulevik', DE: 'Zukunft' })}
                  </h3>
                  <span className="text-[15px] font-medium text-emerald-400">
                    {t({ ES: 'Talento Emergente', EN: 'Emerging Talent', ET: 'Tekkiv Talent', DE: 'Aufstrebendes Talent' })}
                  </span>
                  <p className="text-[14px] text-slate-400 mt-2 text-center">
                    {t({ ES: 'Futuros ingenieros', EN: 'Future engineers', ET: 'Tulevased insenerid', DE: 'Zukünftige Ingenieure' })}
                  </p>
                </div>
              </motion.div>
            </div>

          </motion.div>
        </div>
      </section>
    </div>
  );
};
