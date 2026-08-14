import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router';
import { useLang, Language } from '../../context/LangContext';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';

const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'ES', label: 'ES' },
  { code: 'EN', label: 'EN' },
  { code: 'ET', label: 'ET' },
  { code: 'DE', label: 'DE' }
];

export const Header = () => {
  const { lang, setLang, t } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { to: '/', translations: { ES: 'Inicio', EN: 'Home', ET: 'Avaleht', DE: 'Startseite' } },
    { to: '/services', translations: { ES: 'Servicios', EN: 'Services', ET: 'Teenused', DE: 'Dienstleistungen' } },
    { to: '/quality', translations: { ES: 'Calidad', EN: 'Quality', ET: 'Kvaliteet', DE: 'Qualität' } },
    { to: '/about', translations: { ES: 'Sobre Nosotros', EN: 'About Us', ET: 'Meist', DE: 'Über uns' } },
    { to: '/blog', translations: { ES: 'Blog', EN: 'Blog', ET: 'Blogi', DE: 'Blog' } },
    { to: '/contact', translations: { ES: 'Contacto', EN: 'Contact', ET: 'Kontakt', DE: 'Kontakt' } },
    { to: '/impact', translations: { ES: 'Responsabilidad Social', EN: 'CSR & Social Impact', ET: 'Sotsiaalne Vastutus', DE: 'Soziale Verantwortung' } },
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-6xl transition-all duration-300">
      <div className="p-[1px] bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.25)]">
        <div className="bg-slate-950/85 backdrop-blur-xl rounded-full px-6 py-2.5 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-brand-primary flex items-center justify-center">
            <span className="text-white font-bold text-xl leading-none">V</span>
          </div>
          <span className="font-bold text-xl text-white tracking-tight">Vocdata<span className="text-cyan-400">.ai</span></span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  'text-sm font-medium transition-colors',
                  isActive ? 'text-cyan-400' : 'text-slate-300 hover:text-cyan-400'
                )
              }
            >
              {t(link.translations)}
            </NavLink>
          ))}
          
          {/* Lang Switcher Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center justify-center gap-1 w-16 h-8 rounded-md border border-gray-200 bg-background-alt text-sm font-semibold hover:border-brand-secondary transition-colors"
            >
              <span className="text-brand-secondary">{lang}</span>
              <ChevronDown size={14} className="text-gray-500" />
            </button>

            {isLangOpen && (
              <div className="absolute top-full right-0 mt-2 w-20 bg-slate-900 border border-slate-800 rounded-md shadow-lg overflow-hidden flex flex-col z-50">
                {LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setIsLangOpen(false);
                    }}
                    className={cn(
                      'px-4 py-2 text-sm text-left font-medium transition-colors hover:bg-slate-800',
                      lang === l.code ? 'text-cyan-400 bg-slate-800' : 'text-slate-300'
                    )}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-slate-200 hover:text-cyan-400 transition-colors p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] p-6 space-y-4">
          <nav className="flex flex-col space-y-1.5 w-full">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 border border-transparent',
                    isActive
                      ? 'text-cyan-400 font-semibold bg-cyan-500/10 border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/5 active:bg-white/10'
                  )
                }
              >
                {t(link.translations)}
              </NavLink>
            ))}
          </nav>
          <div className="my-3 border-t border-white/10 w-full" />
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 block">Idioma / Language</span>
            <div className="flex gap-2">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    setLang(l.code);
                    setIsOpen(false);
                  }}
                  className={cn(
                    'flex items-center justify-center bg-slate-800/80 text-slate-300 border border-white/10 rounded-xl px-3 py-1.5 text-xs font-semibold hover:border-cyan-500/40 transition-colors',
                    lang === l.code && 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                  )}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        )}
      </div>
    </header>
  );
};
