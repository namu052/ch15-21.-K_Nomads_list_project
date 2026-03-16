import { Database } from '@/types/database'
import { City } from '@/types/city'

type CityRow = Database['public']['Tables']['cities']['Row']

export function rowToCity(row: CityRow): City {
  return {
    id: row.id,
    name: row.name,
    emoji: row.emoji,
    cost: row.cost,
    internet: row.internet,
    nomads: row.nomads,
    budget: row.budget as City['budget'],
    region: row.region as City['region'],
    environment: row.environment as City['environment'],
    bestSeason: row.best_season as City['bestSeason'],
    likes: row.likes,
    dislikes: row.dislikes,
    description: row.description ?? undefined,
    highlights: row.highlights ?? undefined,
  }
}
