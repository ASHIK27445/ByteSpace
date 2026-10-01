import { ShoppingCart } from "lucide-react";
import { Link } from "react-router";

const FV =
  "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[#0033e0] focus-visible:outline-offset-[3px]";
const WRAP = "max-w-[1160px] mx-auto px-5";

export default function Header() {
  return (
    <header className="sticky z-[5] bg-[#0033e0] text-white [top:env(safe-area-inset-top,0px)]">
      <div className={WRAP}>
        <nav
          aria-label="Main"
          className="grid grid-cols-[1fr_auto_1fr] max-[860px]:grid-cols-[1fr_auto] items-center h-[76px]"
        >
          <a
            href="#top"
            className={`flex items-center gap-2 font-bold text-2xl leading-[1.1] tracking-[-.02em] ${FV}`}
          >
            <svg viewBox="0 0 32 32" aria-hidden="true" className="w-[30px] h-[30px]">
              <path
                d="M4 3h8v9l13 5-13 5v7H4z"
                fill="#c8ff00"
                stroke="#c8ff00"
                strokeWidth="3"
                strokeLinejoin="round"
              />
            </svg>
            ByteSpace
          </a>
          <div className="flex gap-6 font-medium max-[860px]:hidden">
            <Link to="/" className={`opacity-80 first:opacity-100 hover:opacity-100 ${FV}`}>
              Home
            </Link>
            <Link to='/courses' className={`opacity-80 hover:opacity-100 ${FV}`}>
              Courses
            </Link>
            <Link to="/creator-profile" className={`opacity-80 hover:opacity-100 ${FV}`}>
              Creators
            </Link>
          </div>
          <div className="flex gap-5.5 items-center justify-end text-[15px]">
            <Link to="/sign-in" className={`opacity-90 ${FV}`}>
              Sign In
            </Link>
            <Link to="/sign-up" className={`opacity-90 ${FV}`}>
              Join Us
            </Link>
            <a href="#" aria-label="Cart" className={`opacity-90 ${FV}`}>
              <ShoppingCart className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}