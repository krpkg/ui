# @krpkg/ui

Cyber-minimalist design system and React component library tailored for web applications, Tauri desktop apps, and mobile interfaces.

Engineered with raw design tokens, dark tactical palettes, low-overhead styling, and modular component architecture.

## Installation

Using the krpkg CLI:

```bash
krpkg install ui
```

Using Bun:

```bash
bun add github:krpkg/ui
```

Using npm:

```bash
npm install github:krpkg/ui
```

## Setup

Import the base CSS styles once in your application root (e.g. `main.tsx` or `App.tsx`):

```typescript
import '@krpkg/ui/styles.css';
```

## Component Overview

| Component | Description |
|---|---|
| `Button` | Tactical buttons with solid, outline, ghost, and danger variants. |
| `BracketCard` | Angular card container with technical corner accents. |
| `CornerFrame` | Framed container with customizable HUD corner markers. |
| `TerminalWindow` | Command console and shell output viewer container. |
| `TelemetryBar` | High-density status strip for metrics, latency, and system health. |
| `TacticalDrawer` | Slide-out overlay drawer for details and side panels. |
| `HudModal` | Centered modal dialog with tactical border styling and backdrop blur. |
| `HudToast` | Compact status notification banner. |
| `CyberSwitch` | Toggle switch with binary cybernetic visual cues. |
| `SegmentedControl` | Multi-option tab switcher with active slider indicator. |
| `Input` | Text input field with prefix, suffix, and error states. |
| `KeyValGrid` | Technical key-value inspection table for telemetry and metadata. |
| `Badge` | Status and category badges (accent, teal, red, green, muted). |
| `Dot` | Pulsing or static status indicator dot. |
| `TechLabel` | Monospace technical label with micro-formatting. |
| `StickyNote` | Analog-aesthetic memo element in vintage paper tones. |
| `SpoilerGate` | Blur/reveal privacy guard for sensitive or NSFW content. |
| `Vinyl` | Turntable vinyl record animation component. |
| `Breadcrumbs` | Tactical breadcrumb navigation trail. |
| `BottomBar` | Mobile and compact viewport navigation bar. |
| `Tooltip` | Contextual micro-tooltip on hover/focus. |
| `Logo` | Official SVG monogram and logo variants. |

## Quick Example

```tsx
import React, { useState } from 'react';
import {
  Button,
  BracketCard,
  CyberSwitch,
  Badge,
  TerminalWindow,
} from '@krpkg/ui';

export function Dashboard() {
  const [active, setActive] = useState(false);

  return (
    <BracketCard title="SYSTEM_TELEMETRY">
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Badge variant="accent">ONLINE</Badge>
        <CyberSwitch checked={active} onChange={setActive} label="DEBUG_MODE" />
        <Button variant="solid" onClick={() => console.log('Ping')}>
          EXECUTE
        </Button>
      </div>

      <TerminalWindow title="STDOUT" style={{ marginTop: '1rem' }}>
        <p>Telemetry stream initialized.</p>
        <p>Awaiting instructions...</p>
      </TerminalWindow>
    </BracketCard>
  );
}
```

## Design Tokens and Themes

`@krpkg/ui` ships with pure token definitions accessible in TypeScript or CSS variables:

```typescript
import { colors, typography, spacing, themePalettes } from '@krpkg/ui/tokens';
```

### Supported Palettes

- Amber Baseline (`default`): Deep obsidian tones with warm amber accents.
- Citlali Star-Gaze (`citlali`): Deep midnight blue with soft pink highlights.
- Furina Hydro-Overture (`furina`): Abyssal ocean navy with vivid hydro cyan.
- Alley Neon-Noir (`alley`): Deep dark purple with electric neon magenta.

Apply themes by setting the `data-theme` attribute on any DOM ancestor:

```html
<html data-theme="citlali">
  <!-- Citlali theme tokens active -->
</html>
```

## Subpath Exports

- `@krpkg/ui`: Core React components and base styles.
- `@krpkg/ui/tokens`: Design tokens, colors, themes, typography, and spacing constants.
- `@krpkg/ui/utils`: Formatting helpers, number formatters, and style utilities.
- `@krpkg/ui/styles.css`: Compiled CSS theme variables and baseline resets.
- `@krpkg/ui/assets/*`: Static SVG icons and graphic assets.

## License

Apache-2.0
