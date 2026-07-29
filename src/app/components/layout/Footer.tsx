import React from 'react';
import { NavLink } from 'react-router';
import { useLang } from '../../context/LangContext';
import { Twitter, Linkedin, Github } from 'lucide-react';

export const Footer = () => {
  const { t } = useLang();

  return (
    <footer className="bg-brand-primary text-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-10 lg:px-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                <span className="text-brand-primary font-bold text-xl leading-none">V</span>
              </div>
              <span className="font-bold text-xl text-white tracking-tight">Vocdata.ai</span>
            </div>
            <p className="text-gray-300 text-sm mb-6 max-w-xs">
              {t('Anotación de datos bilingüe para IA y Machine Learning. Precisión lingüística y cultural en español e inglés.', 'Bilingual data annotation for AI and Machine Learning. Linguistic and cultural precision in Spanish and English.')}
            </p>
            <div className="flex items-center gap-4 text-gray-300">
              <a href="#" className="hover:text-brand-secondary transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-brand-secondary transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-brand-secondary transition-colors"><Github size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">{t('Compañía', 'Company')}</h4>
            <ul className="flex flex-col gap-2 text-gray-300 text-sm">
              <li><NavLink to="/about" className="hover:text-white transition-colors">{t('Sobre Nosotros', 'About Us')}</NavLink></li>
              <li><NavLink to="/quality" className="hover:text-white transition-colors">{t('Calidad', 'Quality')}</NavLink></li>
              <li><NavLink to="/blog" className="hover:text-white transition-colors">{t('Blog', 'Blog')}</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-white transition-colors">{t('Contacto', 'Contact')}</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">{t('Servicios', 'Services')}</h4>
            <ul className="flex flex-col gap-2 text-gray-300 text-sm">
              <li><NavLink to="/services" className="hover:text-white transition-colors">{t('Anotación de Texto', 'Text Annotation')}</NavLink></li>
              <li><NavLink to="/services" className="hover:text-white transition-colors">{t('Anotación de Audio', 'Audio Annotation')}</NavLink></li>
              <li><NavLink to="/services" className="hover:text-white transition-colors">{t('Anotación de Video', 'Video Annotation')}</NavLink></li>
              <li><NavLink to="/services" className="hover:text-white transition-colors">{t('RLHF', 'RLHF')}</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">{t('Contacto', 'Contact')}</h4>
            <ul className="flex flex-col gap-2 text-gray-300 text-sm">
              <li>datasolution@vocdatawebvercelapp.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Tallinn, Estonia</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Vocdata.ai. {t('Todos los derechos reservados.', 'All rights reserved.')}</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">{t('Privacidad', 'Privacy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('Términos', 'Terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
