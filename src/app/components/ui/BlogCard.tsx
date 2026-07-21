import React from 'react';

interface BlogCardProps {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  imageUrl: string;
  readMoreText: string;
}

export const BlogCard = ({ title, date, category, excerpt, imageUrl, readMoreText }: BlogCardProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col transition-all hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] group">
      <div className="h-48 overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3 text-sm">
          <span className="text-brand-secondary font-medium bg-background-alt px-2 py-1 rounded">{category}</span>
          <span className="text-foreground-tertiary">{date}</span>
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-3 leading-tight group-hover:text-brand-secondary transition-colors">
          {title}
        </h3>
        <p className="text-foreground-secondary mb-4 flex-grow line-clamp-3">
          {excerpt}
        </p>
        <button className="text-brand-secondary font-semibold flex items-center gap-2 hover:gap-3 transition-all self-start mt-auto">
          {readMoreText} <span aria-hidden="true">&rarr;</span>
        </button>
      </div>
    </div>
  );
};
