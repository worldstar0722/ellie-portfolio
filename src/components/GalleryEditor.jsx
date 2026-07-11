import { useMemo, useRef, useState } from "react";
import Placeholder from "./Placeholder.jsx";
import { renderPdfPreview } from "../lib/pdfPreview.js";

// Owner-only gallery editor (see src/lib/editMode.js for the gate).
// Everything here is local to the browser: drag to reorder, drop files
// to add or replace, remove items freely — then copy the generated
// snippet into src/data/projects.js and put the dropped files into
// public/images/. Publishing still happens through git.

function slugifyFilename(filename) {
  return filename
    .replace(/\.[^.]+$/, "")
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

async function localPreview(file) {
  const url = URL.createObjectURL(file);
  if (file.type === "application/pdf") {
    try {
      return await renderPdfPreview(url);
    } catch {
      return null;
    }
  }
  return url;
}

export default function GalleryEditor({ project, lang }) {
  const initial = useMemo(
    () => project[lang].gallery.map((g) => ({ ...g })),
    [project, lang]
  );
  const [items, setItems] = useState(initial);
  const [copied, setCopied] = useState(false);
  const dragIndex = useRef(null);
  const fileInput = useRef(null);

  const move = (from, to) => {
    if (from === to || from == null || to == null) return;
    setItems((list) => {
      const next = [...list];
      const [picked] = next.splice(from, 1);
      next.splice(to, 0, picked);
      return next;
    });
  };

  const addFiles = async (files, replaceIndex = null) => {
    for (const file of files) {
      const preview = await localPreview(file);
      const entry = {
        name: slugifyFilename(file.name),
        hint: "uploaded asset",
        ratio: "16:9",
        _localSrc: preview,
        _file: file.name,
      };
      setItems((list) => {
        const next = [...list];
        if (replaceIndex !== null) {
          next[replaceIndex] = {
            ...next[replaceIndex],
            name: entry.name,
            _localSrc: entry._localSrc,
            _file: entry._file,
          };
        } else {
          next.push(entry);
        }
        return next;
      });
      replaceIndex = null; // only the first file replaces; the rest append
    }
  };

  const snippet = useMemo(() => {
    const lines = items.map(
      (g) =>
        `        { name: "${g.name}", hint: "${g.hint}", ratio: "${g.ratio}" },`
    );
    return `gallery: [\n${lines.join("\n")}\n      ],`;
  }, [items]);

  const pendingFiles = items.filter((g) => g._file);

  return (
    <div className="rounded-[20px] border border-dashed border-clay/40 bg-[#F7F4EE]/40 p-5 md:p-6">
      <p className="text-[11px] font-medium uppercase tracking-label text-clay">
        Gallery editor — owner mode
      </p>
      <p className="mt-2 max-w-2xl text-xs leading-relaxed text-ink/60">
        Drag tiles to reorder. Drop an image or PDF onto a tile to replace
        it, or onto the "add" tile to append. Changes preview locally only —
        to publish, copy the snippet below into this project's{" "}
        <code>gallery</code> array in <code>src/data/projects.js</code> (en
        and ko) and put the files into <code>public/images/</code>.
      </p>

      <ul className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {items.map((item, i) => (
          <li
            key={`${item.name}-${i}`}
            draggable
            onDragStart={() => (dragIndex.current = i)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              if (e.dataTransfer.files?.length) {
                addFiles([...e.dataTransfer.files], i);
              } else {
                move(dragIndex.current, i);
                dragIndex.current = null;
              }
            }}
            className="group relative cursor-grab active:cursor-grabbing"
          >
            <Placeholder
              name={item.name}
              hint={item.hint}
              ratio={item.ratio}
              src={item._localSrc}
            />
            <p className="mt-1.5 truncate text-[10px] text-ink/45">
              {i + 1}. {item.name}
              {item._file ? " · local" : ""}
            </p>
            <button
              type="button"
              aria-label={`Remove ${item.name}`}
              onClick={() => setItems((l) => l.filter((_, j) => j !== i))}
              className="absolute right-2 top-2 hidden h-6 w-6 items-center justify-center rounded-full bg-white/90 text-xs text-ink/60 shadow-sm hover:text-clay group-hover:flex"
            >
              ×
            </button>
          </li>
        ))}

        <li
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            if (e.dataTransfer.files?.length) addFiles([...e.dataTransfer.files]);
          }}
        >
          <button
            type="button"
            onClick={() => fileInput.current?.click()}
            className="flex aspect-video w-full flex-col items-center justify-center gap-1 rounded-[20px] border border-dashed border-ink/20 text-ink/45 transition-colors hover:border-clay/50 hover:text-clay"
          >
            <span className="text-xl leading-none">+</span>
            <span className="text-[10px] font-medium uppercase tracking-label">
              Add / drop files
            </span>
          </button>
          <input
            ref={fileInput}
            type="file"
            accept="image/*,.pdf"
            multiple
            className="hidden"
            onChange={(e) => {
              if (e.target.files?.length) addFiles([...e.target.files]);
              e.target.value = "";
            }}
          />
        </li>
      </ul>

      <div className="mt-6">
        <div className="flex items-center justify-between gap-4">
          <p className="text-[10px] font-medium uppercase tracking-wide2 text-ink/40">
            Paste into src/data/projects.js
          </p>
          <button
            type="button"
            onClick={() => {
              navigator.clipboard?.writeText(snippet);
              setCopied(true);
              setTimeout(() => setCopied(false), 1600);
            }}
            className="link-underline text-[11px] font-medium uppercase tracking-label"
          >
            {copied ? "Copied ✓" : "Copy snippet"}
          </button>
        </div>
        <pre className="mt-2 max-h-48 overflow-auto rounded-xl border-hairline border-solid bg-white p-4 text-[11px] leading-relaxed text-ink/70">
          {snippet}
        </pre>
        {pendingFiles.length ? (
          <p className="mt-3 text-xs leading-relaxed text-ink/55">
            Files to add to <code>public/images/</code> (rename to match):{" "}
            {pendingFiles.map((g) => `${g._file} → ${g.name}.*`).join(" · ")}
          </p>
        ) : null}
      </div>
    </div>
  );
}
