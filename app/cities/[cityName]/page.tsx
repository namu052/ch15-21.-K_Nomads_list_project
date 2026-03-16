import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { rowToCity } from '@/lib/cityMapper'
import CityDetailHeader from '@/components/cities/CityDetailHeader'
import CityHeroSection from '@/components/cities/CityHeroSection'
import CityStats from '@/components/cities/CityStats'
import CityFilters from '@/components/cities/CityFilters'
import CityDescription from '@/components/cities/CityDescription'
import CityHighlights from '@/components/cities/CityHighlights'
import LikeDislikeButtons from '@/components/ui/like-dislike-buttons'
import RelatedCities from '@/components/cities/RelatedCities'
import Footer from '@/components/layout/footer'

export const dynamic = 'force-dynamic'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ cityName: string }>
}): Promise<Metadata> {
  const { cityName } = await params
  const decodedName = decodeURIComponent(cityName)

  const { data } = await supabase
    .from('cities')
    .select('name, cost, internet, nomads')
    .eq('name', decodedName)
    .single()

  if (!data) {
    return {
      title: '도시를 찾을 수 없습니다',
      description: '요청하신 도시 정보가 없습니다.',
    }
  }

  return {
    title: `${data.name} - Korean Nomad Cities`,
    description: `${data.name}의 노마드 정보: 생활비 ${data.cost}, 인터넷 ${data.internet}, 노마드 ${data.nomads}`,
    openGraph: {
      title: data.name,
      description: `${data.name} 도시 상세정보`,
      type: 'website',
    },
  }
}

interface CityDetailPageProps {
  params: Promise<{
    cityName: string
  }>
}

export default async function CityDetailPage({ params }: CityDetailPageProps) {
  const { cityName } = await params
  const decodedName = decodeURIComponent(cityName)

  const { data, error } = await supabase
    .from('cities')
    .select('*')
    .eq('name', decodedName)
    .single()

  if (error || !data) {
    notFound()
  }

  const city = rowToCity(data)

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
              cityId={city.id!}
              cityName={city.name}
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
