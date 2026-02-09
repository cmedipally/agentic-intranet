import { useState, useEffect } from 'react'
import './HighlightsFlow.css'

// Import all highlight slides
import slide1 from '../assets/highlights-icons/highlight-283_46058.png'
import slide2 from '../assets/highlights-icons/highlight-298_13508.png'
import slide3 from '../assets/highlights-icons/highlight-298_13507.png'
import slide4 from '../assets/highlights-icons/highlight-298_13506.png'
import slide5 from '../assets/highlights-icons/highlight-283_47934.png'
import slide6 from '../assets/highlights-icons/highlight-288_49572.png'
import slide7 from '../assets/highlights-icons/highlight-288_49634.png'
import slide8 from '../assets/highlights-icons/highlight-283_48113.png'
import slide9 from '../assets/highlights-icons/highlight-288_49543.png'
import slide10 from '../assets/highlights-icons/highlight-283_47848.png'
import slide11 from '../assets/highlights-icons/highlight-283_47837.png'
import slide12 from '../assets/highlights-icons/highlight-283_47833.png'
import slide13 from '../assets/highlights-icons/highlight-283_48132.png'
import slide14 from '../assets/highlights-icons/highlight-283_47838.png'
import slide15 from '../assets/highlights-icons/highlight-288_49640.png'
import slide16 from '../assets/highlights-icons/highlight-283_47835.png'
import slide17 from '../assets/highlights-icons/highlight-283_47834.png'
import slide18 from '../assets/highlights-icons/highlight-283_47831.png'
import slide19 from '../assets/highlights-icons/highlight-283_47830.png'
import slide20 from '../assets/highlights-icons/highlight-283_47829.png'
import slide21 from '../assets/highlights-icons/highlight-283_47827.png'
import slide22 from '../assets/highlights-icons/highlight-283_48115.png'
import slide23 from '../assets/highlights-icons/highlight-283_47825.png'
import slide24 from '../assets/highlights-icons/highlight-288_49608.png'
import slide25 from '../assets/highlights-icons/highlight-288_49598.png'
import slide26 from '../assets/highlights-icons/highlight-288_49615.png'
import slide27 from '../assets/highlights-icons/highlight-288_49614.png'
import slide28 from '../assets/highlights-icons/highlight-288_49605.png'
import slide29 from '../assets/highlights-icons/highlight-288_49613.png'
import slide30 from '../assets/highlights-icons/highlight-288_49604.png'
import slide31 from '../assets/highlights-icons/highlight-288_49603.png'

const slides = [
  slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10,
  slide11, slide12, slide13, slide14, slide15, slide16, slide17, slide18, slide19, slide20,
  slide21, slide22, slide23, slide24, slide25, slide26, slide27, slide28, slide29, slide30,
  slide31
]

function HighlightsFlow({ onClose }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  // Auto-advance slides when playing
  useEffect(() => {
    if (!isPlaying) return

    const timer = setInterval(() => {
      setCurrentSlide(prev => {
        if (prev === slides.length - 1) {
          setIsPlaying(false)
          return prev
        }
        return prev + 1
      })
    }, 3000) // 3 seconds per slide

    return () => clearInterval(timer)
  }, [isPlaying, currentSlide])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        handleNext()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        handlePrev()
      } else if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentSlide, onClose])

  const handleNext = () => {
    setIsPlaying(false)
    setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1))
  }

  const handlePrev = () => {
    setIsPlaying(false)
    setCurrentSlide(prev => Math.max(prev - 1, 0))
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="highlights-overlay">
      <div className="highlights-container">
        {/* Close button */}
        <button className="highlights-close" onClick={onClose} aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Slide image */}
        <div className="highlights-slide">
          <img src={slides[currentSlide]} alt={`Highlight ${currentSlide + 1}`} />
        </div>

        {/* Navigation controls */}
        <div className="highlights-controls">
          <button
            className="highlights-nav-btn"
            onClick={handlePrev}
            disabled={currentSlide === 0}
            aria-label="Previous slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="highlights-progress">
            <span className="highlights-current">{currentSlide + 1}</span>
            <span className="highlights-separator">/</span>
            <span className="highlights-total">{slides.length}</span>
          </div>

          <button
            className="highlights-play-pause"
            onClick={togglePlayPause}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M10 4H6v16h4V4zM18 4h-4v16h4V4z" fill="currentColor"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8 5v14l11-7z" fill="currentColor"/>
              </svg>
            )}
          </button>

          <button
            className="highlights-nav-btn"
            onClick={handleNext}
            disabled={currentSlide === slides.length - 1}
            aria-label="Next slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Progress bar */}
        <div className="highlights-progress-bar">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`highlights-progress-segment ${index <= currentSlide ? 'active' : ''}`}
              onClick={() => {
                setIsPlaying(false)
                setCurrentSlide(index)
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HighlightsFlow
