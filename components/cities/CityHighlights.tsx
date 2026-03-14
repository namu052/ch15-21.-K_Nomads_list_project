import { City } from '@/types/city'

interface CityHighlightsProps {
  city: City
}

const highlightEmojis = ['⭐', '✨', '🎯', '💎', '🔥', '🌟']

export default function CityHighlights({ city }: CityHighlightsProps) {
  if (!city.highlights || city.highlights.length === 0) {
    return null
  }

  return (
    <section className="w-full py-10 md:py-14 lg:py-16 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8">
          🎯 {city.name}의 주요 특징
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
          {city.highlights.map((highlight, index) => (
            <div
              key={highlight}
              className="bg-white rounded-lg border border-border-line p-5 shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">
                  {highlightEmojis[index % highlightEmojis.length]}
                </span>
                <p className="text-base text-text-main font-medium leading-relaxed">
                  {highlight}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
