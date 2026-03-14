import { City } from '@/types/city'

interface CityHeroSectionProps {
  city: City
}

export default function CityHeroSection({ city }: CityHeroSectionProps) {
  return (
    <section className="w-full bg-gradient-to-br from-primary to-blue-400 text-white py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* 큰 이모지 */}
        <div className="text-9xl md:text-[140px] mb-6 drop-shadow-lg">
          {city.emoji}
        </div>

        {/* 도시명 */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          {city.name}
        </h2>

        {/* 한줄 설명 또는 설명의 첫 문장 */}
        <p className="text-base sm:text-lg md:text-xl text-white text-opacity-90 max-w-2xl mx-auto leading-relaxed px-4">
          {city.description
            ? city.description.substring(0, 80) + (city.description.length > 80 ? '...' : '')
            : '노마드를 위한 이상적인 도시입니다'}
        </p>

        {/* 통계 한눈에 */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 md:gap-8 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <span>💵</span>
            <span>{city.cost}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📡</span>
            <span>{city.internet}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>👥</span>
            <span>{city.nomads}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
