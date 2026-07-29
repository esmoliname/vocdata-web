import React from 'react';
import { useLang } from '../context/LangContext';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const BlogCard = ({ post, idx, t }: { post: any, idx: number, t: any }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (idx % 3) * 0.15 }}
      style={{ perspective: 1200 }}
      className="relative w-full h-full"
    >
      <motion.article
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="bg-[#1E293B]/80 backdrop-blur-[10px] rounded-[16px] border border-white/10 overflow-hidden shadow-xl hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:border-white/30 transition-colors duration-300 group flex flex-col h-full relative"
      >
        {/* Capa de Micro-Datos (Data Flow Matrix) */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none z-0 overflow-hidden">
          <div className="w-full h-[200%] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHRleHQgeD0iMCIgeT0iMjAiIGZpbGw9IiM0QTkwRDkiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iMTBweCIgb3BhY2l0eT0iMC44Ij4xIDA8L3RleHQ+PHRleHQgeD0iMTAiIHk9IjQwIiBmaWxsPSIjMkVDQzcxIiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjEycHgiIG9wYWNpdHk9IjAuNiI+MCAxPC90ZXh0Pjwvc3ZnPg==')] animate-[slideDown_10s_linear_infinite]" style={{ transform: "translateZ(-10px)" }} />
        </div>

        <div className="h-48 overflow-hidden relative" style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}>
          <ImageWithFallback 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover transform group-hover:scale-105 group-hover:opacity-60 group-hover:mix-blend-luminosity transition-all duration-500" 
          />
          <div 
            className="absolute top-4 left-4 bg-[#4A90D9] text-[#FFFFFF] text-[12px] font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-lg group-hover:bg-[#2ECC71] transition-colors duration-300"
            style={{ transform: "translateZ(40px)" }}
          >
            {post.category}
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow relative z-10 bg-transparent" style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}>
          <div className="text-[14px] text-[#94A3B8] mb-3">{post.date}</div>
          <h3 className="text-[22px] font-semibold text-[#FFFFFF] mb-3 group-hover:text-[#4A90D9] transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-[16px] text-[#CBD5E1] font-normal leading-[1.6] mb-6 line-clamp-3 flex-grow">
            {post.excerpt}
          </p>
          <a href="#" className="text-[16px] font-semibold text-[#4A90D9] group-hover:text-[#2ECC71] transition-colors inline-flex items-center gap-2 mt-auto">
            {t({ ES: 'Leer más', EN: 'Read more', ET: 'Loe edasi', DE: 'Weiterlesen' })}
            <motion.span 
              className="inline-block"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
            >→</motion.span>
          </a>
        </div>
      </motion.article>
    </motion.div>
  );
};

