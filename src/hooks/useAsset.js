import { useEffect, useState } from "react";
import { resolveAsset, fileUrl } from "../lib/assets.js";

// Returns { status: "found" | "missing" | "loading", url }.
// A declared `file` resolves synchronously (server-render friendly);
// otherwise the name is probed against the supported extensions.
export function useAsset(name, file) {
  const declared = fileUrl(file);
  const [state, setState] = useState(() =>
    declared ? { status: "found", url: declared } : { status: "loading", url: null }
  );

  useEffect(() => {
    if (declared) {
      setState({ status: "found", url: declared });
      return undefined;
    }
    let cancelled = false;
    setState({ status: "loading", url: null });
    resolveAsset(name).then((url) => {
      if (cancelled) return;
      setState(url ? { status: "found", url } : { status: "missing", url: null });
    });
    return () => {
      cancelled = true;
    };
  }, [name, declared]);

  return state;
}
