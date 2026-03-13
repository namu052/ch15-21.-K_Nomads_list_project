import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="w-full bg-gradient-to-r from-primary to-blue-800 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
        {/* Main Message */}
        <h2 className="text-h2 md:text-5xl font-bold leading-tight">
          당신의 이상적인 도시를 찾아보세요!
        </h2>

        {/* Sub Message */}
        <p className="text-lg md:text-xl opacity-90">
          200+ 도시, 1,000명의 노마드, 그들이 남긴 정직한 평가
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/explore"
            className="px-8 py-3 md:py-4 bg-secondary hover:bg-orange-600 text-white rounded-lg font-bold text-base md:text-lg transition"
          >
            지금 시작하기 →
          </Link>
          <Link
            href="/about"
            className="px-8 py-3 md:py-4 border-2 border-white hover:bg-white hover:text-primary text-white rounded-lg font-bold text-base md:text-lg transition"
          >
            더 알아보기
          </Link>
        </div>

        {/* Email Subscription */}
        <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto pt-8">
          <input
            type="email"
            placeholder="이메일을 입력하세요..."
            className="flex-1 px-4 py-3 rounded-lg text-text-main placeholder-text-sub text-sm md:text-base"
          />
          <button className="px-6 py-3 bg-white text-primary font-bold rounded-lg hover:bg-opacity-90 whitespace-nowrap">
            구독하기
          </button>
        </div>

        {/* Privacy Note */}
        <p className="text-xs opacity-75">
          주간 뉴스레터와 꿀팁 정보를 받으실 수 있습니다. 언제든 구독 취소 가능합니다.
        </p>
      </div>
    </section>
  );
}
