---
name: Rafe Symonds
description: A personal site built as a LAN party, where every project has a seat and the bots are the players.
colors:
  red: "#e2513b"
  red-ink: "#b8321f"
  tape: "#e6d5a8"
  tape-alt: "#ead9ae"
  tape-hover: "#f0e2bb"
  team-amber: "#b8891c"
  team-blue: "#3d84d6"
  team-rose: "#cf5a6a"
  team-violet: "#8c6fe0"
  room: "#111319"
  room-edge: "#0c0d12"
  screen: "#07080b"
  screen-cell: "#13151c"
  screen-rule: "#191b22"
  bezel: "#22252d"
  bezel-hover: "#2e313b"
  led-off: "#3a2a29"
  desk: "#2a2c32"
  desk-edge: "#3e414a"
  paper: "#f2efe6"
  ink: "#17171a"
  ink-soft: "#57544c"
  rule: "#cfc9bb"
  bone: "#e9e4d8"
  dim: "#9b9fae"
typography:
  display:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(3rem, 4.4vw, 4.3rem)"
    fontWeight: 900
    lineHeight: 0.86
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 62.5"
  headline:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(2.4rem, 4vw, 3.4rem)"
    fontWeight: 900
    lineHeight: 0.9
    fontVariation: "'wdth' 62.5"
  tape:
    fontFamily: "'Just Another Hand', 'Marker Felt', 'Comic Sans MS', cursive"
    fontSize: "clamp(2rem, 2.5vw, 2.5rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "0.01em"
  claim:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(1.6rem, 2.3vw, 2.15rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.005em"
    fontVariation: "'wdth' 72"
  title:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(1.45rem, 2vw, 1.8rem)"
    fontWeight: 800
    lineHeight: 1
    fontVariation: "'wdth' 72"
  group:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 800
    letterSpacing: "0.01em"
    fontVariation: "'wdth' 72"
  body:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.6
  body-small:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 400
    lineHeight: 1.55
  note:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 400
    lineHeight: 1.5
  mono:
    fontFamily: "'Martian Mono', ui-monospace, 'SF Mono', Menlo, monospace"
    fontSize: "0.7rem"
    fontWeight: 400
  meta:
    fontFamily: "'Martian Mono', ui-monospace, 'SF Mono', Menlo, monospace"
    fontSize: "0.74rem"
    fontWeight: 400
rounded:
  paper: "0px"
  focus: "2px"
  bezel-foot: "3px"
  bar: "4px"
  bezel-top: "7px"
spacing:
  gutter: "clamp(16px, 4vw, 56px)"
  room-top: "clamp(28px, 4vw, 56px)"
  wall-gap: "clamp(36px, 4.5vw, 72px)"
  seat-gap: "clamp(28px, 3vw, 44px)"
  seat-row: "clamp(72px, 7.5vw, 108px)"
  zone: "clamp(110px, 11vw, 160px)"
  sign-after: "clamp(44px, 5vw, 64px)"
  sheet: "26px"
  claim: "28px"
  job: "22px"
  desk: "14px"
components:
  sheet:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.paper}"
    padding: "26px 26px 22px"
  sign:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.headline}"
    rounded: "{rounded.paper}"
    padding: "20px 28px 18px"
  signin:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body-small}"
    rounded: "{rounded.paper}"
    padding: "28px 28px 22px"
  roster-row:
    textColor: "{colors.ink}"
    typography: "{typography.body-small}"
    padding: "4px 0"
  roster-row-lit:
    textColor: "{colors.red-ink}"
  job:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: "22px 0"
  link-paper:
    textColor: "{colors.ink}"
  link-paper-hover:
    textColor: "{colors.red-ink}"
  screen:
    backgroundColor: "{colors.bezel}"
    rounded: "{rounded.bezel-top}"
    padding: "10px 10px 16px"
  screen-hover:
    backgroundColor: "{colors.bezel-hover}"
  display:
    backgroundColor: "{colors.screen}"
    textColor: "{colors.bone}"
    typography: "{typography.mono}"
  led:
    backgroundColor: "{colors.led-off}"
    size: "8px"
  led-lit:
    backgroundColor: "{colors.red}"
    size: "8px"
  hud:
    textColor: "{colors.dim}"
    typography: "{typography.mono}"
  desk:
    backgroundColor: "{colors.desk}"
    padding: "14px 0 15px"
  seat-number:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "3px 6px 2px"
  tape:
    backgroundColor: "{colors.tape}"
    textColor: "{colors.ink}"
    typography: "{typography.tape}"
    padding: "7px 18px 1px"
  tape-alt:
    backgroundColor: "{colors.tape-alt}"
  tape-hover:
    backgroundColor: "{colors.tape-hover}"
  claim:
    textColor: "{colors.dim}"
    typography: "{typography.claim}"
  claim-lit:
    textColor: "{colors.bone}"
  spec-meta:
    textColor: "{colors.ink-soft}"
    typography: "{typography.meta}"
  skip-link:
    backgroundColor: "{colors.tape}"
    textColor: "{colors.ink}"
    padding: "8px 14px"
