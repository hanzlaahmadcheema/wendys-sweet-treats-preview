"use client";

import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { clinic } from "@/lib/content";

const NAV = [
  { label: "Menu", href: "#menu" },
  { label: "Golosa Box", href: "#golosa" },
  { label: "How to order", href: "#how" },
  { label: "FAQ", href: "#faq" },
  { label: "Visit", href: "#visit" },
];

function CakeMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="9" className="fill-berry-800" />
      <path
        d="M16 6.5v2.5M13 11.5h6l1.5 2.5H11.5L13 11.5ZM8 15.5h16l-1.2 9.5H9.2L8 15.5Z"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 19.5h.01M16 19.5h.01M19.5 19.5h.01"
        stroke="white"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur">
      <div className="container-responsive flex h-14 items-center justify-between md:h-16">
        <Link
          href="#top"
          className="flex min-h-11 items-center gap-2 text-[1.05rem] font-extrabold leading-none tracking-tight text-berry-800 md:text-xl"
          onClick={() => setMobileOpen(false)}
        >
          <CakeMark className="h-8 w-8 shrink-0 md:h-9 md:w-9" />
          <span className="whitespace-nowrap">Wendy&rsquo;s Sweet Treats</span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-1 py-2 text-[0.95rem] font-medium text-slate-700 transition-colors hover:text-berry-800"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={clinic.facebookUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden min-h-11 items-center gap-2 rounded-full bg-berry-500 px-5 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-berry-600 sm:inline-flex"
          >
            <ChatBubbleLeftRightIcon className="h-4 w-4" aria-hidden="true" />
            DM to order
          </a>
          <a
            href={clinic.facebookUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-berry-800 text-white transition-colors hover:bg-berry-900 sm:hidden"
            aria-label={`Message ${clinic.name} on Facebook`}
          >
            <ChatBubbleLeftRightIcon className="h-5 w-5" aria-hidden="true" />
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-300 text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-berry-800 lg:hidden"
            aria-controls="mobile-menu"
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-slate-200 bg-white transition-all duration-200 ease-out lg:hidden ${
          mobileOpen ? "max-h-[480px] border-t opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="container-responsive grid gap-1 py-3"
          aria-label="Primary mobile"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block min-h-11 rounded-md px-3 py-2.5 font-medium text-slate-700 transition-colors hover:bg-berry-50 hover:text-berry-800"
            >
              {item.label}
            </a>
          ))}
          <a
            href={clinic.facebookUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setMobileOpen(false)}
            className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-berry-500 px-5 py-3 font-bold text-white transition-colors hover:bg-berry-600"
          >
            DM to order on Facebook
          </a>
        </nav>
      </div>
    </header>
  );
}
