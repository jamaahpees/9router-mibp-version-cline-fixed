export function parseJson(str, fallback = null) {
  if (str == null) return fallback;
  if (typeof str !== "string") return str;
  try { return JSON.parse(str); } catch { return fallback; }
}

// getAll() builds an object from every row in a scope; a single corrupt row
// must not poison the whole map. Drop unparseable values instead.
export function parseJsonEntry(str) {
  const parsed = parseJson(str, undefined);
  return parsed === undefined ? null : parsed;
}

export function stringifyJson(value) {
  return JSON.stringify(value ?? null);
}
