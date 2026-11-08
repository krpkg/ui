# @krpkg/ui

Cyber-minimalist design system and component library tailored for **Web**, **Tauri Desktop**, and **React Native / Expo Mobile**.

Engineered with raw design tokens, dark tactical palettes, low-overhead styling, and modular component architecture.

## Installation

Using npm:

```bash
npm install @krpkg/ui
```

Using Bun:

```bash
bun add @krpkg/ui
```

Using pnpm:

```bash
pnpm add @krpkg/ui
```

---

## Usage

### 1. Web & Tauri Desktop (DOM)

Import components and the base stylesheet:

```tsx
import '@krpkg/ui/styles.css';
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
      <Badge variant="accent">ONLINE</Badge>
      <CyberSwitch checked={active} onChange={setActive} label="DEBUG_MODE" />
      <Button variant="outline" onClick={() => console.log('Ping')}>
        EXECUTE
      </Button>
      <TerminalWindow title="STDOUT">
        <p>Telemetry stream initialized.</p>
      </TerminalWindow>
    </BracketCard>
  );
}
```

### 2. React Native & Expo Mobile (`@krpkg/ui/native`)

Native components use native primitives (`View`, `Text`, `Pressable`, `StyleSheet`) and zero DOM overhead:

```tsx
import React, { useState } from 'react';
import { View } from 'react-native';
import {
  Button,
  BracketCard,
  Badge,
  Dot,
  TechLabel,
  CyberSwitch,
} from '@krpkg/ui/native';

export function MobileScreen() {
  const [active, setActive] = useState(false);

  return (
    <BracketCard active={active}>
      <Badge label="ONLINE" variant="accent" />
      <Dot color="accent" />
      <TechLabel label="SYS_CORE" coord="04.81" />
      <CyberSwitch checked={active} onChange={setActive} label="OVERCLOCK" />
      <Button
        label="ENGAGE"
        variant="primary"
        onPress={() => console.log('Engaged')}
      />
    </BracketCard>
  );
}
```

---

## Design Tokens and Themes

`@krpkg/ui` ships with pure token definitions accessible in TypeScript or CSS variables:

```typescript
import { colors, typography, spacing, themePalettes } from '@krpkg/ui/tokens';
```

### Supported Palettes

- **Amber Baseline (`default`)**: Deep obsidian tones with warm amber accents.
- **Citlali Star-Gaze (`citlali`)**: Deep midnight blue with soft pink highlights.
- **Furina Hydro-Overture (`furina`)**: Abyssal ocean navy with vivid hydro cyan.
- **Alley Neon-Noir (`alley`)**: Deep dark purple with electric neon magenta.

Apply themes on Web by setting the `data-theme` attribute on any DOM ancestor:

```html
<html data-theme="citlali">
  <!-- Citlali theme tokens active -->
</html>
```

---

## Subpath Exports

| Export Path | Description | Target Environment |
|---|---|---|
| `@krpkg/ui` | Core HTML/DOM React components | Web & Tauri Desktop |
| `@krpkg/ui/native` | React Native & Expo primitives (`Pressable`, `View`, `Text`) | iOS & Android (Expo / RN) |
| `@krpkg/ui/tokens` | Pure JS/TS color tokens, themes, typography, & spacing | Universal (Web + Mobile) |
| `@krpkg/ui/utils` | Timestamp, duration, and number formatters | Universal (Web + Mobile) |
| `@krpkg/ui/styles.css` | Compiled CSS theme variables & baseline resets | Web & Tauri Desktop |
| `@krpkg/ui/assets/*` | Static SVG icons and graphic assets | Universal |

## License

Apache-2.0
