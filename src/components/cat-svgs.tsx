export function CodingCat({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Cat body */}
      <ellipse cx="50" cy="65" rx="25" ry="20" fill="#6B7280" />
      {/* Cat head */}
      <circle cx="50" cy="35" r="20" fill="#6B7280" />
      {/* Ears */}
      <path d="M35 25 L30 15 L40 20 Z" fill="#6B7280" />
      <path d="M65 25 L70 15 L60 20 Z" fill="#6B7280" />
      <path d="M35 22 L32 17 L38 19 Z" fill="#F3F4F6" />
      <path d="M65 22 L68 17 L62 19 Z" fill="#F3F4F6" />
      {/* Eyes */}
      <circle cx="43" cy="32" r="3" fill="#1F2937" />
      <circle cx="57" cy="32" r="3" fill="#1F2937" />
      <circle cx="44" cy="31" r="1" fill="#F9FAFB" />
      <circle cx="58" cy="31" r="1" fill="#F9FAFB" />
      {/* Nose */}
      <path d="M50 38 L47 41 L53 41 Z" fill="#EC4899" />
      {/* Mouth */}
      <path d="M50 41 Q45 45 40 43" stroke="#1F2937" strokeWidth="1" fill="none" />
      <path d="M50 41 Q55 45 60 43" stroke="#1F2937" strokeWidth="1" fill="none" />
      {/* Laptop */}
      <rect x="35" y="75" width="30" height="15" rx="2" fill="#374151" />
      <rect x="37" y="77" width="26" height="11" fill="#111827" />
      {/* Code lines */}
      <line x1="39" y1="80" x2="45" y2="80" stroke="#10B981" strokeWidth="1" />
      <line x1="39" y1="82" x2="50" y2="82" stroke="#10B981" strokeWidth="1" />
      <line x1="39" y1="84" x2="47" y2="84" stroke="#10B981" strokeWidth="1" />
      {/* Tail */}
      <path d="M25 65 Q15 55 20 45" stroke="#6B7280" strokeWidth="8" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export function ServerCat({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Server rack */}
      <rect x="20" y="60" width="60" height="30" rx="3" fill="#374151" />
      <rect x="22" y="62" width="56" height="6" fill="#1F2937" />
      <rect x="22" y="70" width="56" height="6" fill="#1F2937" />
      <rect x="22" y="78" width="56" height="6" fill="#1F2937" />
      {/* Server lights */}
      <circle cx="25" cy="65" r="1.5" fill="#10B981" />
      <circle cx="29" cy="65" r="1.5" fill="#EF4444" />
      <circle cx="25" cy="73" r="1.5" fill="#10B981" />
      <circle cx="29" cy="73" r="1.5" fill="#10B981" />
      <circle cx="25" cy="81" r="1.5" fill="#F59E0B" />
      <circle cx="29" cy="81" r="1.5" fill="#10B981" />

      {/* Cat sitting on server */}
      <ellipse cx="50" cy="50" rx="18" ry="15" fill="#6B7280" />
      <circle cx="50" cy="30" r="15" fill="#6B7280" />
      {/* Ears */}
      <path d="M38 20 L33 12 L43 17 Z" fill="#6B7280" />
      <path d="M62 20 L67 12 L57 17 Z" fill="#6B7280" />
      <path d="M38 18 L35 14 L41 16 Z" fill="#F3F4F6" />
      <path d="M62 18 L65 14 L59 16 Z" fill="#F3F4F6" />
      {/* Eyes - sleepy */}
      <path d="M40 27 Q43 25 46 27" stroke="#1F2937" strokeWidth="2" fill="none" />
      <path d="M54 27 Q57 25 60 27" stroke="#1F2937" strokeWidth="2" fill="none" />
      {/* Nose */}
      <path d="M50 33 L47 36 L53 36 Z" fill="#EC4899" />
      {/* Tail wrapped around */}
      <path d="M68 50 Q75 40 70 30 Q65 25 60 30" stroke="#6B7280" strokeWidth="6" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export function MonitoringCat({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Cat body */}
      <ellipse cx="50" cy="70" rx="20" ry="15" fill="#6B7280" />
      {/* Cat head */}
      <circle cx="50" cy="45" r="18" fill="#6B7280" />
      {/* Ears */}
      <path d="M35 30 L30 20 L40 25 Z" fill="#6B7280" />
      <path d="M65 30 L70 20 L60 25 Z" fill="#6B7280" />
      <path d="M35 28 L32 23 L38 25 Z" fill="#F3F4F6" />
      <path d="M65 28 L68 23 L62 25 Z" fill="#F3F4F6" />
      {/* Eyes - focused */}
      <ellipse cx="42" cy="42" rx="4" ry="5" fill="#1F2937" />
      <ellipse cx="58" cy="42" rx="4" ry="5" fill="#1F2937" />
      <circle cx="43" cy="40" r="1" fill="#F9FAFB" />
      <circle cx="59" cy="40" r="1" fill="#F9FAFB" />
      {/* Nose */}
      <path d="M50 48 L47 51 L53 51 Z" fill="#EC4899" />
      {/* Dashboard/Monitor */}
      <rect x="15" y="15" width="25" height="15" rx="2" fill="#1F2937" />
      <rect x="17" y="17" width="21" height="11" fill="#111827" />
      {/* Graph lines */}
      <polyline points="18,25 22,20 26,23 30,18 34,22 36,19" stroke="#10B981" strokeWidth="1" fill="none" />
      <polyline points="18,27 20,24 24,26 28,21 32,25 36,23" stroke="#EF4444" strokeWidth="1" fill="none" />
      {/* Paw pointing */}
      <ellipse cx="35" cy="55" rx="4" ry="6" fill="#6B7280" transform="rotate(-30 35 55)" />
      {/* Tail */}
      <path d="M30 70 Q20 60 25 50" stroke="#6B7280" strokeWidth="6" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export function CloudCat({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Clouds */}
      <ellipse cx="25" cy="25" rx="12" ry="8" fill="#E5E7EB" />
      <ellipse cx="35" cy="20" rx="10" ry="6" fill="#E5E7EB" />
      <ellipse cx="75" cy="30" rx="15" ry="10" fill="#E5E7EB" />
      <ellipse cx="85" cy="25" rx="8" ry="5" fill="#E5E7EB" />

      {/* Cat floating on cloud */}
      <ellipse cx="50" cy="55" rx="20" ry="15" fill="#6B7280" />
      <circle cx="50" cy="35" r="15" fill="#6B7280" />
      {/* Ears */}
      <path d="M38 25 L33 17 L43 22 Z" fill="#6B7280" />
      <path d="M62 25 L67 17 L57 22 Z" fill="#6B7280" />
      <path d="M38 23 L35 19 L41 21 Z" fill="#F3F4F6" />
      <path d="M62 23 L65 19 L59 21 Z" fill="#F3F4F6" />
      {/* Eyes - content */}
      <path d="M40 32 Q43 30 46 32" stroke="#1F2937" strokeWidth="2" fill="none" />
      <path d="M54 32 Q57 30 60 32" stroke="#1F2937" strokeWidth="2" fill="none" />
      {/* Nose */}
      <path d="M50 38 L47 41 L53 41 Z" fill="#EC4899" />
      {/* Cloud platform */}
      <ellipse cx="50" cy="65" rx="25" ry="8" fill="#F3F4F6" />
      {/* Tail */}
      <path d="M70 55 Q80 45 75 35" stroke="#6B7280" strokeWidth="6" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export function CuriousCat({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Cat body */}
      <ellipse cx="40" cy="55" rx="18" ry="12" fill="#6B7280" />
      {/* Cat head */}
      <circle cx="40" cy="35" r="15" fill="#6B7280" />
      {/* Ears */}
      <path d="M28 25 L23 15 L33 20 Z" fill="#6B7280" />
      <path d="M52 25 L57 15 L47 20 Z" fill="#6B7280" />
      <path d="M28 23 L25 18 L31 20 Z" fill="#F3F4F6" />
      <path d="M52 23 L55 18 L49 20 Z" fill="#F3F4F6" />
      {/* Eyes - wide and curious */}
      <circle cx="35" cy="32" r="4" fill="#1F2937" />
      <circle cx="45" cy="32" r="4" fill="#1F2937" />
      <circle cx="36" cy="30" r="1.5" fill="#F9FAFB" />
      <circle cx="46" cy="30" r="1.5" fill="#F9FAFB" />
      {/* Nose */}
      <path d="M40 38 L37 41 L43 41 Z" fill="#EC4899" />
      {/* Mouth - slight smile */}
      <path d="M40 41 Q35 44 32 42" stroke="#1F2937" strokeWidth="1" fill="none" />
      <path d="M40 41 Q45 44 48 42" stroke="#1F2937" strokeWidth="1" fill="none" />
      {/* Tail - upright and alert */}
      <path d="M58 55 Q65 45 62 30 Q60 25 58 20" stroke="#6B7280" strokeWidth="5" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export function DeploymentCat({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Cat body */}
      <ellipse cx="50" cy="70" rx="22" ry="18" fill="#6B7280" />
      {/* Cat head */}
      <circle cx="50" cy="40" r="18" fill="#6B7280" />
      {/* Ears */}
      <path d="M35 28 L30 18 L40 23 Z" fill="#6B7280" />
      <path d="M65 28 L70 18 L60 23 Z" fill="#6B7280" />
      <path d="M35 26 L32 21 L38 23 Z" fill="#F3F4F6" />
      <path d="M65 26 L68 21 L62 23 Z" fill="#F3F4F6" />
      {/* Eyes - confident */}
      <ellipse cx="42" cy="37" rx="3" ry="4" fill="#1F2937" />
      <ellipse cx="58" cy="37" rx="3" ry="4" fill="#1F2937" />
      <circle cx="43" cy="35" r="1" fill="#F9FAFB" />
      <circle cx="59" cy="35" r="1" fill="#F9FAFB" />
      {/* Nose */}
      <path d="M50 43 L47 46 L53 46 Z" fill="#EC4899" />
      {/* Mouth - slight smile */}
      <path d="M50 46 Q45 49 42 47" stroke="#1F2937" strokeWidth="1" fill="none" />
      <path d="M50 46 Q55 49 58 47" stroke="#1F2937" strokeWidth="1" fill="none" />

      {/* Deployment pipeline visualization */}
      {/* Code repository */}
      <rect x="15" y="15" width="12" height="8" rx="1" fill="#374151" />
      <rect x="16" y="16" width="10" height="6" fill="#111827" />
      <line x1="17" y1="18" x2="20" y2="18" stroke="#10B981" strokeWidth="0.5" />
      <line x1="17" y1="19" x2="22" y2="19" stroke="#10B981" strokeWidth="0.5" />
      <line x1="17" y1="20" x2="19" y2="20" stroke="#10B981" strokeWidth="0.5" />

      {/* Arrow to build */}
      <path d="M27 19 L32 19" stroke="#6B7280" strokeWidth="1" markerEnd="url(#arrowhead)" />

      {/* Build/CI */}
      <circle cx="35" cy="19" r="4" fill="#10B981" />
      <path d="M33 19 L35 21 L39 17" stroke="#F9FAFB" strokeWidth="1" fill="none" />

      {/* Arrow to cloud */}
      <path d="M39 19 L44 19" stroke="#6B7280" strokeWidth="1" />

      {/* Cloud (S3 + CloudFront) */}
      <ellipse cx="50" cy="16" rx="8" ry="5" fill="#E5E7EB" />
      <ellipse cx="55" cy="14" rx="6" ry="3" fill="#E5E7EB" />
      <text x="50" y="18" textAnchor="middle" fontSize="4" fill="#374151">
        AWS
      </text>

      {/* Paws on keyboard */}
      <ellipse cx="35" cy="60" rx="3" ry="5" fill="#6B7280" transform="rotate(-20 35 60)" />
      <ellipse cx="65" cy="60" rx="3" ry="5" fill="#6B7280" transform="rotate(20 65 60)" />

      {/* Tail - happy and upright */}
      <path d="M72 70 Q80 60 78 45 Q76 40 74 35" stroke="#6B7280" strokeWidth="5" fill="none" strokeLinecap="round" />

      {/* Arrow marker definition */}
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#6B7280" />
        </marker>
      </defs>
    </svg>
  )
}
