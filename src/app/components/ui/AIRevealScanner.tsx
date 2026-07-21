import React, { useState, useRef } from 'react';
import { motion, useAnimationFrame } from 'motion/react';
import { useLang } from '../../context/LangContext';

export const AIRevealScanner = () => {
  const { t } = useLang();
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeRef = useRef(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  // Auto animation when not hovering
  useAnimationFrame((time, delta) => {
    if (!isHovered) {
      timeRef.current += delta;
      // Oscillate between 20% and 80% smoothly
      const position = 50 + Math.sin(timeRef.current / 2000) * 35;
      setSliderPosition(position);
    }
  });

  return (
    <div className="w-full px-4 md:px-10 py-12">
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-xl max-w-5xl mx-auto h-[450px] select-none cursor-crosshair shadow-2xl"
      >
        {/* Capa Inferior / Datos Crudos (Grayscale / Dim) */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80" 
            alt="Raw Data" 
            className="w-full h-full object-cover grayscale opacity-30"
            draggable="false"
          />
          <div className="absolute bottom-6 right-6 bg-slate-900/80 px-4 py-2 rounded-lg border border-white/10 backdrop-blur-md">
             <p className="text-gray-400 text-[12px] md:text-sm font-mono tracking-widest uppercase">
               {t({ ES: 'Datos Crudos (Raw)', EN: 'Raw Data', ET: 'Toorandmed', DE: 'Rohdaten' })}
             </p>
          </div>
        </div>

        {/* Capa Superior / Datos Etiquetados con IA */}
        <div 
          className="absolute inset-0 z-10"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img 
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80" 
            alt="AI Processed Data" 
            className="w-full h-full object-cover saturate-[1.5] contrast-[1.2] opacity-80"
            draggable="false"
          />
          
          {/* Overlays / Bounding Boxes simulating AI */}
          <div className="absolute inset-0">
            {/* Bounding Box 1 */}
            <div className="absolute top-[20%] left-[15%] w-[25%] h-[45%] border-[1.5px] border-[#06b6d4] shadow-[0_0_20px_rgba(6,182,212,0.4)] rounded-sm bg-[#06b6d4]/5">
               <div className="absolute -top-7 left-[-1.5px] bg-[#06b6d4] text-[#0B1121] text-[11px] font-bold font-mono px-2 py-1 tracking-wider shadow-[0_0_10px_rgba(6,182,212,0.8)]">
                 [Node: 99.8%]
               </div>
            </div>
            {/* Bounding Box 2 */}
            <div className="absolute top-[35%] left-[55%] w-[30%] h-[35%] border-[1.5px] border-[#2ECC71] shadow-[0_0_20px_rgba(46,204,113,0.4)] rounded-sm bg-[#2ECC71]/5">
               <div className="absolute -top-7 left-[-1.5px] bg-[#2ECC71] text-[#0B1121] text-[11px] font-bold font-mono px-2 py-1 tracking-wider shadow-[0_0_10px_rgba(46,204,113,0.8)]">
                 [Cluster: 99.2%]
               </div>
            </div>
            {/* Bounding Box 3 */}
            <div className="absolute top-[10%] right-[10%] w-[12%] h-[20%] border-[1.5px] border-[#4A90D9] shadow-[0_0_20px_rgba(74,144,217,0.4)] rounded-sm bg-[#4A90D9]/5">
               <div className="absolute -top-7 left-[-1.5px] bg-[#4A90D9] text-[#0B1121] text-[11px] font-bold font-mono px-2 py-1 tracking-wider shadow-[0_0_10px_rgba(74,144,217,0.8)]">
                 [Path: 97.4%]
               </div>
            </div>
            
            {/* Semantic Segmentation Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M27.5,42.5 L70,52.5 L84,20 L27.5,42.5 Z" fill="rgba(46,204,113,0.1)" stroke="#2ECC71" strokeWidth="0.2" strokeDasharray="1 1" className="animate-pulse" />
               <circle cx="27.5" cy="42.5" r="0.8" fill="#06b6d4" />
               <circle cx="70" cy="52.5" r="0.8" fill="#2ECC71" />
               <circle cx="84" cy="20" r="0.8" fill="#4A90D9" />
            </svg>
          </div>

          <div className="absolute bottom-6 left-6 bg-[#06b6d4]/10 px-4 py-2 rounded-lg border border-[#06b6d4]/40 backdrop-blur-md">
             <p className="text-[#06b6d4] text-[12px] md:text-sm font-mono tracking-widest uppercase font-bold drop-shadow-[0_0_5px_#06b6d4]">
               {t({ ES: 'Procesamiento IA', EN: 'AI Processing', ET: 'TI Töötlus', DE: 'KI Verarbeitung' })}
             </p>
          </div>
        </div>

        {/* Laser de Escaneo */}
        <div 
          className="absolute top-0 bottom-0 w-[2px] bg-cyan-400 shadow-[0_0_20px_2px_#06b6d4] z-20 pointer-events-none flex flex-col justify-center items-center"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          {/* Handle Central */}
          <div className="w-10 h-10 rounded-full bg-slate-900 border-[2px] border-cyan-400 flex items-center justify-center shadow-[0_0_15px_#06b6d4]">
            <div className="w-[18px] h-[2px] bg-cyan-400 rounded-full" />
            <div className="w-[2px] h-[18px] absolute bg-cyan-400 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
