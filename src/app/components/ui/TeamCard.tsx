import React from 'react';

interface TeamCardProps {
  name: string;
  role: string;
  imageUrl: string;
}

export const TeamCard = ({ name, role, imageUrl }: TeamCardProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
      <div className="w-[120px] h-[120px] rounded-full overflow-hidden mb-4 border-4 border-background-alt grayscale hover:grayscale-0 transition-all duration-300">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-1">{name}</h3>
      <p className="text-brand-secondary text-sm font-medium">{role}</p>
    </div>
  );
};
