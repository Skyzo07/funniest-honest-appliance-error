// The Funniest Honest Appliance Error — entry program (program/v1, Node 22, no network).
// Writes a single line of at most 200 characters to $MAKEFUN_OUTPUT_DIR/entry.txt.
// The sealed scorer requires UTF-8 text of 1 to 200 characters, not only whitespace;
// the runtime gate below enforces exactly that before writing anything.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Error: I have been open for 4 minutes. I am a fridge, not a window. Please decide.";

function main(): void {
  // Gate: 1-200 characters, not only whitespace (character count, not bytes).
  const chars = [...ENTRY].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`entry is ${chars} characters, must be 1-200`);
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
    throw new Error("entry must be a single line");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (!outDir) {
    throw new Error("MAKEFUN_OUTPUT_DIR is not set");
  }
  mkdirSync(outDir, { recursive: true });
  // No trailing newline: entry.txt must be byte-identical to the winning line.
  writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
}

main();
