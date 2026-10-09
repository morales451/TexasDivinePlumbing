---
name: Texas Divine Plumbing
description: The family's group text, opened up to the customer.
colors:
  wall: "#0c3a8a"
  wall-deep: "#072a68"
  wall-ink: "#051d4a"
  wall-line: "rgba(255, 255, 255, 0.14)"
  on-wall: "#ffffff"
  on-wall-2: "#c9d9f6"
  on-wall-3: "#9fb8e6"
  sheet: "#ffffff"
  sheet-2: "#f1f5fc"
  sheet-line: "#dce4f2"
  ink: "#0a1a33"
  ink-2: "#44546f"
  ink-3: "#66748c"
  sky: "#d3e7ff"
  sky-ink: "#072a68"
  alexis: "#f2b705"
  hector: "#1d8a4b"
  hector-ink: "#15703c"
  trino: "#c45f24"
  trino-ink: "#9c4513"
typography:
  display:
    fontFamily: "Archivo, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(42px, 5.6vw, 80px)"
    fontWeight: 850
    lineHeight: 0.96
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 125"
  headline:
    fontFamily: "Archivo, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(24px, 2.6vw, 30px)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 116"
  title:
    fontFamily: "Archivo, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "18px"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 112"
  body-big:
    fontFamily: "Archivo, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.45
    fontFeature: "'tnum'"
  body:
    fontFamily: "Archivo, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "'tnum'"
  prose:
    fontFamily: "Archivo, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Archivo, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "13px"
    fontWeight: 600
    letterSpacing: "0.08em"
    fontVariation: "'wdth' 80"
rounded:
  notch: "0px"
  tight: "3px"
  photo: "6px"
  inset: "10px"
  field: "12px"
  bubble: "14px"
  sheet: "16px"
  message-field: "18px"
  article: "24px"
  pill: "999px"
spacing:
  bubble-gap: "6px"
  chip-gap: "8px"
  avatar-gap: "12px"
  group: "22px"
  day-before: "72px"
  day-after: "28px"
  gutter: "clamp(16px, 4vw, 40px)"
  panel-width: "360px"
  page-max: "1280px"
components:
  chip-alexis:
    backgroundColor: "{colors.alexis}"
    textColor: "{colors.wall-ink}"
    rounded: "{rounded.pill}"
    padding: "10px 18px"
    height: "44px"
  chip-alexis-xl:
    backgroundColor: "{colors.alexis}"
    textColor: "{colors.wall-ink}"
    rounded: "{rounded.pill}"
    padding: "14px 26px 14px 22px"
    height: "58px"
  chip-wall:
    backgroundColor: "{colors.wall}"
    textColor: "{colors.on-wall}"
    rounded: "{rounded.pill}"
    padding: "10px 18px"
    height: "44px"
  chip-light:
    backgroundColor: "{colors.on-wall}"
    textColor: "{colors.wall-deep}"
    rounded: "{rounded.pill}"
    padding: "14px 26px 14px 22px"
    height: "58px"
  chip-ghost:
    backgroundColor: "{colors.sheet-2}"
    textColor: "{colors.wall-deep}"
    rounded: "{rounded.pill}"
    padding: "10px 18px"
    height: "44px"
  bubble:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.bubble}"
    padding: "12px 16px 13px"
  bubble-me:
    backgroundColor: "{colors.sky}"
    textColor: "{colors.sky-ink}"
    rounded: "{rounded.bubble}"
    padding: "12px 16px 13px"
  day-label:
    backgroundColor: "{colors.wall-deep}"
    textColor: "{colors.on-wall-2}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
  panel-card:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sheet}"
    width: "{spacing.panel-width}"
  composer:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sheet}"
    padding: "clamp(20px, 3vw, 28px)"
  field:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "13px 14px"
  field-message:
    backgroundColor: "{colors.sky}"
    textColor: "{colors.sky-ink}"
    rounded: "{rounded.message-field}"
    padding: "13px 14px"
  icon-btn:
    backgroundColor: "{colors.sheet-2}"
    textColor: "{colors.wall}"
    rounded: "{rounded.pill}"
    size: "40px"
  avatar:
    backgroundColor: "{colors.alexis}"
    textColor: "{colors.wall-ink}"
    rounded: "{rounded.pill}"
    size: "40px"
---

# Design System: Texas Divine Plumbing

## Overview

**Creative North Star: "The Family Thread"**

The site is the family's group text, opened up to the customer. Every page is a chat: a sticky thread header, a pinned headline, day separators instead of section titles, white message sheets from named people (Alexis, Hector, Trino) on a drenched logo-blue wallpaper, the visitor's own questions as pale-sky outgoing bubbles, and a composer at the end that sends a message to a chosen person. On desktop a sticky group-info panel sits beside the thread with the members, tap-to-call buttons and a one-fact-per-row proof list.

