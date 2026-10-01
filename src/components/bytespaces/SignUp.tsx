import { useEffect, type ReactNode } from "react";
import { Link } from "react-router";
import { Star, ShoppingCart } from "lucide-react";

const POP = "font-[family-name:Poppins,system-ui,sans-serif]";
const SAT = "font-[family-name:Satoshi,Poppins,system-ui,sans-serif]";
const FV =
  "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[#0033e0] focus-visible:outline-offset-[3px]";
const GRID =
  "bg-[#0033e0] bg-[linear-gradient(rgba(255,255,255,.13)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.13)_1px,transparent_1px)] bg-[length:108px_108px]";
const PAD_X = "px-[clamp(20px,8.3vw,108px)]";
const LABEL = "block text-sm leading-[21px] text-[#222] mb-[5px]";
const INPUT = `block w-full h-[47px] border border-[#e4e4ec] rounded-[14px] px-[21px] text-base bg-white text-[#222] placeholder:text-[#9a9aa8] ${FV}`;
const LIME_SHADOW = "[box-shadow:inset_0_-5px_8px_rgba(110,150,0,.45),0_8px_12px_rgba(0,0,60,.25)]";

const AV = ["#f2a7c0", "#e0b48a", "#f2c14e", "#6b7a8f"];
const AV_BIG = [...AV, "#8fd3b0", "#c8a0e8", "#e8d0b0"];

const FONTS = [
  {
    id: "bytespace-poppins",
    href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap",
  },
  {
    id: "bytespace-satoshi",
    href: "https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap",
  },
];

const leftBars = [
  [34, 44, 90],
  [44, 70, 64],
  [54, 92, 42],
  [64, 104, 30],
  [74, 114, 20],
  [84, 120, 14],
  [94, 126, 8],
];

const rightBars = [
  [150, 60, 74],
  [160, 40, 94],
  [170, 52, 82],
  [180, 74, 60],
  [190, 96, 38],
  [200, 112, 22],
  [210, 122, 12],
];

function Pill({ children }: { children: string }) {
  return (
    <span className="bg-[rgba(215,215,222,.78)] text-[#555] text-xs h-7 px-3 rounded-full inline-flex items-center whitespace-nowrap">
      {children}
    </span>
  );
}

function Bars({ bars }: { bars: number[][] }) {
  return (
    <g fill="#27b5d6">
      {bars.map(([x, y, height]) => (
        <rect key={x} x={x} y={y} width="6" height={height} />
      ))}
    </g>
  );
}

function LevelIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="#666" aria-hidden="true">
      <rect x="1" y="8" width="3" height="5" rx=".5" />
      <rect x="5.5" y="5" width="3" height="8" rx=".5" />
      <rect x="10" y="2" width="3" height="11" rx=".5" />
    </svg>
  );
}

