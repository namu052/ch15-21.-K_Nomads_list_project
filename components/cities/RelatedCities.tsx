import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import { rowToCity } from '@/lib/cityMapper'
import { City } from '@/types/city'

interface RelatedCitiesProps {
  currentCity: City
}

export default async function RelatedCities({ currentCity }: RelatedCitiesProps) {
  // 같은 지역의 도시들 먼저 찾기
  const { data: sameRegion } = await supabase
    .from('cities')
    .select('*')
    .eq('region', currentCity.region)
    .neq('name', currentCity.name)
    .limit(4)

  let finalRelated = (sameRegion ?? []).map(rowToCity)

  // 같은 지역이 없으면 같은 예산 대역 도시들 찾기
  if (finalRelated.length === 0) {
    const { data: sameBudget } = await supabase
      .from('cities')
      .select('*')
      .eq('budget', currentCity.budget)
      .neq('name', currentCity.name)
      .limit(4)

    finalRelated = (sameBudget ?? []).map(rowToCity)
  }

  if (finalRelated.length === 0) {
    return null
  }

  return (
    <section className="w-full py-10 md:py-14 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8">
          🌍 비슷한 도시 추천
        </h3>

        <p className="text-text-sub mb-8">
          {finalRelated[0]?.region === currentCity.region
            ? `${currentCity.region}의 다른 도시들을 확인해보세요`
            : '비슷한 예산대의 다른 도시들을 확인해보세요'}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
          {finalRelated.map((city) => (
            <Link
              key={city.name}
              href={`/cities/${city.name}`}
              className="group"
            >
              <div className="bg-bg-light rounded-lg border border-border-line overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group-hover:scale-105 cursor-pointer h-full flex flex-col">
                {/* 이모지 영역 */}
                <div className="h-24 bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center">
                  <span className="text-5xl">{city.emoji}</span>
                </div>

                {/* 정보 영역 */}
                <div className="p-4 flex flex-col flex-1">
                  {/* 도시명 */}
                  <h4 className="text-lg font-bold text-primary mb-2">
                    {city.name}
                  </h4>

                  {/* 통계 */}
                  <div className="space-y-1 text-sm text-text-sub mb-3 flex-1">
                    <div className="flex items-center gap-1">
                      <span>💵</span>
                      <span>{city.cost}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>👥</span>
                      <span>{city.nomads}</span>
                    </div>
                  </div>

                  {/* 태그 */}
                  <div className="flex flex-wrap gap-1">
                    <span className="text-xs bg-blue-100 text-primary px-2 py-1 rounded-full">
                      {city.budget}
                    </span>
                    <span className="text-xs bg-orange-100 text-secondary px-2 py-1 rounded-full">
                      {city.region}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
