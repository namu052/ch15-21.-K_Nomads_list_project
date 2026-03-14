import { City } from '@/types/city'

interface CityDescriptionProps {
  city: City
}

export default function CityDescription({ city }: CityDescriptionProps) {
  if (!city.description) {
    return null
  }

  return (
    <section className="w-full py-10 md:py-14 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            ✨ {city.name}에 대해 알아보기
          </h3>

          <div className="prose prose-sm md:prose-base max-w-none">
            <p className="text-base md:text-lg text-text-main leading-relaxed whitespace-pre-wrap">
              {city.description}
            </p>
          </div>

          {/* 구분선 */}
          <div className="mt-8 pt-8 border-t border-border-line"></div>
        </div>
      </div>
    </section>
  )
}