function BigDataThumb() {
  return (
    <svg viewBox="0 0 307 175" preserveAspectRatio="xMidYMid slice" className="w-full h-full block">
      <rect width="307" height="175" fill="#f4e9ee" />
      <rect x="22" y="14" width="262" height="146" rx="6" fill="#0b0f14" />
      <Bars bars={leftBars} />
      <Bars bars={rightBars} />
      <path
        d="M30 138C90 130 120 150 170 134S250 120 276 140"
        stroke="#e85d9a"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

function PlaceholderThumb() {
  return (
    <div className="w-full h-full bg-[linear-gradient(135deg,#c4c6cc,#d9dade)] grid place-items-center">
      <ShoppingCart className="w-14 h-14 text-white/40" />
    </div>
  );
}

function CourseCard({
  title,
  thumb,
  className,
}: {
  title: string;
  thumb: ReactNode;
  className: string;
}) {
  return (
    <div
      className={`absolute w-[336px] h-[345px] bg-white text-[#14163b] rounded-[18px] shadow-[0_6px_20px_-8px_rgba(0,0,60,.25)] ${className}`}
    >
      <div className="absolute left-3.5 top-3.5 w-[calc(100%-28px)] h-[175px] rounded-xl overflow-hidden">
        {thumb}
        <div className="absolute left-[11px] bottom-[11px] flex gap-[11px]">
          <Pill>17 Lessons</Pill>
          <Pill>2 hours 16 mins</Pill>
          <Pill>59 Comments</Pill>
        </div>
      </div>

      <div className="absolute left-3.5 right-3.5 top-[207px]">
        <div className="flex items-center justify-between h-7">
          <h3 className={`${POP} m-0 text-[17px] font-medium leading-7 text-[#111] whitespace-nowrap`}>
            {title}
          </h3>
          <span className="inline-flex items-center gap-1 text-base text-[#6b6b7a]">
            4.5
            <Star className="w-[18px] h-[18px] fill-[#c8ff00] text-[#c8ff00]" aria-hidden="true" />
          </span>
        </div>
        <div className="text-xs leading-[18px] text-[#6b6b7a]">
          by <span className="text-[#0033e0]">purepearl studio</span>
        </div>
        <div className="flex items-center gap-[11px] mt-3.5">
          <span className="inline-flex items-center gap-2 h-[30px] px-3.5 rounded-full bg-[#f3f3f5] text-xs text-[#555]">
            <LevelIcon />
            Beginner
          </span>
          <span className="flex items-center">
            {AV.map((color, i) => (
              <i
                key={color}
                className={`w-[30px] h-[30px] rounded-full border-2 border-white ${i ? "-ml-2" : ""}`}
                style={{ background: color }}
              />
            ))}
            <em className="not-italic w-7 h-7 -ml-2 rounded-full bg-[#111] text-white text-[11px] font-semibold grid place-items-center">
              26+
            </em>
          </span>
        </div>
        <div className="mt-[11px] leading-7">
          <b className={`${POP} text-lg font-semibold text-[#0033e0]`}>$25</b>
          <span className="text-xs text-[#6b6b7a]">/lifetime</span>
        </div>
      </div>
    </div>
  );
}

function HappyStudents() {
  return (
    <div className="absolute left-[204px] top-[391px] w-[233px] h-[111px] bg-[#c8ff00] text-[#14163b] rounded-[14px] px-[15px] pt-4 z-[3]">
      <div className={`${POP} text-sm leading-5`}>Happy Students</div>
      <div className="flex items-center gap-1 text-[11px] leading-4 mt-0.5">
        <b className="font-semibold">4.5</b>
        <span className="text-[#6b6b7a]">(240)</span>
        <Star className="w-[11px] h-[11px] fill-[#0033e0] text-[#0033e0]" />
      </div>
      <div className="flex items-center mt-3">
        {AV_BIG.map((color, i) => (
          <i
            key={color}
            className={`w-9 h-9 rounded-full border-2 border-[#c8ff00] ${i ? "-ml-3" : ""}`}
            style={{ background: color }}
          />
        ))}
        <em className="not-italic w-[38px] h-[38px] -ml-2.5 rounded-full bg-[#111] text-white text-xs font-semibold grid place-items-center">
          2K+
        </em>
      </div>
    </div>
  );
}

function Collage() {
  return (
    <div
      aria-hidden="true"
      className="absolute left-0 top-[168px] w-[447px] h-[502px] max-[1100px]:hidden"
    >
      <CourseCard
        title="Build Digital Asset"
        className="left-0 top-20"
        thumb={<PlaceholderThumb />}
      />
      <CourseCard
        title="the Power of Big Data"
        className="left-[101px] top-0"
        thumb={<BigDataThumb />}
      />

      <span
        className={`absolute left-[47px] top-9 w-[91px] h-[88px] rounded-full border-[24px] border-[#c8ff00] -rotate-[25deg] z-[3] ${LIME_SHADOW}`}
      />

      <svg viewBox="0 0 112 122" className="absolute left-0 top-[379px] w-[112px] h-[122px] z-[3]">
        <polygon points="0,88 70,0 112,112" fill="#d6ff2e" />
        <polygon points="70,0 112,112 50,120" fill="#a9de00" />
        <polygon points="0,88 50,120 112,112" fill="#bff000" />
      </svg>

      <svg viewBox="0 0 102 108" className="absolute left-[345px] top-[316px] w-[102px] h-[108px] z-[4]">
        <path
          d="M14 84C30 50 62 30 84 18M12 66C34 40 60 22 86 34M20 94C44 70 70 60 88 66M16 50C40 22 66 14 82 8"
          stroke="#fff"
          strokeWidth="14"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      <HappyStudents />
    </div>
  );
}

export default function SignUp() {
  useEffect(() => {
    FONTS.forEach(({ id, href }) => {
      if (document.getElementById(id)) return;

      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href = href;
      document.head.append(link);
    });
  }, []);

  return (
    <div
      id="top"
      className={`${GRID} ${SAT} min-h-screen text-white text-base font-normal leading-[1.6] [padding-top:env(safe-area-inset-top,0px)] [padding-bottom:env(safe-area-inset-bottom,0px)]`}
    >
      <header className={`${PAD_X} h-[92px] flex items-center`}>
        <a href="index.html" aria-label="ByteSpace home" className={FV}>
          <svg viewBox="0 0 32 32" aria-hidden="true" className="w-[28px] h-[28px] block">
            <path
              d="M4 3h8v9l13 5-13 5v7H4z"
              fill="#c8ff00"
              stroke="#c8ff00"
              strokeWidth="3"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </header>

      <main
        className={`${PAD_X} pt-4 pb-[108px] grid grid-cols-2 max-[860px]:grid-cols-1 gap-[38px] items-start`}
      >
        <div className="relative">
          <h2 className={`${POP} m-0 mb-3 text-lg font-medium leading-[1.4]`}>Sign up and come in</h2>
          <p className="m-0 text-base leading-[26px] max-w-[440px] text-white/90">
            The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost
          </p>
          <Collage />
        </div>

        <div className="bg-white text-[#222] rounded-[32px] px-[clamp(24px,4.4vw,57px)] pt-[57px] pb-[47px] min-h-[708px] flex flex-col shadow-[0_8px_30px_rgba(0,0,60,.12)]">
          <form className="flex flex-col flex-1" onSubmit={(e) => e.preventDefault()}>
            <a href="signup.html" className={`text-base leading-6 text-[#0033e0] self-start ${FV}`}>
              Create an Account
            </a>
            <h1 className={`${POP} m-0 text-[clamp(30px,3.1vw,40px)] font-semibold leading-[1.2] text-[#222]`}>
              Welcome to
              <br />
              ByteSpace
            </h1>

            <label htmlFor="name" className={`${LABEL} mt-[33px]`}>
              Full Name
            </label>
            <input id="name" type="text" autoComplete="name" required placeholder="Jamie Davis" className={INPUT} />

            <label htmlFor="email" className={`${LABEL} mt-[19px]`}>
              Email
            </label>
            <input id="email" type="email" autoComplete="email" required placeholder="designer@example.com" className={INPUT} />

            <label htmlFor="password" className={`${LABEL} mt-[19px]`}>
              Password
            </label>
            <input id="password" type="password" autoComplete="new-password" required placeholder="********" className={INPUT} />

            <button
              type="submit"
              className={`self-end mt-[22px] h-[41px] w-[111px] rounded-full border-0 bg-[#c8ff00] text-[#14163b] text-base font-medium cursor-pointer ${FV}`}
            >
              Continue
            </button>

            <p className="m-0 mt-auto pt-7 text-center text-sm leading-[22px] text-[#6b6b7a]">
              Already have an account?{" "}
              <Link to="/sign-in" className={`text-[#0033e0] ${FV}`}>
                Login
              </Link>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}