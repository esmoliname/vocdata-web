import React from 'react';
import { NavLink, Link } from 'react-router';
import { useLang } from '../../context/LangContext';
import { Linkedin, MessageCircle } from 'lucide-react';

export const Footer = () => {
  const { t } = useLang();

  return (
    <footer className="relative bg-[#030712] text-slate-300 pt-32 pb-12 overflow-hidden border-t border-slate-800/50">
      
      {/* =========================================
          HERO CTA FOOTER (Cosmic Halo)
         ========================================= */}
      <div className="absolute inset-0 top-0 w-full h-[500px] bg-gradient-to-b from-blue-600/20 via-cyan-500/10 to-transparent blur-3xl pointer-events-none z-0"></div>
      
      <div className="container mx-auto px-4 md:px-10 lg:px-[120px] relative z-10 flex flex-col items-center text-center mb-32">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 max-w-4xl tracking-tight [text-shadow:0_0_30px_rgba(6,182,212,0.3)]">
          {t({
            ES: 'Tu próximo modelo de IA comienza con datos perfectos.',
            EN: 'Your next AI model starts with perfect data.',
            ET: 'Sinu järgmine AI mudel algab täiuslike andmetega.',
            DE: 'Ihr nächstes KI-Modell beginnt mit perfekten Daten.'
          })}
        </h2>
        
        <Link to="/contact" className="inline-block">
          <button className="group relative px-8 py-4 bg-slate-900/50 backdrop-blur-md border border-cyan-500/50 rounded-full font-semibold text-white text-lg flex items-center gap-3 hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(6,182,212,0.4)]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="relative z-10">{t({ ES: 'Iniciar Proyecto', EN: 'Start Project', ET: 'Alusta Projekti', DE: 'Projekt Starten' })}</span>
            <span className="relative z-10 transform group-hover:translate-x-1 transition-transform">➔</span>
          </button>
        </Link>
      </div>

      {/* =========================================
          BASE FOOTER INFO
         ========================================= */}
      <div className="container mx-auto px-4 md:px-10 lg:px-[120px] relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-slate-800/60">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
              <span className="text-slate-900 font-bold text-xl leading-none">V</span>
            </div>
            <span className="font-bold text-xl text-white tracking-tight">Vocdata<span className="text-cyan-400">.ai</span></span>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-slate-400 font-mono">
            <span>datasolution@vocdatawebvercelapp.com</span>
            <span className="hidden md:inline text-slate-700">|</span>
            <span>Tallinn, Estonia</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all">
              <Linkedin size={18} />
            </a>
            <a href="https://wa.me/50687587740" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all">
              <MessageCircle size={18} />
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
          <p>© 2026 Vocdata.ai. {t({ ES: 'Todos los derechos reservados.', EN: 'All rights reserved.', ET: 'Kõik õigused kaitstud.', DE: 'Alle Rechte vorbehalten.' })}</p>
          <div className="flex gap-6 mt-4 md:mt-0 font-medium">
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">{t({ ES: 'Privacidad', EN: 'Privacy', ET: 'Privaatsus', DE: 'Datenschutz' })}</Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">{t({ ES: 'Términos', EN: 'Terms', ET: 'Tingimused', DE: 'Bedingungen' })}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
