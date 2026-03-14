'use client'

import { useRouter } from 'next/navigation'
import { City } from '@/types/city'

interface CityDetailHeaderProps {
  city: City
}

export default function CityDetailHeader({ city }: CityDetailHeaderProps) {
  const router = useRouter()

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-border-line shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        {/* 뒤로가기 버튼 */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-primary hover:text-opacity-80 transition-colors"
          aria-label="뒤로가기"
        >
          <span className="text-xl">←</span>
          <span className="hidden sm:inline text-sm">뒤로가기</span>
        </button>

        {/* 도시명 */}
        <h1 className="text-xl sm:text-2xl font-bold text-primary flex-1 text-center">
          {city.emoji} {city.name}
        </h1>

        {/* 우측 영역 (공유 버튼 - 선택사항) */}
        <div className="w-12 sm:w-auto"></div>
      </div>
    </header>
  )
}
