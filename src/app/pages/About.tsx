import React, { useState } from 'react';
import { useLang } from '../context/LangContext';
import { motion, AnimatePresence } from 'motion/react';
import { Target, Zap, Shield, GraduationCap } from 'lucide-react';

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
      name: 'Carlos ChacÃ³n',
      role: t({ ES: 'CEO', EN: 'CEO', ET: 'Tegevjuht (CEO)', DE: 'CEO' }),
      imageUrl: '/images/team/carlos-chacon.jpeg',
      initials: 'CC'
    },
    {
      name: 'Juan JosÃ© RamÃ­rez Chaves',
      role: t({ ES: 'Co-fundador', EN: 'Co-founder', ET: 'Kaasasutaja', DE: 'MitbegrÃ¼nder' }),
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
              {t({ ES: 'Sobre Nosotros', EN: 'About Us', ET: 'Meist', DE: 'Ãœber uns' })}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[16px] md:text-[18px] text-[#CBD5E1] font-normal leading-[1.6]"
            >
              {t({
                ES: 'Somos un equipo diverso unido por la pasiÃ³n de crear los datos mÃ¡s precisos para el futuro de la IA. Nuestro compromiso es cerrar la brecha cultural y de idioma en los modelos tecnolÃ³gicos globales.',
                EN: 'We are a diverse team united by the passion to create the most accurate data for the future of AI. Our commitment is to close the cultural and language gap in global technological models.',
                ET: 'Oleme mitmekesine meeskond, keda Ã¼hendab kirg luua tehisintellekti tuleviku jaoks kÃµige tÃ¤psemaid andmeid.',
                DE: 'Wir sind ein diverses Team, vereint durch die Leidenschaft, die genauesten Daten fÃ¼r die Zukunft der KI zu erstellen.'
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
              <h3 className="text-[24px] font-semibold text-[#FFFFFF] mb-4">{t({ ES: 'MisiÃ³n', EN: 'Mission', ET: 'Missioon', DE: 'Mission' })}</h3>
              <p className="text-[16px] text-[#CBD5E1] leading-[1.6]">
                {t({
                  ES: 'Acelerar el desarrollo global de la IA mediante la entrega de anotaciones de datos bilingÃ¼es de alto rendimiento y absoluta claridad. Combinamos flujos de trabajo operativos optimizados con una aguda precisiÃ³n lingÃ¼Ã­stica para eliminar el ruido cultural y las ambigÃ¼edades del idioma, transformando conjuntos de datos multilingÃ¼es brutos en datos de entrenamiento estructurados y listos para producciÃ³n con la mÃ¡xima velocidad y claridad.',
                  EN: 'To accelerate global AI development by delivering high-throughput, crystal-clear bilingual data annotation. We combine optimized operational workflows with sharp linguistic precision to eliminate cultural noise and language ambiguities, transforming raw multi-language datasets into structured, production-ready training data with maximum speed and clarity.',
                  ET: 'Kiirendada Ã¼lemaailmset tehisintellekti arengut, pakkudes suure lÃ¤bilaskevÃµimega ja kristallselget kakskeelset andmete annoteerimist.',
                  DE: 'Die globale KI-Entwicklung zu beschleunigen, indem wir hochdurchsatzfÃ¤hige, kristallklare bilinguale Datenannotation liefern.'
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
              <h3 className="text-[24px] font-semibold text-[#FFFFFF] mb-4">{t({ ES: 'VisiÃ³n', EN: 'Vision', ET: 'Visioon', DE: 'Vision' })}</h3>
              <p className="text-[16px] text-[#CBD5E1] leading-[1.6]">
                {t({
                  ES: 'Ser la startup de motor de datos mÃ¡s eficiente del mundo para la IA multilingÃ¼e, reconocida por establecer el estÃ¡ndar de oro en eficiencia operativa y absoluta claridad lingÃ¼Ã­stica, permitiendo que los modelos de aprendizaje automÃ¡tico se comuniquen y entiendan los lenguajes humanos sin fallas.',
                  EN: 'To be the worldâ€™s most streamlined data-engine startup for multilingual AI, recognized for setting the gold standard in operational efficiency and linguistic absolute clarity, enabling machine learning models to communicate and understand human languages flawlessly.',
                  ET: 'Olla maailma kÃµige tÃµhusam andmemootori idufirma mitmekeelse tehisintellekti jaoks.',
                  DE: 'Das effizienteste Daten-Engine-Startup der Welt fÃ¼r mehrsprachige KI zu sein.'
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
              <h3 className="text-[24px] font-semibold text-[#FFFFFF] mb-6">{t({ ES: 'Valores', EN: 'Values', ET: 'VÃ¤Ã¤rtused', DE: 'Werte' })}</h3>
              <ul className="space-y-4">
                {[
                  { icon: <Target className="text-[#2ECC71] w-5 h-5" />, text: t({ ES: 'PrecisiÃ³n lingÃ¼Ã­stica', EN: 'Linguistic Precision', ET: 'Keeleline tÃ¤psus', DE: 'Sprachliche PrÃ¤zision' }) },
                  { icon: <Zap className="text-[#2ECC71] w-5 h-5" />, text: t({ ES: 'Velocidad operativa', EN: 'Operational Velocity', ET: 'TÃ¶Ã¶kiirus', DE: 'Operative Geschwindigkeit' }) },
                  { icon: <Shield className="text-[#2ECC71] w-5 h-5" />, text: t({ ES: 'Absoluta integridad de datos', EN: 'Absolute Data Integrity', ET: 'TÃ¤ielik andmeterviklikkus', DE: 'Absolute DatenintegritÃ¤t' }) },
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
              {t({ ES: 'Nuestro Equipo Directivo', EN: 'Our Leadership Team', ET: 'Meie juhtkond', DE: 'Unser FÃ¼hrungsteam' })}
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
          
          {/* Corporate Social Responsibility (CSR) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mt-20 p-8 md:p-12 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl text-center shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#4A90D9]/5 to-transparent pointer-events-none"></div>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1E293B]/80 border border-[#4A90D9]/30 mb-6 group-hover:scale-110 group-hover:border-[#4A90D9]/60 transition-transform duration-500 shadow-[0_0_15px_rgba(74,144,217,0.2)]">
              <GraduationCap className="w-8 h-8 text-[#4A90D9]" />
            </div>
            <h3 className="text-[28px] md:text-[32px] font-semibold text-[#FFFFFF] mb-6 relative z-10">
              {t({
                ES: 'Responsabilidad Social Corporativa (RSC)',
                EN: 'Corporate Social Responsibility (CSR)',
                ET: 'EttevÃµtte sotsiaalne vastutus (CSR)',
                DE: 'Soziale Verantwortung des Unternehmens (CSR)'
              })}
            </h3>
            <p className="text-[18px] text-[#CBD5E1] leading-[1.7] relative z-10">
              {t({
                ES: 'Empoderando el futuro de la tecnologÃ­a: Nos comprometemos a destinar un porcentaje de nuestros ingresos anuales para apoyar y patrocinar a la prÃ³xima generaciÃ³n de talentos que cursan carreras de TI (TecnologÃ­as de la InformaciÃ³n) y ciencias de la computaciÃ³n.',
                EN: 'Empowering the future of technology: We pledge a percentage of our annual revenue to support and sponsor the next generation of talent pursuing IT and computer science careers.',
                ET: 'Tehnoloogia tuleviku vÃµimestamine: kohustume suunama teatud protsendi oma aastasest tulust jÃ¤rgmise pÃµlvkonna talentide toetamiseks ja sponsoreerimiseks, kes teevad karjÃ¤Ã¤ri IT- ja arvutiteadustes.',
                DE: 'StÃ¤rkung der Zukunft der Technologie: Wir verpflichten uns, einen Prozentsatz unseres Jahresumsatzes zur UnterstÃ¼tzung und FÃ¶rderung der nÃ¤chsten Generation von Talenten in den Bereichen IT und Informatik bereitzustellen.'
              })}
            </p>
          </motion.div>

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
                âœ•
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
