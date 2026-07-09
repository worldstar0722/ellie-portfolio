import { useEffect, useState } from "react";

// Minimal hash router: "#/case/<id>" renders a case study page,
// anything else renders the home page (plain "#section" anchors keep
// their native scroll behavior).
export function useHashRoute() {
  const [hash, setHash] = useState(() =>
    typeof window === "undefined" ? "" : window.location.hash
  );

  useEffect(() => {
    const onChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  const caseMatch = hash.match(/^#\/case\/([\w-]+)$/);
  return { caseId: caseMatch ? caseMatch[1] : null, hash };
}
