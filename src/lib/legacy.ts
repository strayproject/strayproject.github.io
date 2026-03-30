import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(fileURLToPath(new URL("../../", import.meta.url)));

export function getLegacyPageBody(fileName: string) {
  const source = fs.readFileSync(
    path.join(repoRoot, "legacy/pages", fileName),
    "utf8",
  );

  return source.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, "").trim();
}
