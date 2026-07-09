import { createContext, useContext, useEffect, useState } from "react";

// Minimal pathname router (pushState-based). Plain "#anchor" links keep
// native scroll behavior; internal page navigation goes through <Link>.
const NAVIGATE_EVENT = "app:navigate";

export function navigate(to) {
  window.history.pushState(null, "", to);
  window.dispatchEvent(new Event(NAVIGATE_EVENT));
}

export function usePath() {
  const [path, setPath] = useState(() =>
    typeof window === "undefined"
      ? globalThis.__SSR_PATH__ ?? "/"
      : window.location.pathname
  );

  useEffect(() => {
    const onChange = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onChange);
    window.addEventListener(NAVIGATE_EVENT, onChange);
    return () => {
      window.removeEventListener("popstate", onChange);
      window.removeEventListener(NAVIGATE_EVENT, onChange);
    };
  }, []);

  return path;
}

export function Link({ to, children, className, ...rest }) {
  const onClick = (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0)
      return; // let the browser handle new-tab/window clicks
    e.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={onClick} className={className} {...rest}>
      {children}
    </a>
  );
}
