import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CITIES } from '@/data/cities'
import { City } from '@/types/city'
import CityDetailHeader from '@/components/cities/CityDetailHeader'
import CityHeroSection from '@/components/cities/CityHeroSection'
import CityStats from '@/components/cities/CityStats'
import CityFilters from '@/components/cities/CityFilters'
import CityDescription from '@/components/cities/CityDescription'
import CityHighlights from '@/components/cities/CityHighlights'
import LikeDislikeButtons from '@/components/ui/like-dislike-buttons'
import RelatedCities from '@/components/cities/RelatedCities'
import Footer from '@/components/layout/footer'

/**
 * 정적 매개변수 생성
 * 빌드 타임에 모든 도시 페이지를 사전 생성
 * 예: /cities/부산, /cities/대구, ...
 */
export async function generateStaticParams() {
  return CITIES.map((city) => ({
    cityName: city.name,
  }))
}

/**
 * SEO 메타데이터 동적 생성
 */
export async function generateMetadata({
  params,
}: {
  params: { cityName: string }
}): Promise<Metadata> {
  const city = CITIES.find((c) => c.name === params.cityName)

  if (!city) {
    return {
      title: '도시를 찾을 수 없습니다',
      description: '요청하신 도시 정보가 없습니다.',
    }
  }

  return {
    title: `${city.name} - Korean Nomad Cities`,
    description: `${city.name}의 노마드 정보: 생활비 ${city.cost}, 인터넷 ${city.internet}, 노마드 ${city.nomads}`,
    openGraph: {
      title: city.name,
      description: `${city.name} 도시 상세정보`,
      type: 'website',
    },
  }
}

interface CityDetailPageProps {
  params: {
    cityName: string
  }
}

/**
 * 도시 상세페이지 메인 컴포넌트
 */
export default function CityDetailPage({ params }: CityDetailPageProps) {
  // 도시 찾기
  const city = CITIES.find((c) => c.name === params.cityName)

  // 404 처리
  if (!city) {
    notFound()
  }

  return (
    <main className="w-full">
      {/* 고정 헤더 */}
      <CityDetailHeader city={city} />

      {/* 메인 컨텐츠 */}
      <CityHeroSection city={city} />

      {/* 통계 */}
      <CityStats city={city} />

      {/* 필터 정보 */}
      <CityFilters city={city} />

      {/* 상세 설명 */}
      <CityDescription city={city} />

      {/* 주요 특징 */}
      <CityHighlights city={city} />

      {/* 좋아요/싫어요 시스템 */}
      <section className="w-full py-10 md:py-14 lg:py-16 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8">
            이 도시는 어떤가요?
          </h3>
          <div className="max-w-sm mx-auto">
            <LikeDislikeButtons
              cityId={city.name}
              initialLikes={city.likes}
              initialDislikes={city.dislikes}
            />
          </div>
        </div>
      </section>

      {/* 관련 도시 추천 */}
      <RelatedCities currentCity={city} />

      {/* 푸터 */}
      <Footer />
    </main>
  )
}
