export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.4"
  }
  public: {
    Tables: {
      cities: {
        Row: {
          best_season: string
          budget: string
          cost: string
          created_at: string | null
          description: string | null
          dislikes: number
          emoji: string
          environment: string[]
          highlights: string[] | null
          id: string
          internet: string
          likes: number
          name: string
          nomads: string
          region: string
        }
        Insert: {
          best_season: string
          budget: string
          cost: string
          created_at?: string | null
          description?: string | null
          dislikes?: number
          emoji: string
          environment?: string[]
          highlights?: string[] | null
          id?: string
          internet: string
          likes?: number
          name: string
          nomads: string
          region: string
        }
        Update: {
          best_season?: string
          budget?: string
          cost?: string
          created_at?: string | null
          description?: string | null
          dislikes?: number
          emoji?: string
          environment?: string[]
          highlights?: string[] | null
          id?: string
          internet?: string
          likes?: number
          name?: string
          nomads?: string
          region?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      decrement_dislikes: { Args: { city_id: string }; Returns: undefined }
      decrement_likes: { Args: { city_id: string }; Returns: undefined }
      increment_dislikes: { Args: { city_id: string }; Returns: undefined }
      increment_likes: { Args: { city_id: string }; Returns: undefined }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
