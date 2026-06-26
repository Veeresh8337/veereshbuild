v# Design System Inspired by Sheryians Coding School

> Auto-extracted from `https://sheryians.com/` on 2026-06-26

## 1. Visual Theme & Atmosphere

High-contrast dark mode with vivid accents — feels modern, technical, and focused.

The hero section leads with "Become the Software Engineer that Companies Want to Hire!".

**Key Characteristics:**
- Neue Machina as the heading font (custom web font loaded via @font-face)
- Times New Roman as the body font for all running text
- Heading weight 400, letter-spacing -1.53408px
- Dark background (#000000) as the primary canvas
- Primary accent `#e35927` used for CTAs and brand highlights
- 3 shadow level(s) detected — tinted shadows
- Rounded corners (13.056px+) creating a friendly, approachable feel
- Tags: dark, rounded, colorful, sans-serif

## 2. Color Palette & Roles

### Primary
- **Primary Accent** (`#e35927`) · `--color-primary`: Brand color, CTA backgrounds, link text, interactive highlights.
- **Secondary Accent** (`#69e82e`) · `--color-secondary`: Secondary brand, hover states, complementary highlights.
- **Background** (`#000000`) · `--color-bg`: Page background, primary canvas.
- **Background Secondary** (`#e35927`) · `--color-bg-secondary`: Cards, surfaces, alternating sections.

### Text
- **Text Primary** (`#ffffff`) · `--color-text`: Headings and body text.
- **Text Secondary** (`#999999`) · `--color-text-secondary`: Muted text, captions, placeholders.

### Borders & Surfaces
- **Border** (`#000205`) · `--color-border`: Dividers, outlines, input borders.

### Full Extracted Palette

| # | Hex | CSS Variable | Role | Area | Contrast |
|---|---|---|---|---|---|
| 1 | `#000000` | `--palette-1` | section | large | text-light |
| 2 | `#e35927` | `--palette-2` | section | large | text-light |
| 3 | `#69e82e` | `--palette-3` | section | large | text-dark |
| 4 | `#ffffff` | `--palette-4` | button | medium | text-dark |
| 5 | `#0c0c0c` | `--palette-5` | block | medium | text-light |
| 6 | `#fdefea` | `--palette-6` | badge | small | text-dark |
| 7 | `#180905` | `--palette-7` | badge | small | text-light |
| 8 | `#ff9466` | `--palette-8` | badge | small | text-dark |
| 9 | `#c95326` | `--palette-9` | badge | small | text-light |

## 3. Typography Rules

- **Heading Font:** `Neue Machina` (web font)
- **Body Font:** `Times New Roman`, sans-serif

### Type Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| H1 | Neue Machina | 61.3632px | 400 | 65.28px | -1.53408px |
| H2 | Neue Machina | 45.696px | 500 | 50.7733px | normal |
| H4 | Manrope | 19.584px | 400 | 26.112px | normal |
| Body | Manrope | 24.8064px | 300 | 37.2096px | normal |

### Type Scale

| Token | Size | Suggested Usage |
|---|---|---|
| Display | `61.3632px` | headings |
| H1 | `48.96px` | headings |
| H2 | `45.696px` | headings |
| H3 | `39.168px` | headings |
| H4 | `29.376px` | headings |
| Body L | `24.8064px` | body / supporting text |
| Body | `24.48px` | body / supporting text |
| Small | `21.64px` | body / supporting text |
| XS | `20.8896px` | body / supporting text |
| Caption | `19.584px` | body / supporting text |

## 4. Component Stylings

### Primary Button

```css
.btn-primary {
  background: #fff3ec;
  color: ;
  border-radius: 26843500px;
  padding: 0px 0px;
  font-size: 14.688px;
  font-weight: 300;
  border: 0.8px solid oklab(0.999994 0.0000455677 0.0000200868 / 0.7);
  cursor: pointer;
}
```

### Pill Button

```css
.btn-pill {
  background: #ff9466;
  color: ;
  border-radius: 26843500px;
  padding: 0px 0px;
  font-size: 14.688px;
  font-weight: 300;
  border: 0.8px solid oklab(0.999994 0.0000455677 0.0000200868 / 0.7);
  cursor: pointer;
}
```

### Pill Button 2

```css
.btn-pill-2 {
  background: #c95326;
  color: ;
  border-radius: 26843500px;
  padding: 0px 0px;
  font-size: 14.688px;
  font-weight: 300;
  border: 0.8px solid oklab(0.999994 0.0000455677 0.0000200868 / 0.7);
  cursor: pointer;
}
```

### Ghost Button

```css
.btn-ghost {
  background: transparent;
  color: #ffffff;
  border-radius: 13.056px;
  padding: 13.056px 32.64px;
  font-size: 16.32px;
  font-weight: 700;
  border: none;
  cursor: pointer;
}
```

### Pill Button 3

```css
.btn-pill-3 {
  background: #fff3ec;
  color: #ffffff;
  border-radius: 26843500px;
  padding: 0px 0px;
  font-size: 48.96px;
  font-weight: 300;
  border: 0.8px solid rgb(255, 255, 255);
  cursor: pointer;
}
```

### Pill Button 4

```css
.btn-pill-4 {
  background: #ff9466;
  color: #ffffff;
  border-radius: 26843500px;
  padding: 0px 0px;
  font-size: 48.96px;
  font-weight: 300;
  border: 0.8px solid rgb(255, 255, 255);
  cursor: pointer;
}
```

### Card

```css
.card {
  background: #fff3ef;
  border-radius: 19.584px;
  padding: 143.616px;
}
```

## 5. Layout Principles

- **Base spacing unit:** `13.056px` — use multiples (26.112px, 39.168px, 52.224px, etc.)

### Spacing Scale (extracted from real elements)

| Token | Value | Role |
|---|---|---|
| spacing-1 | `13.056px` | element |
| spacing-2 | `32.64px` | card |
| spacing-3 | `0.5px` | element |
| spacing-4 | `26.112px` | card |
| spacing-5 | `22.848px` | element |
| spacing-6 | `16.32px` | element |
| spacing-7 | `9.792px` | element |
| spacing-8 | `19.584px` | element |

### Border Radius Scale

| Token | Value | Element |
|---|---|---|
| radius-button | `13.056px` | button |
| radius-button | `9.792px` | button |
| radius-button | `6.528px` | button |
| radius-card | `19.584px` | card |
| radius-card | `26.112px` | card |
| radius-subtle | `3.264px` | subtle |

## 6. Depth & Elevation

| Level | Shadow | Usage |
|---|---|---|
| Low | `rgba(255, 255, 255, 0.1) 0px 33.35px 67.61px 0px inset, rgba(0, 0, 0, 0.05) 0px ...` | Cards, subtle elevation |
| Mid | `rgba(0, 0, 0, 0.05) 0px 4px 7px 0px, rgba(0, 0, 0, 0.1) 0px 4px 4px 0px, rgba(0,...` | Dropdowns, popovers |
| Low | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0...` | Cards, subtle elevation |


## 7. Do's and Don'ts

### Do
- Use `#000000` as the primary background color
- Use `Neue Machina` for all headings and `Times New Roman` for body text
- Use `#e35927` as the single dominant accent/CTA color
- Maintain `13.056px` as the base spacing unit — all gaps should be multiples
- Keep the overall feel dark — use dark surfaces throughout
- Use rounded corners (`13.056px`+) consistently for all interactive elements
- Embrace bold color combinations — playful energy is the point
- Apply the shadow system for elevation — use the extracted shadow values
- Use weight 400 for headings to match the brand's typographic voice

### Don't
- Don't use colors outside the extracted palette without justification
- Don't substitute Neue Machina/Times New Roman with generic alternatives
- Don't use irregular spacing — stick to 13.056px grid
- Don't introduce bright white surfaces — they break the dark palette
- Don't use sharp corners — they feel hostile in this rounded design language
- Don't use pure black (#000000) for text — use `#ffffff` instead
- Don't add decorative elements not present in the original design — no badges, ribbons, banners, or ornaments unless the source site uses them
- Don't invent UI patterns the source site doesn't have — if the original has no NEW badge, don't add one just because a red is in the palette

## 8. Responsive Behavior

| Breakpoint | Width | Notes |
|---|---|---|
| Mobile | < 640px | Single column, stack sections, reduce font sizes ~80% |
| Tablet | 640–1024px | 2-column where appropriate, maintain spacing ratios |
| Desktop | 1024–1440px | Full layout as designed |
| Wide | > 1440px | Max-width container, center content |

- Touch targets: minimum 44×44px on mobile
- Maintain 13.056px base unit across breakpoints — only scale multipliers

## 9. Agent Prompt Guide

### Quick Color Reference

```
Background:  #000000
Text:        #ffffff
Accent:      #e35927
Secondary:   #69e82e
Border:      #000205
```

### Example Prompts

1. "Build a hero section with a `#000000` background, `Neue Machina` heading in `#ffffff`, and a `#e35927` CTA button with 26843500px radius."
2. "Create a pricing card using background `#e35927`, border `#000205`, `Times New Roman` for text, and 39.168px padding."
3. "Design a navigation bar — `#000000` background, `#ffffff` links, `#e35927` for active state."
4. "Build a feature grid with 3 columns, 39.168px gap, each card using the card component style."
5. "Create a footer with `#e35927` background, `#ffffff` text, and 26.112px padding."

### Iteration Guide

1. Start with layout structure (sections, grid, spacing)
2. Apply colors from the palette — background first, then text, then accents
3. Set typography — font families, sizes from the type scale, weights
4. Add components — buttons, cards, inputs using the specs above
5. Apply border-radius consistently across all elements
6. Add shadows for depth — use the extracted shadow values, not defaults
7. Check responsive behavior — test mobile and tablet layouts
8. Final pass — verify all colors match, spacing is consistent, fonts are correct

## 10. CSS Custom Properties

> 2 custom properties extracted from `:root` / `html` stylesheets.

### Color Variables

| Variable | Value |
|---|---|
| `--swiper-theme-color` | `#007aff` |

### Spacing Variables

| Variable | Value |
|---|---|
| `--swiper-navigation-size` | `44px` |


---
name: design-sheryians-com
description: Design system extracted from Sheryians Coding School (https://sheryians.com/). Use when building UI that should match this brand's visual identity.
triggers:
  - "Sheryians Coding School"
  - "sheryians-com"
  - "design like Sheryians Coding School"
  - "Sheryians Coding School風"
source: https://sheryians.com/
extractedAt: 2026-06-26T13:37:41.960Z
tags: ["dark", "rounded", "colorful", "sans-serif"]
---
# Design System Inspired by Sheryians Coding School

> Auto-extracted from `https://sheryians.com/` on 2026-06-26

## 1. Visual Theme & Atmosphere

High-contrast dark mode with vivid accents — feels modern, technical, and focused.

The hero section leads with "Become the Software Engineer that Companies Want to Hire!".

**Key Characteristics:**
- Neue Machina as the heading font (custom web font loaded via @font-face)
- Times New Roman as the body font for all running text
- Heading weight 400, letter-spacing -1.53408px
- Dark background (#000000) as the primary canvas
- Primary accent `#e35927` used for CTAs and brand highlights
- 3 shadow level(s) detected — tinted shadows
- Rounded corners (13.056px+) creating a friendly, approachable feel
- Tags: dark, rounded, colorful, sans-serif

## 2. Color Palette & Roles

### Primary
- **Primary Accent** (`#e35927`) · `--color-primary`: Brand color, CTA backgrounds, link text, interactive highlights.
- **Secondary Accent** (`#69e82e`) · `--color-secondary`: Secondary brand, hover states, complementary highlights.
- **Background** (`#000000`) · `--color-bg`: Page background, primary canvas.
- **Background Secondary** (`#e35927`) · `--color-bg-secondary`: Cards, surfaces, alternating sections.

### Text
- **Text Primary** (`#ffffff`) · `--color-text`: Headings and body text.
- **Text Secondary** (`#999999`) · `--color-text-secondary`: Muted text, captions, placeholders.

### Borders & Surfaces
- **Border** (`#000205`) · `--color-border`: Dividers, outlines, input borders.

### Full Extracted Palette

| # | Hex | CSS Variable | Role | Area | Contrast |
|---|---|---|---|---|---|
| 1 | `#000000` | `--palette-1` | section | large | text-light |
| 2 | `#e35927` | `--palette-2` | section | large | text-light |
| 3 | `#69e82e` | `--palette-3` | section | large | text-dark |
| 4 | `#ffffff` | `--palette-4` | button | medium | text-dark |
| 5 | `#0c0c0c` | `--palette-5` | block | medium | text-light |
| 6 | `#fdefea` | `--palette-6` | badge | small | text-dark |
| 7 | `#180905` | `--palette-7` | badge | small | text-light |
| 8 | `#ff9466` | `--palette-8` | badge | small | text-dark |
| 9 | `#c95326` | `--palette-9` | badge | small | text-light |

## 3. Typography Rules

- **Heading Font:** `Neue Machina` (web font)
- **Body Font:** `Times New Roman`, sans-serif

### Type Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| H1 | Neue Machina | 61.3632px | 400 | 65.28px | -1.53408px |
| H2 | Neue Machina | 45.696px | 500 | 50.7733px | normal |
| H4 | Manrope | 19.584px | 400 | 26.112px | normal |
| Body | Manrope | 24.8064px | 300 | 37.2096px | normal |

### Type Scale

| Token | Size | Suggested Usage |
|---|---|---|
| Display | `61.3632px` | headings |
| H1 | `48.96px` | headings |
| H2 | `45.696px` | headings |
| H3 | `39.168px` | headings |
| H4 | `29.376px` | headings |
| Body L | `24.8064px` | body / supporting text |
| Body | `24.48px` | body / supporting text |
| Small | `21.64px` | body / supporting text |
| XS | `20.8896px` | body / supporting text |
| Caption | `19.584px` | body / supporting text |

## 4. Component Stylings

### Primary Button

```css
.btn-primary {
  background: #fff3ec;
  color: ;
  border-radius: 26843500px;
  padding: 0px 0px;
  font-size: 14.688px;
  font-weight: 300;
  border: 0.8px solid oklab(0.999994 0.0000455677 0.0000200868 / 0.7);
  cursor: pointer;
}
```

### Pill Button

```css
.btn-pill {
  background: #ff9466;
  color: ;
  border-radius: 26843500px;
  padding: 0px 0px;
  font-size: 14.688px;
  font-weight: 300;
  border: 0.8px solid oklab(0.999994 0.0000455677 0.0000200868 / 0.7);
  cursor: pointer;
}
```

### Pill Button 2

```css
.btn-pill-2 {
  background: #c95326;
  color: ;
  border-radius: 26843500px;
  padding: 0px 0px;
  font-size: 14.688px;
  font-weight: 300;
  border: 0.8px solid oklab(0.999994 0.0000455677 0.0000200868 / 0.7);
  cursor: pointer;
}
```

### Ghost Button

```css
.btn-ghost {
  background: transparent;
  color: #ffffff;
  border-radius: 13.056px;
  padding: 13.056px 32.64px;
  font-size: 16.32px;
  font-weight: 700;
  border: none;
  cursor: pointer;
}
```

### Pill Button 3

```css
.btn-pill-3 {
  background: #fff3ec;
  color: #ffffff;
  border-radius: 26843500px;
  padding: 0px 0px;
  font-size: 48.96px;
  font-weight: 300;
  border: 0.8px solid rgb(255, 255, 255);
  cursor: pointer;
}
```

### Pill Button 4

```css
.btn-pill-4 {
  background: #ff9466;
  color: #ffffff;
  border-radius: 26843500px;
  padding: 0px 0px;
  font-size: 48.96px;
  font-weight: 300;
  border: 0.8px solid rgb(255, 255, 255);
  cursor: pointer;
}
```

### Card

```css
.card {
  background: #fff3ef;
  border-radius: 19.584px;
  padding: 143.616px;
}
```

## 5. Layout Principles

- **Base spacing unit:** `13.056px` — use multiples (26.112px, 39.168px, 52.224px, etc.)

### Spacing Scale (extracted from real elements)

| Token | Value | Role |
|---|---|---|
| spacing-1 | `13.056px` | element |
| spacing-2 | `32.64px` | card |
| spacing-3 | `0.5px` | element |
| spacing-4 | `26.112px` | card |
| spacing-5 | `22.848px` | element |
| spacing-6 | `16.32px` | element |
| spacing-7 | `9.792px` | element |
| spacing-8 | `19.584px` | element |

### Border Radius Scale

| Token | Value | Element |
|---|---|---|
| radius-button | `13.056px` | button |
| radius-button | `9.792px` | button |
| radius-button | `6.528px` | button |
| radius-card | `19.584px` | card |
| radius-card | `26.112px` | card |
| radius-subtle | `3.264px` | subtle |

## 6. Depth & Elevation

| Level | Shadow | Usage |
|---|---|---|
| Low | `rgba(255, 255, 255, 0.1) 0px 33.35px 67.61px 0px inset, rgba(0, 0, 0, 0.05) 0px ...` | Cards, subtle elevation |
| Mid | `rgba(0, 0, 0, 0.05) 0px 4px 7px 0px, rgba(0, 0, 0, 0.1) 0px 4px 4px 0px, rgba(0,...` | Dropdowns, popovers |
| Low | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0...` | Cards, subtle elevation |


## 7. Do's and Don'ts

### Do
- Use `#000000` as the primary background color
- Use `Neue Machina` for all headings and `Times New Roman` for body text
- Use `#e35927` as the single dominant accent/CTA color
- Maintain `13.056px` as the base spacing unit — all gaps should be multiples
- Keep the overall feel dark — use dark surfaces throughout
- Use rounded corners (`13.056px`+) consistently for all interactive elements
- Embrace bold color combinations — playful energy is the point
- Apply the shadow system for elevation — use the extracted shadow values
- Use weight 400 for headings to match the brand's typographic voice

### Don't
- Don't use colors outside the extracted palette without justification
- Don't substitute Neue Machina/Times New Roman with generic alternatives
- Don't use irregular spacing — stick to 13.056px grid
- Don't introduce bright white surfaces — they break the dark palette
- Don't use sharp corners — they feel hostile in this rounded design language
- Don't use pure black (#000000) for text — use `#ffffff` instead
- Don't add decorative elements not present in the original design — no badges, ribbons, banners, or ornaments unless the source site uses them
- Don't invent UI patterns the source site doesn't have — if the original has no NEW badge, don't add one just because a red is in the palette

## 8. Responsive Behavior

| Breakpoint | Width | Notes |
|---|---|---|
| Mobile | < 640px | Single column, stack sections, reduce font sizes ~80% |
| Tablet | 640–1024px | 2-column where appropriate, maintain spacing ratios |
| Desktop | 1024–1440px | Full layout as designed |
| Wide | > 1440px | Max-width container, center content |

- Touch targets: minimum 44×44px on mobile
- Maintain 13.056px base unit across breakpoints — only scale multipliers

## 9. Agent Prompt Guide

### Quick Color Reference

```
Background:  #000000
Text:        #ffffff
Accent:      #e35927
Secondary:   #69e82e
Border:      #000205
```

### Example Prompts

1. "Build a hero section with a `#000000` background, `Neue Machina` heading in `#ffffff`, and a `#e35927` CTA button with 26843500px radius."
2. "Create a pricing card using background `#e35927`, border `#000205`, `Times New Roman` for text, and 39.168px padding."
3. "Design a navigation bar — `#000000` background, `#ffffff` links, `#e35927` for active state."
4. "Build a feature grid with 3 columns, 39.168px gap, each card using the card component style."
5. "Create a footer with `#e35927` background, `#ffffff` text, and 26.112px padding."

### Iteration Guide

1. Start with layout structure (sections, grid, spacing)
2. Apply colors from the palette — background first, then text, then accents
3. Set typography — font families, sizes from the type scale, weights
4. Add components — buttons, cards, inputs using the specs above
5. Apply border-radius consistently across all elements
6. Add shadows for depth — use the extracted shadow values, not defaults
7. Check responsive behavior — test mobile and tablet layouts
8. Final pass — verify all colors match, spacing is consistent, fonts are correct

## 10. CSS Custom Properties

> 2 custom properties extracted from `:root` / `html` stylesheets.

### Color Variables

| Variable | Value |
|---|---|
| `--swiper-theme-color` | `#007aff` |

### Spacing Variables

| Variable | Value |
|---|---|
| `--swiper-navigation-size` | `44px` |
