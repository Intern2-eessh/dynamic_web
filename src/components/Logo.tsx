export const Logo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(15, 0) skewX(-15)">
      {/* Top grey bar */}
      <rect x="20" y="15" width="40" height="18" rx="6" fill="#8492a6"/>
      {/* Middle primary bar */}
      <rect x="20" y="42" width="60" height="20" rx="6" className="fill-primary"/>
      {/* Bottom primary bar */}
      <rect x="20" y="70" width="55" height="20" rx="6" className="fill-primary"/>
    </g>
    {/* Top right primary circle */}
    <circle cx="85" cy="24" r="9" className="fill-primary"/>
  </svg>
);
