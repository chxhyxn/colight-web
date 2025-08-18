'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const router = useRouter();

  const featuresItems = [
    { title: '필터 메이커', desc: '나만의 톤을 레시피로 저장하고 공유.', href: '/features/filter-maker' },
    { title: '라이브 프리뷰', desc: '결과를 그대로 미리 보기.', href: '/features/live-preview' },
    { title: 'RAW 촬영 지원', desc: '풍부한 정보로 후반 보정 자유도 극대화.', href: '/features/raw-capture' },
    { title: '프리셋 공유', desc: '원하는 톤을 프리셋으로 즉시 적용.', href: '/features/presets' },
    { title: '단축어 연동', desc: '단축어로 촬영을 자동화해 반복을 줄입니다.', href: '/features/shortcuts' }
  ];
  const featureMedia = ['/colight_background.jpg',];
  return (
    <div className="overflow-x-hidden">
      <div className="relative" role="main">
        <section id="hero" className="h-[92svh] md:h-[92vh] flex items-center justify-center relative overflow-hidden">
          <Image
            src="/colight_background.jpg"
            alt=""
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
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {featuresItems.map((card, i) => (
                  <li key={`${card.title}-${i}`} className="h-full">
                    <motion.article
                      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.45, delay: (i % 2) * 0.06 }}
                      className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] cursor-pointer"
                      role="link"
                      tabIndex={0}
                      aria-label={`${card.title} 상세 페이지로 이동`}
                      onClick={() => router.push(card.href)}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); router.push(card.href); } }}
                    >
                      <div className="relative aspect-[16/9]">
                        <Image
                          src={featureMedia[i % featureMedia.length]}
                          alt=""
                          fill
                          sizes="(min-width: 768px) 50vw, 100vw"
                          className="object-cover"
                          priority={i < 2}
                        />
                      </div>
                      <div className="px-6 md:px-7 py-6 md:py-7 text-center">
                        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">{card.title}</h3>
                        <p className="mt-3 text-neutral-400 leading-relaxed">{card.desc}</p>
                        <div className="mt-5">
                          <Link href={card.href} className="inline-flex items-center gap-1 text-white font-semibold hover:underline">
                            더 알아보기
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </motion.article>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        


        <section id="support" className="py-24 md:py-36">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h3 className="text-3xl md:text-5xl font-semibold tracking-tight">도움이 필요하신가요?</h3>
            <div className="mt-8 flex items-center justify-center">
              <a
                href="mailto:seancho@colight.app"
                className="px-5 min-h-[44px] inline-flex items-center justify-center rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors text-sm font-semibold"
                aria-label="이메일로 문의하기"
              >
                이메일로 문의
              </a>
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
            <div className="mt-8 flex justify-center">
              <Link href="/privacy" className="px-5 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors text-sm">전문 보기</Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
