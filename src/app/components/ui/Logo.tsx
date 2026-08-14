import React from 'react';
import { cn } from '../../utils/cn';

export const Logo = ({ className }: { className?: string }) => (
  <img
    src="/images/logo.jpg"
    alt="Vocdata.ai Logo"
    loading="eager"
    decoding="async"
    className={cn('object-contain rounded-full', className)}
  />
);