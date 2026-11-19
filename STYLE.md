# Writing style guide

Follow this guide whenever you write or edit text on the site. It covers words. Visual rules live in `DESIGN.md`, and facts about the site's purpose and audience live in `PRODUCT.md`.

## 1. Who reads the site

Anyone who lands here: friends, people who heard about one of the projects, AASE students, and people from the Battlesnake and Screeps communities. Many of them don't know the games or the tools. Write so that a curious person who has never heard of Screeps understands each project in two sentences.

## 2. Voice

Write the way I'd explain a project to someone across a table.

1. **First person.** It's my site, so write "I built" and "I'm teaching". Use "you" only for the reader or for someone playing a game ("you have 500 milliseconds to pick a direction").
2. **Plain words.** Use the everyday word. Write "graduate student instructor", not "GSI". Write "the system underneath it", not "the runtime", unless the technical term is the point.
3. **Contractions are fine.** "It's free on Steam" sounds like a person. "It is free on Steam" sounds like a form.
4. **Mix sentence length.** A run of sentences with the same shape, or several in a row that start with the same word, reads like a machine wrote it.
5. **Point first, reason second.** Lead with the result, then say why. "While I was playing, it held a top-3 spot" comes before how the search works.
6. **Concrete over abstract.** "A new idea has to pass an 800-game test" says more than "rigorous evaluation".

## 3. Headings and labels

1. **A heading says what the section holds.** "Bots that play games" and "Games I made" work. Keep headings short.
2. **One phrase, no colons.** Write "EECS 498 AASE", not "EECS 498: AASE".
3. **Sentence case in the source.** The CSS sets capitals where the design wants them. Don't type them in.

## 4. No headlinese

No text on the site is a headline-style fragment, meaning a noun phrase with a second phrase tacked on after a comma or a dot and no verb holding them together. This covers headings, claims, roster cells, meta lines and sign subtitles.

| Headlinese | Plain |
| --- | --- |
| `Intern, returning` | `Full-time in January` |
| `Rust · private repo` | `Written in Rust. The repo is private.` |
| `Lobs, and what it ran on.` | `Lobs and the platforms I built to run it.` |
| `My personal agent, on its ninth engine.` | `Lobs is my personal agent, and it runs on its ninth engine.` |

Each project's large claim line is one short sentence with a verb.

## 5. Paragraphs, not résumé bullets

1. **Work entries are plain sentences.** Write one or two sentences about what the job was. No role lines, metric stacks or bullet fragments. A résumé already exists for those.
2. **Projects get two short paragraphs at most.** The first explains the game or problem. The second says what I did.
3. **Use a list only for steps or for items to scan and compare.** The sign-in roster is a list. A project description is not.

## 6. Say each fact once

1. **The claim and the sheet split the job.** The claim states the one thing to remember. The sheet adds what the claim didn't say. Don't repeat the claim in the first sentence of the sheet.
2. **Short paragraphs.** Two to four sentences.
3. **One project per seat.** A seat that needs two ideas becomes two seats.

## 7. The idea, not the tools

1. **Explain what something does before naming the products behind it.** "Students start by using coding agents" beats a list of three product names.
2. **Keep numbers whose size matters.** "500 milliseconds", "over 50,000 Steam libraries" and "22 days" stay. Version numbers and figures that will be stale in a month go.
3. **Keep tool names to the meta line** ("Written in Rust") unless the tool is the subject of the project.

## 8. Honesty

1. **Invent nothing.** No rankings, users, ratings or outcomes I haven't stated or that aren't on record. `PRODUCT.md` lists what is on record.
2. **Label what isn't real footage.** A screen that is a simulation or someone else's footage says so in a note on its sheet ("The screen is from the game's official trailer").
3. **Keep it current.** Dates drift. "This fall" and "in January" go stale, so check them when the season changes.
4. **Work facts stay at résumé level.** No internal project names, agent names or cost figures from Microsoft.

## 9. Punctuation and emphasis

1. **No em dashes or en dashes.** Use two sentences, a comma or parentheses.
2. **Few semicolons.**
3. **No bold or italics in prose.** Size and the design carry emphasis.
4. **Straight quotes and apostrophes.**

## 10. No AI tells

AI-drafted prose has habits readers notice: "not X but Y" contrasts, one-line closers that repeat the point, lists of three by reflex, inflated words such as "crucial" and "robust", and text that describes the page instead of its subject.

1. **Run the Humanizer skill on any copy you write or change.**
2. **Check the diff for a dropped or changed fact,** such as a number, name, date or claim.
3. **This guide wins on a conflict.**

## 11. Before you push

1. Read the zone headings and claims alone. They should outline the site.
2. Search `index.html` for `—`, `–` and colons in headings.
3. Run Humanizer on the changed copy and check the facts.
4. Look at the page at 1440 and 390 pixels wide.
5. If the first screen of the site changed a lot, regenerate `images/og.jpg`, the link preview image.
