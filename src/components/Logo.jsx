export default function Logo({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 72"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect x="0" y="0" width="56" height="14" fill="#1B3A5C" />
      <rect x="0" y="25" width="42" height="14" fill="#1B3A5C" />
      <rect x="0" y="50" width="70" height="14" fill="#1B3A5C" />
      <circle cx="87" cy="57" r="7" fill="#C05B3C" />
    </svg>
  );
}
