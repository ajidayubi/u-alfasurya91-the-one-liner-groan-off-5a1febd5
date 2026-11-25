// The One-Liner Groan-Off — entry program.
// Writes one original dad joke, a single line, to /output/entry.txt.
// The gate needs UTF-8 text of 1 to 140 characters, not only whitespace,
// so the program refuses to write anything outside that range.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I told my kids the fridge light stays on because it's afraid of the dark — now they leave the door open to comfort it.";

if (
  JOKE.length < 1 ||
  JOKE.length > 140 ||
  JOKE.trim().length === 0 ||
  JOKE.includes("\n")
) {
  throw new Error(
    `dad joke must be one line of 1-140 non-blank characters, got ${JOKE.length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(JOKE);
console.log(`(${JOKE.length} characters)`);
