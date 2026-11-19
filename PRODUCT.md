# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Anyone who lands on rafesymonds.com: friends, peers, people who heard about one of Rafe's projects, AASE students, people in the game-AI communities (Battlesnake, Screeps). Rafe described it as "just kind of a cool personal site." It is not a recruiting tool: recruiting is closed and he returns to Microsoft full-time in January 2027.

## Product Purpose

Show what Rafe builds and plays with, and give each project enough context that a stranger understands why it is interesting. Success is a visitor who leaves knowing the projects and wanting to look at one.

## Positioning

Rafe builds agent systems and points them at games. Games are where he started (a Steam release in high school) and where he still tests ideas (Battlesnake search, Screeps colony AI, Screeps Arena). Lobs went through eight self-built runtimes before he adopted Hermes. The same durable-agent problem was his Microsoft internship.

## Operating Context

- Static site: `index.html`, `style.css`, `main.js`, `images/`. No build step. `bin/site start` serves it on port 8788.
- Deployed via GitHub Pages (CNAME `rafesymonds.com`) and a GitLab Pages CI job (`.gitlab-ci.yml`).
- `rafesymonds.com/excalive/` is served by the separate `RafeSymonds/excalive` repo's Pages. The root site must not claim that path.

## Capabilities and Constraints

Project roster, confirmed 2026-11-19:

- Microsoft (SWE intern, May to July 2026, Azure Hyperscale Networking). Résumé-level facts only: no internal platform names, agent names, or cost figures from the internal deck.
- Lobs: Lobs on Hermes (live), Crew, Squad. PAW is not a separate flagship; it was folded into Lobs. Software Factory was cut on 2026-11-19 ("that one isn't cool"); it stays only as a line in the Lobs runtime list.
- Battlesnake (Rust, private repo), Screeps (TypeScript, private repo, played on and off since 2024), Screeps Arena (TypeScript, private repo since 2026-11-19). Screeps and Screeps Arena link to their Steam store pages.
- Land of the Mage Lords (Steam) and Drawn Together, Pulled Apart (itch.io).
- excalive (public repo, page at rafesymonds.com/excalive/).
- Teaching: GSI for EECS 498-016 AASE (Fall 2026), earlier EECS 281 GSI and EECS 291 co-development (Winter 2026).

Project write-ups explain the game or problem itself, then Rafe's history with it, in two short paragraphs at most. Work entries are one plain sentence each, not résumé bullets. AASE has its own Teaching zone because Rafe considers it a big thing.

Private repos (battle-snakes, Screeps, Screeps-Arena, crew) get no code links. Every seat's name and screen link to the project's public home: play.battlesnake.com, the Screeps and Screeps Arena Steam pages, GitHub repos, Steam, itch.io, rafesymonds.com/excalive/.

Screeps and Screeps Arena screens use clips from each game's official Steam trailer, credited in a note on the sheet. Rafe accepted the copyright risk of hosting short trailer clips (2026-11-19). He plays Screeps on shard 3 as Elrohim.

## Brand Commitments

- No em dashes or en dashes anywhere in copy.
- No bold or strong inline emphasis in prose.
- Dark only.
- Serif display faces were rejected (Fraunces, June 2026).
- A reference site is inspiration only. A design that reads as a copy is rejected.
- No email address on the public site. LinkedIn and GitHub are the contact routes.
- Copy must read as written by Rafe, not by an AI.

## Evidence on Hand

- `images/`: Lobs logo, Nexus dashboard screenshot, Mage Lords capsule, two Drawn Together gameplay GIFs, PAW logo (no longer used).
- Land of the Mage Lords: free-to-play wave defense, solo Unity/C#, 14,000+ lines, Early Access 2022-07-25, full release 2023-01-29. 50,000+ Steam licences across 115 countries (licences, not players). Steam rating "Very Positive", 89% of 75 reviews as of 2026-07-03.
- excalive example GIFs in `~/other/excalive/examples/*/preview.gif`.
- Microsoft, from the résumé: orchestration code cut from about 70,000 to 10,000 lines, 100% of production agents migrated, unrecoverable failures down 84%, Copilot sign-in integration that brought Claude to a GPT-only platform.
- Crew: 314 commits and about 100,000 lines in 22 days.
- Screeps screen: a clip of the official Screeps: World Steam trailer (`images/screeps-trailer.mp4`).
- Battlesnake: Rafe says his snake held a top-3 leaderboard spot while he was playing (stated 2026-11-19). No Screeps ranking is on record; do not invent one.
- Screeps Arena screen: a clip of the official Steam trailer (`images/arena-trailer.mp4`), because the Arena desktop app is not installed and Rafe asked for the trailer.
- AASE screen: a screenshot of eecs498-aase.github.io (`images/aase-site.webp`).

## Product Principles

1. Projects lead. Biography is a supporting line, not a section that competes with the work.
2. Every claim is current and true. A number that drifted gets corrected or dropped.
3. Explain the thing before the achievement. A visitor who has never heard of Screeps should get it in two sentences.
4. Nothing fake-live. No status indicators that are not wired to anything.
