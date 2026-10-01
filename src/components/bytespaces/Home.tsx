import { useEffect, useState } from "react";
import {
  Search,
  Star,
  Check,
  Pencil,
  Command,
  Monitor,
  Briefcase,
  Megaphone,
  Camera,
} from "lucide-react";

const FV =
  "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[#0033e0] focus-visible:outline-offset-[3px]";
const WRAP = "max-w-[1160px] mx-auto px-5";
const BTN_ACC = `inline-block border-0 rounded-full px-6 py-3 font-bold text-[15px] cursor-pointer bg-[#c8ff00] text-[#14163b] ${FV}`;
const GRID =
  "bg-[#0033e0] bg-[linear-gradient(rgba(255,255,255,.13)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.13)_1px,transparent_1px)] bg-[length:108px_108px]";
const H2 = "m-0 font-bold leading-[1.1] tracking-[-.02em] text-[clamp(28px,4vw,42px)]";
const MINI =
  "absolute bg-white text-[#14163b] rounded-2xl px-[18px] py-[14px] text-left shadow-[0_10px_30px_-12px_rgba(0,0,0,.35)]";
const MINI_SMALL = "block text-xs text-[#8a8ea8]";
const SHAPE = "absolute z-[1]";
const CTR_P = "mt-4 mx-auto text-[#5a5d80] max-w-[70ch]";
const VISUAL =
  "relative min-h-[340px] rounded-3xl overflow-hidden bg-[linear-gradient(135deg,#dfe6ff,#f4ffc9)]";
const SPLIT = "grid grid-cols-2 max-[860px]:grid-cols-1 gap-14 max-[860px]:gap-7 items-center";
const THUMB_PILL = "bg-white/85 text-[#14163b] text-[11px] px-2 py-[3px] rounded-full";
const TRIANGLE = "[clip-path:polygon(45%_0,100%_88%,0_100%)]";
const BLOB = "rounded-[50px_50px_100px_100px]";

const avatar = (n: number, size = 120) => `https://i.pravatar.cc/${size}?img=${n}`;

const cats = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
  "+ More",
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
].map((title, i) => ({
  title,
  thumb: `https://picsum.photos/seed/bytespace-home-${i + 1}/800/500`,
}));

const paths = [
  { label: "Design", Icon: Pencil },
  { label: "Development", Icon: Command },
  { label: "IT & Software", Icon: Monitor },
  { label: "Business", Icon: Briefcase },
  { label: "Marketing", Icon: Megaphone },
  { label: "Photography", Icon: Camera },
];

const partners = [
  { name: "Google", slug: "google" },
  { name: "Figma", slug: "figma" },
  { name: "Spotify", slug: "spotify" },
  { name: "Airbnb", slug: "airbnb" },
  { name: "Stripe", slug: "stripe" },
];

const stats = [
  ["12K", "Students"],
  ["70+", "Courses"],
  ["16", "Creators"],
];

const perks = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

