export type Budget = '100만원 미만' | '100~200만원' | '200만원 이상'
export type Region = '수도권' | '경상도' | '전라도' | '강원도' | '제주도' | '충청도'
export type Environment = '자연친화' | '도심선호' | '카페작업' | '코워킹 필수'
export type Season = '봄' | '여름' | '가을' | '겨울'

export interface City {
  id?: string
  name: string
  emoji: string
  cost: string
  internet: string
  nomads: string
  budget: Budget
  region: Region
  environment: Environment[]
  bestSeason: Season
  likes: number
  dislikes: number
  description?: string
  highlights?: string[]
}
