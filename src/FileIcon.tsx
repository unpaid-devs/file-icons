import * as React from "react";
import { CATEGORY_COLORS } from "./colors";
import { getExtension, getFileCategory } from "./utils";

export interface FileIconProps extends Omit<
  React.SVGProps<SVGSVGElement>,
  "height" | "width"
> {
  // full file name, extension is read from it
  fileName?: string;
  // or pass extension directly, wins over fileName
  extension?: string;
  // height in px, width follows page ratio
  size?: number;
  // extension text on the icon
  showLabel?: boolean;
}

export function FileIcon({
  fileName = "",
  extension,
  size = 40,
  showLabel = true,
  ...rest
}: FileIconProps) {
  // accepts "dwg" or ".dwg"
  const ext = (extension ?? getExtension(fileName))
    .replace(/^\./, "")
    .toLowerCase();
  const color = CATEGORY_COLORS[getFileCategory(ext)];
  // long extensions are hidden, they do not fit
  const label = showLabel && ext && ext.length <= 4 ? ext.toUpperCase() : "";

  return (
    <svg
      viewBox="0 0 40 48"
      width={(size * 40) / 48}
      height={size}
      role="img"
      aria-label={ext ? `${ext} file` : "file"}
      {...rest}
    >
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
    </svg>
  );
}
