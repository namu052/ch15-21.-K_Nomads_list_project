'use client'

import { useState, useEffect } from 'react'

interface LikeDislikeButtonsProps {
  cityId: string
  initialLikes: number
  initialDislikes: number
}

export default function LikeDislikeButtons({
  cityId,
  initialLikes,
  initialDislikes,
}: LikeDislikeButtonsProps) {
  const [vote, setVote] = useState<'like' | 'dislike' | null>(null)
  const [likeCount, setLikeCount] = useState(initialLikes)
  const [dislikeCount, setDislikeCount] = useState(initialDislikes)
  const [mounted, setMounted] = useState(false)

  // Initialize from localStorage on mount
  useEffect(() => {
    const storedVote = localStorage.getItem(`knc_vote_${cityId}`)
    if (storedVote === 'like' || storedVote === 'dislike') {
      setVote(storedVote)
    }
    setMounted(true)
  }, [cityId])

  const handleLike = () => {
    let newVote: 'like' | 'dislike' | null = null
    let newLikeCount = likeCount
    let newDislikeCount = dislikeCount

    if (vote === 'like') {
      // Deselect like
      newVote = null
      newLikeCount = likeCount - 1
    } else if (vote === 'dislike') {
      // Switch from dislike to like
      newVote = 'like'
      newDislikeCount = dislikeCount - 1
      newLikeCount = likeCount + 1
    } else {
      // Select like
      newVote = 'like'
      newLikeCount = likeCount + 1
    }

    setVote(newVote)
    setLikeCount(newLikeCount)
    setDislikeCount(newDislikeCount)
    localStorage.setItem(
      `knc_vote_${cityId}`,
      newVote === null ? '' : newVote
    )
  }

  const handleDislike = () => {
    let newVote: 'like' | 'dislike' | null = null
    let newLikeCount = likeCount
    let newDislikeCount = dislikeCount

    if (vote === 'dislike') {
      // Deselect dislike
      newVote = null
      newDislikeCount = dislikeCount - 1
    } else if (vote === 'like') {
      // Switch from like to dislike
      newVote = 'dislike'
      newLikeCount = likeCount - 1
      newDislikeCount = dislikeCount + 1
    } else {
      // Select dislike
      newVote = 'dislike'
      newDislikeCount = dislikeCount + 1
    }

    setVote(newVote)
    setLikeCount(newLikeCount)
    setDislikeCount(newDislikeCount)
    localStorage.setItem(
      `knc_vote_${cityId}`,
      newVote === null ? '' : newVote
    )
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="flex gap-6 mt-4 pt-4 border-t border-border-line">
      <button
        onClick={handleLike}
        className={`flex items-center gap-2 transition-colors ${
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
        className={`flex items-center gap-2 transition-colors ${
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