Density is conversational: short messages, 6px between bubbles in a run, 22px between senders, a wide 72px breath before each day separator. Hierarchy comes from Archivo's width axis rather than from extra families: the pinned headline is expanded black, messages are normal width, separators and form labels are condensed caps. Numbers are tabular everywhere, because phone numbers, licenses, ratings and hours are the proof.

The world refuses the contractor template: no hero with a badge row, no grid of icon cards, no avatar testimonial carousel. Proof arrives as messages: job photos as photo albums, reviews as forwarded messages, the Reddit post as a link preview. It must never read rough or cheap; the white sheets, soft wall-tinted shadows and precise tails carry the polish.

**Key Characteristics:**
- Logo-blue wallpaper (with a 4% white fittings line pattern) as the page ground on every page.
- White message sheets with a tail notch on the first bubble of each run.
- One color per person, taken from the trade: Alexis gold, Hector PVC green, Trino copper.
- Archivo only; width axis (80% to 125%) carries the hierarchy; tabular numerals throughout.
- Messages arrive with a brief typing indicator as they scroll into view.
- Calling or texting Alexis is always one tap away (pinned CTA, panel, mobile dock).

## Colors

A drenched single-hue blue world with white paper on it, punctuated by three owned person colors.

### Primary
- **Logo Wall Blue** (wall): the page wallpaper on every page, the default action chip fill, link color inside sheets, the focus border on fields and the selected state of composer picks.
- **Deep Wall** (wall-deep): sticky topbar (at 92% opacity with blur), day-separator pills, text on light chips.
- **Wall Ink** (wall-ink): footer ground and the text color on gold.

### Secondary (person colors)
- **Alexis Gold** (alexis): Alexis's avatar, name line and every Call Alexis fill (pinned CTA, panel, nav, mobile dock); also the system focus ring and text selection. Text on gold is always Wall Ink, never white.
- **Inspection Green** (hector / hector-ink): Hector's avatar (ink), his drawn checkmarks in lists, the "Inspection passed" photo tag, the composer success message. On the wall, his name line uses a lightened mint (#8fe3b0) for contrast.
- **Copper Line** (trino / trino-ink): Trino's avatar (ink), his list checkmarks and call-button hover. On the wall, his name line uses a lightened copper (#ffb48a).

### Tertiary
- **Visitor Sky** (sky / sky-ink): outgoing visitor bubbles, the composer's message field, and the end-of-article call-to-action panel. Sky always means "you, the visitor, speaking."

### Neutral
- **Sheet White** (sheet): message bubbles, group-info panel, composer, article sheet, dropdowns.
- **Sheet Tint** (sheet-2): ghost chips, icon buttons, link previews, hover rows inside sheets.
- **Sheet Line** (sheet-line): hairline dividers and field borders inside sheets.
- **Ink / Ink 2 / Ink 3** (ink, ink-2, ink-3): text on sheets, in descending emphasis (body, secondary, meta).
- **On-Wall / On-Wall 2 / On-Wall 3** (on-wall, on-wall-2, on-wall-3): text directly on the wallpaper, in descending emphasis.
- **Wall Line** (wall-line): hairlines on the wall (topbar border, day-separator rules, footer rules).

### Named Rules
**The Owner's Color Rule.** A person's color marks only what that person touches: their avatar, their name line, their checkmarks, their call buttons. Never use gold, green or copper as general decoration.

