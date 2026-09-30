import React from 'react';

interface LakambaBrandMarkProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
  isAm?: boolean;
  theme?: 'light' | 'dark';
}

export const LakambaBrandMark: React.FC<LakambaBrandMarkProps> = ({
  size = 'md',
  showText = true,
  className = '',
  isAm = false,
  theme = 'light',
}) => {
  const dimensionMap = {
    sm: 38,
    md: 48,
    lg: 60,
    xl: 84,
  };

  const dim = dimensionMap[size];
  const isDark = theme === 'dark';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Lakamba Circular Emblem (Faithful to Provided Identity) */}
      <svg
        width={dim}
        height={dim}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
        role="img"
        aria-label="Lakamba Investment Group Official Crest"
      >
        {/* Orbital Spiral Dot Field */}
        <g opacity="0.8">
          {Array.from({ length: 32 }).map((_, i) => {
            const angle = (i * 11.25 * Math.PI) / 180;
            const r = 62 + (i % 5) * 3;
            const cx = 80 + r * Math.cos(angle);
            const cy = 80 + r * Math.sin(angle);
            const dotR = 1.2 + (i % 4) * 0.6;
            return (
              <circle
                key={`dot-${i}`}
                cx={cx}
                cy={cy}
                r={dotR}
                fill={i % 3 === 0 ? '#C49726' : '#1A2B49'}
                opacity={0.35 + (i % 3) * 0.2}
              />
            );
          })}
        </g>

        {/* Central Circular Badge Container */}
        <circle
          cx="80"
          cy="80"
          r="54"
          fill="#FFFFFF"
          stroke="#152A4A"
          strokeWidth="2.5"
        />

        {/* Stylized Ge'ez 'ለ' Monogram */}
        <g id="geez-symbol">
          {/* Top Bar */}
          <rect x="58" y="42" width="44" height="5.5" rx="2.5" fill="#152A4A" />
          <rect x="88" y="46" width="16" height="5" rx="2" fill="#C49726" />

          {/* Left Leg of 'ለ' */}
          <path
            d="M66 48 L66 69 L55 90"
            stroke="#152A4A"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Right Leg of 'ለ' with Golden Accent */}
          <path
            d="M76 48 L84 69 L95 90"
            stroke="#152A4A"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Middle Connecting Bar */}
          <path
            d="M66 66 L84 66"
            stroke="#152A4A"
            strokeWidth="5.5"
            strokeLinecap="round"
          />

          {/* Golden Horizontal Accent */}
          <path
            d="M84 59 L98 59"
            stroke="#C49726"
            strokeWidth="4.5"
            strokeLinecap="round"
          />

          {/* Bottom Foundation Bar */}
          <rect x="56" y="91" width="48" height="5.5" rx="2.5" fill="#152A4A" />
          <rect x="80" y="95" width="22" height="4" rx="2" fill="#C49726" />
        </g>

        {/* LAKAMBA Name Inside Badge */}
        <text
          x="80"
          y="112"
          textAnchor="middle"
          fill="#152A4A"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="11.5"
          letterSpacing="0.8"
        >
          LAKAMBA
        </text>

        {/* INVSTMENT GROUP Text Inside Badge */}
        <text
          x="80"
          y="121"
          textAnchor="middle"
          fill="#C49726"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="700"
          fontSize="6"
          letterSpacing="0.6"
        >
          INVESTMENT GROUP
        </text>
      </svg>

      {/* Corporate Wordmark Text */}
      {showText && (
        <div className="flex flex-col min-w-0">
          <span
            className={`font-serif-brand font-bold tracking-wider leading-none truncate ${
              isDark ? 'text-white' : 'text-stone-900'
            } ${size === 'sm' ? 'text-sm sm:text-base' : 'text-base sm:text-xl'}`}
          >
            {isAm ? 'ለኻምባ ግሩፕ' : 'LAKAMBA GROUP'}
          </span>
          <span className="text-[9px] sm:text-[10px] font-semibold tracking-widest text-[#936B18] uppercase mt-0.5 sm:mt-1 truncate hidden xs:inline-block">
            {isAm ? 'ኢንቨስትመንት ግሩፕ' : 'INVESTMENT GROUP'}
          </span>
        </div>
      )}
    </div>
  );
};
