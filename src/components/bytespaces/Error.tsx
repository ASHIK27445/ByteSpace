import { useEffect } from "react";

const POP = "font-[family-name:Poppins,system-ui,sans-serif]";
const SAT = "font-[family-name:Satoshi,Poppins,system-ui,sans-serif]";
const FV =
  "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[#0033e0] focus-visible:outline-offset-[3px]";
const GRID =
  "bg-[#0033e0] bg-[linear-gradient(rgba(255,255,255,.13)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.13)_1px,transparent_1px)] bg-[length:108px_108px]";

/* ---------- page ---------- */
export default function NotFound() {
  useEffect(() => {
    const add = (id: string, href: string) => {
      if (document.getElementById(id)) return;
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href = href;
      document.head.append(link);
    };
    add(
      "bytespace-poppins",
      "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
    );
    add(
      "bytespace-satoshi",
      "https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
    );
  }, []);

  return (
    <div
      id="top"
      className={`${SAT} min-h-screen bg-white text-[#14163b] text-base font-normal leading-[1.6] [padding-top:env(safe-area-inset-top,0px)] [padding-bottom:env(safe-area-inset-bottom,0px)]`}
    >
      {/* header sits on top of the grid; lines start below it */}
      <div className={GRID}>

        <main className="text-center text-white overflow-hidden px-5 pt-[clamp(24px,4.5vw,58px)] pb-[clamp(56px,8.6vw,112px)]">
          {/* big 404 fading into the background */}
          <p
            aria-hidden="true"
            className={`${POP} m-0 -mb-[clamp(45px,8.77vw,114px)] pr-[.04em] text-[clamp(150px,34.6vw,450px)] font-semibold leading-none tracking-[-.04em] text-transparent bg-clip-text bg-[linear-gradient(180deg,#d2ff1e_14%,#c8ff00_30%,rgba(200,255,0,0)_88%)]`}
          >
            404
          </p>

          <h1
            className={`${POP} relative z-[2] m-0 mx-auto max-w-[14em] text-[clamp(32px,4.8vw,62px)] font-semibold leading-[1.25] tracking-[-.01em]`}
          >
            <span className="sr-only">404. </span>
            The page you are looking
            <br className="max-[640px]:hidden" /> for doesn’t exist
          </h1>

          <p className="relative z-[2] m-0 mt-[29px] text-base leading-[26px] text-white/90">
            Try to use a correct url or go back to homepage to start again
          </p>

          <a
            href="index.html"
            className={`relative z-[2] inline-flex items-center justify-center mt-[29px] h-[42px] px-[30px] rounded-full bg-[#c8ff00] text-[#14163b] text-base font-medium ${FV}`}
          >
            Back to Home
          </a>
        </main>
      </div>

    </div>
  );
}