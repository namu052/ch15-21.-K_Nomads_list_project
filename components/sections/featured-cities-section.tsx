'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { CITIES } from "@/data/cities";
import { Budget, Region, Season, Environment } from "@/types/city";
import LikeDislikeButtons from "@/components/ui/like-dislike-buttons";

type FilterState = {
  budget: Budget | ''
  region: Region | ''
  environment: Environment[]
  season: Season | ''
}

export default function FeaturedCitiesSection() {
  const [filters, setFilters] = useState<FilterState>({
    budget: '',
    region: '',
    environment: [],
    season: ''
  })

  const [showBudgetDropdown, setShowBudgetDropdown] = useState(false)
  const [showRegionDropdown, setShowRegionDropdown] = useState(false)
  const [showSeasonDropdown, setShowSeasonDropdown] = useState(false)
  const [showEnvironmentDropdown, setShowEnvironmentDropdown] = useState(false)

  const budgetOptions: (Budget | '')[] = ['', '100만원 미만', '100~200만원', '200만원 이상']
  const regionOptions: (Region | '')[] = ['', '수도권', '경상도', '전라도', '강원도', '제주도', '충청도']
  const environmentOptions: Environment[] = ['자연친화', '도심선호', '카페작업', '코워킹 필수']
  const seasonOptions: (Season | '')[] = ['', '봄', '여름', '가을', '겨울']

  // 필터링 로직
  const filteredCities = useMemo(() => {
    return CITIES.filter(city => {
      if (filters.budget && city.budget !== filters.budget) return false
      if (filters.region && city.region !== filters.region) return false
      if (filters.environment.length > 0) {
        if (!city.environment.some(env => filters.environment.includes(env))) {
          return false
        }
      }
      if (filters.season && city.bestSeason !== filters.season) return false
      return true
    })
  }, [filters])

  // 정렬 로직 (좋아요 순)
  const sortedCities = useMemo(() => {
    return [...filteredCities].sort((a, b) => b.likes - a.likes)
  }, [filteredCities])

  const handleBudgetChange = (value: Budget | '') => {
    setFilters(prev => ({ ...prev, budget: value }))
    setShowBudgetDropdown(false)
  }

  const handleRegionChange = (value: Region | '') => {
    setFilters(prev => ({ ...prev, region: value }))
    setShowRegionDropdown(false)
  }

  const handleEnvironmentChange = (env: Environment, checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      environment: checked
        ? [...prev.environment, env]
        : prev.environment.filter(e => e !== env)
    }))
  }

  const handleSeasonChange = (value: Season | '') => {
    setFilters(prev => ({ ...prev, season: value }))
    setShowSeasonDropdown(false)
  }

  const resetFilters = () => {
    setFilters({
      budget: '',
      region: '',
      environment: [],
      season: ''
    })
  }

  return (
    <section className="w-full py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-h2 md:text-4xl text-text-main mb-8">
            🏙️ 도시 리스트
          </h2>

          {/* Filter Bar */}
          <div className="space-y-4 md:space-y-0 md:flex md:flex-wrap gap-3">
            {/* Budget Filter */}
            <div className="relative">
              <button
                onClick={() => setShowBudgetDropdown(!showBudgetDropdown)}
                className="px-4 py-2 border border-border-line rounded-lg text-sm hover:bg-bg-light transition-colors"
              >
                예산 {filters.budget ? '✓' : '▼'}
              </button>
              {showBudgetDropdown && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-border-line rounded-lg shadow-lg z-10 min-w-40">
                  {budgetOptions.map(option => (
                    <button
                      key={option || 'all'}
                      onClick={() => handleBudgetChange(option)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-bg-light transition-colors ${
                        filters.budget === option ? 'bg-primary text-white' : ''
                      }`}
                    >
                      {option || '전체'}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Region Filter */}
            <div className="relative">
              <button
                onClick={() => setShowRegionDropdown(!showRegionDropdown)}
                className="px-4 py-2 border border-border-line rounded-lg text-sm hover:bg-bg-light transition-colors"
              >
                지역 {filters.region ? '✓' : '▼'}
              </button>
              {showRegionDropdown && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-border-line rounded-lg shadow-lg z-10 min-w-40">
                  {regionOptions.map(option => (
                    <button
                      key={option || 'all'}
                      onClick={() => handleRegionChange(option)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-bg-light transition-colors ${
                        filters.region === option ? 'bg-primary text-white' : ''
                      }`}
                    >
                      {option || '전체'}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Environment Filter */}
            <div className="relative">
              <button
                onClick={() => setShowEnvironmentDropdown(!showEnvironmentDropdown)}
                className="px-4 py-2 border border-border-line rounded-lg text-sm hover:bg-bg-light transition-colors"
              >
                환경 {filters.environment.length > 0 ? '✓' : '▼'}
              </button>
              {showEnvironmentDropdown && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-border-line rounded-lg shadow-lg z-10 min-w-48 p-3 space-y-2">
                  {environmentOptions.map(option => (
                    <label key={option} className="flex items-center gap-2 text-sm cursor-pointer hover:bg-bg-light px-2 py-1 rounded">
                      <input
                        type="checkbox"
                        checked={filters.environment.includes(option)}
                        onChange={(e) => handleEnvironmentChange(option, e.target.checked)}
                        className="cursor-pointer"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Season Filter */}
            <div className="relative">
              <button
                onClick={() => setShowSeasonDropdown(!showSeasonDropdown)}
                className="px-4 py-2 border border-border-line rounded-lg text-sm hover:bg-bg-light transition-colors"
              >
                계절 {filters.season ? '✓' : '▼'}
              </button>
              {showSeasonDropdown && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-border-line rounded-lg shadow-lg z-10 min-w-40">
                  {seasonOptions.map(option => (
                    <button
                      key={option || 'all'}
                      onClick={() => handleSeasonChange(option)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-bg-light transition-colors ${
                        filters.season === option ? 'bg-primary text-white' : ''
                      }`}
                    >
                      {option || '전체'}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Reset Button */}
            {(filters.budget || filters.region || filters.environment.length > 0 || filters.season) && (
              <button
                onClick={resetFilters}
                className="px-4 py-2 border border-secondary text-secondary rounded-lg text-sm hover:bg-secondary hover:text-white transition-colors"
              >
                초기화
              </button>
            )}
          </div>

          {/* Result Count */}
          <p className="mt-4 text-sm text-text-sub">
            도시 {sortedCities.length}개 표시
          </p>
        </div>

        {/* City Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {sortedCities.map((city) => (
            <Link
              key={city.name}
              href={`/cities/${city.name}`}
              className="group"
            >
              <div
                className="bg-white border border-border-line rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group-hover:scale-105 cursor-pointer"
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

                {/* Filter Information */}
                <div className="space-y-2 text-xs text-text-sub border-t border-b border-border-line py-3">
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5">🏷️</span>
                    <span>예산: <span className="font-medium text-text-main">{city.budget}</span></span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5">📍</span>
                    <span>지역: <span className="font-medium text-text-main">{city.region}</span></span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5">🌿</span>
                    <span>환경: <span className="font-medium text-text-main">{city.environment.join(', ')}</span></span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5">🌸</span>
                    <span>최고계절: <span className="font-medium text-text-main">{city.bestSeason}</span></span>
                  </div>
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

                {/* Like/Dislike Buttons */}
                <LikeDislikeButtons
                  cityId={city.name}
                  initialLikes={city.likes}
                  initialDislikes={city.dislikes}
                />
              </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {sortedCities.length === 0 && (
          <div className="text-center py-12">
            <p className="text-text-sub text-lg">조건에 맞는 도시가 없습니다.</p>
            <button
              onClick={resetFilters}
              className="mt-4 px-4 py-2 bg-primary text-white rounded-lg text-sm hover:bg-opacity-90 transition-colors"
            >
              필터 초기화
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
