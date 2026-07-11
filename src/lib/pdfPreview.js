// Renders page 1 of a PDF to a data URL for use as a preview thumbnail.
// pdfjs is heavy, so it loads lazily only when a PDF asset actually exists.
export async function renderPdfPreview(url) {
  const pdfjs = await import("pdfjs-dist");
  const worker = await import("pdfjs-dist/build/pdf.worker.min.mjs?url");
  pdfjs.GlobalWorkerOptions.workerSrc = worker.default;

  const absolute = new URL(url, window.location.origin).href;
  const doc = await pdfjs.getDocument({ url: absolute }).promise;
  const page = await doc.getPage(1);
  const viewport = page.getViewport({ scale: 1.5 });
  const canvas = document.createElement("canvas");
  canvas.width = Math.ceil(viewport.width);
  canvas.height = Math.ceil(viewport.height);
  await page.render({ canvasContext: canvas.getContext("2d"), viewport })
    .promise;
  return canvas.toDataURL("image/png");
}
