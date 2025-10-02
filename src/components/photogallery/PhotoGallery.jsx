// PhotoGallery.jsx
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import PortfolioV3Data from "@/assets/jsonData/portfolio/PortfolioV3Data.json";
import SinglePortfolioV3 from "./SinglePortfolioV3";

/**
 * FILTERS use canonical vertical slugs (no SR codes):
 * auditorium | cinema | education | hospitality | government | home-theatre
 */
const FILTERS = [
  { label: "ALL",           value: "all" },
  { label: "AUDITORIUM",   value: "auditorium" },
  { label: "CINEMA HALLS",  value: "cinema" },
  { label: "EDUCATION",     value: "education" },
  { label: "HOSPITALITY",   value: "hospitality" },
  { label: "GOVERNMENT",    value: "government" },
  { label: "HOME THEATRE",  value: "home-theatre" },
];

/**
 * URL aliases -> canonical slug (keep old links working)
 */
const ALIAS = {
  all: "all",
  cinema: "cinema",
  "cinema-halls": "cinema",
  auditoriums: "auditorium",
  auditorium: "auditorium",
  education: "education",
  hospitality: "hospitality",
  government: "government",
  "home-theatre": "home-theatre",
  hometheatre: "home-theatre",
  "home-theater": "home-theatre",
};

/**
 * Canonical slug -> URL slug we write (preserve existing slugs)
 */
const VALUE_TO_ALIAS = {
  all: "all",
  cinema: "cinema-halls",
  auditorium: "auditoriums",
  education: "education",
  hospitality: "hospitality",
  government: "government",
  "home-theatre": "home-theatre",
};

/** Helpers **/
const norm = (s = "") => s.toLowerCase().trim();

/**
 * Convert any vertical text to our canonical slug.
 * Handles typos/variants like "Auditoirum", "Home Theater", extra spaces, etc.
 */
const canonicalVertical = (s = "") => {
  const t = norm(s).replace(/\s+/g, " ").replace(/-/g, " ");
  if (t.includes("cinema")) return "cinema";
  if (t.includes("audito")) return "auditorium"; // handles "auditorium"/"auditoirum"
  if (t.includes("education")) return "education";
  if (t.includes("hospitality")) return "hospitality";
  if (t.includes("government")) return "government";
  if (
    t.includes("home theatre") ||
    t.includes("home theater") ||
    t.includes("home  theatre")
  ) {
    return "home-theatre";
  }
  return "all"; // fallback
};

/**
 * Extract vertical from data category like "SR04 - Hospitality" -> "hospitality"
 * Uses text after the last hyphen as the vertical name.
 */
const verticalFromCategory = (cat = "") => {
  const parts = String(cat).split("-");
  const name = parts[parts.length - 1] ?? "";
  return canonicalVertical(name);
};

/**
 * Read ?filter=... from URL and resolve to canonical slug.
 */
const resolveFilter = (raw) => {
  if (!raw) return "all";
  const key = decodeURIComponent(raw).toLowerCase().trim();
  return ALIAS[key] || "all";
};

const PhotoGallery = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState(
    resolveFilter(searchParams.get("filter"))
  );

  useEffect(() => {
    setActiveFilter(resolveFilter(searchParams.get("filter")));
  }, [searchParams]);

  const setFilter = (value) => {
    // value is already a canonical slug (e.g., "cinema")
    setActiveFilter(value);

    // write only the slug to the URL
    const slug = VALUE_TO_ALIAS[value] || "all";
    if (slug === "all") setSearchParams({});
    else setSearchParams({ filter: slug });
  };

  const filteredData =
    activeFilter === "all"
      ? PortfolioV3Data
      : PortfolioV3Data.filter(
          (item) => verticalFromCategory(item.category) === activeFilter
        );

  return (
    <section className="gallery_page">
      <div className="container">
        <div className="portfolio-style-three-area" id="gallery-filters">
          {/* Desktop buttons */}
          <div className="gallery-filter-btns mt-4 mb-3 d-none d-md-flex">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                type="button"
                className={`gallery-filter-btn${
                  activeFilter === f.value ? " active" : ""
                }`}
                aria-pressed={activeFilter === f.value}
                onClick={() => setFilter(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Mobile dropdown */}
          <div className="gallery-filter-dropdown d-flex d-md-none mb-3">
            <select
              className="form-select"
              value={activeFilter}
              onChange={(e) => setFilter(e.target.value)}
            >
              {FILTERS.map((f) => (
                <option value={f.value} key={f.value}>
                  {f.label}
                </option>
              ))}
            </select>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="row gutter-xl gallery_row">
                  {filteredData.map((p) => (
                    <div className="col-lg-6 col-md-6 item-center" key={p.id}>
                      <SinglePortfolioV3 portfolio={p} />
                    </div>
                  ))}
                  {filteredData.length === 0 && (
                    <div className="col-12 text-center py-5">
                      <p className="mb-0">No gallery items found.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="gallery_space"></div>
    </section>
  );
};

export default PhotoGallery;
