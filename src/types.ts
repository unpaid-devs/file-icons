export type FileCategory =
  | 'pdf'
  | 'word'
  | 'sheet'
  | 'slides'
  | 'text'
  | 'image'
  | 'design'
  | 'cad'
  | 'bim'
  | 'model3d'
  | 'schedule'
  | 'gis'
  | 'video'
  | 'audio'
  | 'archive'
  | 'email'
  | 'code'
  | 'data'
  | 'ebook'
  | 'font'
  | 'app'
  | 'other';

export type FileIconVariant = 'filled' | 'outlined' | 'outlined-flush';

// what every variant file receives
export interface VariantProps {
  color: string;
  label: string;
}