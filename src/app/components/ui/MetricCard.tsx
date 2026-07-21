import React from 'react';

interface MetricCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export const MetricCard = ({ value, label, icon }: MetricCardProps) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col items-center text-center relative overflow-hidden transition-transform hover:-translate-y-1">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-brand-secondary rounded-b-md" />
      {icon && <div className="text-brand-secondary mb-4">{icon}</div>}
      <h3 className="text-[48px] font-bold text-brand-accent leading-tight mb-2">
        {value}
      </h3>
      <p className="text-foreground-secondary text-lg font-medium">
        {label}
      </p>
    </div>
  );
};
