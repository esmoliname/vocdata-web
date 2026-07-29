import React, { useEffect, useState, useRef } from 'react';
import { useLang } from '../context/LangContext';
import { FileText, Mic, Video } from 'lucide-react';
import { Link } from 'react-router';
import { motion, useScroll, useTransform } from 'motion/react';
import heroImage from '../../imports/Gemini_Generated_Image_9am419am419am419.png';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export const Home = () => {
  const { t } = useLang();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  
  const graphSectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress: graphScroll } = useScroll({
    target: graphSectionRef,
    offset: ["start end", "center center"]
  });
  const graphPathLength = useTransform(graphScroll, [0, 1], [0, 1]);
  const graphOpacity   = useTransform(graphScroll, [0, 0.5, 1], [0, 0.4, 1]);
  
  const [dimensions, setDimensions] = useState({ w: 1200, h: 800 });
  useEffect(() => {
    setDimensions({ w: window.innerWidth, h: window.innerHeight });
    const handleResize = () => setDimensions({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const particles = Array.from({ length: 30 });

  return (
    <div className="flex flex-col w-full overflow-hidden font-sans bg-[#0B1121]">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0B1121] to-[#1E293B] overflow-hidden">
        {/* Abstract Background Image */}
        <motion.div className="absolute inset-0 w-full h-full pointer-events-none" style={{ y: y1 }}>
          <ImageWithFallback 
            src={heroImage}
            alt="Abstract Neural Network"
            className="w-full h-full object-cover opacity-15 blur-[8px] mix-blend-overlay"
          />
        </motion.div>
        
        {/* Background Pattern: Code/Data Lines */}
        <div 
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(0deg, transparent 24%, #4A90D9 25%, #4A90D9 26%, transparent 27%, transparent 74%, #4A90D9 75%, #4A90D9 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #4A90D9 25%, #4A90D9 26%, transparent 27%, transparent 74%, #4A90D9 75%, #4A90D9 76%, transparent 77%, transparent)',
            backgroundSize: '30px 30px'
          }}
        ></div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((_, i) => (
            <motion.div
              key={`hero-particle-${i}`}
              className="absolute w-[4px] h-[4px] rounded-full bg-[#4A90D9] opacity-40 shadow-[0_0_8px_#4A90D9]"
              initial={{
                x: Math.random() * dimensions.w,
                y: Math.random() * dimensions.h,
              }}
              animate={{
                y: [null, Math.random() * dimensions.h],
                x: [null, Math.random() * dimensions.w],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: Math.random() * 20 + 15,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[120px] relative z-10 flex flex-col items-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFFFFF] leading-tight mb-6 max-w-4xl [text-shadow:0_2px_20px_rgba(0,0,0,0.5)]"
          >
            {t({
              ES: 'Datos BilingÃ¼es, Perfectamente Anotados',
              EN: 'Bilingual Data, Perfectly Annotated',
              ET: 'Kakskeelsed andmed, suurepÃ¤raselt annoteritud',
              DE: 'Bilinguale Daten, perfekt annotiert'
            })}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[18px] text-[#CBD5E1] mb-10 max-w-[600px] font-normal leading-[1.6]"
          >
            {t({
              ES: 'AnotaciÃ³n de datos bilingÃ¼e para IA y Machine Learning. PrecisiÃ³n lingÃ¼Ã­stica y cultural en espaÃ±ol e inglÃ©s.',
              EN: 'Bilingual data annotation for AI and Machine Learning. Linguistic and cultural precision in Spanish and English.',
              ET: 'Kakskeelne andmete annoteerimine tehisintellekti ja masinÃµppe jaoks. Lingvistiline ja kultuuriline tÃ¤psus.',
              DE: 'Bilinguale Datenannotation fÃ¼r KI und Machine Learning. Sprachliche und kulturelle PrÃ¤zision.'
            })}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link to="/contact">
              <button className="w-full sm:w-auto h-[56px] px-8 rounded-lg bg-[#4A90D9] text-[#FFFFFF] font-semibold text-[18px] hover:bg-[#3B73AD] hover:shadow-[0_4px_15px_rgba(74,144,217,0.4)] transition-all duration-300">
                {t({ ES: 'Solicitar Demo', EN: 'Request Demo', ET: 'KÃ¼si Demot', DE: 'Demo anfordern' })}
              </button>
            </Link>
            <Link to="/services">
              <button className="w-full sm:w-auto h-[56px] px-8 rounded-lg border-2 border-[#FFFFFF] text-[#FFFFFF] font-semibold text-[18px] hover:bg-[#FFFFFF] hover:text-[#0B1121] transition-all duration-300">
                {t({ ES: 'Conocer mÃ¡s', EN: 'Learn More', ET: 'Lisateave', DE: 'Mehr erfahren' })}
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. MÃ‰TRICAS DE CONFIANZA */}
      <section className="py-20 bg-[#FFFFFF] relative z-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[120px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-32">
            {[
              { value: '99.8%', label: t({ ES: 'PrecisiÃ³n en AnotaciÃ³n', EN: 'Annotation Accuracy', ET: 'Annoteerimise tÃ¤psus', DE: 'Annotationsgenauigkeit' }) },
              { value: '0.92', label: t({ ES: 'Acuerdo entre Anotadores (IAA)', EN: 'Inter-Annotator Agreement (IAA)', ET: 'Annotaatorite vaheline kokkulepe', DE: 'Inter-Annotator-Agreement (IAA)' }) },
              { value: '+50M', label: t({ ES: 'Datos Procesados', EN: 'Processed Data', ET: 'TÃ¶Ã¶deldud andmed', DE: 'Verarbeitete Daten' }) }
            ].map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="bg-[#FFFFFF] rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-t-4 border-[#2ECC71] p-8 text-center flex flex-col items-center justify-center transform hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="text-[56px] font-bold text-[#2ECC71] mb-2 leading-none">{metric.value}</div>
                <div className="text-[18px] text-[#4A4A4A] font-normal leading-[1.6]">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICIOS (RESUMEN) */}
      <section className="py-24 bg-gradient-to-b from-[#0F172A] to-[#1E293B] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(74,144,217,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(74,144,217,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[120px] relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[32px] md:text-[40px] font-semibold text-[#FFFFFF] mb-16 [text-shadow:0_2px_15px_rgba(0,0,0,0.4)]"
          >
            {t({ ES: 'Nuestros Servicios', EN: 'Our Services', ET: 'Meie teenused', DE: 'Unsere Dienstleistungen' })}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-16">
            {[
              {
                icon: <FileText size={40} className="text-[#4A90D9] mb-4 group-hover:text-[#2ECC71] transition-colors" />,
                title: t({ ES: 'AnotaciÃ³n de Texto', EN: 'Text Annotation', ET: 'Teksti annoteerimine', DE: 'Textannotation' }),
                desc: t({ ES: 'Etiquetado semÃ¡ntico, NER, anÃ¡lisis de sentimiento bilingÃ¼e', EN: 'Semantic labeling, NER, bilingual sentiment analysis', ET: 'Semantiline mÃ¤rgistamine, NER', DE: 'Semantische Kennzeichnung, NER' }),
                img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&fit=crop'
              },
              {
                icon: <Mic size={40} className="text-[#4A90D9] mb-4 group-hover:text-[#2ECC71] transition-colors" />,
                title: t({ ES: 'AnotaciÃ³n de Audio', EN: 'Audio Annotation', ET: 'Heli annoteerimine', DE: 'Audioannotation' }),
                desc: t({ ES: 'TranscripciÃ³n, diarizaciÃ³n de hablantes, etiquetado fonÃ©tico', EN: 'Transcription, speaker diarization, phonetic labeling', ET: 'Transkriptsioon, kÃµnelejate eristamine', DE: 'Transkription, Sprecherdiarisierung' }),
                img: 'https://images.unsplash.com/photo-1516280440502-8610eb675039?q=80&w=800&fit=crop'
              },
              {
                icon: <Video size={40} className="text-[#4A90D9] mb-4 group-hover:text-[#2ECC71] transition-colors" />,
                title: t({ ES: 'AnotaciÃ³n de Video', EN: 'Video Annotation', ET: 'Video annoteerimine', DE: 'Videoannotation' }),
                desc: t({ ES: 'Etiquetado de objetos, seguimiento, reconocimiento de acciones', EN: 'Object labeling, tracking, action recognition', ET: 'Objektide mÃ¤rgistamine, jÃ¤lgimine', DE: 'Objektkennzeichnung, Tracking' }),
                img: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=800&fit=crop'
              }
            ].map((srv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (idx % 3) * 0.2 }}
                className="group relative rounded-[16px] overflow-hidden border border-[#4A90D9]/30 hover:border-[#2ECC71] hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(46,204,113,0.15)]"
              >
                <ImageWithFallback 
                  src={srv.img}
                  alt={srv.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-20 blur-[4px] z-0"
                />
                
                <div className="relative z-10 p-8 h-full bg-[#1E293B]/90 backdrop-blur-[12px]">
                  {srv.icon}
                  <h3 className="text-[24px] font-semibold text-[#FFFFFF] mb-3">{srv.title}</h3>
                  <p className="text-[16px] text-[#CBD5E1] font-normal leading-[1.6]">{srv.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/services" className="text-[18px] font-semibold text-[#4A90D9] hover:text-[#2ECC71] transition-colors duration-300 inline-flex items-center gap-2 group">
              {t({ ES: 'Ver todos los servicios', EN: 'View all services', ET: 'Vaata kÃµiki teenuseid', DE: 'Alle Dienstleistungen anzeigen' })}
              <span className="transform group-hover:translate-x-1 transition-transform">â†’</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 4. NUEVO MÃ“DULO DE ECOSISTEMA / COMPETENCIA */}
      <section ref={graphSectionRef} className="py-24 bg-gradient-to-b from-[#0F172A] to-[#1E293B] overflow-hidden relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.slice(0, 15).map((_, i) => (
            <motion.div
              key={`eco-particle-${i}`}
              className="absolute w-[3px] h-[3px] rounded-full bg-[#4A90D9] opacity-30 shadow-[0_0_5px_#4A90D9]"
              initial={{
                x: Math.random() * dimensions.w,
                y: Math.random() * dimensions.h,
              }}
              animate={{
                y: [null, Math.random() * dimensions.h],
                x: [null, Math.random() * dimensions.w],
                opacity: [0.1, 0.6, 0.1],
              }}
              transition={{
                duration: Math.random() * 20 + 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[120px] relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold text-[#FFFFFF] mb-4">
              {t({ ES: 'El Ecosistema de Datos y Nuestro Factor Diferenciador', EN: 'The Data Ecosystem and Our Differentiating Factor', ET: 'AndmeÃ¶kosÃ¼steem ja meie eristav tegur', DE: 'Das DatenÃ¶kosystem und unser Differenzierungsfaktor' })}
            </h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative max-w-5xl mx-auto h-[500px] md:h-[600px] flex items-center justify-center perspective-[1000px]"
          >
            {/* 3D Map / Constellation container */}
            <motion.div 
              className="relative w-full h-full flex items-center justify-center preserve-3d"
              animate={{ rotateY: [0, 5, 0, -5, 0], rotateX: [0, 2, 0, -2, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              {/* Connecting lines */}
              <motion.svg className="absolute inset-0 w-full h-full z-0 opacity-30" viewBox="0 0 800 600">
                <motion.circle cx="400" cy="300" r="160" fill="none" stroke="#4A90D9" strokeWidth="1" strokeDasharray="4,4" style={{ pathLength: graphPathLength }} />
                <motion.circle cx="400" cy="300" r="240" fill="none" stroke="#4A90D9" strokeWidth="1" strokeDasharray="4,4" style={{ pathLength: graphPathLength }} />
                <motion.path d="M400,300 L240,300" stroke="#4A90D9" strokeWidth="1" opacity="0.5" style={{ pathLength: graphPathLength }} />
                <motion.path d="M400,300 L560,300" stroke="#4A90D9" strokeWidth="1" opacity="0.5" style={{ pathLength: graphPathLength }} />
                <motion.path d="M400,300 L280,180" stroke="#4A90D9" strokeWidth="1" opacity="0.5" style={{ pathLength: graphPathLength }} />
                <motion.path d="M400,300 L520,420" stroke="#4A90D9" strokeWidth="1" opacity="0.5" style={{ pathLength: graphPathLength }} />
                <motion.path d="M400,300 L400,60" stroke="#4A90D9" strokeWidth="1" opacity="0.5" style={{ pathLength: graphPathLength }} />
              </motion.svg>

              {/* Center Node: Vocdata */}
              <div className="absolute z-20 w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#1E293B] shadow-[0_0_40px_rgba(74,144,217,0.6)] flex items-center justify-center border-2 border-[#4A90D9] backdrop-blur-md">
                <span className="text-[#FFFFFF] font-bold text-[20px] text-center px-2">Vocdata.ai</span>
              </div>

              {/* Orbiting Nodes */}
              {[
                { name: 'Appen', x: '15%', y: '20%' },
                { name: 'DataAnnotation', x: '80%', y: '15%' },
                { name: 'Localizera', x: '10%', y: '60%' },
                { name: 'LanguageLine Solutions', x: '75%', y: '70%' },
                { name: 'Bilingual Global', x: '50%', y: '10%' }
              ].map((node, i) => (
                <motion.div 
                  key={i}
                  className="absolute z-10 w-28 h-28 rounded-full bg-[#1E293B]/80 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.5)] flex items-center justify-center p-3 text-center text-[14px] font-medium text-[#CBD5E1] border border-[#334155]"
                  style={{ left: node.x, top: node.y, opacity: graphOpacity }}
                >
                  {node.name}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12 max-w-3xl mx-auto"
          >
            <p className="text-[18px] text-[#CBD5E1] leading-[1.6]">
              {t({
                ES: 'Vocdata.ai se diferencia por su enfoque en precisiÃ³n bilingÃ¼e, atenciÃ³n personalizada y lingÃ¼istas nativos especializados, asegurando la mÃ¡s alta calidad en cada interacciÃ³n.',
                EN: 'Vocdata.ai stands out for its focus on bilingual accuracy, personalized attention, and specialized native linguists, ensuring the highest quality in every interaction.',
                ET: 'Vocdata.ai paistab silma keskendumisega kakskeelsele tÃ¤psusele, isikupÃ¤rasele tÃ¤helepanule ja spetsialiseerunud keeleteadlastele.',
                DE: 'Vocdata.ai zeichnet sich durch den Fokus auf bilinguale Genauigkeit, persÃ¶nliche Betreuung und spezialisierte Muttersprachler aus.'
              })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5. LLAMADA A LA ACCIÃ“N FINAL (CTA) */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#0B1121] py-20">
        
        {/* Fondo de Aurora TecnolÃ³gica */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-[#0B1121]/80 to-[#0B1121] z-0"></div>
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-cyan-900/30 via-transparent to-transparent z-0 opacity-70"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-indigo-900/30 via-transparent to-transparent z-0 opacity-70"></div>

        {/* Fondo de CuadrÃ­cula (Mesh Grid) */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none z-0"
          style={{
            backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(74,144,217,0.3) 25%, rgba(74,144,217,0.3) 26%, transparent 27%, transparent 74%, rgba(74,144,217,0.3) 75%, rgba(74,144,217,0.3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(74,144,217,0.3) 25%, rgba(74,144,217,0.3) 26%, transparent 27%, transparent 74%, rgba(74,144,217,0.3) 75%, rgba(74,144,217,0.3) 76%, transparent 77%, transparent)',
            backgroundSize: '40px 40px'
          }}
        ></div>

        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-[120px] relative z-10 flex flex-col items-center justify-center">
          
          {/* Bloque Central Liquid Glass */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-slate-900/30 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden w-full"
          >
            {/* Brillo interno sutil del cristal */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-3xl"></div>

            <h2 className="text-[32px] md:text-[48px] font-semibold text-[#FFFFFF] mb-6 relative z-10">
              {t({ ES: 'Â¿Listo para Anotar tus Datos con PrecisiÃ³n?', EN: 'Ready to Annotate Your Data with Precision?', ET: 'Kas olete valmis oma andmeid tÃ¤pselt annoteerima?', DE: 'Bereit, Ihre Daten prÃ¤zise zu annotieren?' })}
            </h2>
            <p className="text-[18px] text-[#CBD5E1] max-w-[600px] mx-auto mb-10 leading-[1.6] relative z-10">
              {t({
                ES: 'Solicita una demo y descubre cÃ³mo podemos transformar tus datos en entrenamiento de IA de clase mundial.',
                EN: 'Request a demo and discover how we can transform your data into world-class AI training data.',
                ET: 'KÃ¼sige demot ja avastage, kuidas saame teie andmed muuta maailmatasemel AI koolitusandmeteks.',
                DE: 'Fordern Sie eine Demo an und entdecken Sie, wie wir Ihre Daten in erstklassige KI-Trainingsdaten verwandeln kÃ¶nnen.'
              })}
            </p>
            
            <div className="relative z-10 inline-block">
              <Link to="/contact">
                 <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium px-8 py-4 rounded-xl hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 group inline-flex items-center gap-2">
                    {t({ ES: 'Solicitar Demo', EN: 'Request Demo', ET: 'KÃ¼si Demot', DE: 'Demo anfordern' })} 
                    <span className="transform group-hover:translate-x-1 transition-transform">â†’</span>
                 </button>
              </Link>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};
