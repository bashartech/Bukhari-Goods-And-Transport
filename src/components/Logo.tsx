import React from 'react';
import { IMAGES } from '../assets/images';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showSubtitle = true,
  className = '',
}) => {
  const avatarSize = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  }[size];

  const titleSize = {
    sm: 'text-sm font-bold',
    md: 'text-base sm:text-lg font-extrabold',
    lg: 'text-xl sm:text-2xl font-black',
  }[size];

  const subSize = {
    sm: 'text-[10px]',
    md: 'text-xs',
    lg: 'text-xs tracking-wider',
  }[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Brand Emblem with Owner Pir Rehan Shah's photo integrated */}
      <div className="relative shrink-0 group">
        <div className={`relative ${avatarSize} rounded-full p-[2px] bg-gradient-to-tr from-amber-500 via-amber-300 to-amber-600 shadow-md shadow-amber-500/25`}>
          <img
            src={IMAGES.owner}
            alt="Pir Rehan Shah - Proprietor Bukhari Goods and Transport"
            className="w-full h-full object-cover rounded-full"
            loading="eager"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Small gold tractor badge on bottom right of the owner photo */}
        <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-slate-950 border border-amber-400 flex items-center justify-center text-amber-400 shadow-xs">
          <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
            <path d="M19 16c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 1c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm12-7h-3V6h-4v4H7.5c-.83 0-1.5.67-1.5 1.5V14h1.1c.42-.61 1.11-1 1.9-1s1.48.39 1.9 1h3.2c.42-1.72 1.94-3 3.9-3 1.96 0 3.48 1.28 3.9 3H23v-3.5c0-.83-.67-1.5-1-1.5z" />
          </svg>
        </div>
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <span className={`${titleSize} tracking-tight text-white leading-tight`}>
          Bukhari Goods &amp; Transport
        </span>
        {showSubtitle && (
          <span className={`${subSize} font-medium text-amber-400 uppercase tracking-wide flex items-center gap-1`}>
            <span>Tractor Trolley Service</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-300">Pir Rehan Shah</span>
          </span>
        )}
      </div>
    </div>
  );
};
