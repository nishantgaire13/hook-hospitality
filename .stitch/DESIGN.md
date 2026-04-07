# Design System: Hook Hospitality
**Project ID:** 13457806838969701436

## 1. Visual Theme & Atmosphere
Warm, rustic elegance with a premium lounge feel. The design evokes a moody, intimate bar atmosphere using deep browns, amber accents, and cream tones. Glassmorphism effects, noise textures, and radial gradients add depth and sophistication. The overall vibe is upscale yet approachable — Kathmandu nightlife meets boutique hospitality.

## 2. Color Palette & Roles
| Name | Hex | Role |
|------|-----|------|
| Burnished Amber (Primary) | `#C97D2E` | Primary actions, CTAs, event badges, brand accent |
| Golden Glow (Accent) | `#E8A94A` | Hover states, secondary highlights, gradient partner |
| Deep Espresso (Background Dark) | `#1A0A02` | Primary dark background, footer, navbar glass base |
| Roasted Cocoa (Surface Dark) | `#2C1608` | Card surfaces, elevated dark panels |
| Warm Parchment (Background Light) | `#FDF6EC` | Light sections, form backgrounds, text on dark |
| Weathered Stone (Muted) | `#8F7D70` | Secondary text, labels, subtle borders |
| Amber Tint | `#FFF3E5` | Light feature cards |
| Gold Tint | `#FBF0D9` | Light feature cards |

## 3. Typography Rules
- **Display/Headlines:** Playfair Display (serif) — bold, used for all section titles and hero text
- **Body/UI:** DM Sans (sans-serif) — clean, modern, used for paragraphs, labels, navigation
- **Editorial/Sublines:** Newsreader (serif, italic) — used sparingly for atmospheric subheadlines
- **Icons:** Material Symbols Outlined — used for navigation, CTAs, and contact details

## 4. Component Stylings
* **Buttons:** Rounded-full (pill) for primary CTAs, rounded-sm for secondary/event buttons. Primary fills with amber, hover escalates to golden glow. Dark text on light buttons.
* **Cards:** Rounded-md (12px), surface-dark with primary/20 borders. Image hover zoom (scale-105). Gradient overlays from surface-dark at bottom.
* **Navbar:** Fixed floating, glass-nav effect (blur-12, dark overlay), rounded-full pill shape, shadow-warm-dark.
* **Forms:** Clean inputs with muted borders, focus:primary ring. Light background inside dark sections.
* **Badges:** Primary background, dark text, rounded-sm, uppercase tracking-wide.

## 5. Layout Principles
- Max content width: 1200px (7xl for some sections)
- Generous vertical padding: py-24 for sections
- Grid-based layouts: 3-column for cards, 4-column for footer, 2-column for events
- Mobile-first responsive with md/lg breakpoints
- Noise texture overlays for depth on dark sections
- Glassmorphism for elevated UI elements (navbar, badges)
