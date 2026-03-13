import Link from "next/link";

export default function FeaturedCitiesSection() {
  const cities = [
    {
      name: "부산",
      emoji: "🌊",
      rating: 4.8,
      cost: "$1,200",
      internet: "98Mbps",
      nomads: "234명",
    },
    {
      name: "대구",
      emoji: "🏔️",
      rating: 4.7,
      cost: "$1,100",
      internet: "95Mbps",
      nomads: "189명",
    },
    {
      name: "대전",
      emoji: "🌟",
      rating: 4.6,
      cost: "$950",
      internet: "90Mbps",
      nomads: "156명",
    },
    {
      name: "전주",
      emoji: "🏮",
      rating: 4.6,
      cost: "$1,050",
      internet: "88Mbps",
      nomads: "142명",
    },
  ];

  return (
    <section className="w-full py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12">
          <h2 className="text-h2 md:text-4xl text-text-main">
            🔥 지금 인기있는 도시
          </h2>
          <div className="flex gap-3">
            <button className="px-4 py-2 border border-border-line rounded-lg text-sm hover:bg-bg-light">
              종합점수 ▼
            </button>
            <button className="px-4 py-2 border border-border-line rounded-lg text-sm hover:bg-bg-light">
              필터 ▼
            </button>
          </div>
        </div>

        {/* City Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {cities.map((city) => (
            <div
              key={city.name}
              className="bg-white border border-border-line rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-shadow"
            >
              {/* City Image Placeholder */}
              <div className="w-full h-40 bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center text-5xl">
                {city.emoji}
              </div>

              {/* City Info */}
              <div className="p-4 space-y-3">
                <h3 className="text-2xl font-bold text-text-main">
                  {city.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⭐</span>
                  <span className="font-bold text-text-main">
                    {city.rating}/5.0
                  </span>
                </div>

                {/* Details */}
                <div className="space-y-2 text-sm text-text-sub">
                  <div className="flex items-center gap-2">
                    <span>💵</span>
                    <span>월 생활비 {city.cost}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📡</span>
                    <span>인터넷 {city.internet}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>👥</span>
                    <span>노마드 {city.nomads}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href={`/city/${city.name}`}
                  className="block text-center py-2 text-primary hover:text-secondary font-medium text-sm border-t border-border-line pt-3 mt-3"
                >
                  [더보기 →]
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* More Cities Link */}
        <div className="text-center">
          <Link
            href="/explore"
            className="inline-block text-primary hover:text-secondary font-medium text-lg"
          >
            [더보기 →]
          </Link>
        </div>
      </div>
    </section>
  );
}
