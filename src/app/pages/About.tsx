import React, { useState } from 'react';
import { useLang } from '../context/LangContext';
import { motion, AnimatePresence } from 'motion/react';
import { Target, Zap, Shield } from 'lucide-react';

const TeamCardImage: React.FC<{ src: string; alt: string; initials: string }> = ({ src, alt, initials }) => {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[#4A90D9]">
        <div className="text-[64px] font-bold text-[#FFFFFF] tracking-wider">
          {initials}
        </div>
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
      onError={() => setFailed(true)}
    />
  );
};

export const About = () => {
  const { t } = useLang();
  
  interface TeamMember {
    name: string;
    role: string;
    imageUrl: string;
    initials: string;
  }
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const team: TeamMember[] = [
    {
      name: 'Carlos Chacón',
      role: t({ ES: 'CEO', EN: 'CEO', ET: 'Tegevjuht (CEO)', DE: 'CEO' }),
      imageUrl: '/images/team/carlos-chacon.jpeg',
      initials: 'CC'
    },
    {
      name: 'Juan José Ramírez Chaves',
      role: t({ ES: 'Co-fundador', EN: 'Co-founder', ET: 'Kaasasutaja', DE: 'Mitbegründer' }),
      imageUrl: '/images/team/juan-ramirez.jpeg',
      initials: 'JR'
    }
  ];

  return (
    <div className="flex flex-col w-full font-sans bg-[#0B1121]">
      {/* 2.6. Sobre Nosotros */}
      <section className="pt-32 pb-24 min-h-screen bg-gradient-to-b from-[#0F172A] to-[#1E293B] relative overflow-hidden">
        
        {/* Dynamic Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&fit=crop" 
            alt="Data Network Background" 
            className="w-full h-full object-cover opacity-10 blur-[6px] mix-blend-overlay"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[120px] relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#FFFFFF] mb-6 [text-shadow:0_2px_15px_rgba(0,0,0,0.4)]"
            >
              {t({ ES: 'Sobre Nosotros', EN: 'About Us', ET: 'Meist', DE: 'Über uns' })}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[16px] md:text-[18px] text-[#CBD5E1] font-normal leading-[1.6]"
            >
              {t({
                ES: 'Somos un equipo diverso unido por la pasión de crear los datos más precisos para el futuro de la IA. Nuestro compromiso es cerrar la brecha cultural y de idioma en los modelos tecnológicos globales.',
                EN: 'We are a diverse team united by the passion to create the most accurate data for the future of AI. Our commitment is to close the cultural and language gap in global technological models.',
                ET: 'Oleme mitmekesine meeskond, keda ühendab kirg luua tehisintellekti tuleviku jaoks kõige täpsemaid andmeid.',
                DE: 'Wir sind ein diverses Team, vereint durch die Leidenschaft, die genauesten Daten für die Zukunft der KI zu erstellen.'
              })}
            </motion.p>
          </div>

          {/* Mission, Vision, Values Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
            
            {/* Mission */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#1E293B]/80 backdrop-blur-[10px] p-8 rounded-[16px] border border-[#334155]/50 shadow-xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-[#0F172A] flex items-center justify-center mb-6 border border-[#4A90D9]">
                <Target className="text-[#4A90D9] w-7 h-7" />
              </div>
              <h3 className="text-[24px] font-semibold text-[#FFFFFF] mb-4">{t({ ES: 'Misión', EN: 'Mission', ET: 'Missioon', DE: 'Mission' })}</h3>
              <p className="text-[16px] text-[#CBD5E1] leading-[1.6]">
                {t({
                  ES: 'Acelerar el desarrollo global de la IA mediante la entrega de anotaciones de datos bilingües de alto rendimiento y absoluta claridad. Combinamos flujos de trabajo operativos optimizados con una aguda precisión lingüística para eliminar el ruido cultural y las ambigüedades del idioma, transformando conjuntos de datos multilingües brutos en datos de entrenamiento estructurados y listos para producción con la máxima velocidad y claridad.',
                  EN: 'To accelerate global AI development by delivering high-throughput, crystal-clear bilingual data annotation. We combine optimized operational workflows with sharp linguistic precision to eliminate cultural noise and language ambiguities, transforming raw multi-language datasets into structured, production-ready training data with maximum speed and clarity.',
                  ET: 'Kiirendada ülemaailmset tehisintellekti arengut, pakkudes suure läbilaskevõimega ja kristallselget kakskeelset andmete annoteerimist.',
                  DE: 'Die globale KI-Entwicklung zu beschleunigen, indem wir hochdurchsatzfähige, kristallklare bilinguale Datenannotation liefern.'
                })}
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-[#1E293B]/80 backdrop-blur-[10px] p-8 rounded-[16px] border border-[#334155]/50 shadow-xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-[#0F172A] flex items-center justify-center mb-6 border border-[#4A90D9]">
                <Zap className="text-[#4A90D9] w-7 h-7" />
              </div>
              <h3 className="text-[24px] font-semibold text-[#FFFFFF] mb-4">{t({ ES: 'Visión', EN: 'Vision', ET: 'Visioon', DE: 'Vision' })}</h3>
              <p className="text-[16px] text-[#CBD5E1] leading-[1.6]">
                {t({
                  ES: 'Ser la startup de motor de datos más eficiente del mundo para la IA multilingüe, reconocida por establecer el estándar de oro en eficiencia operativa y absoluta claridad lingüística, permitiendo que los modelos de aprendizaje automático se comuniquen y entiendan los lenguajes humanos sin fallas.',
                  EN: 'To be the world’s most streamlined data-engine startup for multilingual AI, recognized for setting the gold standard in operational efficiency and linguistic absolute clarity, enabling machine learning models to communicate and understand human languages flawlessly.',
                  ET: 'Olla maailma kõige tõhusam andmemootori idufirma mitmekeelse tehisintellekti jaoks.',
                  DE: 'Das effizienteste Daten-Engine-Startup der Welt für mehrsprachige KI zu sein.'
                })}
              </p>
            </motion.div>

            {/* Values */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#1E293B]/80 backdrop-blur-[10px] p-8 rounded-[16px] border border-[#334155]/50 shadow-xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-[#0F172A] flex items-center justify-center mb-6 border border-[#4A90D9]">
                <Shield className="text-[#4A90D9] w-7 h-7" />
              </div>
              <h3 className="text-[24px] font-semibold text-[#FFFFFF] mb-6">{t({ ES: 'Valores', EN: 'Values', ET: 'Väärtused', DE: 'Werte' })}</h3>
              <ul className="space-y-4">
                {[
                  { icon: <Target className="text-[#2ECC71] w-5 h-5" />, text: t({ ES: 'Precisión lingüística', EN: 'Linguistic Precision', ET: 'Keeleline täpsus', DE: 'Sprachliche Präzision' }) },
                  { icon: <Zap className="text-[#2ECC71] w-5 h-5" />, text: t({ ES: 'Velocidad operativa', EN: 'Operational Velocity', ET: 'Töökiirus', DE: 'Operative Geschwindigkeit' }) },
                  { icon: <Shield className="text-[#2ECC71] w-5 h-5" />, text: t({ ES: 'Absoluta integridad de datos', EN: 'Absolute Data Integrity', ET: 'Täielik andmeterviklikkus', DE: 'Absolute Datenintegrität' }) },
                ].map((val, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    {val.icon}
                    <span className="text-[16px] text-[#CBD5E1] font-medium">{val.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>

          {/* Leadership Team */}
          <div className="mt-12 text-center">
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[28px] font-semibold text-[#FFFFFF] mb-12"
            >
              {t({ ES: 'Nuestro Equipo Directivo', EN: 'Our Leadership Team', ET: 'Meie juhtkond', DE: 'Unser Führungsteam' })}
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {team.map((member, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  onClick={() => setSelectedMember(member)}
                  className="group relative flex flex-col rounded-2xl bg-[#1E293B]/40 backdrop-blur-sm border border-[#334155] shadow-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(74,144,217,0.3)] hover:border-[#4A90D9]/50 cursor-pointer"
                >
                  <div className="w-full aspect-[4/5] overflow-hidden relative bg-[#0F172A]">
                    <TeamCardImage src={member.imageUrl} alt={member.name} initials={member.initials} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] via-transparent to-transparent opacity-90"></div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-8 text-left z-10">
                    <h4 className="text-[24px] font-semibold text-[#FFFFFF] mb-2 group-hover:text-[#4A90D9] transition-colors">{member.name}</h4>
                    <p className="text-[16px] text-[#2ECC71] uppercase tracking-wider font-medium">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </section>

      {/* Modal de Vista Expandida */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0" onClick={() => setSelectedMember(null)}></div>
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative max-w-lg w-full bg-[#0F172A] rounded-2xl overflow-hidden border border-[#334155] shadow-2xl z-10"
            >
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/40 hover:bg-black/80 rounded-full flex items-center justify-center text-[#FFFFFF] transition-colors border border-white/20 backdrop-blur-md"
              >
                ✕
              </button>
              <div className="w-full aspect-[4/5] sm:aspect-square relative">
                 <TeamCardImage src={selectedMember.imageUrl} alt={selectedMember.name} initials={selectedMember.initials} />
                 <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-[#0B1121] via-[#0B1121]/80 to-transparent text-left">
                   <h4 className="text-[32px] font-bold text-[#FFFFFF] mb-2">{selectedMember.name}</h4>
                   <p className="text-[18px] text-[#2ECC71] uppercase tracking-wider font-semibold">{selectedMember.role}</p>
                 </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
