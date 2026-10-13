import * as React from "react";
import { CATEGORY_COLORS } from "./colors";
import type { FileIconVariant, VariantProps } from "./types";
import { getExtension, getFileCategory } from "./utils";
import { Filled } from "./variants/filled";
import { Outlined } from "./variants/outlined";
import { OutlinedFlush } from "./variants/outlined-flush";

// ts errors if a variant is missing
const VARIANTS: Record<FileIconVariant, React.ComponentType<VariantProps>> = {
  filled: Filled,
  outlined: Outlined,
  "outlined-flush": OutlinedFlush,
};

export interface FileIconProps extends Omit<
  React.SVGProps<SVGSVGElement>,
  "height" | "width"
> {
  // full file name
  fileName?: string;
  // wins over fileName
  extension?: string;
  // filled is default
  variant?: FileIconVariant;
  // height in px
  size?: number;
  // extension text on icon
  showLabel?: boolean;
}

export function FileIcon({
  fileName = "",
  extension,
  variant = "filled",
  size = 40,
  showLabel = true,
  ...rest
}: FileIconProps) {
  // accepts "dwg" or ".dwg"
  const ext = (extension ?? getExtension(fileName))
    .replace(/^\./, "")
    .toLowerCase();
  const color = CATEGORY_COLORS[getFileCategory(ext)];
  // long extensions do not fit
  const label = showLabel && ext && ext.length <= 4 ? ext.toUpperCase() : "";
  // bad variant falls back to filled
  const Variant = VARIANTS[variant] ?? Filled;

  return (
    <svg
      viewBox="0 0 40 48"
      width={(size * 40) / 48}
      height={size}
      role="img"
      aria-label={ext ? `${ext} file` : "file"}
      {...rest}
    >
      <Variant color={color} label={label} />
    </svg>
  );
}
