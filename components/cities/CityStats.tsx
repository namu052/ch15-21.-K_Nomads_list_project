import { City } from '@/types/city'

interface CityStatsProps {
  city: City
}

interface StatCard {
  icon: string
  label: string
  value: string
  description: string
}

export default function CityStats({ city }: CityStatsProps) {
  const stats: StatCard[] = [
    {
      icon: '💵',
      label: '월 생활비',
      value: city.cost,
      description: '평균 월간 생활 비용',
    },
    {
      icon: '📡',
      label: '인터넷 속도',
      value: city.internet,
      description: '평균 다운로드 속도',
    },
    {
      icon: '👥',
      label: '노마드 수',
      value: city.nomads,
      description: '현재 거주 노마드',
    },
  ]

  return (
    <section className="w-full py-10 md:py-14 lg:py-16 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-lg border border-border-line p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300"
            >
              {/* 아이콘 */}
              <div className="text-4xl mb-4">{stat.icon}</div>

              {/* 라벨 */}
              <div className="text-sm text-text-sub mb-2 font-medium">
                {stat.label}
              </div>

              {/* 값 */}
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                {stat.value}
              </div>

              {/* 설명 */}
              <div className="text-xs text-text-sub">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
