export default function HeroSection() {
  const tags = [
    "#저렴함",
    "#좋은인터넷",
    "#커뮤니티활발",
    "#해변도시",
    "#산에가까움",
    "#조용함",
  ];

  return (
    <section className="w-full bg-gradient-to-br from-primary to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-20 md:py-24">
        <div className="text-center space-y-8">
          {/* Main Headline */}
          <h1 className="text-h1 md:text-5xl leading-tight">
            한국에서 가장 살기 좋은 노마드 도시를 찾아보세요
          </h1>

          {/* Sub Headline */}
          <p className="text-lg md:text-xl opacity-90">
            당신의 이상적인 도시, 여기 있습니다
          </p>

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="🔍 도시명, 지역, 특징 검색... (예: 부산, 저렴함, 좋은인터넷)"
              className="flex-1 px-4 py-3 rounded-lg text-text-main placeholder-text-sub text-sm md:text-base"
            />
            <button className="bg-secondary hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium whitespace-nowrap flex items-center justify-center gap-2 h-full">
              🔍 검색
            </button>
          </div>

          {/* Popular Tags */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {tags.map((tag) => (
              <button
                key={tag}
                className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full text-sm border border-white border-opacity-30 transition"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
