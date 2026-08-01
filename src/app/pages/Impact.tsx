import React from 'react';
import { useLang } from '../context/LangContext';
import { motion } from 'motion/react';
import { GraduationCap, ArrowRight, Code2, ShieldCheck, Terminal, Cpu } from 'lucide-react';

export const Impact = () => {
  const { t } = useLang();

  return (
    <div className="flex flex-col w-full font-sans bg-[#030712] overflow-x-hidden min-h-screen relative text-slate-300">
      
      {/* 1. Global Base Architecture: Cyberpunk Grid Pattern */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      
      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-900/30 blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-900/20 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <section className="pt-12 md:pt-20 pb-24 relative z-10 w-full min-h-[90vh] flex flex-col items-center">
        
        {/* Master Grid Container: Bento Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          
          {/* =========================================
              WIDGET 1: HERO HEADER (col-span-12)
             ========================================= */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-12 flex flex-col items-center text-center mb-8"
          >
            {/* Top Console Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-md border border-emerald-500/50 bg-slate-900/80 mb-6 font-mono text-[12px] sm:text-[14px] text-emerald-400 tracking-widest shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>[ VERIFIED B2B CSR PROGRAM // 2026 ]</span>
            </div>

            {/* Massive Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-5xl [text-shadow:0_2px_20px_rgba(16,185,129,0.3)]">
              {t({
                ES: 'Responsabilidad Social Empresarial: Impulsando el Talento TI',
                EN: 'Corporate Social Responsibility: Empowering IT Talent',
                ET: 'Ettevõtte sotsiaalne vastutus: IT-talendi toetamine',
                DE: 'Soziale Verantwortung: Förderung von IT-Talenten'
              })}
            </h1>

            {/* Subtitle / Paragraph */}
            <p className="text-lg sm:text-xl text-slate-400 max-w-4xl leading-relaxed">
              {t({
                ES: 'Nos comprometemos de forma transparente a destinar el 1% de nuestros ingresos anuales B2B para becar y apoyar financieramente a la próxima generación de ingenieros y científicos de datos en carreras de TI e IA.',
                EN: 'We transparently commit to allocating 1% of our annual B2B revenue to scholarship and financially support the next generation of engineers and data scientists in IT and AI fields.',
                ET: 'Kohustume läbipaistvalt suunama 1% oma B2B aastatulust järgmise põlvkonna inseneride ja andmeteadlaste stipendiumideks ning rahaliseks toetamiseks IT- ja tehisintellekti valdkondades.',
                DE: 'Wir verpflichten uns transparent, 1 % unseres jährlichen B2B-Umsatzes als Stipendium und finanzielle Unterstützung für die nächste Generation von Ingenieuren und Datenwissenschaftlern in den Bereichen IT und KI bereitzustellen.'
              })}
            </p>
          </motion.div>

          {/* =========================================
              WIDGET 2: LA MÉTRICA CLAVE 1% (col-span-5)
             ========================================= */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-12 lg:col-span-5 border border-emerald-500/30 bg-slate-900/60 backdrop-blur-xl rounded-3xl p-8 lg:p-10 shadow-[0_0_30px_rgba(16,185,129,0.12)] hover:border-emerald-400/50 transition-all duration-300 flex flex-col justify-center items-center text-center relative overflow-hidden group"
          >
            {/* Background Accent */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] group-hover:bg-emerald-500/20 transition-all duration-500"></div>
            
            <ShieldCheck className="w-12 h-12 text-emerald-400 mb-6 opacity-80" />
            
            <h2 className="text-7xl sm:text-8xl md:text-9xl font-black bg-gradient-to-br from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(16,185,129,0.4)] mb-4 tracking-tighter">
              1%
            </h2>
            
            <div className="w-12 h-1 bg-emerald-500/50 rounded-full mb-6"></div>
            
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              {t({ ES: 'De Ingresos Anuales', EN: 'Of Annual Revenue', ET: 'Aastasest tulust', DE: 'Vom Jahresumsatz' })}
            </h3>
            <p className="text-sm font-medium text-emerald-400 uppercase tracking-widest">
              {t({ ES: 'Fondo Comprometido', EN: 'Pledged Fund', ET: 'Lubatud Fond', DE: 'Zugesagter Fonds' })}
            </p>
          </motion.div>

          {/* =========================================
              WIDGET 3: TALENTO DE TI (col-span-7)
             ========================================= */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-12 lg:col-span-7 border border-cyan-500/30 bg-slate-900/60 backdrop-blur-xl rounded-3xl p-8 lg:p-10 shadow-[0_0_30px_rgba(6,182,212,0.1)] hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-center relative overflow-hidden group"
          >
            {/* Background Accent */}
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-[80px] group-hover:bg-cyan-500/20 transition-all duration-500"></div>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <GraduationCap className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {t({ ES: 'Impacto Educativo en TI', EN: 'IT Educational Impact', ET: 'IT Hariduslik Mõju', DE: 'IT-Bildungsauswirkungen' })}
              </h3>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: <GraduationCap className="w-5 h-5 text-cyan-400" />,
                  title: { ES: 'Financiación de Matrículas', EN: 'Tuition Funding', ET: 'Õppemaksu rahastamine', DE: 'Finanzierung der Studiengebühren' },
                  desc: { ES: 'Becas completas y parciales para estudiantes de ingeniería y ciencias de la computación.', EN: 'Full and partial scholarships for engineering and computer science students.', ET: 'Täielikud ja osalised stipendiumid inseneri- ja arvutiteaduste üliõpilastele.', DE: 'Voll- und Teilstipendien für Ingenieur- und Informatikstudenten.' }
                },
                {
                  icon: <Code2 className="w-5 h-5 text-cyan-400" />,
                  title: { ES: 'Herramientas de Desarrollo', EN: 'Development Tools', ET: 'Arendustööriistad', DE: 'Entwicklungswerkzeuge' },
                  desc: { ES: 'Licenciamiento de software pro y acceso a recursos en la nube (AWS/Azure) para aprendizaje práctico.', EN: 'Pro software licensing and access to cloud resources (AWS/Azure) for hands-on learning.', ET: 'Pro tarkvara litsentsimine ja juurdepääs pilveressurssidele (AWS/Azure) praktiliseks õppeks.', DE: 'Pro-Softwarelizenzierung und Zugriff auf Cloud-Ressourcen (AWS/Azure) für praktisches Lernen.' }
                },
                {
                  icon: <Cpu className="w-5 h-5 text-cyan-400" />,
                  title: { ES: 'Laboratorios de Innovación', EN: 'Innovation Labs', ET: 'Innovatsioonilaborid', DE: 'Innovationslabore' },
                  desc: { ES: 'Patrocinio y equipamiento de laboratorios de IA y análisis de datos en universidades.', EN: 'Sponsorship and equipment of AI and data analysis labs in universities.', ET: 'Tehisintellekti ja andmeanalüüsi laborite sponsoreerimine ja varustamine ülikoolides.', DE: 'Sponsoring und Ausstattung von KI- und Datenanalyselabors an Universitäten.' }
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-800/40 border border-transparent hover:border-slate-700 transition-colors">
                  <div className="mt-1 flex-shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{t(item.title)}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{t(item.desc)}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* =========================================
              WIDGET 4: DIAGRAMA DE FLUJO B2B (col-span-12)
             ========================================= */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="md:col-span-12 border border-slate-700/50 bg-[#0a0f1c] rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden"
          >
            {/* Terminal Top Bar */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-slate-900 border-b border-slate-800 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <span className="ml-4 text-[10px] font-mono text-slate-500">csr_pipeline_v2.sh</span>
            </div>

            <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
              
              {/* Step 1 */}
              <div className="flex-1 w-full bg-slate-900/80 border border-slate-700 p-6 rounded-2xl flex flex-col items-center text-center group hover:border-emerald-500/50 transition-colors">
                <Terminal className="w-8 h-8 text-slate-400 group-hover:text-emerald-400 mb-4 transition-colors" />
                <h4 className="text-lg font-mono font-semibold text-white mb-2">
                  {t({ ES: '[ Contrato B2B ]', EN: '[ B2B Contract ]', ET: '[ B2B Leping ]', DE: '[ B2B-Vertrag ]' })}
                </h4>
                <p className="text-xs text-slate-400 font-mono">
                  {t({ ES: 'Cliente corporativo', EN: 'Corporate client', ET: 'Äriklient', DE: 'Firmenkunde' })}
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex text-cyan-400 animate-pulse">
                <ArrowRight className="w-8 h-8" />
              </div>
              <div className="flex md:hidden text-cyan-400 animate-pulse rotate-90">
                <ArrowRight className="w-8 h-8" />
              </div>

              {/* Step 2 */}
              <div className="flex-1 w-full bg-slate-900/80 border border-emerald-500/30 p-6 rounded-2xl flex flex-col items-center text-center shadow-[0_0_20px_rgba(16,185,129,0.1)] group">
                <div className="w-10 h-10 rounded-full border border-emerald-500/50 bg-emerald-500/10 flex items-center justify-center mb-4">
                  <span className="text-emerald-400 font-black">1%</span>
                </div>
                <h4 className="text-lg font-mono font-semibold text-white mb-2">
                  {t({ ES: '[ Aportación Directa ]', EN: '[ Direct Contribution ]', ET: '[ Otsene Panus ]', DE: '[ Direkter Beitrag ]' })}
                </h4>
                <p className="text-xs text-emerald-400/80 font-mono">
                  {t({ ES: 'Fondo reservado', EN: 'Reserved fund', ET: 'Reserveeritud fond', DE: 'Reservierter Fonds' })}
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex text-cyan-400 animate-pulse">
                <ArrowRight className="w-8 h-8" />
              </div>
              <div className="flex md:hidden text-cyan-400 animate-pulse rotate-90">
                <ArrowRight className="w-8 h-8" />
              </div>

              {/* Step 3 */}
              <div className="flex-1 w-full bg-slate-900/80 border border-cyan-500/30 p-6 rounded-2xl flex flex-col items-center text-center shadow-[0_0_20px_rgba(6,182,212,0.1)] group hover:border-cyan-400 transition-colors">
                <GraduationCap className="w-8 h-8 text-cyan-400 mb-4" />
                <h4 className="text-lg font-mono font-semibold text-white mb-2">
                  {t({ ES: '[ Becas TI ]', EN: '[ IT Scholarships ]', ET: '[ IT Stipendiumid ]', DE: '[ IT-Stipendien ]' })}
                </h4>
                <p className="text-xs text-cyan-400/80 font-mono">
                  {t({ ES: 'Impacto real', EN: 'Real impact', ET: 'Tõeline mõju', DE: 'Echte Auswirkungen' })}
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};
