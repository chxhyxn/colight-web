import Image from 'next/image';
import Link from 'next/link';
import ExampleGallery from '../_components/ExampleGallery';

export default function Page() {
  return (
    <div>
      <section className="relative h-[42svh] md:h-[48vh] overflow-hidden">
        <Image src="/colight_background.jpg" alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-5xl mx-auto h-full px-6 flex flex-col justify-end pb-10">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">프리셋 공유</h1>
          <p className="mt-3 text-neutral-300 max-w-2xl">원하는 톤을 프리셋으로 빠르게 적용하고 공유하세요.</p>
        </div>
      </section>
      <main className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        <div className="grid gap-8 md:gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">핵심 기능</h2>
            <ul className="mt-4 space-y-2 text-neutral-300">
              <li>• 단일 탭 적용 및 즐겨찾기</li>
              <li>• 공유 링크/QR 생성</li>
              <li>• 디바이스 간 동기화</li>
            </ul>
          </div>
          <ExampleGallery />
          <div className="flex items-center gap-3">
            <a href="mailto:seancho@colight.app" className="px-5 min-h-[44px] inline-flex items-center justify-center rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors text-sm font-semibold" aria-label="이메일로 문의하기">이메일로 문의</a>
            <Link href="/#features" className="px-5 min-h-[44px] inline-flex items-center justify-center rounded-full border border-white/10 hover:border-white/30 transition-colors text-sm">홈으로</Link>
          </div>
        </div>
      </main>
    </div>
  );
}


