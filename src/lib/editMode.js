// Owner-only edit mode gate.
//
// The site is static: nothing anyone does in a browser can change the
// published content — real persistence is a git push, which only the
// repo owner can do. This gate simply hides the gallery-editor UI from
// visitors:
//   - in local dev (npm run dev): add ?edit to any case study URL
//   - in production: add ?edit=<key> where <key> matches the
//     VITE_EDIT_KEY environment variable configured in Vercel
// The key is a convenience gate, not a security boundary — the security
// boundary is repository write access.
export function isEditMode() {
  if (typeof window === "undefined") return false;
  const param = new URLSearchParams(window.location.search).get("edit");
  if (param === null) return false;
  if (import.meta.env.DEV) return true;
  const key = import.meta.env.VITE_EDIT_KEY;
  return Boolean(key) && param === key;
}
