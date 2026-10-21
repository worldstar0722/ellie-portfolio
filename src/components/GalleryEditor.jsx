import { useMemo, useRef, useState } from "react";
import Placeholder from "./Placeholder.jsx";
import { renderPdfPreview } from "../lib/pdfPreview.js";

// Owner-only evidence editor (see src/lib/editMode.js for the gate).
// Everything here is local to the browser: drag to reorder, drop files
// to add or replace, remove items freely — then copy the generated
// snippet into src/data/projects.js and put the dropped files into
// public/images/. Publishing still happens through git.

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
    () => project[lang].evidence.map((g) => ({ ...g })),
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
        file: file.name,
        alt: "describe this image",
        caption: "",
        credit: "",
        _localSrc: preview,
        _file: file.name,
      };
      setItems((list) => {
        const next = [...list];
        if (replaceIndex !== null) {
          next[replaceIndex] = {
            ...next[replaceIndex],
            file: entry.file,
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
        `        { file: "${g.file}", alt: "${g.alt ?? ""}", caption: "${g.caption ?? ""}", credit: "${g.credit ?? ""}" },`
    );
    return `evidence: [\n${lines.join("\n")}\n      ],`;
  }, [items]);

  const pendingFiles = items.filter((g) => g._file);

  return (
    <div className="rounded-xl border border-dashed border-clay/40 bg-paper p-5 md:p-6">
      <p className="text-micro font-medium uppercase tracking-label text-clay-text">
        Evidence editor — owner mode
      </p>
      <p className="mt-2 max-w-2xl text-micro text-ink/75">
        Drag tiles to reorder. Drop an image or PDF onto a tile to replace
        it, or onto the "add" tile to append. Changes preview locally only —
        to publish, copy the snippet below into this project's{" "}
        <code>evidence</code> array in <code>src/data/projects.js</code> (en
        and ko) and put the files into <code>public/images/</code>.
      </p>

      <ul className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {items.map((item, i) => (
          <li
            key={`${item.file}-${i}`}
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
              name={item.file}
              file={item.file}
              hint={item.alt}
              src={item._localSrc}
              showSlot
            />
            <p className="mt-2 truncate text-micro text-ink/65">
              {i + 1}. {item.file}
              {item._file ? " · local" : ""}
            </p>
            <button
              type="button"
              aria-label={`Remove ${item.file}`}
              onClick={() => setItems((l) => l.filter((_, j) => j !== i))}
              className="absolute right-2 top-2 hidden h-6 w-6 items-center justify-center rounded-full border-hairline border-solid bg-white text-micro text-ink/75 hover:text-clay-text group-hover:flex"
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
            className="flex aspect-video w-full flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-ink/20 text-ink/65 transition-colors hover:border-clay/50 hover:text-clay-text"
          >
            <span className="text-h4 leading-none">+</span>
            <span className="text-micro font-medium uppercase tracking-label">
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
          <p className="text-micro font-medium uppercase tracking-wide2 text-ink/65">
            Paste into src/data/projects.js
          </p>
          <button
            type="button"
            onClick={() => {
              navigator.clipboard?.writeText(snippet);
              setCopied(true);
              setTimeout(() => setCopied(false), 1600);
            }}
            className="link-underline text-micro font-medium uppercase tracking-label"
          >
            {copied ? "Copied ✓" : "Copy snippet"}
          </button>
        </div>
        <pre className="mt-2 max-h-48 overflow-auto rounded-xl border-hairline border-solid bg-white p-4 text-micro text-ink/70">
          {snippet}
        </pre>
        {pendingFiles.length ? (
          <p className="mt-3 text-micro text-ink/75">
            Files to add to <code>public/images/</code> (rename to match):{" "}
            {pendingFiles.map((g) => g._file).join(" · ")}
          </p>
        ) : null}
      </div>
    </div>
  );
}
