// One-line office joke: the meeting that could have been an email, answered with a reply-all and a follow-up about the email itself.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I told my boss this meeting could've been an email — he replied-all 'Noted' and booked a follow-up to discuss my email.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, JOKE, "utf8");
console.log(`Wrote ${JOKE.length} characters to ${outDir}/entry.txt`);
