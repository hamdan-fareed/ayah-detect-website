# Ayah Detect — Offline Recognition Apparatus & Physical Kinetic Interface

An architectural and technical blueprint for building the **Ayah Detect** web platform, faithfully capturing the physical print codex aesthetic of `Image_1_4e5ec3cb.jpeg` and integrating the 9 specified physics-based UI motion systems (iPadOS magnetic cursor with morphing capsule, center-staggered cryptographic scramble, 32-tile radial 3D curtain wipe, micro-turbulence film grain, bracket kinetic dynamics, and zero-radius toast feedback).

---

## User Review & Critical Decisions

> [!IMPORTANT]
> The following user preferences were confirmed during Phase 1:
> - **In-Browser Recitation Simulator**: Not included; pure focus on the high-fidelity presentation, typography, and apparatus showcase plates.
> - **Destination Links / Secondary Channels**: Handled non-destructively; clicking secondary links or specs triggers the 32-tile radial curtain wipe into dedicated minimal destination plates with instant `Escape` key return navigation.
> - **Color Mode**: Strict daylight paper codex mode (`#F9F9F7` / `#FBFBF8` with carbon ink `#121413` and deep spruce teal `#1D544C`).

---

## 1. Overview & Core Concept

**Ayah Detect** is an editorial presentation for a private, on-device audio recognition apparatus for Quranic recitation. Built with the discipline of traditional physical codices and classical bookbinding combined with retro-computing mechanics and fluid kinetic physics:

- **100% On-Device & Zero Telemetry**: Emphasizes privacy, zero cloud egress, and offline neural weights.
- **Atmospheric Restraint**: Natural unbleached paper tones, authentic pixel & monospace typography, crisp hairline structural borders, and zero modern AI gimmicks (no gratuitous gradients, no rounded card stacks, no decorative pills).
- **Physical Motion Systems**: 9 bespoke interaction physics modules governing cursor magnetism, encryption decryption cascades, 3D radial transitions, and tactile rubberbanding.

---

## 2. User Experience & Visual Design

### Visual Identity & Theme
- **Color Palette (Editorial Codex Daylight)**:
  - Base Canvas: Natural Literary Paper `#F9F9F7` / `#FBFBF8`
  - Container Wells & Recessed Plates: `#EEEEEC` / `#F4F4F1`
  - Primary Carbon Ink: `#121413` / `#1A1C1B`
  - Secondary Technical Grey: `#50615B` / `#707976`
  - Deep Spruce Accent: `#1D544C` (used for verified matches and primary download actions)
  - Curtain Obsidian Black: `#09090B`
- **Typography Matrix**:
  - **Pixel Title Face**: Authentic retro 8-bit bitmap / pixel font (`Silkscreen` / `Press Start 2P` / custom pixel rendering) with compressed tracking.
  - **Technical Apparatus Face**: `Space Mono` / monospace with `0.04em` to `0.2em` letter-spacing for brackets, metrics, and channel indexes.
  - **Literary Display & Arabic**: `Noto Serif` and traditional Naskh/Uthmani Quranic Arabic (`Amiri` / `Noto Naskh Arabic`) for authentic codicological harmony.
  - **Ergonomic Body**: `IBM Plex Sans` for clear structural specifications.

### The 9 Custom UI Motion Systems
1. **iPadOS Magnetic Cursor & Dynamic Morphing Capsule**:
   - Idle state: 12px translucent smoky charcoal dot with a hairline white rim, gliding via spring physics ($k=420, c=30$).
   - Magnetic field: At $\le 75\text{px}$ from title/subtitle, $45\%$ gravitational pull curve accelerates the cursor while expanding the dot up to $28\text{px}$.
   - Contact snap: Morphs into a frosted capsule ($2\text{px}$ backdrop blur, subtle ambient shadow).
     - Title capsule: $24\text{px}$ H / $14\text{px}$ V padding, $14\text{px}$ border radius.
     - Subtitle capsule: $18\text{px}$ H / $8\text{px}$ V padding, $8\text{px}$ border radius.
   - Rubberband reactivity: $22\%$ pill shift, $18\%$ text drag displacement. Click squash to $92\%/97\%$ with $103.5\%$ rebound.
2. **Center-Staggered Text Decryption Scramble**:
   - 62-glyph cryptographic matrix `[A-Z, a-z, 0-9, technical symbols]`.
   - Centers resolve first using normalized radial word distance on a $42\text{ms}$ clock ($580\text{ms}$ title lifecycle, $620\text{ms}$ subtitle).
3. **Vertically Cascading Navigation Ripple**:
   - Dual-directional stagger rippling outward from the optical center (Item 3 `[ books ]`).
4. **32-Tile Cinematic Pixel Curtain Transition**:
   - $4 \times 8$ grid of 32 tiles in hardware-accelerated $1,200\text{px}$ 3D perspective.
   - Radial distance from screen center drives a $220\text{ms}$ stagger across a $720\text{ms}$ lifecycle.
   - $0\text{ms} \to 360\text{ms}$: Flip from $90^\circ \to 0^\circ$ into `#09090B`.
   - Exactly $360\text{ms}$: Blind swap between views.
   - $360\text{ms} \to 720\text{ms}$: Flip $0^\circ \to -90^\circ$ unveiling destination with $99\%$ compression and $25\%$ momentary contrast boost.
