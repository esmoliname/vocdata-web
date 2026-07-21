import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col items-start transition-all hover:shadow-lg hover:-translate-y-1 group">
      <div className="w-12 h-12 rounded-lg bg-background-alt text-brand-secondary flex items-center justify-center mb-6 group-hover:bg-brand-secondary group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold text-foreground mb-3">
        {title}
      </h3>
      <p className="text-foreground-secondary leading-relaxed">
        {description}
      </p>
    </div>
  );
};