**The Gold Door Rule.** A solid gold fill means "reach Alexis". It is reserved for the Call Alexis action (and Alexis's avatar); every page shows it in the first viewport and on mobile in the dock.

**The Paper and Wall Rule.** Content that is read lives on white sheets; only the headline, sender names, separators and chrome sit directly on the blue.

## Typography

**Display Font:** Archivo (variable, wdth 62 to 125, wght 100 to 900), with system-ui fallback
**Body Font:** Archivo
**Label Font:** Archivo at condensed width (wdth 80 to 85)

**Character:** One sturdy grotesk stretched across its width axis: expanded and black when the family pins something, plain when they talk, condensed caps when the app labels something.

### Hierarchy
- **Display** (850, wdth 125, clamp(42px, 5.6vw, 80px), 0.96, -0.035em, max 13ch, balanced): the pinned headline only. City pages use a longer variant (clamp(36px, 4.6vw, 64px), max 17ch); articles clamp(34px, 4.4vw, 58px), max 20ch. One word may be set in Alexis gold.
- **Headline** (800, wdth 112 to 118, 22 to 32px, ~1.08): composer title, article h2 (28px), blog card titles (22px), footer sign-off line (24px).
- **Title** (800, wdth 112, 18px): panel title, member names (700), photo-caption leads.
- **Body** (400, 17px, 1.55): every message. **Body Big** (19px, 1.45) for one-line declarations from a family member. Text on the wall uses on-wall-2.
- **Prose** (18px, 1.7, max 68ch): blog articles only.
- **Label** (600 to 700, 12 to 13px, wdth 80 to 85, 0.06 to 0.12em, uppercase): day-separator pills, form field labels, footer column heads, blog date/read-time meta.

### Named Rules
**The Width Axis Rule.** Hierarchy is built by font-stretch and weight within Archivo, never by adding a second family.

**The Tabular Rule.** body sets font-variant-numeric: tabular-nums; phone numbers, ratings, years and hours always align as figures.

**The Caps Belong to the App Rule.** Condensed uppercase is the chat app's own voice (separators, field labels, timestamps, metadata). It never appears as a decorative label stacked above a headline.

## Layout

A two-column chat layout inside a 1280px page with a fluid gutter (clamp(16px, 4vw, 40px)): a flexible thread column on the left (pinned headline above, thread below) and a 360px sticky group-info panel on the right (top offset: topbar height + 24px), separated by clamp(32px, 5vw, 72px). Solo pages (FAQ, blog index) drop the panel and cap the column at 880px; article pages cap at 960px.

Inside the thread, each message group is a 40px avatar column plus a body column (12px gap). Bubbles in a run stack with a 6px gap; groups are 22px apart; each day separator takes 72px above and 28px below. Bubbles cap at 600px (wide variant 680px), albums at 640 to 680px. Visitor groups have no avatar and align right.

Responsive: at 1040px and below the panel moves under the thread (static, not sticky), the nav collapses to a menu button, the topbar call button hides, and a fixed bottom dock appears (Call Alexis gold, wider; Text Alexis wall blue) that tucks away while the pinned CTA is on screen. At 720px the topbar drops to 64px, avatars shrink to 32px, multi-column grids become one column, and the display headline uses clamp(38px, 11.4vw, 56px) with full-width stacked CTAs.

## Elevation & Depth

Depth is paper on a wall: white sheets lifted off the blue by two wall-tinted shadows (never neutral grey), plus a frosted sticky topbar. There are no hard offset shadows.

### Shadow Vocabulary
- **Sheet** (`box-shadow: 0 1px 1px rgba(5, 29, 74, 0.18), 0 6px 18px -6px rgba(5, 29, 74, 0.45)`): every bubble, typing indicator, blog card at rest.
- **Lift** (`box-shadow: 0 2px 4px rgba(5, 29, 74, 0.2), 0 18px 40px -12px rgba(5, 29, 74, 0.6)`): group-info panel, composer, article sheet, dropdowns, blog card hover.
- **Chip hover** (`box-shadow: 0 8px 18px -8px rgba(5, 29, 74, 0.7)` with translateY(-1px)): action chips on hover.
- **Dock** (`box-shadow: 0 10px 30px -8px rgba(2, 12, 32, 0.6)`): the mobile dock, on 96% white with a 12px backdrop blur.

### Named Rules
**The Two Papers Rule.** Messages sit at Sheet; things you act in (panel, composer, article) sit at Lift. Do not invent a third resting level.

## Shapes

Soft but exact. Bubbles round at 14px; containers (panel, composer, blog cards, dock) at 16px; the article sheet at 24px; everything you tap is a full pill (999px): chips, nav links, language toggle, day-separator labels, composer picks, icon buttons, avatars. Insets inside a sheet step down (link preview 10px, fields 12px, album tiles 6px) so nested corners stay concentric. Photo bubbles use 4px padding and inner radius bubble - 4px.

The signature form is the **tail notch**: the first bubble after a sender's typing indicator loses its top-left corner (radius 0) and grows a 9 x 12px triangular tail out to the left; the visitor's last bubble loses its bottom-right corner and grows a tail to the right. The composer's message field echoes this with a 3px bottom-right corner.

Icons are a single inline SVG sprite: 24px viewBox, 2px round-capped strokes in currentColor, sized at 1.1em by default.

## Components

### Buttons (chips)
Confident pills that read as message actions.
- **Shape:** full pill (999px), min-height 44px; the XL size for the pinned CTA is 58px tall at 18px text.
- **Primary (Call Alexis):** Alexis gold fill, wall-ink text, phone icon, the number in 600 weight at 80% opacity. Hover brightens the gold (#ffc61a).
- **Default:** wall-blue fill, white text. **Light:** white fill, deep-wall text (the "Text Alexis" partner on the wall). **Ghost:** sheet-tint fill, deep-wall text, for use inside sheets.
- **Hover / Focus:** lift 1px with the chip-hover shadow (0.2s, ease-out cubic-bezier(0.16, 1, 0.3, 1)); press returns to 0. Focus is a 3px gold outline at 3px offset. Disabled is 60% opacity with a progress cursor.

### Message bubbles
- **Incoming:** white sheet, ink text, 14px radius, Sheet shadow, padding 12px 16px 13px, max 600px. Links inside are wall blue at 600 weight.
- **Outgoing (visitor):** sky fill, sky-ink text at 500 weight, right aligned, tail on the last bubble.
- **Variants:** big (19px declaration), photo (4px padding, captioned image), album (6-column mosaic of photos with gradient-scrim captions; the builds variant is a 2 x 2 grid at 4:3), forwarded review ("Forwarded" italic meta, hairline left rule, stars in gold, attribution line), link preview (sheet-tint card inside a bubble), map bubble on city pages.
- **Sender line:** 14px 700 name in the person's on-wall color, followed by a 13px 500 on-wall-3 role.

### Day separators
The thread's section headings: a centered pill (deep wall, wall-line border, condensed caps label) with hairline rules running to both edges.

### Group-info panel (signature)
A 16px Lift card: logo head, "Every new request goes to Alexis" with Call/Text chips, the plumbers as member rows (40px avatar, name, role, tabular phone link in wall blue, two round icon buttons that fill with the member's color on hover), and the proof cross-check as key/value rows (ink-2 key, 700 value, right aligned).

### Inputs / Fields (composer)
- **Style:** white field, 1.5px sheet-line border, 12px radius, 16px text, padding 13px 14px, wall-blue caret. Labels are condensed caps (13px, 700).
- **Message field:** sky-filled, borderless, 18px radius with a 3px bottom-right corner: the visitor's outgoing bubble being typed.
- **Recipient picks:** pill radio cards (1.5px border) with a 28px avatar; checked state is a wall-blue border plus inset ring on #eaf2ff.
- **Focus:** wall-blue border plus a 3px rgba(12, 58, 138, 0.18) halo. **Error:** red border via :user-invalid; status line in red or Hector green.

### Navigation
Sticky topbar (72px; 64px on small screens) in deep wall at 92% with saturate(140%) blur(14px) and a wall-line bottom border: round white logo mark, bold expanded name, a live-dot meta line ("Trino, Hector, Alexis + 7 uncles"), pill nav links (15px 500, on-wall-2; hover and current get a 10% white fill), an EN/ES pill toggle, and a white Call Alexis pill. The service-area dropdown is a white Lift sheet. Below 1040px the links collapse behind a round menu button.

### Typing indicator and arrival motion (signature)
Each group below the fold first shows a white typing bubble (three 7px ink-3 dots bouncing 4px on a 1s loop, staggered 0.15s). After about 0.5s the bubbles arrive: 0.55s ease-out from 14px down, 98% scale and 3px blur, staggered 0.06s per bubble. Content is visible by default; motion is skipped entirely under prefers-reduced-motion.

### Mobile dock
Fixed bottom bar (1040px and below), 16px radius white frosted sheet holding Call Alexis (gold, wider) and Text Alexis (wall blue), 52px tall targets, safe-area aware; tucks away while the pinned CTA is visible.

## Do's and Don'ts

### Do:
- **Do** keep the logo-blue wallpaper with its 4% fittings pattern behind every page, and put all reading content on white sheets.
- **Do** attribute every message to a named person with their avatar and color; Alexis speaks first and takes every new request.
- **Do** show Call Alexis as a gold pill in the first viewport of every page, and the dock on mobile.
- **Do** carry hierarchy with Archivo's width axis: wdth 125 black for pinned headlines, normal for messages, wdth 80 to 85 caps for separators and labels.
- **Do** present proof as chat objects: photo messages, albums, forwarded reviews, link previews, the panel's key/value cross-check.
- **Do** start each run of bubbles with the tail notch, and keep the 6px / 22px / 72px thread rhythm.
- **Do** keep depth to the two wall-tinted shadows (Sheet, Lift).

### Don't:
- **Don't** fall back to the contractor template: hero with a badge row, rows of icon cards, avatar testimonial carousels.
- **Don't** use gold, green or copper outside the person who owns it, and never put white text on gold.
- **Don't** stack an uppercase kicker or eyebrow label above a headline; condensed caps are reserved for separators, field labels and metadata.
- **Don't** add a second typeface or use proportional figures for phone numbers, ratings, years or hours.
- **Don't** use neutral grey or hard offset shadows; shadows are always tinted with wall ink.
