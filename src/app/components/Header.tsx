'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 glass" role="banner">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-0.5 min-h-[44px]" aria-label="colight 홈으로 이동">
          <Image src="/colight.svg" alt="colight" width={16} height={16} priority className="opacity-80" />
          <span className="text-[16px] tracking-tight">colight</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300" aria-label="주요">
          <a href="/#features" className="hover:text-white transition-colors min-h-[44px] inline-flex items-center">기능</a>
          <a href="/#support" className="hover:text-white transition-colors min-h-[44px] inline-flex items-center">지원</a>
          <Link href="/privacy" className="hover:text-white transition-colors min-h-[44px] inline-flex items-center">개인정보 처리방침</Link>
        </nav>
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md border border-white/10 px-2.5 py-2 text-neutral-200 hover:bg-white/10 focus:outline-none"
          aria-label={mobileNavOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={mobileNavOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileNavOpen((v) => !v)}
        >
          {mobileNavOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
        {mobileNavOpen && (
          <div id="mobile-nav" className="md:hidden absolute inset-x-0 top-full bg-black/90 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col gap-2 text-sm">
              <a href="/#features" className="inline-flex items-center min-h-[44px] text-neutral-200 hover:text-white" onClick={() => setMobileNavOpen(false)}>기능</a>
              <a href="/#support" className="inline-flex items-center min-h-[44px] text-neutral-200 hover:text-white" onClick={() => setMobileNavOpen(false)}>지원</a>
              <Link href="/privacy" className="inline-flex items-center min-h-[44px] text-neutral-200 hover:text-white" onClick={() => setMobileNavOpen(false)}>개인정보 처리방침</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
