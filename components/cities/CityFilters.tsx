import { City } from '@/types/city'

interface CityFiltersProps {
  city: City
}

interface FilterBadge {
  icon: string
  label: string
  value: string
  colorClass: string
}

export default function CityFilters({ city }: CityFiltersProps) {
  const badges: FilterBadge[] = [
    {
      icon: '🏷️',
      label: '예산',
      value: city.budget,
      colorClass: 'bg-blue-100 text-primary border border-blue-200',
    },
    {
      icon: '📍',
      label: '지역',
      value: city.region,
      colorClass: 'bg-orange-100 text-secondary border border-orange-200',
    },
    {
      icon: '🌿',
      label: '환경',
      value: city.environment.join(', '),
      colorClass: 'bg-green-100 text-green-700 border border-green-200',
    },
    {
      icon: '🌸',
      label: '최고 계절',
      value: city.bestSeason,
      colorClass: 'bg-pink-100 text-pink-700 border border-pink-200',
    },
  ]

  return (
    <section className="w-full py-10 md:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
          도시 정보
        </h3>

        <div className="flex flex-wrap gap-3">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className={`${badge.colorClass} px-4 py-2 rounded-full flex items-center gap-2 text-sm md:text-base font-medium transition-transform hover:scale-105`}
            >
              <span>{badge.icon}</span>
              <span className="font-semibold">{badge.label}:</span>
              <span>{badge.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
