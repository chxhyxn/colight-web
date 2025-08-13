'use client';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 py-28">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">개인정보 처리방침</h1>
        <p className="mt-3 text-sm text-neutral-400">최종 업데이트: 2025-01-01</p>

        <section className="mt-10 space-y-8 text-neutral-300 leading-relaxed">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-white">1. 수집하는 개인정보</h2>
            <p className="mt-3">CoLight는 서비스 제공에 필요한 최소한의 정보만 수집합니다. 계정 생성 시 이메일 주소가 수집될 수 있으며, 선택적으로 기기 정보(모델, OS 버전)가 안정성 개선을 위해 수집될 수 있습니다.</p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-white">2. 개인정보의 이용 목적</h2>
            <p className="mt-3">회원 식별, 고객 지원, 서비스 개선 및 보안 강화를 위해 활용됩니다. 마케팅 목적의 알림은 사용자의 명시적 동의가 있는 경우에만 발송됩니다.</p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-white">3. 보관 및 파기</h2>
            <p className="mt-3">관련 법령에 따른 보관 기간을 제외하고 목적 달성 후 지체 없이 파기합니다. 파기 시 복구가 불가능한 방법을 사용합니다.</p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-white">4. 제3자 제공 및 처리 위탁</h2>
            <p className="mt-3">법령에 근거하거나 사용자 동의가 있는 경우를 제외하고 제3자에게 제공하지 않습니다. 불가피하게 위탁이 필요한 경우, 안전성 확보 조치를 이행합니다.</p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-white">5. 이용자의 권리</h2>
            <p className="mt-3">이용자는 언제든지 개인정보 열람, 정정, 삭제, 처리 정지를 요청할 수 있습니다. 문의: <a href="mailto:seancho@colight.app" className="underline decoration-white/30 hover:decoration-white">seancho@colight.app</a></p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-white">6. 쿠키 및 추적 기술</h2>
            <p className="mt-3">CoLight 웹은 핵심 기능 제공을 위한 필수 쿠키만을 사용하며, 광고 목적의 타사 추적 쿠키는 사용하지 않습니다.</p>
          </div>
        </section>

        <div className="mt-16 text-sm text-neutral-500">
          © {new Date().getFullYear()} CoLight. All rights reserved.
        </div>
      </div>
    </main>
  );
}


