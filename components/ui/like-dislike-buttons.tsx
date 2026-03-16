'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

interface LikeDislikeButtonsProps {
  cityId: string      // UUID from Supabase
  cityName: string    // for localStorage key
  initialLikes: number
  initialDislikes: number
}

export default function LikeDislikeButtons({
  cityId,
  cityName,
  initialLikes,
  initialDislikes,
}: LikeDislikeButtonsProps) {
  const [vote, setVote] = useState<'like' | 'dislike' | null>(null)
  const [likeCount, setLikeCount] = useState(initialLikes)
  const [dislikeCount, setDislikeCount] = useState(initialDislikes)
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const storedVote = localStorage.getItem(`knc_vote_${cityName}`)
    if (storedVote === 'like' || storedVote === 'dislike') {
      setVote(storedVote)
    }
    setMounted(true)
  }, [cityName])

  const handleLike = async () => {
    if (loading) return
    setLoading(true)

    let newVote: 'like' | 'dislike' | null = null
    let newLikeCount = likeCount
    let newDislikeCount = dislikeCount

    if (vote === 'like') {
      // 좋아요 취소
      newVote = null
      newLikeCount = likeCount - 1
      await supabase.rpc('decrement_likes', { city_id: cityId })
    } else if (vote === 'dislike') {
      // 싫어요 → 좋아요 전환
      newVote = 'like'
      newDislikeCount = dislikeCount - 1
      newLikeCount = likeCount + 1
      await supabase.rpc('decrement_dislikes', { city_id: cityId })
      await supabase.rpc('increment_likes', { city_id: cityId })
    } else {
      // 좋아요 선택
      newVote = 'like'
      newLikeCount = likeCount + 1
      await supabase.rpc('increment_likes', { city_id: cityId })
    }

    setVote(newVote)
    setLikeCount(newLikeCount)
    setDislikeCount(newDislikeCount)
    localStorage.setItem(`knc_vote_${cityName}`, newVote ?? '')
    setLoading(false)
  }

  const handleDislike = async () => {
    if (loading) return
    setLoading(true)

    let newVote: 'like' | 'dislike' | null = null
    let newLikeCount = likeCount
    let newDislikeCount = dislikeCount

    if (vote === 'dislike') {
      // 싫어요 취소
      newVote = null
      newDislikeCount = dislikeCount - 1
      await supabase.rpc('decrement_dislikes', { city_id: cityId })
    } else if (vote === 'like') {
      // 좋아요 → 싫어요 전환
      newVote = 'dislike'
      newLikeCount = likeCount - 1
      newDislikeCount = dislikeCount + 1
      await supabase.rpc('decrement_likes', { city_id: cityId })
      await supabase.rpc('increment_dislikes', { city_id: cityId })
    } else {
      // 싫어요 선택
      newVote = 'dislike'
      newDislikeCount = dislikeCount + 1
      await supabase.rpc('increment_dislikes', { city_id: cityId })
    }

    setVote(newVote)
    setLikeCount(newLikeCount)
    setDislikeCount(newDislikeCount)
    localStorage.setItem(`knc_vote_${cityName}`, newVote ?? '')
    setLoading(false)
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="flex gap-6 mt-4 pt-4 border-t border-border-line">
      <button
        onClick={handleLike}
        disabled={loading}
        className={`flex items-center gap-2 transition-colors disabled:opacity-50 ${
          vote === 'like'
            ? 'text-primary font-semibold'
            : 'text-gray-400 hover:text-gray-600'
        }`}
      >
        <span className="text-lg">👍</span>
        <span className="text-sm">{likeCount}</span>
      </button>

      <button
        onClick={handleDislike}
        disabled={loading}
        className={`flex items-center gap-2 transition-colors disabled:opacity-50 ${
          vote === 'dislike'
            ? 'text-secondary font-semibold'
            : 'text-gray-400 hover:text-gray-600'
        }`}
      >
        <span className="text-lg">👎</span>
        <span className="text-sm">{dislikeCount}</span>
      </button>
    </div>
  )
}
