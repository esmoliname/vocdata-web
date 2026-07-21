import React, { useState } from 'react';
import { useLang } from '../context/LangContext';
import { FileText, Mic, Video, LayoutDashboard, Languages, ShieldCheck, HeartPulse, Truck, Briefcase, ShoppingCart, Cpu } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { AIRevealScanner } from '../components/ui/AIRevealScanner';

export const Services = () => {
  const { t } = useLang();

  return (
    <div className="flex flex-col w-full font-sans bg-[#0B1121]">
      {/* 2.2. Sección de Servicios (Our Services) */}
      <section className="pt-32 pb-24 bg-gradient-to-b from-[#0F172A] to-[#1E293B] relative overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(74,144,217,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(74,144,217,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <div className="container mx-auto px-4 md:px-10 lg:px-[120px] relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[32px] md:text-[40px] font-semibold text-[#FFFFFF] mb-16 [text-shadow:0_2px_15px_rgba(0,0,0,0.4)]"
          >
            {t({ ES: 'Nuestros Servicios', EN: 'Our Services', ET: 'Meie teenused', DE: 'Unsere Dienstleistungen' })}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              {
                icon: <FileText size={40} className="text-[#4A90D9] group-hover:text-[#2ECC71] transition-colors" />,
                title: t({ ES: 'Anotación de Texto', EN: 'Text Annotation', ET: 'Teksti annoteerimine', DE: 'Textannotation' }),
                desc: t({ ES: 'Etiquetado semántico, NER, análisis de sentimiento bilingüe y clasificación de intenciones para NLP.', EN: 'Semantic labeling, NER, bilingual sentiment analysis and intent classification for NLP.', ET: 'Semantiline märgistamine, NER, kakskeelne sentimentanalüüs NLP jaoks.', DE: 'Semantische Kennzeichnung, NER, bilinguale Sentimentanalyse für NLP.' }),
                imageUrl: '/src/assets/images/services/service-text.webp'
              },
              {
                icon: <Mic size={40} className="text-[#4A90D9] group-hover:text-[#2ECC71] transition-colors" />,
                title: t({ ES: 'Anotación de Audio', EN: 'Audio Annotation', ET: 'Heli annoteerimine', DE: 'Audioannotation' }),
                desc: t({ ES: 'Transcripción precisa, diarización de hablantes y etiquetado fonético para modelos de voz.', EN: 'Accurate transcription, speaker diarization, and phonetic labeling for voice models.', ET: 'Täpne transkriptsioon ja foneetiline märgistamine häälemudelitele.', DE: 'Genaue Transkription und phonetische Kennzeichnung für Sprachmodelle.' }),
                imageUrl: '/src/assets/images/services/service-audio.webp'
              },
              {
                icon: <Video size={40} className="text-[#4A90D9] group-hover:text-[#2ECC71] transition-colors" />,
                title: t({ ES: 'Anotación de Video', EN: 'Video Annotation', ET: 'Video annoteerimine', DE: 'Videoannotation' }),
                desc: t({ ES: 'Etiquetado de objetos, seguimiento de cajas delimitadoras y reconocimiento de acciones espaciales.', EN: 'Object labeling, bounding box tracking, and spatial action recognition.', ET: 'Objektide märgistamine ja ruumiline tegevuse tuvastamine.', DE: 'Objektkennzeichnung und räumliche Aktionserkennung.' }),
                imageUrl: '/src/assets/images/services/service-video.webp'
              },
              {
                icon: <LayoutDashboard size={40} className="text-[#4A90D9] group-hover:text-[#2ECC71] transition-colors" />,
                title: t({ ES: 'Clasificación de Imágenes', EN: 'Image Classification', ET: 'Piltide klassifitseerimine', DE: 'Bildklassifizierung' }),
                desc: t({ ES: 'Segmentación semántica, polígonos, puntos clave (keypoints) para visión por computadora.', EN: 'Semantic segmentation, polygons, keypoints for computer vision.', ET: 'Semantiline segmenteerimine ja võtmepunktid arvutinägemise jaoks.', DE: 'Semantische Segmentierung und Keypoints für Computer Vision.' }),
                imageUrl: '/src/assets/images/services/service-image.webp'
              },
              {
                icon: <Languages size={40} className="text-[#4A90D9] group-hover:text-[#2ECC71] transition-colors" />,
                title: t({ ES: 'RLHF Bilingüe', EN: 'Bilingual RLHF', ET: 'Kakskeelne RLHF', DE: 'Bilinguales RLHF' }),
                desc: t({ ES: 'Reinforcement Learning from Human Feedback con especialistas nativos en ES y EN.', EN: 'Reinforcement Learning from Human Feedback with native specialists in ES and EN.', ET: 'Stiimulõpe inimeste tagasisidest (RLHF) kohalike spetsialistidega.', DE: 'Reinforcement Learning from Human Feedback mit muttersprachlichen Spezialisten.' }),
                imageUrl: '/src/assets/images/services/service-rlhf.webp'
              },
              {
                icon: <ShieldCheck size={40} className="text-[#4A90D9] group-hover:text-[#2ECC71] transition-colors" />,
                title: t({ ES: 'Moderación de Contenido', EN: 'Content Moderation', ET: 'Sisu modereerimine', DE: 'Inhaltsmoderation' }),
                desc: t({ ES: 'Revisión y etiquetado de contenido sensible con políticas de seguridad y confianza.', EN: 'Review and labeling of sensitive content with trust and safety policies.', ET: 'Tundliku sisu ülevaatamine ja märgistamine usalduspoliitikaga.', DE: 'Überprüfung und Kennzeichnung sensibler Inhalte mit Sicherheitsrichtlinien.' }),
                imageUrl: '/src/assets/images/services/service-moderation.webp'
              }
            ].map((srv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (idx % 3) * 0.2 }}
                className="group flex flex-col rounded-[16px] overflow-hidden border border-[#4A90D9]/30 hover:border-[#2ECC71] hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(46,204,113,0.15)] bg-[#1E293B]"
              >
                {/* Imagen del Servicio superior */}
                <img
                  src={srv.imageUrl}
                  alt={srv.title}
                  className="w-full h-40 object-cover rounded-t-2xl opacity-75 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-500"
                />
                
                {/* Contenido inferior */}
                <div className="p-6 flex flex-col flex-grow relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    {srv.icon}
                    <h3 className="text-[20px] font-semibold text-[#FFFFFF]">{srv.title}</h3>
                  </div>
                  <p className="text-[15px] text-[#CBD5E1] font-normal leading-[1.6]">{srv.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* AI Reveal Scanner Interaction */}
          <div className="mt-20 z-20 relative">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[28px] md:text-[32px] font-semibold text-[#FFFFFF] mb-6"
            >
              {t({ ES: 'Explora nuestra Precisión de Anotación', EN: 'Explore our Annotation Precision', ET: 'Uurige meie annoteerimistäpsust', DE: 'Entdecken Sie unsere Annotationspräzision' })}
            </motion.h3>
            <AIRevealScanner />
          </div>
        </div>
      </section>

      {/* 2.3. Industrias que Servimos (Industries We Serve) */}
      <section className="py-24 bg-[#FFFFFF]">
        <div className="container mx-auto px-4 md:px-10 lg:px-[120px] text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[32px] md:text-[40px] font-semibold text-[#1A1A1A] mb-4"
          >
            {t({ ES: 'Industrias que Servimos', EN: 'Industries We Serve', ET: 'Tööstusharud, mida teenindame', DE: 'Branchen, die wir bedienen' })}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[16px] md:text-[18px] text-[#4A4A4A] font-normal mb-16 max-w-2xl mx-auto leading-[1.6]"
          >
            {t({ ES: 'Experiencia en dominios específicos para asegurar la relevancia de los datos.', EN: 'Domain-specific expertise to ensure data relevance.', ET: 'Domeenipõhised teadmised andmete asjakohasuse tagamiseks.', DE: 'Domänenspezifisches Fachwissen zur Gewährleistung der Datenrelevanz.' })}
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
            {[
              { icon: <HeartPulse size={48} />, label: t({ ES: 'Salud', EN: 'Healthcare', ET: 'Tervishoid', DE: 'Gesundheitswesen' }) },
              { icon: <Truck size={48} />, label: t({ ES: 'Logística', EN: 'Logistics', ET: 'Logistika', DE: 'Logistik' }) },
              { icon: <Briefcase size={48} />, label: t({ ES: 'Finanzas', EN: 'Finance', ET: 'Rahandus', DE: 'Finanzen' }) },
              { icon: <ShoppingCart size={48} />, label: t({ ES: 'Retail', EN: 'Retail', ET: 'Jaekaubandus', DE: 'Einzelhandel' }) },
              { icon: <Cpu size={48} />, label: t({ ES: 'Tecnología', EN: 'Technology', ET: 'Tehnoloogia', DE: 'Technologie' }) },
            ].map((ind, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group flex flex-col items-center justify-center p-6 cursor-pointer"
              >
                <div className="text-[#4A90D9] mb-4 group-hover:text-[#2ECC71] transition-colors duration-300">
                  {ind.icon}
                </div>
                <span className="font-semibold text-[18px] text-[#1A1A1A] relative inline-block">
                  {ind.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#4A90D9] transition-all duration-300 group-hover:w-full"></span>
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/contact" className="text-[18px] font-semibold text-[#4A90D9] hover:text-[#2ECC71] transition-colors duration-300 inline-flex items-center gap-2 group">
              {t({ ES: '¿Necesitas una solución personalizada?', EN: 'Need a custom solution?', ET: 'Vajate kohandatud lahendust?', DE: 'Benötigen Sie eine maßgeschneiderte Lösung?' })}
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
