export default function FeaturesSection() {
  const features = [
    {
      icon: "💬",
      title: "채팅",
      description: "도시별 실시간 채팅으로 정보를 교환하세요",
    },
    {
      icon: "❤️",
      title: "커뮤니티",
      description: "노마드를 만나고 친구를 사귀세요",
    },
    {
      icon: "🗺️",
      title: "지도 뷰",
      description: "지도상 위치 기반 탐색",
    },
    {
      icon: "📊",
      title: "데이터 분석",
      description: "150개 지표로 도시를 평가",
    },
    {
      icon: "🎪",
      title: "미팅&이벤트",
      description: "월 20회 정기 모임",
    },
    {
      icon: "💝",
      title: "여행 기록",
      description: "방문한 도시 기록하기",
    },
  ];

  return (
    <section className="w-full bg-bg-light py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-h2 md:text-4xl text-text-main text-center mb-12">
          우리의 핵심 기능들
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-text-main mb-2">
                {feature.title}
              </h3>
              <p className="text-text-sub">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
