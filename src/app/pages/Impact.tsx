import React from 'react';
import { useLang } from '../context/LangContext';
import { motion } from 'motion/react';
import { GraduationCap, Terminal, Cpu, Users, Globe, Coins } from 'lucide-react';
import { Link } from 'react-router';

export const Impact = () => {
  const { t } = useLang();

  return (
    <div className="flex flex-col w-full font-sans bg-[#030712] overflow-x-hidden min-h-screen relative text-slate-200">
      
      {/* Fondo Minimalista y Continuo con el Footer */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center items-center overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent opacity-60"></div>
      </div>

      <section className="pt-20 md:pt-32 pb-32 relative z-10 w-full flex flex-col items-center">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 flex flex-col items-center">
          
          {/* HEADER PRINCIPAL */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center mb-24 max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight break-words text-balance">
              {t({
                ES: 'Responsabilidad Social Empresarial',
                EN: 'Corporate Social Responsibility',
                ET: 'Ettevõtte Sotsiaalne Vastutus',
                DE: 'Soziale Unternehmensverantwortung'
              })}
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-3xl">
              {t({
                ES: 'Nos comprometemos de forma transparente a destinar el 1% de nuestros ingresos anuales B2B para becar y apoyar financieramente a la próxima generación de ingenieros en TI e IA.',
                EN: 'We transparently commit to allocating 1% of our annual B2B revenue to scholarship and financially support the next generation of engineers in IT and AI.',
                ET: 'Kohustume läbipaistvalt suunama 1% oma B2B aastatulust järgmise põlvkonna IT- ja tehisintellektiinseneride stipendiumideks ja rahaliseks toetamiseks.',
                DE: 'Wir verpflichten uns transparent, 1 % unseres jährlichen B2B-Umsatzes als Stipendium und finanzielle Unterstützung für die nächste Generation von IT- und KI-Ingenieuren bereitzustellen.'
              })}
            </p>

            {/* CTAs Limpios */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link to="/contact" className="w-full sm:w-auto flex items-center justify-center">
                <button className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold rounded-xl px-8 py-3.5 transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                  {t({ ES: 'Únete como Partner B2B', EN: 'Join as B2B Partner', ET: 'Liituge B2B Partnerina', DE: 'Werden Sie B2B-Partner' })}
                </button>
              </Link>
              <Link to="/services" className="w-full sm:w-auto flex items-center justify-center">
                <button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-xl px-8 py-3.5 transition-all">
                  {t({ ES: 'Explorar Servicios', EN: 'Explore Services', ET: 'Uurige teenuseid', DE: 'Dienstleistungen erkunden' })}
                </button>
              </Link>
            </div>
          </motion.div>

          {/* DIAGRAMA DE VENN DE RSE (SVG + HTML) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full mb-24 relative flex flex-col items-center justify-center"
          >
            {/* Contenedor del Diagrama (aspect ratio fijo = escala fluida en móvil) */}
            <div className="relative w-full max-w-sm sm:max-w-xl md:max-w-2xl aspect-[700/640] flex items-center justify-center">

              {/* Círculos traslapados (SVG geométrico) */}
              <svg
                viewBox="0 0 700 640"
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ zIndex: 0 }}
              >
                {/* Bienestar Social (Superior) */}
                <circle cx="350" cy="215" r="185" fill="rgba(245,158,11,0.10)" stroke="rgba(245,158,11,0.30)" strokeWidth="1.5" style={{ filter: 'drop-shadow(0 0 30px rgba(245,158,11,0.15))' }} />
                {/* Medio Ambiente (Inferior Izquierdo) */}
                <circle cx="185" cy="455" r="185" fill="rgba(16,185,129,0.10)" stroke="rgba(16,185,129,0.30)" strokeWidth="1.5" style={{ filter: 'drop-shadow(0 0 30px rgba(16,185,129,0.15))' }} />
                {/* Ganancia Justa (Inferior Derecho) */}
                <circle cx="515" cy="455" r="185" fill="rgba(14,165,233,0.10)" stroke="rgba(14,165,233,0.30)" strokeWidth="1.5" style={{ filter: 'drop-shadow(0 0 30px rgba(14,165,233,0.15))' }} />
              </svg>

              {/* Nodo: Bienestar Social */}
              <div className="absolute left-1/2 top-[33.6%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400 mb-1" />
                <span className="text-xs sm:text-base font-semibold text-white whitespace-nowrap">
                  {t({ ES: 'Bienestar Social', EN: 'Social Wellbeing', ET: 'Sotsiaalne Heaolu', DE: 'Soziales Wohlbefinden' })}
                </span>
              </div>

              {/* Nodo: Medio Ambiente */}
              <div className="absolute left-[26.4%] top-[71.1%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400 mb-1" />
                <span className="text-xs sm:text-base font-semibold text-white whitespace-nowrap">
                  {t({ ES: 'Medio Ambiente', EN: 'Environment', ET: 'Keskkond', DE: 'Umwelt' })}
                </span>
              </div>

              {/* Nodo: Ganancia Justa */}
              <div className="absolute left-[73.6%] top-[71.1%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                <Coins className="w-6 h-6 sm:w-8 sm:h-8 text-sky-400 mb-1" />
                <span className="text-xs sm:text-base font-semibold text-white whitespace-nowrap">
                  {t({ ES: 'Ganancia Justa', EN: 'Fair Profit', ET: 'Õiglane Kasum', DE: 'Fairer Gewinn' })}
                </span>
              </div>

              {/* Núcleo Central: RSE (insignia flotante con glow pulsante) */}
              <div className="absolute left-1/2 top-[58.6%] -translate-x-1/2 -translate-y-1/2 z-20">
                <motion.div
                  animate={{
                    scale: [1, 1.07, 1],
                    boxShadow: [
                      '0 0 24px rgba(255,255,255,0.06)',
                      '0 0 48px rgba(255,255,255,0.22)',
                      '0 0 24px rgba(255,255,255,0.06)'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-20 h-20 md:w-28 md:h-28 bg-slate-950/90 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center"
                >
                  <span className="text-lg md:text-2xl font-extrabold text-white tracking-wider">RSE</span>
                </motion.div>
              </div>

            </div>
          </motion.div>

          {/* BENTO GRID: TARJETAS MINIMALISTAS DE IMPACTO */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            
            <motion.div 
              whileHover={{ y: -2 }}
              className="bg-slate-900/30 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-emerald-500/30 transition-all duration-300 flex flex-col group shadow-lg"
            >
              <div className="mb-6">
                <GraduationCap className="w-8 h-8 text-slate-300 group-hover:text-emerald-400 transition-colors" />
              </div>
              <h3 className="font-bold text-white text-xl mb-3">
                {t({ ES: 'Financiación de Matrículas', EN: 'Tuition Funding', ET: 'Õppemaksu rahastamine', DE: 'Finanzierung der Studiengebühren' })}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {t({ ES: 'Becas completas para estudiantes destacados de ingeniería, eliminando barreras económicas.', EN: 'Full scholarships for outstanding engineering students, removing economic barriers.', ET: 'Täielikud stipendiumid silmapaistvatele inseneriüliõpilastele, kõrvaldades majanduslikud tõkked.', DE: 'Vollstipendien für herausragende Ingenieurstudenten, um wirtschaftliche Barrieren zu beseitigen.' })}
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -2 }}
              className="bg-slate-900/30 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-emerald-500/30 transition-all duration-300 flex flex-col group shadow-lg"
            >
              <div className="mb-6">
                <Terminal className="w-8 h-8 text-slate-300 group-hover:text-emerald-400 transition-colors" />
              </div>
              <h3 className="font-bold text-white text-xl mb-3">
                {t({ ES: 'Herramientas de Desarrollo', EN: 'Development Tools', ET: 'Arendustööriistad', DE: 'Entwicklungswerkzeuge' })}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {t({ ES: 'Licenciamiento de software profesional y créditos en la nube para un aprendizaje con herramientas reales.', EN: 'Professional software licensing and cloud credits for learning with real tools.', ET: 'Professionaalne tarkvara litsentsimine ja pilvekrediidid tõeliste tööriistadega õppimiseks.', DE: 'Professionelle Softwarelizenzierung und Cloud-Credits für das Lernen mit echten Werkzeugen.' })}
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -2 }}
              className="bg-slate-900/30 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-emerald-500/30 transition-all duration-300 flex flex-col group shadow-lg"
            >
              <div className="mb-6">
                <Cpu className="w-8 h-8 text-slate-300 group-hover:text-emerald-400 transition-colors" />
              </div>
              <h3 className="font-bold text-white text-xl mb-3">
                {t({ ES: 'Laboratorios de Innovación', EN: 'Innovation Labs', ET: 'Innovatsioonilaborid', DE: 'Innovationslabore' })}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {t({ ES: 'Sponsorship y equipamiento hardware para laboratorios de análisis de datos en universidades tecnológicas.', EN: 'Sponsorship and hardware equipment for data analysis labs in technological universities.', ET: 'Sponsorlus ja riistvaravarustus andmeanalüüsi laboritele tehnikaülikoolides.', DE: 'Sponsoring und Hardwareausstattung für Datenanalyselabors an technischen Universitäten.' })}
              </p>
            </motion.div>

          </div>

        </div>
      </section>
    </div>
  );
};