---

# Design System: Rafe Symonds

## Overview

**Creative North Star: "The LAN Party"**

The site is a dark room at a LAN party. Every project has a seat at a folding table: a monitor in a dark bezel with a power light, a strip of masking tape with the project's name written in marker, one large line, and a printed spec sheet taped beside it. A sign-in sheet taped to the wall lists every job and every seat and is the site's navigation. The floor opens with the Work zone, one printed work-history sheet with a row per job, and then the project zones: Bots that play games, Agents, Games I made, Tools. The bots are the players. The screens show real games and real data, and the only light in the room comes from the screens that are on.

Density is low and the pace is a walk down the tables. Each zone is a paper sign followed by its seats, with wide dark gaps between zones. Only the seats in the middle of the viewport are lit, plus any seat pointed at from the sign-in sheet. Everything else sits in the dark at a third of its brightness, so the visitor's place on the floor shows on the screens and on the sign-in sheet at once. One 140 ms clock drives every screen.

Materials carry the meaning. Paper holds prose, tape holds names, screens hold motion and data, and the desk band ties a row of seats into one table. The world rejects the dark developer portfolio of a name block over a grid of screenshot cards, rejects serif display faces, and has no light mode. The direction contract put the first two seats in the first viewport. The build moved Work ahead of the projects, so the first viewport is now the sign-in sheet beside the Work sign and work-history sheet. The build is the record.

**Key Characteristics:**
- A dark room lit only by the screens that are in view.
- Three materials with one job each: paper for prose, tape for names, screens for motion and data.
- Paper and tape hang slightly askew. Screens and tables are level.
- One fixed seat unit, repeated in every project zone.
- One shared clock and one red.

## Colors

A cool, near-black room with warm paper and tape set into it, and one red that means "on".

