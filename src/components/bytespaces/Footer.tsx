import { useState } from "react";

const FV =
  "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[#0033e0] focus-visible:outline-offset-[3px]";
const WRAP = "max-w-[1160px] mx-auto px-5";
const BTN_ACC = `inline-block border-0 rounded-full px-6 py-3 font-bold text-[15px] cursor-pointer bg-[#c8ff00] text-[#14163b] ${FV}`;

const footerLinks = [
  "Featured Courses",
  "Development",
  "Become a Creator",
  "Featured Categories",
  "Marketing",
  "Affiliate Program",
  "Business",
  "Photography",
  "Contact",
  "IT",
  "Finance",
  "Help",
  "Design",
  "Sport",
  "About",
];

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="bg-white border-t border-[#dfe1f5] pt-14 pb-7">
      <div className={WRAP}>
        <div className="grid grid-cols-[1.2fr_1.4fr] max-[860px]:grid-cols-1 gap-12 max-[860px]:gap-7">
          <div>
            <a
              href="#top"
              className={`flex items-center gap-2 font-bold text-2xl leading-[1.1] tracking-[-.02em] text-[#14163b] ${FV}`}
            >
              <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
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
            <p className="text-[#5a5d80] text-[13px] mt-2.5">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
            <form
              className="flex gap-2 mt-4 max-w-[380px]"
              onSubmit={(e) => {
                e.preventDefault();
                setSubscribed(true);
              }}
            >
              <input
                type="email"
                aria-label="Email"
                placeholder="Enter your email"
                required
                className={`flex-1 min-w-0 border-[1.5px] border-[#dfe1f5] bg-white text-[#14163b] rounded-full px-4 py-2.5 text-[15px] ${FV}`}
              />
              <button type="submit" className={BTN_ACC}>
                {subscribed ? "Subscribed" : "Search"}
              </button>
            </form>
            <p className="text-[#5a5d80] text-[13px] mt-2.5">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-3 gap-x-6 gap-y-1.5 content-start">
            {footerLinks.map((l) => (
              <a key={l} href="#" className={`text-sm text-[#5a5d80] py-1.5 ${FV}`}>
                {l}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex justify-between flex-wrap gap-3 mt-10 pt-5 border-t border-[#dfe1f5] text-[#5a5d80] text-sm">
          <span>© 2023 ByteSpace. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="#" className={FV}>Privacy Policy</a>
            <a href="#" className={FV}>Terms of Service</a>
            <a href="#" className={FV}>Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}