const quotes = [
  {
    avatar: avatar(5),
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    text: "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    avatar: avatar(13),
    name: "James L.",
    role: "Lifelong Learner",
    text: "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    avatar: avatar(25),
    name: "Alex B.",
    role: "Inspired Creator",
    text: "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

function Avatars({ from, count, extra }: { from: number; count: number; extra: string }) {
  return (
    <span className="flex items-center mt-1.5">
      {Array.from({ length: count }, (_, i) => (
        <img
          key={i}
          src={avatar(from + i, 60)}
          alt=""
          loading="lazy"
          className={`w-[26px] h-[26px] rounded-full border-2 border-white object-cover bg-[#e4e4e4] ${
            i === 0 ? "ml-0" : "-ml-2"
          }`}
        />
      ))}
      <em className="not-italic font-semibold text-xs bg-[#c8ff00] rounded-full px-2 py-1 -ml-2">
        {extra}
      </em>
    </span>
  );
}

function Portrait({ src, className }: { src: string; className: string }) {
  return (
    <img
      src={src}
      alt=""
      className={`absolute left-1/2 bottom-0 rounded-t-full object-cover bg-[#0a2bb0] ${className}`}
    />
  );
}

function ProgressBar() {
  return (
    <div className="h-2 rounded-lg bg-[#eaeaf2] overflow-hidden">
      <i className="block h-full w-[55%] bg-[#c8ff00]" />
    </div>
  );
}

function CourseCard({ title, thumb, i }: { title: string; thumb: string; i: number }) {
  return (
    <article className="bg-white border border-[#dfe1f5] rounded-[18px] overflow-hidden flex flex-col">
      <a href="course-detail.html" className={`block ${FV}`}>
        <div
          className="relative h-[170px] flex items-end justify-between gap-1.5 p-3.5"
          style={{ background: `linear-gradient(135deg,${grads[i % grads.length]})` }}
        >
          <img
            src={thumb}
            alt=""
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <span className={`relative ${THUMB_PILL}`}>17 Lessons</span>
          <span className={`relative ${THUMB_PILL}`}>2 hours 16 mins</span>
          <span className={`relative ${THUMB_PILL}`}>59 Comments</span>
        </div>
      </a>
      <div className="p-[18px] flex flex-col gap-2 flex-1">
        <div className="flex justify-between items-center gap-2">
          <h3 className="m-0 text-base font-bold leading-[1.1] tracking-[-.02em]">{title}</h3>
          <span className="text-sm text-[#5a5d80] inline-flex items-center gap-1 shrink-0">
            <Star className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
            4.5
          </span>
        </div>
        <a href="creator-profile.html" className={`text-xs text-[#5a5d80] ${FV}`}>
          by purepearl studio
        </a>
        <div className="flex items-center gap-2 text-xs text-[#5a5d80]">
          <span>Beginner</span>
          <Avatars from={i + 1} count={3} extra="26+" />
        </div>
        <div>
          <b className="text-lg font-extrabold">$25</b>
          <span className="text-[11px] text-[#5a5d80]">/lifetime</span>
        </div>
      </div>
    </article>
  );
}

function Hero() {
  return (
    <div className={`relative ${GRID} text-white overflow-hidden text-center pt-[72px] max-[860px]:pt-12`}>
      <span className={`${SHAPE} left-[-70px] top-[250px] w-[230px] h-[210px] rounded-[70px] bg-[#c8ff00] -rotate-[22deg] max-[860px]:opacity-90 max-[860px]:rotate-0 max-[860px]:scale-[.6]`} />
      <span className={`${SHAPE} left-[60px] top-[400px] w-[170px] h-[170px] rounded-full border-[38px] border-white [transform:scaleX(.8)_rotate(-20deg)] max-[860px]:hidden`} />
      <span className={`${SHAPE} right-[-80px] top-[230px] w-[210px] h-[280px] ${BLOB} bg-[#c8ff00] -rotate-[14deg] max-[860px]:opacity-90 max-[860px]:rotate-0 max-[860px]:scale-[.6]`} />
      <span className={`${SHAPE} right-[180px] top-[450px] w-[110px] h-[120px] bg-white ${TRIANGLE} max-[860px]:opacity-90 max-[860px]:scale-[.6]`} />
      <span className={`${SHAPE} right-[-10px] bottom-[-30px] w-[150px] h-20 rounded-[40px] bg-white -rotate-[10deg]`} />

      <div className={`${WRAP} relative z-[2]`}>
        <h1 className="m-0 mx-auto max-w-[12em] font-semibold leading-[1.1] tracking-[-.02em] text-[clamp(36px,6.2vw,76px)]">
          Get Access to Hundreds Courses Available
        </h1>
        <p className="text-[17px] mt-[30px] mb-10 mx-auto max-w-[60ch] text-white/[.92]">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>
        <form
          role="search"
          className="flex gap-3 justify-center flex-wrap"
          onSubmit={(e) => {
            e.preventDefault();
            document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <label className="flex items-center gap-2.5 bg-white rounded-full w-[min(420px,100%)] px-5 h-[46px] text-[#8a8ea8]">
            <Search className="w-[18px] h-[18px] shrink-0" aria-hidden="true" />
            <input
              type="search"
              aria-label="Search courses"
              placeholder="Course, topic, creator"
              className="flex-1 min-w-0 border-0 bg-transparent text-[#14163b] text-[15px] h-full outline-none placeholder:text-[#8a8ea8]"
            />
          </label>
          <button type="submit" className={BTN_ACC}>
            Search
          </button>
        </form>

        <div className="relative h-[300px] max-[860px]:h-[280px] max-w-[900px] mx-auto mt-14">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-10 w-[760px] h-[760px] -ml-[380px] max-[860px]:w-[520px] max-[860px]:h-[520px] max-[860px]:-ml-[260px] rounded-full bg-[#c8ff00]"
          />
          <Portrait
            src={avatar(32, 500)}
            className="w-[250px] h-[260px] -ml-[125px] max-[860px]:w-[180px] max-[860px]:h-[187px] max-[860px]:-ml-[90px]"
          />
          <div className={`${MINI} left-0 top-20 max-[860px]:top-2.5`}>
            <b className="font-medium">UI/UX Design</b>
            <small className={MINI_SMALL}>200 Courses • 1000+ Students</small>
          </div>
          <div className={`${MINI} left-10 bottom-5`}>
            <b className="font-medium">Happy Students</b>
            <Avatars from={1} count={5} extra="2K+" />
          </div>
          <div className={`${MINI} right-0 top-[100px] w-[210px] max-[860px]:top-20 max-[860px]:w-40`}>
            <small className="block text-[13px] text-[#14163b]">Learning Progress</small>
            <b className="block font-semibold text-[44px] max-[860px]:text-[32px] leading-[1.1] mt-1.5 mb-2">
              55%
            </b>
            <ProgressBar />
          </div>
        </div>
      </div>
    </div>
  );
}

function PartnerLogos() {
  return (
    <div aria-label="Partners" className="bg-[#f1f2f4] py-11 text-[#555]">
      <div className={`${WRAP} flex justify-between max-[860px]:justify-center items-center gap-x-8 gap-y-5 flex-wrap font-bold text-xl leading-[1.1]`}>
        {partners.map(({ name, slug }) => (
          <span key={slug} className="inline-flex items-center gap-2">
            <img
              src={`https://cdn.simpleicons.org/${slug}/555555`}
              alt=""
              loading="lazy"
              className="w-[26px] h-[26px]"
            />
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

function CoursesSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="courses" className="py-20 max-[860px]:py-14">
      <div className={WRAP}>
        <div className="text-center">
          <h2 className={H2}>
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>
          <p className={CTR_P}>
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        <div
          role="group"
          aria-label="Filter by category"
          className="flex flex-wrap gap-2.5 justify-center mx-auto my-8 max-w-[900px]"
        >
          {cats.map((c, i) => (
            <button
              key={c}
              type="button"
              aria-pressed={active === i}
              onClick={() => c !== "+ More" && setActive(i)}
              className={`border-0 rounded-full px-4 py-2 text-sm font-medium cursor-pointer ${FV} ${
                active === i ? "bg-[#c8ff00] text-[#14163b]" : "bg-[#f1f2f4] text-[#333]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
          {courses.map((course, i) => (
            <CourseCard key={course.title} title={course.title} thumb={course.thumb} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LearningPaths() {
  return (
    <section className="pt-0 pb-20 max-[860px]:pb-14">
      <div className={`${WRAP} text-center`}>
        <h2 className="m-0 font-bold leading-[1.1] tracking-[-.02em] text-[clamp(24px,3vw,32px)]">
          Explore Diverse Learning Paths at Bytespace
        </h2>
        <p className={CTR_P}>
          At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
        </p>
        <div className="grid grid-cols-6 max-[860px]:grid-cols-3 gap-4 mt-8">
          {paths.map(({ label, Icon }) => (
            <div
              key={label}
              className="border border-[#dfe1f5] bg-white rounded-2xl px-2.5 py-[22px] text-center font-medium text-[15px]"
            >
              <i className="grid place-items-center w-10 h-10 mx-auto mb-3 rounded-full bg-[#c8ff00] text-[#14163b]">
                <Icon className="w-[18px] h-[18px]" aria-hidden="true" />
              </i>
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CreatorsSection() {
  return (
    <section
      id="creators"
      className="py-20 max-[860px]:py-14 bg-[#eef2ff] bg-[radial-gradient(circle_at_15%_0,rgba(200,255,0,.4),transparent_45%),radial-gradient(circle_at_10%_60%,rgba(120,120,255,.2),transparent_40%)]"
    >
      <div className={WRAP}>
        <div className={`${SPLIT} mb-16`}>
          <div>
            <h2 className={H2}>Your Path to Professional Growth Starts Here!</h2>
            <p className="text-[#5a5d80] mt-5 text-[15px]">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>
            <div className="flex gap-10 mt-7">
              {stats.map(([value, label]) => (
                <div key={label}>
                  <b className="block font-semibold text-[28px] leading-[1.1] text-[#0033e0]">{value}</b>
                  <span className="text-sm text-[#5a5d80]">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={VISUAL}>
            <div className="absolute left-1/2 top-[60px] w-[380px] h-[380px] -ml-[190px] rounded-full bg-[#c8ff00]" />
            <Portrait src={avatar(47, 500)} className="w-[190px] h-[200px] -ml-[95px]" />
            <div className={`${MINI} left-4 top-5`}>
              <b className="font-medium">Learn Figma from Basic</b>
              <small className={MINI_SMALL}>by purepearl studio · $25/lifetime</small>
            </div>
            <div className={`${MINI} right-4 bottom-6 w-[170px]`}>
              <small className="block text-xs text-[#14163b]">Learning Progress</small>
              <b className="block font-semibold text-[32px] leading-normal">55%</b>
              <ProgressBar />
            </div>
          </div>
        </div>

        <div className={SPLIT}>
          <div className={VISUAL}>
            <div className="absolute left-1/2 top-[60px] w-[380px] h-[380px] -ml-[190px] rounded-full bg-[#c8ff00]" />
            <Portrait src={avatar(15, 500)} className="w-[190px] h-[200px] -ml-[95px]" />
            <div className={`${MINI} left-4 top-6 !bg-[#0033e0] !text-white`}>
              <small className="block text-xs text-[#cfd8ff]">Total Revenue · July 1–28</small>
              <b>$120.29</b>
            </div>
            <div className={`${MINI} left-4 top-[120px] !bg-[#0033e0] !text-white`}>
              <small className="block text-xs text-[#cfd8ff]">Year to Date · 2023</small>
              <b>$1,200.38</b>
            </div>
            <div className={`${MINI} right-4 bottom-5`}>
              <b className="font-medium">Happy Students</b>
              <Avatars from={6} count={4} extra="2K+" />
            </div>
          </div>

          <div>
            <h2 className={H2}>Create &amp; Manage Courses Easily.</h2>
            <p className="mt-5 text-[15px]">
              <b>ByteSpace</b> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>
            <ul className="list-none p-0 mt-[22px] mb-0 grid gap-3">
              {perks.map((perk) => (
                <li key={perk}>
                  <span className="inline-grid place-items-center w-5 h-5 rounded-full bg-[#0033e0] text-white mr-3">
                    <Check className="w-3 h-3" aria-hidden="true" />
                  </span>
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function CreatorBand() {
  return (
    <section className={`relative overflow-hidden ${GRID} text-white text-center py-24`}>
      <span className={`${SHAPE} left-[-90px] top-[-20px] w-[230px] h-[210px] rounded-[70px] bg-[#c8ff00] -rotate-[40deg] scale-[.8]`} />
      <span className={`${SHAPE} right-[-60px] bottom-[-70px] w-[210px] h-[280px] ${BLOB} bg-white rotate-[20deg] scale-[.7]`} />
      <span className={`${SHAPE} right-[24%] top-5 w-[110px] h-[120px] bg-[#c8ff00] ${TRIANGLE}`} />
      <div className={`${WRAP} relative z-[2]`}>
        <h2 className={`${H2} max-w-[14em] mx-auto mb-5`}>
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="max-w-[76ch] mx-auto mb-8 text-white/90 text-[15px]">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        <a href="signup.html" className={BTN_ACC}>
          Join as Creator
        </a>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-20 max-[860px]:py-14 bg-[linear-gradient(180deg,rgba(200,255,0,.28),transparent_40%)]">
      <div className={WRAP}>
        <div className={`${SPLIT} mb-12`}>
          <h2 className={H2}>Discover What Our Community Is Saying</h2>
          <p className="text-[#5a5d80] text-[15px]">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>
        <div className="grid grid-cols-3 max-[860px]:grid-cols-1 gap-6">
          {quotes.map((q) => (
            <figure
              key={q.name}
              className="m-0 bg-white border border-[#dfe1f5] rounded-[18px] p-[26px] flex flex-col gap-4 justify-start shadow-[0_20px_40px_-28px_rgba(0,30,120,.4)]"
            >
              <img
                src={q.avatar}
                alt={q.name}
                loading="lazy"
                className="w-14 h-14 rounded-full object-cover bg-[#e4e4e4]"
              />
              <div>
                <b className="font-bold">{q.name}</b>
                <small className="block text-[13.33px] text-[#0033e0]">{q.role}</small>
              </div>
              <blockquote className="m-0 text-[#5a5d80] text-sm">“{q.text}”</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
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
    <div
      id="top"
      className="min-h-screen bg-white text-[#14163b] text-base font-normal leading-[1.6] font-[family-name:Poppins,system-ui,-apple-system,'Segoe_UI',sans-serif] [padding-top:env(safe-area-inset-top,0px)] [padding-bottom:env(safe-area-inset-bottom,0px)]"
    >
      <main>
        <Hero />
        <PartnerLogos />
        <CoursesSection />
        <LearningPaths />
        <CreatorsSection />
        <CreatorBand />
        <Testimonials />
      </main>
    </div>
  );
}