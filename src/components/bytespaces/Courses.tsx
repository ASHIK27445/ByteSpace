import { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Filter,
  BarChart2,
  Shapes,
  ListFilter,
  Star,
} from "lucide-react";

const GRID =
  "bg-[#0033e0] bg-[linear-gradient(rgba(255,255,255,.13)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.13)_1px,transparent_1px)] bg-[length:108px_108px]";
const FV =
  "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[#0033e0] focus-visible:outline-offset-[3px]";
const WRAP = "max-w-[1240px] mx-auto px-5";
const BTN_ACC = `inline-block border-0 rounded-full px-6 py-3 font-semibold text-[15px] cursor-pointer bg-[#c8ff00] text-[#14163b] ${FV}`;
const OUTLINE_CHIP = `inline-flex items-center gap-2 rounded-full border-[1.5px] border-[#dfe1f5] bg-white text-[#333] px-[18px] py-3 text-[15px] font-medium cursor-pointer ${FV}`;
const PAGE_BTN = `w-11 h-11 grid place-items-center rounded-full border-[1.5px] border-[#dfe1f5] bg-white text-[#14163b] cursor-pointer ${FV}`;
const THUMB_PILL = "relative bg-white/85 text-[#14163b] text-xs px-2.5 py-1 rounded-full";

const cats = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

const grads = [
  "#7aa2ff,#ffd08a",
  "#c9ccd6,#eef0f6",
  "#0b1d3a,#1c6b8a",
  "#20242e,#aab2c5",
  "#f4f6ff,#5fd39b",
  "#ffb3c7,#ffe08a",
];

const courses = [
  "Learn Figma from Basic",
  "Build Digital Asset",
  "the Power of Big Data",
  "Balancing Productivity and Self-Care",
  "Mastering Money Management",
  "From Idea to Startup Success",
  "Complete Guide to React and Tailwind",
  "Brand Identity Design Essentials",
  "Photography for Beginners",
  "Digital Marketing Fundamentals",
  "Motion Graphics with After Effects",
  "Python for Data Analysis",
  "Illustration in Procreate",
  "Public Speaking with Confidence",
  "Social Media Content Strategy",
  "Home Cooking Basics",
  "Music Production from Scratch",
  "Video Editing for Creators",
].map((title, i) => ({
  title,
  thumb: `https://picsum.photos/seed/bytespace-course-${i + 1}/800/500`,
}));

const AV_COLORS = ["#ffb3c7", "#b8c2ff", "#ffc93c"];

function CourseCard({ title, thumb, i }: { title: string; thumb: string; i: number }) {
  const to = `/courses/${i + 1}`;

  return (
    <article className="relative bg-white border border-[#dfe1f5] rounded-[20px] p-4 flex flex-col">
      <Link to={to} tabIndex={-1} aria-hidden="true" className="block">
        <div
          className="relative h-[190px] rounded-[14px] overflow-hidden flex items-end justify-between gap-1.5 px-3.5 pb-5"
          style={{ background: `linear-gradient(135deg,${grads[i % grads.length]})` }}
        >
          <img
            src={thumb}
            alt=""
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <span className={THUMB_PILL}>17 Lessons</span>
          <span className={THUMB_PILL}>2 hours 16 mins</span>
          <span className={THUMB_PILL}>59 Comments</span>
        </div>
      </Link>

      <div className="flex items-center justify-between gap-2 mt-3.5">
        <h3 className="m-0 min-w-0 flex-1 truncate text-lg font-semibold leading-[1.3] tracking-[-.01em]">
          <Link to={to} className={`after:absolute after:inset-0 after:content-[''] ${FV}`}>
            {title}
          </Link>
        </h3>
        <span className="inline-flex items-center gap-1 text-sm text-[#8a8ea8] shrink-0">
          4.5
          <Star className="w-3.5 h-3.5 fill-[#d4d4d8] text-[#d4d4d8]" aria-hidden="true" />
        </span>
      </div>

      <a
        href="creator-profile.html"
        className={`relative z-10 mt-0.5 text-xs text-[#0033e0] self-start ${FV}`}
      >
        by purepearl studio
      </a>

      <div className="flex items-center gap-2 mt-2.5">
        <span className="inline-flex items-center gap-1.5 bg-[#f1f2f4] text-[#5a5d80] rounded-full px-3 py-1.5 text-xs">
          <BarChart2 className="w-3.5 h-3.5" aria-hidden="true" />
          Beginner
        </span>
        <span className="flex items-center">
          {AV_COLORS.map((color, n) => (
            <i
              key={color}
              className={`w-7 h-7 rounded-full border-2 border-white ${n === 0 ? "ml-0" : "-ml-2"}`}
              style={{ background: color }}
            />
          ))}
          <em className="not-italic font-semibold text-[11px] bg-[#c8ff00] text-[#14163b] rounded-full px-2 py-1.5 -ml-2">
            26+
          </em>
        </span>
      </div>

      <div className="flex items-baseline gap-1 mt-2.5">
        <b className="text-xl font-bold text-[#0033e0]">$25</b>
        <span className="text-[11px] text-[#5a5d80]">/lifetime</span>
      </div>
    </article>
  );
}

