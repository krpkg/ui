import { describe, it, expect } from 'vitest';
import { colors, themePalettes } from './tokens';
import { formatDuration, formatRelativeTime } from './utils';

describe('tokens', () => {
  it('exports valid color tokens', () => {
    expect(colors.accent).toBeDefined();
    expect(colors.bg0).toBeDefined();
    expect(colors.text0).toBeDefined();
  });

  it('provides all 4 core theme palettes', () => {
    expect(themePalettes.default).toBeDefined();
    expect(themePalettes.citlali).toBeDefined();
    expect(themePalettes.furina).toBeDefined();
    expect(themePalettes.alley).toBeDefined();
  });
});

describe('utils/format', () => {
  it('formats duration in seconds to M:SS or H:MM:SS', () => {
    expect(formatDuration(65)).toBe('1:05');
    expect(formatDuration(3665)).toBe('1:01:05');
    expect(formatDuration(0)).toBe('0:00');
  });

  it('formats relative time', () => {
    const now = new Date();
    const tenSecondsAgo = new Date(now.getTime() - 10000);
    expect(formatRelativeTime(tenSecondsAgo)).toBe('10s');
  });
});
