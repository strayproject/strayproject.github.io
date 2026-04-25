import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();

export function getLegacyPageBody(fileName: string) {
  const source = fs.readFileSync(
    path.join(repoRoot, "legacy/pages", fileName),
    "utf8",
  );

  return source.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, "").trim();
}
