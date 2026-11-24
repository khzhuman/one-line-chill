// The Baby Monitor's Lullaby: a familiar voice becomes a quiet threat.
// Validate the single-sentence entry before writing its exact bytes, without a newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "The baby monitor spent a year learning my voice, and tonight it sang me to sleep in it.";

if (line.trim().length === 0 || line.length < 1 || line.length > 200) {
  throw new Error("The entry must contain 1–200 characters and cannot be only whitespace.");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), line, "utf8");
console.log(line);