5. **Living Micro-Turbulence Film Grain Overlay**:
   - SVG fractal noise (`baseFrequency=0.8`, `numOctaves=3`), $4\%$ opacity, $32\text{px}$ bleed boundary.
   - 4-step jitter translation keyframes on $0.35\text{s}$ infinite cycle.
6. **Micro-Typographic Contrast & Bracket Dynamics**:
   - Brackets `[ label ]`: default slate `#50615B` with petroleum teal label; on hover, brackets snap to graphite, label to pitch black `#000000`, scaling by $1.04\times$ ($+4\%$) within $100\text{ms}$.
7. **Monospaced Micro-Toast Clipboard Feedback**:
   - Clicking `[ mail ]` writes `hamdanfareedibniqbal@gmail.com` to clipboard and triggers `mailto:`.
   - Zero-radius black pill appears at viewport bottom center for $2.6\text{s}$: `[ email copied: hamdanfareedibniqbal@gmail.com ]`.
8. **Physical Keyboard Escape Navigation**:
   - Global `keydown` listener intercepts `Escape` to trigger the 32-tile curtain wipe back to root view.
9. **Browser Tab Monogram & Vector Art**:
   - Geometric SVG emblem with Arabic calligraphy "آية", acoustic concentric rings, and compass markings.

---

## 3. Structural Breakdown & Responsive Layout

```
┌────────────────────────────────────────────────────────────────────────┐
│  // OFFLINE RECOGNITION APPARATUS                                      │
│  Ayah detect.                                  [ GEOMETRIC CODEX EMBLEM│
│  A quiet, offline app that recognizes the...    CONCENTRIC WAVE RINGS  │
│  [ 114 Surahs ] [ 6,236 Ayahs ] [ 100% On-Device ]...      آية        │
│  [ install app ]                                                       │
├────────────────────────────────────────────────────────────────────────┤
│  [ EXHIBIT 01 // STORE PLATES ]                                        │
│  Interface Showcase                                                    │
│  ┌───────────────────┐  ┌───────────────────┐  ┌────────────────────┐  │
│  │  01 RECOGNITION   │  │    02 PRIVACY     │  │     03 EXPORT      │  │
│  │ [Phone Plate 1]   │  │ [Phone Plate 2]   │  │  [Phone Plate 3]   │  │
│  │ Instant Match UI  │  │ Zero Egress NN    │  │ One-Tap Clipboard  │  │
│  └───────────────────┘  └───────────────────┘  └────────────────────┘  │
├────────────────────────────────────────────────────────────────────────┤
│  [ SPECIFICATION SPEC_07 ]                                             │
│  Architectural & Functional Breakdown                                  │
│  ┌───────────────────────┐ ┌───────────────────────┐ ┌───────────────┐ │
│  │ 01 Recitation Match   │ │ 02 Zero Egress NPU    │ │ 03 114 Surahs │ │
│  ├───────────────────────┤ ├───────────────────────┤ ├───────────────┤ │
│  │ 04 Typographic Codex  │ │ 05 Clipboard Export   │ │ 06 Ledger Log │ │
│  ├───────────────────────┴─┴───────────────────────┴─────────────────┤ │
│  │ 07 Dual Mode App (Day & Obsidian Night)   ● CONTRAST RATIO: 18.2:1│ │
│  └───────────────────────────────────────────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────┤
│  [ DEPLOYMENT REPOSITORY ]                                             │
│  Install the Companion                                                 │
│  [ Download for iOS ] [ Download for Android ]                         │
│  [ GitHub Repository ] [ Architecture Specs ]                          │
├────────────────────────────────────────────────────────────────────────┤
│  Ayah detect. — Codex Spec 07                  [ github ] [ mail ]...  │
│  2026 // Ayah detect. Open Architecture.       frequency: 44.1 kHz     │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Technical Architecture & State Strategy

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           Root Application                              │
├─────────────────────────────────────────────────────────────────────────┤
│  1. MagneticCursorProvider (Physics loop, spring solver, hit-testing)   │
│  2. TileCurtainProvider (32-tile 3D grid, radial stagger engine)        │
│  3. MicroToastProvider (Zero-radius clipboard notification queue)       │
│  4. GrainOverlay (Procedural SVG turbulence jitter layer)               │
├─────────────────────────────────────────────────────────────────────────┤
│  Views:                                                                 │
│  - MainShowcaseView (Hero, Store Plates, Architectural Grid, Installs)  │
│  - SpecsModalView / ChannelPlateView (Secondary detail with Esc return) │
└─────────────────────────────────────────────────────────────────────────┘
```

- **Clean State Transitions**:
  - `activeView`: `'home' | 'specs' | 'github' | 'books' | ...`
  - Tile Curtain orchestrates transitioning smoothly between views with the exact $360\text{ms}$ midpoint swap.
- **Micro-Typographic Soundness**:
  - Google Fonts imports (`Space Mono`, `Noto Serif`, `IBM Plex Sans`, `Press Start 2P`).
  - Strict $0\text{px}$ sharp geometry across all cards and buttons per design guidelines.
- **Accessibility & Touch Fallbacks**:
  - Magnetic cursor gracefully detects touch devices and hides custom cursor on primary pointer `coarse`.
  - Keyboard listener handles `Escape` universally.