### Primary
- **Seat Light Red** (#e2513b): The power LED of a lit screen, the dot beside a lit roster row, the underline of every link on paper, and the focus ring. It marks something that is on, or something you can follow.
- **Ink Red** (#b8321f): Red where it has to be read on paper. A lit roster row's number, and a paper link under the pointer.

### Secondary
- **Masking Tape** (#e6d5a8): The name tape on every seat, the strip that holds every sheet (at 86% opacity), the skip link, text selection, the Crew chart bars, and the current rung of the Lobs ladder.
- **Second Roll** (#ead9ae): The name tape on every third seat, so neighboring strips do not look cut from the same piece.
- **Pressed Tape** (#f0e2bb): Name tape while its seat's screen or name is under the pointer.

### Tertiary
- **Team Amber** (#b8891c): First team color in simulated games.
- **Team Blue** (#3d84d6): Second snake color in the Battlesnake simulation.
- **Team Rose** (#cf5a6a): Third snake color in the Battlesnake simulation.
- **Team Violet** (#8c6fe0): Fourth team color. The four were chosen to separate for color-blind viewers on the screen black.

### Neutral
- **Unlit Room** (#111319): The page background and the room. Also the browser theme color.
- **Room Corner** (#0c0d12): Scrollbar track.
- **Dead Glass** (#07080b): Display background inside every bezel, and the band behind a HUD laid over footage (at 82%).
- **Board Cell** (#13151c): Cells drawn on simulated game boards.
- **Glass Rule** (#191b22): Hairlines and floors drawn inside displays, such as ladder rows and the Battlesnake board.
- **Bezel Plastic** (#22252d): The monitor bezel.
- **Bezel Under Hand** (#2e313b): The bezel while its screen or tape name is under the pointer.
- **Dark LED** (#3a2a29): The power LED of a screen that is off.
- **Table Laminate** (#2a2c32): The folding-table band.
- **Table Edge** (#3e414a): The 3px front edge of every table, and the scrollbar thumb.
- **Printer Paper** (#f2efe6): Every sheet, the seat-number chips, and chart tooltips.
- **Toner** (#17171a): Text on paper and on tape.
- **Faded Toner** (#57544c): Secondary text on paper: dates, roster descriptions, meta lines, notes, sign subtitles.
- **Dotted Rule** (#cfc9bb): Dotted 1px dividers between rows on paper.
- **Screen Bone** (#e9e4d8): Text on the dark when it is on: lit claims, HUD values, on-screen text, food on the snake board.
- **Unlit Gray** (#9b9fae): Text on the dark at rest: unlit claims, HUD labels, chart axes, the colophon.

### Named Rules
**The One Red Rule.** Red marks state and links, never area. It appears only as an 8px LED, a 7px dot, a 1.5px underline, a 2px focus ring, or the digits of a lit row. No fill, block, or heading is ever red.

**The Light Surfaces Rule.** Paper and tape are the only light surfaces, and they carry all Toner text. Saturated color other than red appears only inside a display.

## Typography

**Display Font:** Archivo (with Helvetica Neue, Arial, sans-serif), loaded as a variable font with width 62 to 125 and weight 300 to 900
**Body Font:** Archivo at normal width
**Label/Mono Font:** Martian Mono (with ui-monospace, SF Mono, Menlo), weights 400 and 600
**Marker Font:** Just Another Hand (with Marker Felt, Comic Sans MS, cursive), on tape only

**Character:** Archivo does all the printing. It is squeezed to 62.5% width at weight 900 in capitals for the name and zone signs, 72% width at 800 for claims and job names, and normal width for prose. The marker is the handwriting on tape, and the mono is the voice of the machines.

### Hierarchy
- **Display** (900, clamp(3rem, 4.4vw, 4.3rem), 0.86, 62.5% width, uppercase, -0.01em): The name on the sign-in sheet. One per page.
- **Headline** (900, clamp(2.4rem, 4vw, 3.4rem), 0.9, 62.5% width, uppercase): Zone signs.
- **Tape** (Just Another Hand 400, clamp(2rem, 2.5vw, 2.5rem), 0.95, 0.01em, uppercase): Project names on tape.
- **Claim** (800, clamp(1.6rem, 2.3vw, 2.15rem), 1.1, 72% width, -0.005em, balanced wrap): The one large line under each seat. Sentence case, one sentence.
- **Title** (800, clamp(1.45rem, 2vw, 1.8rem), 1, 72% width): Organization names on the work-history sheet.
- **Group** (800, 1.15rem, 72% width, 0.01em, uppercase): Group headings on the sign-in roster.
- **Body** (400, 0.95rem, 1.6): Spec-sheet prose and sign subtitles. Work-history sentences are 0.98rem, capped at 58ch. The page base is 16px at 1.6.
- **Body Small** (400, 0.9rem, 1.55): The intro and roster rows. Roster names are 600, and descriptions are 0.82rem in Faded Toner.
- **Note** (400, 0.78rem, 1.5): Provenance notes at the foot of a spec sheet, in Faded Toner.
- **Mono** (Martian Mono 400, 0.69rem to 0.72rem): Seat and roster numbers, job dates, HUD readouts, chart text, the colophon. Text panels on a screen scale with the display, clamp(0.69rem, 3.1cqi, 0.86rem). HUD values are 600 in Screen Bone with tabular figures.
- **Meta** (Martian Mono 400, 0.74rem): The one line at the foot of each spec sheet, such as "Rust · private repo" or "TypeScript · GitHub".

### Named Rules
**The Three Hands Rule.** Archivo prints, the marker writes, the mono computes. The marker appears only on tape. Mono is only for numbers, dates, spec terms, and anything shown on a screen.

**The Capitals Rule.** Capitals are for the name, zone signs, roster group headings, and tape. Claims, job titles, and prose stay in sentence case.

## Layout

The room is a two-column grid centered at a 1560px maximum: the sign-in sheet column (300px to 370px) on the left and the floor on the right, with a gap of clamp(36px, 4.5vw, 72px). The side gutter is clamp(16px, 4vw, 56px) and the top is clamp(28px, 4vw, 56px). The sign-in sheet stays pinned 28px from the top while the viewport is wider than 960px and taller than 860px.

The floor is one continuous room, not boxed sections. Zones are separated by clamp(110px, 11vw, 160px) of dark room. Each starts with a paper sign, placed clamp(44px, 5vw, 64px) above its content. The Work zone holds a single work-history sheet. The Teaching zone holds one seat, for EECS 498 AASE. Project zones hold seats in an auto-fill grid with a 360px minimum track, a column gap of clamp(28px, 3vw, 44px), and a row gap of clamp(72px, 7.5vw, 108px). A zone with one seat gives it the whole table: one column, the seat capped at 820px, a 16:9 display instead of 4:3, and the spec sheet capped at 640px.

A seat reads top to bottom: screen, desk band, claim (28px above and 26px below), spec sheet. Each desk band runs the full viewport width, behind the sign-in sheet, so a row of seats reads as one long table across the room. Job rows on the work-history sheet split into an organization column at minmax(150px, 0.34fr) and a role-and-prose column, with 22px of padding and a dotted rule between rows.

Responsive behavior:
- Below 960px wide, the room becomes one column. The sign-in sheet sits at the top, unpinned, capped at 560px and tilted less (-0.6deg).
- Below 920px tall, the sign-in sheet unpins at any width.
- Below 600px, roster rows flow into two columns with descriptions hidden, and group headings span both. Job rows keep the year and name side by side and drop the sentence below them.
- Below 480px, sheet padding tightens (sign-in 28px 22px 22px, spec 22px 20px 18px) and claim margins drop to 22px and 20px.
- Seats fall to one column whenever the floor cannot fit two 360px tracks.

### Named Rules
**The Long Table Rule.** A desk band always spans the full viewport width. Seats sit on tables, and tables are never cards.

## Elevation & Depth

A hybrid. Paper is the only thing that casts a shadow. The dark side of the room is flat and gets its depth from light: an unlit screen is dimmed and desaturated, a lit screen is at full brightness, and a lit screen throws a warm pool of light onto the table in front of it. The sign-in sheet stacks above the floor so the table bands pass behind it.

### Shadow Vocabulary
- **Taped Paper** (`box-shadow: 0 1px 1px rgba(0, 0, 0, 0.35), 0 18px 34px -14px rgba(0, 0, 0, 0.75)`): Every sheet. A tight contact shadow plus a soft fall below, so the sheet hangs off the wall from its tape.
- **LED Glow** (`box-shadow: 0 0 0 2px rgba(226, 81, 59, 0.18)`): The power LED of a lit screen. Light, not elevation.
- **Desk Light** (`radial-gradient(ellipse 58% 150% at 50% 0%, rgba(240, 232, 210, 0.34), rgba(240, 232, 210, 0.1) 50%, transparent 78%)`): Fades in on the table under a lit screen.
- **Unlit Display** (`filter: brightness(0.36) saturate(0.45)`): Every display whose seat is not lit. Lifts to no filter when lit.

### Named Rules
**The Only Paper Casts Rule.** Only sheets have a drop shadow. Screens, tape, desks, and seat-number chips are flat. A new surface that needs to lift off the room is a sheet.

**The Screens Are The Light Rule.** On the dark side, depth comes from a screen turning on. Display brightness, LED, desk light, and claim color change together, and nothing else on the dark side glows.

## Shapes

Paper is square and slightly rotated: the sign-in sheet at -1.2deg, zone signs at -0.7deg, the work-history sheet at 0.25deg, and spec sheets at 0.25deg, alternating to -0.3deg on even seats. A tape strip, 96px by 24px in Masking Tape at 86%, holds the top center of every sheet at -2deg (2deg on even seats, 74px or 110px wide on alternating seats). Tape ends are torn. A mask cuts 9px ragged ends on each side, and three tear shapes rotate across seats so neighbors never match. Name tape tilts -1.2deg, 0.9deg, then -0.4deg in a three-seat cycle. Seat-number chips are paper rotated 1deg.

The hardware is level and slightly rounded. Bezels round 7px at the top and 3px at the foot. The LED (8px) and the roster dot (7px) are circles. Chart bars round their top corners by 4px. The table's front edge is a 3px stripe of Table Edge. On paper, dotted 1px rules divide rows, and a solid 1.5px Toner rule sits under roster group headings and above spec lists.

### Named Rules
**The Askew Rule.** Paper and tape are always rotated, by no more than 2 degrees. Screens, desks, and text on the dark are never rotated.

**The Torn Tape Rule.** Tape always has torn ends from the shared tear masks, and seats next to each other use different tear shapes.

## Components

### Sheet (Cards / Containers)
Printer paper taped to the wall. Every block of prose lives on one.
- **Corner Style:** Square (0px).
- **Background:** Printer Paper with Toner text.
- **Shadow Strategy:** Taped Paper (see Elevation & Depth).
- **Border:** None. A tape strip at the top center is the only attachment.
- **Internal Padding:** 26px 26px 22px on spec sheets, 28px 28px 22px on the sign-in sheet, clamp(26px, 3vw, 38px) by clamp(22px, 3vw, 40px) on the work-history sheet, 20px 28px 18px on zone signs.
- **Links on paper:** Toner text with a 1.5px Seat Light Red underline offset 3px. Under the pointer the text turns Ink Red (160 ms). The focus ring on paper is Toner instead of red.

### Zone Sign
A small sheet sized to its text, holding the zone name in Headline type and an optional one-line subtitle in Faded Toner at 0.95rem. Work and Tools have no subtitle.

### Navigation (Sign-in Sheet and Roster)
- **Style:** One sheet in the left column holding the name, a two-sentence intro, the roster, and GitHub and LinkedIn links (600, 0.92rem) with an outbound arrow drawn as an inline SVG stroke.
- **Roster:** Two groups, Work and Projects, each under a Group heading with a 1.5px Toner rule. A row is a mono number or year (0.7rem, Faded Toner), a name (600), and a right-aligned description (0.82rem, Faded Toner), with dotted rules between rows. The whole row is the hit area.
- **Hover / Focus:** The name underlines in Seat Light Red, and the seat it names lights up on the floor.
- **Lit:** While a seat or job is lit, its row shows a 7px Seat Light Red dot in the left margin (scaling in over 260 ms) and its number turns Ink Red.
- **Mobile:** Below 600px, rows flow into two columns and descriptions hide.

### Work-History Sheet
One sheet holds every job, one row each, in three columns: the year in mono, the organization in Title type, and one plain sentence about the job. No role lines, no metrics, nothing that reads as a résumé bullet. Jobs take part in the lit logic, so their roster rows light while they are in view, but a job has no lit look of its own.

### Seat (Signature Component)
The unit every project gets, identical in every project zone: screen, desk band, claim, spec sheet.

- **Screen:** A Bezel Plastic frame with 10px padding and a 16px foot, holding the display. The power LED is an 8px circle in the foot, 14px from the right edge. It is Dark LED when off, and Seat Light Red with the LED Glow when lit (300 ms).
- **Display:** Dead Glass, 4:3 (16:9 in a one-seat zone), clipping its contents. Unlit displays use the Unlit Display filter and power up over 900 ms with the shared ease. Contents can be a canvas simulation, recorded frames stepping on the clock, a still that swaps to its animation only while lit, a muted looping video that plays only while lit, a mono text panel, or a bar chart. Footage with a white background sits on a white display.
- **HUD:** A mono readout along the bottom of the display, labels in Unlit Gray and values in Screen Bone. Over recorded footage it sits on a Dead Glass band at 82%.
- **Desk band:** Table Laminate with a 3px Table Edge stripe on top, 14px above and 15px below its contents, extended across the full viewport. It holds the seat-number chip (paper, mono 0.69rem at 600, rotated 1deg) and the name tape. Under a lit screen the Desk Light fades in over 900 ms.
- **Claim:** One sentence in Claim type directly on the room. Unlit Gray at rest, Screen Bone when lit (600 ms).
- **Spec sheet:** A sheet under the claim with short paragraphs of Body text, then one Meta line under a 1.5px Toner rule. An optional note line gives the screen's provenance, and an optional link line (600, 0.9rem) follows it.

### Name Tape (Buttons)
The seat's one real link, and the only call to action on the floor.
- **Shape:** A strip of Masking Tape with torn 9px ends, padding 7px 18px 1px, rotated in the three-seat cycle. Every third seat uses Second Roll.
- **Text:** Tape type in Toner, followed by an outbound arrow stroke at 0.36em.
- **Hover:** Pointing at the tape or at its screen turns the tape Pressed Tape and the bezel Bezel Under Hand (200 ms), and moves the arrow 2px up and right (220 ms, shared ease).
- **Focus:** A 2px Seat Light Red outline around the name, kept inside the tape so the torn-end mask cannot clip it.
- **Screen link:** The screen links to the same place but is removed from the tab order. Keyboard users reach the project through the tape.

### Chart and Text Panels
- **Bar chart (Crew):** Masking Tape bars with 4px top corners and 2px gaps, the peak labeled in mono. Under the pointer a bar brightens and a paper tooltip in mono appears (120 ms). A screen-reader table carries the same numbers.
- **Ladder (Lobs):** Mono rows in a 2.6em, 3.2em, and remaining-width grid, divided by Glass Rule hairlines. The current row is in Masking Tape.

### States and Motion
- **Shared clock:** One 140 ms tick. Each screen advances every N ticks (Battlesnake 2, Screeps frames 6, Mage Lords frames 34), and only while its seat is lit. Videos (Screeps Arena, excalive) and the Drawn Together GIF play only while their seat is lit and motion is allowed. Simulations run a few dozen steps before first paint so they open mid-game.
- **Lit window:** A seat is lit while its screen's center sits between 18% and 78% of the viewport height. If no seat qualifies, the nearest one within 60% of the viewport height is lit. Hovering or focusing its roster row also lights it.
- **Easing:** cubic-bezier(0.16, 1, 0.3, 1) for power-up, desk light, claim color, roster dot, and arrow. Plain ease for bezel, LED, link, and bar color changes.
- **Reduced motion:** The clock never starts, stills never swap to animation, videos never play, and power-up, LED, desk light, and roster dot changes are instant. Smooth scrolling is off.
- **Focus:** A 2px Seat Light Red outline, offset 3px, radius 2px. Toner on paper.
- **Selection:** Masking Tape with Toner text.
- **Skip link:** A Masking Tape chip that drops in at the top left on focus.

### Named Rules
**The Identical Seat Rule.** Every project seat has the same parts in the same order: screen, desk band with seat number and tape name, claim, spec sheet. A project that does not fit the unit changes what is on its screen, not the unit.

**The Lit Seat Rule.** Only seats in the middle of the viewport, or pointed at from the sign-in sheet, are lit. Lighting a seat changes its display, LED, desk light, claim, and roster row together.

**The One Clock Rule.** Every screen advances on the shared 140 ms clock, in whole ticks, and only while its seat is lit.

**The Labeled Simulation Rule.** A screen that is not recorded footage or real data says so in a note on its spec sheet. The Screeps screen shows real frames recorded from the game client. The Screeps Arena screen is a clip of the game's official trailer and says so. The Battlesnake canvas is a labeled simulation.

## Do's and Don'ts

### Do:
- **Do** put all prose on paper in Toner, and keep the dark room for claims, HUDs, and the colophon.
- **Do** give every new project the full seat: screen, desk band, seat number, tape name linking to the project's public home, one claim, and a spec sheet.
- **Do** light a seat only from the lit window or a roster pointer, and drive any new screen from the shared 140 ms clock.
- **Do** show recorded footage or real data on a screen where it exists, and label anything simulated in the browser with a note on its spec sheet.
- **Do** rotate paper and tape by a fraction of a degree, and vary tilt and tear shape between neighboring seats.
- **Do** honor reduced motion: no clock, no swap to animation, instant state changes.
- **Do** use commas, colons, or periods where a dash might go. Box-drawing lines inside a screen diagram are not dashes.

### Don't:
- **Don't** use em dashes or en dashes anywhere in copy.
- **Don't** use bold or strong emphasis inside a sentence of prose. Weight belongs to whole lines: headings, role lines, roster names, link rows, and HUD values.
- **Don't** add a light theme or any light surface other than paper and tape. The site is dark only.
- **Don't** use a serif display face. Fraunces was rejected.
- **Don't** put an email address anywhere on the site. GitHub and LinkedIn are the contact routes.
- **Don't** fill any area with red, or use red for anything other than a lit state, a link underline, or focus.
- **Don't** give screens, tape, desks, or chips a drop shadow.
- **Don't** use the marker face anywhere but tape, or mono for prose.
- **Don't** add a status light, counter, or "live" signal that is not wired to something real.
- **Don't** box the floor into cards or panels. Zones are separated by dark space and paper signs, and tables run edge to edge.
