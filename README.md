# @unpaid-devs/file-icons

File type icons for React. Inline SVG, no icon library, no image files. Only peer dependency is React.

Each icon is a page with the file extension on it, colored by category. Unknown extensions get a grey icon, nothing breaks.

## Install

```bash
pnpm add @unpaid-devs/file-icons
```

## Usage

```tsx
import { FileIcon } from '@unpaid-devs/file-icons';

<FileIcon fileName="site-plan.dwg" />
<FileIcon extension="rvt" size={26} />
<FileIcon fileName="notes.txt" variant="outlined" />
<FileIcon fileName="notes.txt" showLabel={false} />
```

No hooks, no browser APIs. Works in server and client components.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `fileName` | `string` | `''` | Full file name, extension is read from it |
| `extension` | `string` | | With or without dot, wins over `fileName` |
| `variant` | `'filled' \| 'outlined' \| 'outlined-flush'` | `'filled'` | Icon style |
| `size` | `number` | `40` | Height in px, width follows page ratio |
| `showLabel` | `boolean` | `true` | Extension text on the icon |

Any other SVG prop (`className`, `style`, `onClick`) goes to the `<svg>`.

Labels hide when the extension is longer than 4 characters.

## Variants

- `filled`: colored page with a dark label bar
- `outlined`: outline with a colored label bar, gap under the bar
- `outlined-flush`: outline with the label bar attached to the page bottom

## Helpers

```ts
import { getExtension, getFileCategory, CATEGORY_COLORS, EXTENSIONS } from '@unpaid-devs/file-icons';

getExtension('Plan.Final.DWG'); // 'dwg'
getFileCategory('dwg'); // 'cad'
CATEGORY_COLORS.cad; // '#0EA5E9'
EXTENSIONS.cad; // ['dwg', 'dxf', ...]
```

`getFileCategory(ext) === 'other'` means the extension has no icon mapping yet.

## Categories

| Category | Examples |
| --- | --- |
| pdf | pdf |
| word | doc, docx, odt, rtf |
| sheet | xls, xlsx, csv, ods |
| slides | ppt, pptx, odp, key |
| text | txt, md, log |
| image | jpg, png, webp, heic, svg |
| design | psd, ai, indd, fig |
| cad | dwg, dxf, dgn, plt |
| bim | ifc, rvt, rfa, nwd, skp |
| model3d | obj, stl, step, fbx, glb |
| schedule | mpp, xer, xml, ics |
| gis | kml, shp, las, e57, geojson |
| video | mp4, mov, avi, mkv |
| audio | mp3, m4a, wav, flac |
| archive | zip, rar, 7z, tar, gz |
| email | msg, eml, pst |
| code | js, ts, py, html, css, sql |
| data | json, yaml, sqlite, parquet |
| ebook | epub, mobi, djvu |
| font | ttf, otf, woff, woff2 |
| app | exe, msi, apk, dmg |
| other | everything else |

Full list is in `src/extensions.ts`.

## Adding an extension

Add it to a category in `src/extensions.ts`, without the dot. One extension belongs to one category.

A new category needs three edits: `src/types.ts`, `src/colors.ts`, `src/extensions.ts`. TypeScript errors if one is missed.

## Adding a variant

1. Add the name to `FileIconVariant` in `src/types.ts`
2. Create `src/variants/<name>.tsx`
3. Register it in `VARIANTS` in `src/FileIcon.tsx`

## Development

```bash
pnpm install
pnpm dev        # rebuild on change
pnpm typecheck
pnpm build
pnpm pack       # test the exact tarball that gets published
```

## License

MIT