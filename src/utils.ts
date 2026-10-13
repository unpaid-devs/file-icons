import { EXTENSIONS } from "./extensions";
import type { FileCategory } from "./types";

// flip extensions into ext -> category lookup
const EXT_TO_CATEGORY: Record<string, FileCategory> = {};
for (const [cat, exts] of Object.entries(EXTENSIONS)) {
  for (const ext of exts) EXT_TO_CATEGORY[ext] = cat as FileCategory;
}

// last dot wins, no extension gives empty string
export const getExtension = (fileName: string): string => {
  const i = fileName.lastIndexOf(".");
  return i > -1 ? fileName.slice(i + 1).toLowerCase() : "";
};

// unknown extensions fall back to other
export const getFileCategory = (ext: string): FileCategory =>
  EXT_TO_CATEGORY[ext.toLowerCase()] ?? "other";
