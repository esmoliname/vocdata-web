import React, { useEffect, useState } from 'react';
import { useLang } from '../context/LangContext';
import { motion, AnimatePresence } from 'motion/react';

import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { MessageSquare, Send, Phone, Mail, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const { t } = useLang();
  const [dimensions, setDimensions] = useState({ w: 1200, h: 800 });
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [customMessage, setCustomMessage] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setStatus('idle');
    setErrorMessage('');

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_vocdata';
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_fh5mx6b';
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'nrYxE1wsrhLXELpAi';

    const templateParams = {
      from_name: formData.name,
      name: formData.name,
      reply_to: formData.email,
      email: formData.email,
      company: formData.company,
      message: formData.message,
    };

    console.log('Enviando a EmailJS con credenciales:', { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY, templateParams });

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('EMAILJS ÉXITO:', response.status, response.text);
        setStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      })
      .catch((err) => {
        console.error('EMAILJS ERROR 400 DETALLADO:', err);
        setStatus('error');
        setErrorMessage(err?.text || err?.message || 'Error en las credenciales o parámetros de EmailJS');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleCustomMessageSend = () => {
    if (customMessage.trim() === '') return;
    const url = `https://wa.me/50687587740?text=${encodeURIComponent(customMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setCustomMessage('');
    setIsWhatsAppOpen(false);
  };

  useEffect(() => {
    setDimensions({ w: window.innerWidth, h: window.innerHeight });

    const handleResize = () => setDimensions({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const particles = Array.from({ length: 20 });

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0B1121] to-[#1E293B] overflow-hidden flex flex-col pt-32 pb-20 font-sans">
      {/* Background Image */}
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhdGElMjBuZXR3b3JrJTIwZGFya3xlbnwxfHx8fDE3ODI2MjIwNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        alt="Abstract Neural Network"
        className="absolute inset-0 w-full h-full object-cover opacity-10 blur-[6px] mix-blend-overlay"
      />

      {/* Background Pattern: Code/Data Lines */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, #4A90D9 25%, #4A90D9 26%, transparent 27%, transparent 74%, #4A90D9 75%, #4A90D9 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #4A90D9 25%, #4A90D9 26%, transparent 27%, transparent 74%, #4A90D9 75%, #4A90D9 76%, transparent 77%, transparent)',
          backgroundSize: '30px 30px'
        }}
      ></div>

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[6px] h-[6px] rounded-full bg-[#4A90D9] opacity-30 shadow-[0_0_10px_#4A90D9]"
            initial={{
              x: Math.random() * dimensions.w,
              y: Math.random() * dimensions.h,
            }}
            animate={{
              y: [null, Math.random() * dimensions.h],
              x: [null, Math.random() * dimensions.w],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-10">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[48px] font-bold mb-4 text-[#FFFFFF] [text-shadow:0_2px_10px_rgba(0,0,0,0.4)]">
            {t({ ES: 'Hablemos de tus Datos', EN: 'Let\'s Talk About Your Data', ET: 'Räägime teie andmetest', DE: 'Lassen Sie uns über Ihre Daten sprechen' })}
          </h2>
          <p className="text-[20px] text-[#CBD5E1] max-w-2xl mx-auto font-normal leading-[1.6] [text-shadow:0_1px_5px_rgba(0,0,0,0.2)]">
            {t({
              ES: 'Estamos listos para escalar tus modelos de IA con precisión bilingüe.',
              EN: 'We are ready to scale your AI models with bilingual accuracy.',
              ET: 'Oleme valmis teie tehisintellekti mudeleid kakskeelse täpsusega skaleerima.',
              DE: 'Wir sind bereit, Ihre KI-Modelle mit bilingualer Genauigkeit zu skalieren.'
            })}
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

          {/* Left Column (60%): Form */}
          <div className="lg:col-span-3 bg-[#1E293B]/80 backdrop-blur-[10px] rounded-[16px] p-8 border border-[#334155]/50 shadow-2xl relative overflow-hidden">
            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-xl p-4 flex items-center gap-3 text-sm backdrop-blur-md"
                >
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>{t({ ES: '¡Mensaje Enviado con Éxito!', EN: 'Message Sent Successfully!', ET: 'Sõnum saadetud edukalt!', DE: 'Nachricht erfolgreich gesendet!' })}</span>
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl p-4 flex items-center gap-3 text-sm backdrop-blur-md"
                >
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </motion.div>
              )}
            </AnimatePresence>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[14px] font-semibold text-[#E2E8F0] mb-[8px] text-left">{t({ ES: 'Nombre completo', EN: 'Full Name', ET: 'Täisnimi', DE: 'Vollständiger Name' })}</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full h-12 px-4 rounded-lg border border-[#334155] bg-[#0F172A] text-[16px] text-[#E2E8F0] placeholder:text-[#94A3B8] placeholder:font-normal focus:outline-none focus:border-[#2ECC71] focus:ring-1 focus:ring-[#2ECC71] focus:shadow-[0_0_10px_rgba(46,204,113,0.2)] transition-all disabled:opacity-50"
                    placeholder={t({ ES: 'Ej. Nombre completo', EN: 'E.g. Full name', ET: 'Nt. Täisnimi', DE: 'Z.B. Vollständiger Name' })}
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-[14px] font-semibold text-[#E2E8F0] mb-[8px] text-left">{t({ ES: 'Correo corporativo', EN: 'Work Email', ET: 'Töö e-post', DE: 'Geschäftliche E-Mail' })}</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-12 px-4 rounded-lg border border-[#334155] bg-[#0F172A] text-[16px] text-[#E2E8F0] placeholder:text-[#94A3B8] placeholder:font-normal focus:outline-none focus:border-[#2ECC71] focus:ring-1 focus:ring-[#2ECC71] focus:shadow-[0_0_10px_rgba(46,204,113,0.2)] transition-all disabled:opacity-50"
                    placeholder="nombre@empresa.com"
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <div>
                <label className="block text-[14px] font-semibold text-[#E2E8F0] mb-[8px] text-left">{t({ ES: 'Empresa', EN: 'Company', ET: 'Ettevõte', DE: 'Unternehmen' })}</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full h-12 px-4 rounded-lg border border-[#334155] bg-[#0F172A] text-[16px] text-[#E2E8F0] placeholder:text-[#94A3B8] placeholder:font-normal focus:outline-none focus:border-[#2ECC71] focus:ring-1 focus:ring-[#2ECC71] focus:shadow-[0_0_10px_rgba(46,204,113,0.2)] transition-all disabled:opacity-50"
                  placeholder={t({ ES: 'Nombre de tu empresa', EN: 'Your company name', ET: 'Teie ettevõtte nimi', DE: 'Ihr Firmenname' })}
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-[14px] font-semibold text-[#E2E8F0] mb-[8px] text-left">{t({ ES: 'Mensaje o detalles del proyecto', EN: 'Message or project details', ET: 'Sõnum või projekti üksikasjad', DE: 'Nachricht oder Projektdetails' })}</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-4 rounded-lg border border-[#334155] bg-[#0F172A] text-[16px] text-[#E2E8F0] placeholder:text-[#94A3B8] placeholder:font-normal focus:outline-none focus:border-[#2ECC71] focus:ring-1 focus:ring-[#2ECC71] focus:shadow-[0_0_10px_rgba(46,204,113,0.2)] transition-all min-h-[150px] resize-y disabled:opacity-50"
                  placeholder={t({ ES: 'Cuéntanos sobre tus necesidades de anotación...', EN: 'Tell us about your annotation needs...', ET: 'Rääkige meile oma annoteerimisvajadustest...', DE: 'Erzählen Sie uns von Ihren Annotationsbedürfnissen...' })}
                  disabled={isSubmitting}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full h-14 rounded-lg bg-[#4A90D9] text-[#FFFFFF] font-semibold text-[16px] hover:bg-[#2ECC71] hover:shadow-[0_4px_15px_rgba(46,204,113,0.4)] transition-all duration-300 flex justify-center items-center gap-2 mt-4 disabled:bg-[#334155] disabled:text-[#94A3B8] disabled:cursor-not-allowed disabled:shadow-none"
              >
                {isSubmitting
                  ? t({ ES: 'Enviando...', EN: 'Sending...', ET: 'Saatmine...', DE: 'Senden...' })
                  : t({ ES: 'Enviar Mensaje', EN: 'Send Message', ET: 'Saada Sõnum', DE: 'Nachricht senden' })
                }
                {!isSubmitting && <span className="transform group-hover:translate-x-1 transition-transform">→</span>}
              </button>
            </form>
          </div>

          {/* Right Column (40%): Info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-slate-900/40 backdrop-blur-md rounded-xl p-6 border border-white/10 flex flex-col gap-2 hover:bg-slate-900/60 hover:border-white/20 transition-all shadow-lg">
              <h4 className="font-semibold text-[16px] text-[#FFFFFF] mb-1 flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#2ECC71]" />
                {t({ ES: 'Soporte', EN: 'Support', ET: 'Tugi', DE: 'Support' })}
              </h4>
              <div className="space-y-1">
                <a href="mailto:datasolution@vocdatawebvercelapp.com" className="font-normal text-[16px] text-[#E2E8F0] leading-[1.5] hover:text-[#4A90D9] transition-colors block">
                  datasolution@vocdatawebvercelapp.com
                </a>
              </div>
            </div>

            <div className="bg-slate-900/40 backdrop-blur-md rounded-xl p-6 border border-white/10 flex flex-col gap-2 hover:bg-slate-900/60 hover:border-white/20 transition-all shadow-lg">
              <h4 className="font-semibold text-[16px] text-[#FFFFFF] mb-1 flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#4A90D9]" />
                {t({ ES: 'Llámanos', EN: 'Call us', ET: 'Helista meile', DE: 'Rufen Sie uns an' })}
              </h4>
              <div className="space-y-1">
                <a href="tel:+50687587740" className="font-normal text-[16px] text-[#E2E8F0] leading-[1.5] hover:text-[#4A90D9] transition-colors block">
                  +506 8758 7740
                </a>
              </div>
            </div>

            <div className="bg-slate-900/40 backdrop-blur-md rounded-xl p-6 border border-white/10 flex flex-col gap-2 hover:bg-slate-900/60 hover:border-white/20 transition-all shadow-lg">
              <h4 className="font-semibold text-[16px] text-[#FFFFFF] mb-1 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#2ECC71]" />
                {t({ ES: 'Oficinas', EN: 'Offices', ET: 'Kontorid', DE: 'Büros' })}
              </h4>
              <div className="space-y-1">
                <p className="font-normal text-[16px] text-[#E2E8F0] leading-[1.5]">Tallinn, Estonia</p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-[220px] rounded-xl overflow-hidden relative border border-[#334155] mt-6 bg-[#0F172A] shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center text-[#4A90D9] font-medium z-10 bg-[#0F172A]/40 backdrop-blur-[2px]">
                {t({ ES: 'Mapa Interactivo', EN: 'Interactive Map', ET: 'Interaktiivne kaart', DE: 'Interaktive Karte' })}
              </div>
              {/* Map lines SVG */}
              <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,20 Q30,40 50,20 T100,50" fill="none" stroke="#4A90D9" strokeWidth="0.5" />
                <path d="M0,60 Q40,80 60,40 T100,80" fill="none" stroke="#2ECC71" strokeWidth="0.5" />
                <path d="M30,0 L30,100" fill="none" stroke="#4A90D9" strokeWidth="0.5" />
                <path d="M70,0 L70,100" fill="none" stroke="#2ECC71" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="15" fill="none" stroke="#4A90D9" strokeWidth="0.2" />
                <circle cx="50" cy="50" r="30" fill="none" stroke="#2ECC71" strokeWidth="0.1" />
              </svg>
              {/* Marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#2ECC71] rounded-full border-2 border-[#1E293B] shadow-[0_0_15px_rgba(46,204,113,0.8)] z-10">
                <div className="absolute inset-0 bg-[#2ECC71] rounded-full animate-ping opacity-75"></div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Floating WhatsApp Widget */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
        <AnimatePresence>
          {isWhatsAppOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="mb-4 w-[320px] bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_0_20px_rgba(37,211,102,0.15)] overflow-hidden"
            >
              {/* Header */}
              <div className="bg-[#25D366]/20 p-4 border-b border-white/10">
                <h4 className="text-white font-semibold flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-[#25D366]" />
                  {t({ ES: 'Soporte Vocdata.ai', EN: 'Vocdata.ai Support', ET: 'Vocdata.ai tugi', DE: 'Vocdata.ai Support' })}
                </h4>
                <p className="text-sm text-slate-300 mt-1">
                  {t({ ES: '¿En qué podemos ayudarte hoy?', EN: 'How can we help you today?', ET: 'Kuidas saame teid täna aidata?', DE: 'Wie können wir Ihnen heute helfen?' })}
                </p>
              </div>

              {/* Options */}
              <div className="flex flex-col p-2 gap-1">
                {[
                  t({ ES: 'Me interesa cotizar un proyecto de anotación de datos.', EN: 'I am interested in quoting a data annotation project.', ET: 'Olen huvitatud andmete annoteerimise projekti hinnapakkumisest.', DE: 'Ich bin an einem Angebot für ein Datenannotationsprojekt interessiert.' }),
                  t({ ES: 'Tengo dudas sobre los idiomas o la precisión bilingüe.', EN: 'I have questions about languages or bilingual accuracy.', ET: 'Mul on küsimusi keelte või kakskeelse täpsuse kohta.', DE: 'Ich habe Fragen zu Sprachen oder bilingualer Genauigkeit.' }),
                  t({ ES: 'Soporte técnico / Consulta general.', EN: 'Technical support / General inquiry.', ET: 'Tehniline tugi / Üldine päring.', DE: 'Technischer Support / Allgemeine Anfrage.' })
                ].map((msg, idx) => (
                  <a
                    key={idx}
                    href={`https://wa.me/50687587740?text=${encodeURIComponent(msg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsWhatsAppOpen(false)}
                    className="p-3 text-sm text-slate-200 hover:bg-slate-800 rounded-xl hover:text-white transition-colors text-left"
                  >
                    {msg}
                  </a>
                ))}

                {/* Separator */}
                <div className="h-[1px] bg-white/10 my-2 mx-2"></div>

                {/* Custom Input */}
                <div className="flex items-center gap-2 px-2 pb-2">
                  <input
                    type="text"
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleCustomMessageSend()}
                    placeholder={t({ ES: 'Escribe un mensaje personalizado...', EN: 'Type a custom message...', ET: 'Kirjutage kohandatud sõnum...', DE: 'Schreiben Sie eine benutzerdefinierte Nachricht...' })}
                    className="flex-1 bg-slate-900/50 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#25D366]/50 focus:ring-1 focus:ring-[#25D366]/50 transition-all"
                  />
                  <button
                    onClick={handleCustomMessageSend}
                    className="bg-[#25D366] hover:bg-[#20bd5a] text-white p-2 rounded-lg transition-colors flex-shrink-0"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setIsWhatsAppOpen(!isWhatsAppOpen)}
          className="rounded-full h-16 w-16 bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300 focus:outline-none"
        >
          <MessageSquare className="w-8 h-8" />
        </button>
      </div>

    </div>
  );
};