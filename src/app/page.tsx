'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

  

  const featuresItems = [
    { title: '프로 카메라 컨트롤', desc: '노출·화이트밸런스·포커스를 직관적으로 조절.' },
    { title: '필터 메이커', desc: '나만의 톤을 레시피로 저장하고 공유.' },
    { title: '라이브 프리뷰', desc: '결과를 그대로 미리 보기.' },
    { title: 'RAW 촬영 지원', desc: '풍부한 정보로 후반 보정 자유도 극대화.' },
    { title: '프리셋 공유', desc: '원하는 톤을 프리셋으로 즉시 적용.' },
    { title: '단축어 연동', desc: '단축어로 촬영을 자동화해 반복을 줄입니다.' }
  ];
  return (
    <div className="bg-black text-white font-sf-pro min-h-screen">
      <header className="fixed inset-x-0 top-0 z-50 glass" role="banner">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#hero" className="inline-flex items-center gap-2 min-h-[44px]" aria-label="CoLight 홈으로 이동">
            <Image src="/colight.svg" alt="CoLight" width={22} height={22} priority className="opacity-90" />
            <span className="text-[15px] tracking-tight">CoLight</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300" aria-label="주요">
            <a href="#features" className="hover:text-white transition-colors min-h-[44px] inline-flex items-center">기능</a>
            <a href="#support" className="hover:text-white transition-colors min-h-[44px] inline-flex items-center">지원</a>
            <a href="#privacy" className="hover:text-white transition-colors min-h-[44px] inline-flex items-center">개인정보 처리방침</a>
          </nav>
          
        </div>
      </header>

      <main id="main" className="relative" role="main">
        <section id="hero" className="h-[92svh] md:h-[92vh] flex items-center justify-center relative overflow-hidden">
          <div aria-hidden className="absolute inset-0 z-0 flex items-center justify-center">
            <Image src="/colight.svg" alt="" width={800} height={800} className="opacity-[0.08] md:opacity-[0.12] w-[600px] md:w-[800px] h-auto pointer-events-none" priority />
          </div>
          <div className="hero-vignette" />
          <div className="absolute inset-0 z-[1] bg-black/50 pointer-events-none" />
          <div className="relative z-10 text-center px-6">
            <motion.h1
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8 }}
              className="text-[44px] md:text-[72px] leading-[1.04] font-semibold tracking-[-0.02em]"
            >
              colight
            </motion.h1>
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8, delay: 0.1 }}
              className="mt-4 md:mt-5 text-base md:text-lg text-neutral-300"
            >
              Create. Share. Light.
            </motion.p>
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8, delay: 0.15 }}
              className="mt-10 flex items-center justify-center"
            >
              <div className="w-[136px] h-[136px] md:w-[156px] md:h-[156px] rounded-xl flex items-center justify-center border border-white/10 bg-white/[0.04]" aria-label="App Store 다운로드 QR">
                <span className="text-[11px] text-neutral-400">App Store QR</span>
              </div>
            </motion.div>
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8, delay: 0.25 }}
              className="mt-6 flex items-center justify-center"
            >
              <a href="#features" className="px-5 min-h-[44px] inline-flex items-center justify-center rounded-full border border-white/10 hover:border-white/30 transition-colors text-sm text-neutral-300" aria-label="기능 살펴보기">기능 살펴보기</a>
            </motion.div>
            
          </div>
        </section>

        <section id="features" className="py-24 md:py-36">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-6 md:mb-8">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">디테일을 위한 설계</h2>
              <p className="mt-3 text-sm md:text-base text-neutral-400">iOS에서 가장 자연스러운 촬영 경험</p>
            </div>

            <div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {featuresItems.map((card, i) => (
                  <li key={`${card.title}-${i}`}>
                    <motion.div
                      key={card.title}
                      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.45, delay: i * 0.05 }}
                      className="card-soft w-full p-6 md:p-7 h-full"
                    >
                      <div className="flex items-start justify-between">
                        <h3 className="text-xl md:text-2xl font-semibold tracking-tight">{card.title}</h3>
                        <span className="text-[10px] uppercase tracking-wider text-neutral-500">New</span>
                      </div>
                      <p className="mt-3 text-neutral-300 leading-relaxed">{card.desc}</p>
                      <div className="mt-5 aspect-[16/9] w-full rounded-xl border border-white/10 bg-neutral-900/60" />
                    </motion.div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        


        <section id="support" className="py-24 md:py-36">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h3 className="text-3xl md:text-5xl font-semibold tracking-tight">도움이 필요하신가요?</h3>
            <p className="mt-4 text-neutral-400">seancho@colight.app</p>
            <div className="mt-8 flex items-center justify-center">
              <a href="mailto:seancho@colight.app" className="px-5 min-h-[44px] inline-flex items-center justify-center rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors text-sm" aria-label="이메일 문의">문의하기</a>
            </div>
          </div>
        </section>

        <section id="privacy" className="py-24 md:py-36">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <motion.h3
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6 }}
              className="text-3xl md:text-5xl font-semibold tracking-tight"
            >
              개인정보 처리방침
            </motion.h3>
            <p className="mt-4 text-neutral-400 text-base md:text-lg leading-relaxed">
              colight는 필요한 최소한의 정보만 수집하며, 목적 달성 후 지체 없이 파기합니다. 요약을 확인하고 아래에서 전문을 확인하세요.
            </p>
            <div className="mt-8 flex justify-center">
              <a href="/privacy" className="px-5 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors text-sm">전문 보기</a>
            </div>
          </div>
        </section>

        <footer className="py-16 text-center text-sm text-neutral-500">
          <p>&copy; {new Date().getFullYear()} CoLight. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
