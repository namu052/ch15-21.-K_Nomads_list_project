export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "이준호",
      avatar: "👨‍💻",
      rating: 5,
      city: "부산",
      duration: "3개월",
      style: "Budget Nomad",
      text: "부산은 정말 최고예요! 저렴한 생활비에 인터넷도 빠르고, 무엇보다 노마드 커뮤니티가 활발해서 혼자라는 생각이 안 들어요. KNC 덕분에 쉽게 적응할 수 있었습니다.",
      tags: ["저렴함", "좋은인터넷", "커뮤니티활발"],
      helpful: 234,
    },
    {
      name: "김수진",
      avatar: "👩‍💼",
      rating: 5,
      city: "대구",
      duration: "2개월",
      style: "Digital Nomad",
      text: "대구의 숨겨진 매력을 발견했어요. 많은 사람들이 모르지만 이렇게 살기 좋은 도시가 있다니! 리뷰를 통해 실제 거주자들의 경험을 들을 수 있어서 정말 도움이 됐습니다.",
      tags: ["문화", "조용함", "저렴함"],
      helpful: 189,
    },
    {
      name: "박민석",
      avatar: "👨‍🎨",
      rating: 4.5,
      city: "전주",
      duration: "1개월",
      style: "Creative Nomad",
      text: "전주는 창의적인 작업을 하기에 정말 좋은 도시예요. 한옥마을의 분위기가 영감을 줍니다. 다만 인터넷 속도가 조금 아쉽지만, 그 외에는 모두 만족합니다.",
      tags: ["문화예술", "분위기", "걷기좋음"],
      helpful: 156,
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-h2 md:text-4xl text-text-main text-center mb-12">
          사람들이 우리 플랫폼에서 찾은 것들
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white border border-border-line rounded-lg p-6 shadow-card hover:shadow-card-hover transition-shadow"
            >
              {/* User Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{testimonial.avatar}</span>
                <div>
                  <h4 className="font-bold text-text-main">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-text-sub">
                    {testimonial.duration} · {testimonial.style}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={
                        i < Math.floor(testimonial.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }
                    >
                      ⭐
                    </span>
                  ))}
                </div>
                <span className="font-bold text-text-main">
                  {testimonial.rating}/5
                </span>
              </div>

              {/* Location */}
              <p className="text-sm text-text-sub mb-3">
                📍 {testimonial.city}
              </p>

              {/* Review Text */}
              <p className="text-sm text-text-main mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {testimonial.tags.map((tag, tidx) => (
                  <span
                    key={tidx}
                    className="px-3 py-1 bg-blue-50 text-primary text-xs rounded-full border border-blue-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Helpful Button */}
              <button className="flex items-center gap-2 text-text-sub hover:text-primary text-sm">
                👍 {testimonial.helpful}명이 도움됨
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
