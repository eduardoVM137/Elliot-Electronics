# Eliot Electronics Web Architecture

## Vision

Eliot Electronics is structured as a premium B2B engineering website, not a simple solar landing page. The information architecture treats every business portfolio as a different product experience while sharing a single visual system, navigation model and content/data layer.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- shadcn/ui-style primitives
- Recharts for static dashboards and simulation visuals
- Static export, no database, no unnecessary API layer

## Folder Model

```txt
src/
  app/             Route segments, metadata and page composition
  components/      Reusable UI primitives, navigation and visual atoms
  modules/         Product-specific experiences and complex widgets
  sections/        Page sections shared across routes
  layouts/         Global page shell
  data/            Static structured content
  lib/             Utilities and site constants
  hooks/           Client hooks
  styles/          Global CSS and design tokens
public/            Static assets
docs/              Architecture and UX notes
```

## Naming Conventions

- Route folders use lowercase Spanish slugs: `soluciones/energia`.
- Reusable primitives live in `src/components/ui`.
- Product-specific components live in `src/modules/<portfolio>`.
- Cross-page marketing sections live in `src/sections`.
- Static content is typed and centralized in `src/data`.

## Visual System

The visual language follows a dark industrial premium system:

- Base: blue-black, deep navy and low-contrast technical surfaces.
- Accent: electric blue and cyan glow for active states, CTAs, charts and technical lines.
- Surface: subtle glass panels with 8px radius, thin borders and restrained blur.
- Motion: soft reveal, animated technical line, hover scale on image panels.
- Typography: large dominant headlines, compact panel text, no decorative type effects.
- Imagery: industrial, solar, dashboard, hardware and executive visuals.

## Navigation Flow

```txt
Home
  -> Soluciones
     -> Energia
     -> Ingenieria
     -> Sistemas
     -> Electronica
     -> Consultoria
     -> Helpdesk
  -> Proyectos
     -> Proyecto individual
  -> Nosotros
  -> Contacto
```

## Home UX Wireframe

```txt
[ Cinematic Hero ]
  headline / story / CTA primary / CTA secondary
  proof tiles

[ Problem ]
  4 cards: cost, efficiency, integration, reactive operation

[ Eliot Approach ]
  Consulting -> Engineering -> Implementation -> Helpdesk
  animated line

[ Business Portfolios ]
  6 large image cards

[ Case Studies ]
  3 project cards

[ Metrics ]
  operational proof strip

[ Final CTA ]
```

## Product Page UX

### Energia

Solar financial product. Includes hero, proof, system benefits, embedded simulator, ROI chart, system type cards and solar projects.

### Ingenieria

Technical authority product. Includes process logic, problem-to-diagnosis-to-solution flow, capability matrix and industrial projects.

### Sistemas

Control center product. Includes SaaS-like tabs, KPIs, monitoring charts, alerts, data flow and modules.

### Electronica

Hardware product. Includes physical board/gabinet language, component cards, electrical flow diagram and implementation CTA.

### Consultoria

Executive strategy product. Includes roadmap, report cards, ROI charts, business impact and governance language.

### Helpdesk

Continuity product. Includes uptime, ticket queue, SLA cards, alert severity and support dashboards.

## Extensibility

To add a new business line:

1. Add a typed entry in `src/data/solutions.ts`.
2. Add route folder under `src/app/soluciones/<slug>`.
3. Create product widgets under `src/modules/<slug>`.
4. Reuse `SolutionHero`, `ProofStrip`, `SolutionFeatureGrid` and `FinalCta`.
5. Add navigation entry in `src/data/navigation.ts`.

To add a new project:

1. Add a typed entry in `src/data/projects.ts`.
2. The project list and static detail page are generated automatically.

## Starter Layout

The global `SiteShell` wraps all routes with:

- Sticky premium navbar
- Shared footer
- Dark visual background
- Static route content

This keeps portfolio pages independent while maintaining brand consistency.
