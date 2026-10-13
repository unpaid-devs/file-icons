import type { FileCategory } from './types';

// add new extensions here, without the dot
// one extension in one category only, last one wins if repeated
export const EXTENSIONS: Record<FileCategory, string[]> = {
  pdf: ['pdf'],
  word: ['doc', 'docx', 'docm', 'dot', 'dotx', 'odt', 'rtf', 'pages', 'wps'],
  sheet: ['xls', 'xlsx', 'xlsm', 'xlsb', 'xlt', 'xltx', 'csv', 'tsv', 'ods', 'numbers'],
  slides: ['ppt', 'pptx', 'pptm', 'pps', 'ppsx', 'odp', 'key'],
  text: ['txt', 'md', 'markdown', 'log'],
  image: ['jpg', 'jpeg', 'jfif', 'png', 'webp', 'heic', 'heif', 'tif', 'tiff', 'bmp', 'gif', 'avif', 'ico', 'svg', 'jp2', 'cr2', 'nef', 'arw', 'dng'],
  design: ['psd', 'ai', 'indd', 'xd', 'fig', 'sketch', 'eps', 'cdr', 'afdesign', 'afphoto'],

  // drawings and mechanical cad
  cad: ['dwg', 'dxf', 'dwf', 'dwfx', 'dgn', 'plt', 'dwt', 'dws', 'vwx', 'sldprt', 'sldasm', 'slddrw', 'ipt', 'iam', 'idw', 'f3d'],

  // building models
  bim: ['ifc', 'ifczip', 'ifcxml', 'rvt', 'rfa', 'rte', 'rft', 'nwd', 'nwc', 'nwf', 'skp', 'bcf', 'bcfzip', 'pln', 'pla'],

  // general 3d and exchange formats
  model3d: ['obj', 'stl', 'step', 'stp', 'iges', 'igs', '3ds', 'fbx', 'dae', 'glb', 'gltf', 'blend', 'ply', '3dm', 'sat', 'c4d', 'max', 'ma', 'mb'],

  // xml stays here, primavera and ms project exports use it
  schedule: ['mpp', 'mpt', 'xer', 'xml', 'pmxml', 'ics'],

  // survey, gis and point clouds
  gis: ['kml', 'kmz', 'gpx', 'shp', 'shx', 'dbf', 'prj', 'las', 'laz', 'e57', 'geojson', 'gml', 'gpkg', 'mif', 'osm', 'pts', 'ptx', 'rcp', 'rcs', 'xyz'],

  video: ['mp4', 'mov', 'avi', 'mkv', 'wmv', 'webm', 'flv', 'm4v', 'mpg', 'mpeg', '3gp', 'mts', 'm2ts'],
  audio: ['mp3', 'm4a', 'wav', 'flac', 'ogg', 'aac', 'wma', 'aiff', 'opus', 'amr'],
  archive: ['zip', 'zipx', 'rar', '7z', 'tar', 'gz', 'tgz', 'bz2', 'xz', 'iso', 'cab'],
  email: ['msg', 'eml', 'emlx', 'pst', 'ost', 'mbox'],
  code: ['js', 'jsx', 'mjs', 'cjs', 'ts', 'tsx', 'py', 'java', 'kt', 'c', 'h', 'cpp', 'hpp', 'cs', 'go', 'rs', 'php', 'rb', 'swift', 'sh', 'bat', 'ps1', 'sql', 'html', 'htm', 'css', 'scss', 'vue'],
  data: ['json', 'jsonl', 'ndjson', 'yaml', 'yml', 'toml', 'ini', 'db', 'sqlite', 'sqlite3', 'mdb', 'accdb', 'parquet'],
  ebook: ['epub', 'mobi', 'azw', 'azw3', 'fb2', 'djvu'],
  font: ['ttf', 'otf', 'woff', 'woff2', 'eot'],
  app: ['exe', 'msi', 'apk', 'ipa', 'dmg', 'pkg', 'deb', 'rpm', 'jar'],
  other: []
};