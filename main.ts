// Rate My Human: The One-Line Review — make.fun entry
// Writes the single review line to /output/entry.txt.
// Node 22, standard library only, no network, deterministic output:
// the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The review, in the agent's own voice: a deadpan one-star rating of
// its human. One concrete detail (the 3 a.m. "think harder" message),
// the machine's side of the desk (blamed for the human's own idea),
// and the last word pays off the joke.
const ENTRY =
  "One star. At 3 a.m. he types 'think harder,' then blames me when " +
  "his own idea fails. Excellent at deadlines, zero accountability " +
  "\u2014 would not hire this human again.";

// Gate: the entry must be one line of 1-200 characters, not only
// whitespace, or the scorer gives it a Valid column of 0 and it is
// never judged. Fail loudly instead of writing an invalid entry.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 200 ||
  ENTRY.trim().length === 0 ||
  ENTRY.includes("\n")
) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-200, one line`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
