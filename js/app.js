/* ================================================================
   TADOKU READER — renderer, level filter, search
   Consumes READERS array from js/data/readers.js

   SELF-CONTAINED (Option B1)
   --------------------------
   All media lives inside this folder:
     video → videos/reading/level{L}/{base}.mp4
     pdf   → pdf/reading/{base}.pdf
     cover → images/covers/level{L}/{base}.png
   ================================================================ */

(function () {
  "use strict";

  // ─── Path helpers ─────────────────────────────────────────────
  function mediaUrls(book) {
    return {
      video: `videos/reading/level${book.level}/${book.base}.mp4`,
      pdf:   `pdf/reading/${book.base}.pdf`,
      cover: `images/covers/level${book.level}/${book.base}.png`,
    };
  }

  // ─── HTML escaping for user-supplied titles ───────────────────
  function esc(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    }[c]));
  }

  // ─── Card builder ─────────────────────────────────────────────
  function buildCard(book) {
    const urls = mediaUrls(book);
    const has = book.has || {};
    const showVideo = has.video !== false;
    const showPdf   = has.pdf   !== false;
    const showCover = has.cover !== false;

    // Cover: link to video if video exists, otherwise no link
    const coverInner = showCover
      ? `<img
           class="reader-cover"
           src="${urls.cover}"
           alt="${esc(book.title)} cover"
           loading="lazy"
           onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
         />
         <div class="cover-placeholder" style="display:none">
           <span class="ph-icon">📖</span>
           <span class="ph-title">${esc(book.title)}</span>
           <span class="ph-level">Level ${book.level}</span>
         </div>`
      : `<div class="cover-placeholder">
           <span class="ph-icon">📖</span>
           <span class="ph-title">${esc(book.title)}</span>
           <span class="ph-level">Level ${book.level}</span>
         </div>`;

    const coverWrapper = showVideo
      ? `<a class="reader-cover-link" href="${urls.video}" target="_blank" rel="noopener noreferrer">${coverInner}</a>`
      : `<div class="reader-cover-link">${coverInner}</div>`;

    const watchBtn = showVideo
      ? `<a class="reader-btn reader-btn-watch" href="${urls.video}" target="_blank" rel="noopener noreferrer">▶ Watch</a>`
      : `<a class="reader-btn reader-btn-watch" hidden>▶ Watch</a>`;

    const pdfBtn = showPdf
      ? `<a class="reader-btn reader-btn-pdf" href="${urls.pdf}" target="_blank" rel="noopener noreferrer">📕 PDF</a>`
      : `<a class="reader-btn reader-btn-pdf" hidden>📕 PDF</a>`;

    return `
      <article class="reader-card" data-level="${book.level}" data-title="${esc(book.title.toLowerCase())}">
        <span class="reader-level-badge">L${book.level}</span>
        ${coverWrapper}
        <div class="reader-body">
          <h3 class="reader-title">${esc(book.title)}</h3>
          <div class="reader-actions">
            ${watchBtn}
            ${pdfBtn}
          </div>
        </div>
      </article>`;
  }

  // ─── State ────────────────────────────────────────────────────
  let activeLevel = "all";
  let searchTerm  = "";

  // ─── DOM refs ─────────────────────────────────────────────────
  const grid     = document.getElementById("readerGrid");
  const statusEl = document.getElementById("statusLine");
  const tabsEl   = document.getElementById("levelTabs");
  const searchEl = document.getElementById("searchInput");

  // ─── Filtering ────────────────────────────────────────────────
  function applyFilters() {
    const cards = grid.querySelectorAll(".reader-card");
    let visible = 0;

    cards.forEach((card) => {
      const levelMatch =
        activeLevel === "all" || card.dataset.level === activeLevel;
      const searchMatch =
        !searchTerm || card.dataset.title.includes(searchTerm);
      const ok = levelMatch && searchMatch;
      card.style.display = ok ? "" : "none";
      if (ok) visible++;
    });

    // Empty state
    const existingEmpty = grid.querySelector(".empty-state");
    if (visible === 0) {
      if (!existingEmpty) {
        const div = document.createElement("div");
        div.className = "empty-state";
        div.textContent = "No books match your filters.";
        grid.appendChild(div);
      }
    } else if (existingEmpty) {
      existingEmpty.remove();
    }

    statusEl.textContent = `Showing ${visible} of ${READERS.length} books`;
  }

  // ─── Render ───────────────────────────────────────────────────
  function render() {
    if (!Array.isArray(READERS) || READERS.length === 0) {
      grid.innerHTML =
        '<div class="empty-state">No books loaded. Check js/data/readers.js.</div>';
      statusEl.textContent = "";
      return;
    }
    grid.innerHTML = READERS.map(buildCard).join("");
    applyFilters();
  }

  // ─── Events ───────────────────────────────────────────────────
  tabsEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".level-tab");
    if (!btn) return;
    tabsEl.querySelectorAll(".level-tab").forEach((b) =>
      b.classList.remove("active"),
    );
    btn.classList.add("active");
    activeLevel = btn.dataset.level;
    applyFilters();
  });

  let searchDebounce;
  searchEl.addEventListener("input", (e) => {
    clearTimeout(searchDebounce);
    searchDebounce = setTimeout(() => {
      searchTerm = e.target.value.trim().toLowerCase();
      applyFilters();
    }, 120);
  });

  // ─── Boot ─────────────────────────────────────────────────────
  document.addEventListener("DOMContentLoaded", render);
  if (document.readyState !== "loading") render();
})();