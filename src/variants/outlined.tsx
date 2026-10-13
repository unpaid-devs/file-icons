import type { VariantProps } from '../types';

export function Outlined({ color, label }: VariantProps) {
  return (
    <>
      {/* label bar */}
      {label && <rect x="4" y="28" width="32" height="14" fill={color} />}
      {/* page outline */}
      <path
        d="M6 2h20l10 10v32a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* folded corner */}
      <path d="M26 2v8a2 2 0 0 0 2 2h8" fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
      {label && (
        <text
          x="20"
          y="38.5"
          textAnchor="middle"
          fontSize="9"
          fontWeight="700"
          fontFamily="system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
          fill="#fff"
        >
          {label}
        </text>
      )}
    </>
  );
}