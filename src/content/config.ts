// Content collection schemas for the coachbook archive.
//
// The Markdown lives at the repo root (models/, designers/, …) rather than
// under src/content/, so we use Astro's `glob` loader to point at those
// directories directly. This preserves the project's directory layout
// (PLAN.md "Data model" section).
//
// Schemas mirror the frontmatter rules in STYLE.md §5 and the per-category
// fields documented in PLAN.md. They are permissive enough to validate
// every entry currently in-tree; tighten them as the archive grows.

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// --- Shared primitives ------------------------------------------------------

const status = z.enum(['draft', 'published', 'stub']);

const confidence = z.enum([
  'confirmed',
  'likely',
  'tentative',
  'disputed',
  // `mixed` shows up on aggregate entries (e.g. timeline) where individual
  // claims carry their own tags. STYLE.md §3 only enumerates the four core
  // values, but the timeline entry uses `mixed` as a rollup; allow it here
  // and tighten later if we want to drop it.
  'mixed',
  // Meta-pages that don't bear claims of their own. `log` is for change-
  // logs and bibliographies; `framework` is for structural index pages
  // where individual children carry their own confidence tags.
  'log',
  'framework',
]);

// Eras: STYLE.md prescribes E1–E5 codes, but several existing entries use
// human-readable era names ("classic-nyc", "cashin"). Accept either form
// for now; a future cleanup pass can normalize on the codes.
const era = z.union([
  z.enum(['E1', 'E2', 'E3', 'E4', 'E5']),
  z.enum([
    'pre-cashin',
    'cashin',
    'classic-nyc',
    'transition',
    'krakoff',
  ]),
  z.string(), // permissive fallback
]);

// Models and designers use `name`; authentication and history pages use
// `title`. The schema below requires at least one to be present (see
// `requireNameOrTitle` refinement).

const yearOrString = z.union([z.number(), z.string()]);

const factsBlock = z
  .array(
    z.object({
      claim: z.string(),
      confidence: confidence,
      sources: z.array(z.string()),
      notes: z.string().optional(),
    }),
  )
  .optional();

const baseFields = {
  // human-readable identity — see nameOrTitle refinement below
  name: z.string().optional(),
  title: z.string().optional(),
  slug: z.string(),
  status: status,
  confidence: confidence,
  sources: z.array(z.string()),
  facts: factsBlock,
};

// Refine: require at least one of name or title.
const requireNameOrTitle = <T extends { name?: string; title?: string }>(
  data: T,
  ctx: z.RefinementCtx,
) => {
  if (!data.name && !data.title) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'Entry must have either `name` or `title`.',
    });
  }
};

// --- Models -----------------------------------------------------------------

const variantSchema = z.object({
  name: z.string(),
  style_number: z.string().optional(),
  description: z.string().optional(),
});

const dimensionsSchema = z
  .object({
    width: z.union([z.number(), z.string()]).optional(),
    height: z.union([z.number(), z.string()]).optional(),
    depth: z.union([z.number(), z.string()]).optional(),
    // Original PLAN.md sketch used { w, h, d } shorthand; keep both.
    w: z.union([z.number(), z.string()]).optional(),
    h: z.union([z.number(), z.string()]).optional(),
    d: z.union([z.number(), z.string()]).optional(),
  })
  .passthrough();

const models = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './models' }),
  schema: z
    .object({
      ...baseFields,
      style_numbers: z.array(z.string()).optional(),
      also_known_as: z.array(z.string()).optional(),
      introduced: yearOrString.optional(),
      introduced_confidence: confidence.optional(),
      discontinued: yearOrString.optional(),
      discontinued_confidence: confidence.optional(),
      era: era.optional(),
      designer: z.string().optional(),
      designer_confidence: confidence.optional(),
      dimensions_in: dimensionsSchema.optional(),
      dimensions_confidence: confidence.optional(),
      closure: z.string().optional(),
      strap: z.string().optional(),
      hardware: z.string().optional(),
      hardware_confidence: confidence.optional(),
      variants: z.array(z.union([variantSchema, z.string()])).optional(),
      colors_known: z.array(z.string()).optional(),
      related: z.array(z.string()).optional(),
      // Some entries (e.g. bleecker-satchel) flag whether a model is a
      // contrast/boundary marker rather than a deep-dive (PLAN.md scope).
      era_role: z.string().optional(),
      // The authentication block has highly variable per-model shape
      // (PLAN.md §12 example uses a different shape than willis.md).
      // Keep permissive; tighten per-feature as the archive grows.
      authentication: z.record(z.unknown()).optional(),
    })
    .passthrough()
    .superRefine(requireNameOrTitle),
});

