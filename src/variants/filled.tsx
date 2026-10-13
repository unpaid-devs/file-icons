import type { VariantProps } from "../types";

export function Filled({ color, label }: VariantProps) {
  return (
    <>
      <path
        d="M6 2h20l10 10v32a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"
        fill={color}
      />
      <path d="M26 2v8a2 2 0 0 0 2 2h8z" fill="#fff" fillOpacity="0.4" />
      {label && (
        <>
          <rect
            x="4"
            y="28"
            width="32"
            height="14"
            fill="#000"
            fillOpacity="0.25"
          />
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
        </>
      )}
    </>
  );
}
