import type { FileCategory } from "./types";

// every category needs a color, ts errors if one is missing
export const CATEGORY_COLORS: Record<FileCategory, string> = {
  pdf: "#E5252A",
  word: "#2B579A",
  sheet: "#217346",
  slides: "#D24726",
  text: "#6B7280",
  image: "#8B5CF6",
  design: "#D946EF",
  cad: "#0EA5E9",
  bim: "#14B8A6",
  model3d: "#6366F1",
  schedule: "#F59E0B",
  gis: "#65A30D",
  video: "#EC4899",
  audio: "#F97316",
  archive: "#A16207",
  email: "#3B82F6",
  code: "#334155",
  data: "#0E7490",
  ebook: "#7E22CE",
  font: "#9D174D",
  app: "#44403C",
  other: "#6B7280",
};
