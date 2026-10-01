import { useEffect, useState } from "react";
import {
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
const OUTLINE_CHIP = `inline-flex items-center gap-2 rounded-full border-[1.5px] border-[#dfe1f5] bg-white text-[#333] px-[18px] py-3 text-[15px] cursor-pointer ${FV}`;

const PROFILE_IMG =
  "https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww";

const grads = [
  "#7aa2ff,#ffd08a",
  "#c9ccd6,#eef0f6",
  "#0b1d3a,#1c6b8a",
  "#20242e,#aab2c5",
  "#f4f6ff,#5fd39b",
  "#ffb3c7,#ffe08a",
];
const titles = [
  "Learn Figma from Basic",
  "Build Digital Asset",
  "the Power of Big Data",
  "Balancing Productivity and Self-Care",
  "Mastering Money Management",
  "From Idea to Startup Success",
];
const thumbs = [
  "https://picsum.photos/seed/bytespace-1/800/500",
  "https://picsum.photos/seed/bytespace-2/800/500",
  "https://picsum.photos/seed/bytespace-3/800/500",
  "https://picsum.photos/seed/bytespace-4/800/500",
  "https://picsum.photos/seed/bytespace-5/800/500",
  "https://picsum.photos/seed/bytespace-6/800/500",
];
const AV_COLORS = ["#ffb3c7", "#b8c2ff", "#ffc93c", "#7ee0a6", "#99aaaa"];

function CourseCard({ title, i }: { title: string; i: number }) {
  return (
    <article className="bg-white border border-[#dfe1f5] rounded-[20px] p-4 flex flex-col">
      <a href="course-detail.html" className={`block ${FV}`}>
        <div
          className="relative h-[190px] rounded-[14px] overflow-hidden flex items-end justify-between gap-1.5 px-3.5 pb-5"
          style={{ background: `linear-gradient(135deg,${grads[i % 6]})` }}
        >
          <img
            src={thumbs[i % 6]}
            alt={title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <span className="relative bg-white/85 text-[#14163b] text-xs px-2.5 py-1 rounded-full">17 Lessons</span>
          <span className="relative bg-white/85 text-[#14163b] text-xs px-2.5 py-1 rounded-full">2 hours 16 mins</span>
          <span className="relative bg-white/85 text-[#14163b] text-xs px-2.5 py-1 rounded-full">59 Comments</span>
        </div>
      </a>
      <div className="flex items-center justify-between gap-2 mt-3.5">
        <h3 className="m-0 min-w-0 flex-1 truncate text-lg font-semibold leading-[1.3] tracking-[-.01em]">
          <a href="course-detail.html" className={FV}>{title}</a>
        </h3>
        <span className="inline-flex items-center gap-1 text-sm text-[#8a8ea8] shrink-0">
          4.5
          <Star className="w-3.5 h-3.5 fill-[#d4d4d8] text-[#d4d4d8]" aria-hidden="true" />
        </span>
      </div>
      <span className="mt-0.5 text-xs text-[#0033e0] self-start">by purepearl studio</span>
      <div className="flex items-center gap-2 mt-2.5">
        <span className="inline-flex items-center gap-1.5 bg-[#f1f2f4] text-[#5a5d80] rounded-full px-3 py-1.5 text-xs">
          <BarChart2 className="w-3.5 h-3.5" aria-hidden="true" />
          Beginner
        </span>
        <span className="flex items-center">
          {AV_COLORS.map((c, n) => (
            <i
              key={c}
              className={`w-7 h-7 rounded-full border-2 border-white ${n === 0 ? "ml-0" : "-ml-3"}`}
              style={{ background: c }}
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

export default function CreatorProfile() {
  const [following, setFollowing] = useState(false);

  useEffect(() => {
    const id = "bytespace-poppins";
    if (document.getElementById(id)) return;
    const pre = document.createElement("link");
    pre.rel = "preconnect";
    pre.href = "https://fonts.googleapis.com";
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap";
    document.head.append(pre, link);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#14163b] text-base font-normal leading-[1.6] font-[family-name:Poppins,system-ui,-apple-system,'Segoe_UI',sans-serif] [padding-top:env(safe-area-inset-top,0px)] [padding-bottom:env(safe-area-inset-bottom,0px)]">
      <div className={`${GRID} text-white`}>
        <div className="pt-[60px] pb-20 max-[860px]:pt-8 max-[860px]:pb-12">
          <div className={WRAP}>
            <div className="flex gap-5 items-center flex-wrap">
              <div className="w-24 h-24 rounded-[20px] overflow-hidden shrink-0 bg-[#ffb3c7]">
                <img
                  src={PROFILE_IMG}
                  alt="PurePearl Studio"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center flex-wrap gap-3">
                  <h1 className="m-0 font-semibold leading-[1.15] tracking-[-.01em] text-[clamp(28px,2.3vw,34px)]">
                    PurePearl Studio
                  </h1>
                  <span className="bg-[#c8ff00] text-[#14163b] rounded-full px-[18px] py-1 text-[15px]">
                    Creator
                  </span>
                </div>
                <p className="m-0 mt-3 text-[15px] text-white/90">
                  Passionate UI/UX, Web designer
                </p>
              </div>
            </div>

            <p className="m-0 mt-10 text-[15px] leading-[1.95] text-white/[.92]">
              Welcome to the creative world of [Creator's Name]. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!
              <br />
              Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.
            </p>

            <div className="flex justify-between items-center gap-3 flex-wrap mt-10">
              <div className="flex gap-4 flex-wrap">
                <span className="bg-white text-[#14163b] rounded-full px-6 py-[11px] text-base">
                  <b className="text-[#0033e0] font-normal mr-2">3</b>Products
                </span>
                <span className="bg-white text-[#14163b] rounded-full px-6 py-[11px] text-base">
                  <b className="text-[#0033e0] font-normal mr-2">12</b>Followers
                </span>
              </div>
              <button
                type="button"
                onClick={() => setFollowing((f) => !f)}
                className={`${BTN_ACC} px-7 py-3 text-base font-medium`}
              >
                {following ? "Following" : "Follow"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <main className="pt-16 pb-16 max-[860px]:pt-10 max-[860px]:pb-14">
        <div className={WRAP}>
          <div className="flex justify-between items-start flex-wrap gap-4 mb-10">
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

          <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-10 max-[860px]:gap-6">
            {titles.map((t, i) => (
              <CourseCard key={t} title={t} i={i} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}