export const Blog = () => {
  const { t } = useLang();

  const posts = [
    {
      title: t({ ES: 'El impacto del sesgo cultural en los LLMs', EN: 'The impact of cultural bias in LLMs', ET: 'Kultuurilise eelarvamuse mõju LLM-ides', DE: 'Die Auswirkungen kultureller Voreingenommenheit in LLMs' }),
      date: 'Oct 12, 2025',
      category: t({ ES: 'Investigación', EN: 'Research', ET: 'Uuringud', DE: 'Forschung' }),
      excerpt: t({ ES: 'Por qué los datos de entrenamiento bilingües son cruciales para evitar respuestas sesgadas en modelos generativos.', EN: 'Why bilingual training data is crucial to avoid biased responses in generative models.', ET: 'Miks kakskeelsed treeningandmed on üliolulised...', DE: 'Warum bilinguale Trainingsdaten entscheidend sind...' }),
      imageUrl: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=800&fit=crop',
    },
    {
      title: t({ ES: 'Mejorando el IAA en anotación de sentimientos', EN: 'Improving IAA in sentiment annotation', ET: 'IAA parandamine sentimentide annoteerimisel', DE: 'Verbesserung der IAA bei der Sentiment-Annotation' }),
      date: 'Sep 28, 2025',
      category: t({ ES: 'Metodología', EN: 'Methodology', ET: 'Metoodika', DE: 'Methodik' }),
      excerpt: t({ ES: 'Nuestra guía paso a paso para alcanzar un acuerdo entre anotadores superior a 0.90 en tareas subjetivas.', EN: 'Our step-by-step guide to achieving inter-annotator agreement above 0.90 in subjective tasks.', ET: 'Meie samm-sammuline juhend...', DE: 'Unser Schritt-für-Schritt-Leitfaden...' }),
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&fit=crop',
    },
    {
      title: t({ ES: 'Tendencias de Anotación de Datos 2026', EN: 'Data Annotation Trends 2026', ET: 'Andmete annoteerimise trendid 2026', DE: 'Datenannotations-Trends 2026' }),
      date: 'Sep 15, 2025',
      category: t({ ES: 'Industria', EN: 'Industry', ET: 'Tööstus', DE: 'Industrie' }),
      excerpt: t({ ES: 'Desde RLHF hasta anotación multimodal, exploramos lo que depara el futuro para la preparación de datos de IA.', EN: 'From RLHF to multimodal annotation, we explore what the future holds for AI data preparation.', ET: 'Alates RLHF-ist kuni multimodaalse annoteerimiseni...', DE: 'Von RLHF bis zur multimodalen Annotation...' }),
      imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&fit=crop',
    },
    {
      title: t({ ES: 'Cómo escalar tu pipeline de datos con Vocdata', EN: 'How to scale your data pipeline with Vocdata', ET: 'Kuidas laiendada oma andmekanalit Vocdataga', DE: 'So skalieren Sie Ihre Daten-Pipeline mit Vocdata' }),
      date: 'Ago 30, 2025',
      category: t({ ES: 'Estudio de Caso', EN: 'Case Study', ET: 'Juhtumiuuring', DE: 'Fallstudie' }),
      excerpt: t({ ES: 'Descubre cómo ayudamos a una startup de HealthTech a procesar 1M de registros médicos en 30 días.', EN: 'Discover how we helped a HealthTech startup process 1M medical records in 30 days.', ET: 'Avastage, kuidas aitasime HealthTechi idufirmal töödelda...', DE: 'Entdecken Sie, wie wir einem HealthTech-Startup geholfen haben...' }),
      imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&fit=crop',
    },
    {
      title: t({ ES: 'La importancia de los lingüistas nativos', EN: 'The importance of native linguists', ET: 'Kohalike keeleteadlaste tähtsus', DE: 'Die Bedeutung von Muttersprachlern' }),
      date: 'Ago 14, 2025',
      category: t({ ES: 'Metodología', EN: 'Methodology', ET: 'Metoodika', DE: 'Methodik' }),
      excerpt: t({ ES: 'Analizamos la diferencia de calidad entre traducciones automatizadas y la validación por expertos humanos.', EN: 'We analyze the quality difference between automated translations and validation by human experts.', ET: 'Analüüsime automaattõlgete ja inimekspertide kinnitamise kvaliteedi erinevust.', DE: 'Wir analysieren den Qualitätsunterschied zwischen automatisierten Übersetzungen und der Validierung durch menschliche Experten.' }),
      imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&fit=crop',
    },
    {
      title: t({ ES: 'Visión por Computadora en la logística', EN: 'Computer Vision in logistics', ET: 'Arvutinägemine logistikas', DE: 'Computer Vision in der Logistik' }),
      date: 'Jul 22, 2025',
      category: t({ ES: 'Industria', EN: 'Industry', ET: 'Tööstus', DE: 'Industrie' }),
      excerpt: t({ ES: 'Casos de uso reales de cómo el etiquetado preciso de videos mejora la seguridad en cadenas de suministro.', EN: 'Real use cases of how accurate video labeling improves safety in supply chains.', ET: 'Reaalsed kasutusjuhtumid selle kohta, kuidas täpne videomärgistus parandab tarneahelate ohutust.', DE: 'Reale Anwendungsfälle, wie eine genaue Videokennzeichnung die Sicherheit in Lieferketten verbessert.' }),
      imageUrl: '/images/services/service-image.webp',
    }
  ];

  return (
    <div className="flex flex-col w-full font-sans bg-[#0B1121]">
      <style>
        {`
          @keyframes slideDown {
            0% { transform: translateY(-50%) translateZ(-10px); }
            100% { transform: translateY(0) translateZ(-10px); }
          }
        `}
      </style>
      {/* 2.7. Blog / Recursos */}
      <section className="pt-32 pb-24 min-h-screen bg-gradient-to-b from-[#0B1121] to-[#1E293B] relative overflow-hidden">
        
        {/* Dynamic Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2000&fit=crop" 
            alt="Abstract AI Background" 
            className="w-full h-full object-cover opacity-10 blur-[8px] mix-blend-overlay"
          />
        </div>

        <div className="container mx-auto px-4 md:px-10 lg:px-[120px] relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[32px] md:text-[40px] font-semibold text-[#FFFFFF] mb-6 [text-shadow:0_2px_15px_rgba(0,0,0,0.4)]"
            >
              {t({ ES: 'Recursos y Conocimiento', EN: 'Resources & Knowledge', ET: 'Ressursid ja teadmised', DE: 'Ressourcen & Wissen' })}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[16px] md:text-[18px] text-[#CBD5E1] font-normal leading-[1.6]"
            >
              {t({
                ES: 'Insights, metodologías y tendencias sobre la industria de la anotación de datos para IA.',
                EN: 'Insights, methodologies, and trends about the AI data annotation industry.',
                ET: 'Sissevaated, metoodikad ja trendid AI andmete annoteerimise tööstuse kohta.',
                DE: 'Einblicke, Methoden und Trends rund um die KI-Datenannotationsbranche.'
              })}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <BlogCard key={idx} post={post} idx={idx} t={t} />
            ))}
          </div>

          {/* Pagination */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 flex justify-center"
          >
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-md bg-[#4A90D9] text-[#FFFFFF] font-semibold shadow-lg">1</button>
              <button className="w-10 h-10 rounded-md bg-[#1E293B]/80 border border-[#334155]/50 text-[#CBD5E1] font-semibold hover:bg-[#334155]/80 hover:text-[#FFFFFF] transition-colors">2</button>
              <button className="w-10 h-10 rounded-md bg-[#1E293B]/80 border border-[#334155]/50 text-[#CBD5E1] font-semibold hover:bg-[#334155]/80 hover:text-[#FFFFFF] transition-colors">3</button>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};