// --- Designers --------------------------------------------------------------

const designers = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './designers' }),
  schema: z
    .object({
      ...baseFields,
      // Dates in ISO form (YYYY-MM-DD) or year-only string per STYLE.md §5.
      born: z.union([z.coerce.date(), z.string()]).optional(),
      died: z.union([z.coerce.date(), z.string()]).optional(),
      // Tenure fields: STYLE.md §5 names them tenure_start/tenure_end;
      // bonnie-cashin.md uses coach_tenure_start/coach_tenure_end. Accept both.
      tenure_start: z.union([z.number(), z.string()]).optional(),
      tenure_end: z.union([z.number(), z.string()]).optional(),
      coach_tenure_start: z.union([z.number(), z.string()]).optional(),
      coach_tenure_end: z.union([z.number(), z.string()]).optional(),
      employment_status: z.string().optional(),
      role: z.string().optional(),
    })
    .passthrough()
    .superRefine(requireNameOrTitle),
});

// --- Authentication ---------------------------------------------------------

const authentication = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './authentication' }),
  schema: z
    .object({
      ...baseFields,
      feature: z
        .enum([
          'creed',
          'serial',
          'hangtag',
          'hardware',
          'zipper',
          'leather',
          'stitching',
          'lining',
          'construction',
          'country',
          'packaging',
        ])
        .optional(),
      // Existing entries use `covers_eras` (creed-formats.md). STYLE.md
      // also documents `era_coverage`. Accept either spelling.
      covers_eras: z.array(era).optional(),
      era_coverage: z.array(era).optional(),
    })
    .passthrough()
    .superRefine(requireNameOrTitle),
});

// --- History ----------------------------------------------------------------

const history = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './history' }),
  schema: z
    .object({
      ...baseFields,
      // timeline.md uses `covers_years: 1941-2002` — a string, not a range
      // object. Accept either form.
      covers_years: z
        .union([
          z.string(),
          z.object({ start: z.number(), end: z.number() }),
        ])
        .optional(),
    })
    .passthrough()
    .superRefine(requireNameOrTitle),
});

// --- Catalogs ---------------------------------------------------------------

const catalogs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './catalogs' }),
  schema: z
    .object({
      ...baseFields,
      year: z.number().optional(),
      season: z.enum(['spring', 'fall', 'resort', 'holiday']).optional(),
      publisher: z.string().optional(),
      images: z.array(z.string()).optional(),
      rights: z
        .enum(['third-party', 'brand', 'fair-use-commentary', 'public-domain'])
        .optional(),
    })
    .passthrough()
    .superRefine(requireNameOrTitle),
});

// --- Colors -----------------------------------------------------------------

const colors = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './colors' }),
  schema: z
    .object({
      ...baseFields,
      era_introduced: era.optional(),
      swatch_image: z.string().optional(),
      seen_on: z.array(z.string()).optional(),
    })
    .passthrough()
    .superRefine(requireNameOrTitle),
});

// --- Creed formats ----------------------------------------------------------

const creedFormats = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './creed-formats' }),
  schema: z
    .object({
      ...baseFields,
      era: era.optional(),
      year_range: z.object({ start: z.number(), end: z.number() }).optional(),
      exact_text: z.string().optional(),
      country_of_origin: z.string().optional(),
    })
    .passthrough()
    .superRefine(requireNameOrTitle),
});

// --- Export -----------------------------------------------------------------

export const collections = {
  models,
  designers,
  authentication,
  history,
  catalogs,
  colors,
  'creed-formats': creedFormats,
};
