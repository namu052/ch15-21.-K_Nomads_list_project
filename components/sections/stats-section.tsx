export default function StatsSection() {
  const stats = [
    { icon: "📍", label: "200+ 도시", value: "200개 이상의 한국 도시" },
    { icon: "👥", label: "1,000명 사용자", value: "활발한 노마드 커뮤니티" },
    { icon: "💬", label: "5,000개 리뷰", value: "검증된 사용자 리뷰" },
    { icon: "🎉", label: "월 20회 미팅", value: "정기 커뮤니티 모임" },
    { icon: "🏆", label: "4.8 평점", value: "높은 사용자 만족도" },
    { icon: "⭐", label: "신뢰할 수 있음", value: "투명한 정보 공유" },
  ];

  return (
    <section className="w-full bg-bg-light py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl mb-3">{stat.icon}</div>
              <h3 className="text-xl font-bold text-text-main mb-2">
                {stat.label}
              </h3>
              <p className="text-text-sub text-sm">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