export default function Courses() {
  const [cat, setCat] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const id = "bytespace-poppins";
    if (document.getElementById(id)) return;

    const preconnect = document.createElement("link");
    preconnect.rel = "preconnect";
    preconnect.href = "https://fonts.googleapis.com";

    const stylesheet = document.createElement("link");
    stylesheet.id = id;
    stylesheet.rel = "stylesheet";
    stylesheet.href =
      "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap";

    document.head.append(preconnect, stylesheet);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#14163b] text-base font-normal leading-[1.6] font-[family-name:Poppins,system-ui,-apple-system,'Segoe_UI',sans-serif] [padding-top:env(safe-area-inset-top,0px)] [padding-bottom:env(safe-area-inset-bottom,0px)]">
      <div className={`${GRID} text-white text-center`}>
        <div className="pt-[50px] pb-[72px] max-[860px]:pt-6 max-[860px]:pb-12">
          <div className={WRAP}>
            <h1 className="m-0 mb-8 font-semibold leading-[1.15] tracking-[-.01em] text-[clamp(26px,2.3vw,34px)]">
              Find Your Next Course
            </h1>
            <form
              className="flex gap-4 justify-center flex-wrap"
              onSubmit={(e) => e.preventDefault()}
            >
              <label className="flex items-center gap-2.5 bg-white rounded-full px-6 h-[52px] w-[min(460px,100%)] text-[#8a8ea8]">
                <Search className="w-[18px] h-[18px] shrink-0" aria-hidden="true" />
                <input
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  className="flex-1 min-w-0 border-0 bg-transparent text-[#14163b] text-[15px] h-full outline-none placeholder:text-[#8a8ea8]"
                />
              </label>
              <button
                type="submit"
                className={`${BTN_ACC} inline-flex items-center gap-2 h-[52px] px-7 font-medium`}
              >
                Courses
                <ChevronDown className="w-4 h-4" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <main className="pt-[72px] pb-[72px] max-[860px]:pt-10 max-[860px]:pb-14">
        <div className={WRAP}>
          <div className="flex justify-between items-start flex-wrap gap-4 mb-8">
            <div className="flex flex-wrap gap-4">
              <button type="button" className={OUTLINE_CHIP}>
                <Filter className="w-4 h-4" aria-hidden="true" />
                Filter
              </button>
              <button type="button" className={OUTLINE_CHIP}>
                <BarChart2 className="w-4 h-4" aria-hidden="true" />
                Level
              </button>
              <button type="button" className={OUTLINE_CHIP}>
                <Shapes className="w-4 h-4" aria-hidden="true" />
                Category
              </button>
            </div>
            <button type="button" className={OUTLINE_CHIP}>
              <ListFilter className="w-4 h-4" aria-hidden="true" />
              Most relevant
            </button>
          </div>

          <div
            role="group"
            aria-label="Filter by category"
            className="flex flex-wrap gap-x-[18px] gap-y-3 mb-16 max-[860px]:mb-8"
          >
            {cats.map((c, i) => (
              <button
                key={c}
                type="button"
                aria-pressed={cat === i}
                onClick={() => setCat(i)}
                className={`border-0 rounded-full px-4 py-3 text-sm font-medium cursor-pointer ${FV} ${
                  cat === i ? "bg-[#c8ff00] text-[#14163b]" : "bg-[#f1f2f4] text-[#333]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-10 max-[860px]:gap-6">
            {courses.map((course, i) => (
              <CourseCard key={course.title} title={course.title} thumb={course.thumb} i={i} />
            ))}
          </div>

          <nav
            aria-label="Pagination"
            className="flex justify-center items-center gap-2 mt-[72px] max-[860px]:mt-10"
          >
            <button
              type="button"
              aria-label="Previous page"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className={PAGE_BTN}
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                type="button"
                aria-current={page === n ? "page" : undefined}
                onClick={() => setPage(n)}
                className={`w-[34px] h-11 border-0 bg-transparent text-sm font-semibold cursor-pointer ${FV} ${
                  page === n ? "text-[#b5b5b5]" : "text-[#14163b]"
                }`}
              >
                {n}
              </button>
            ))}
            <button
              type="button"
              aria-label="Next page"
              onClick={() => setPage((p) => Math.min(5, p + 1))}
              className={PAGE_BTN}
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </main>
    </div>
  );
}