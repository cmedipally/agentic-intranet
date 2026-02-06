import { useState } from 'react'
import './AudioSummary.css'

const AudioSummary = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(90) // 01:30 in seconds
  const totalTime = 330 // 05:30 in seconds

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const upcomingEvents = [
    {
      month: 'FEB',
      day: '9',
      weekday: 'MON',
      title: 'Microsoft AI Tour',
      subtitle: 'Multiple',
      time: '3:30 PM',
      image: '📱'
    },
    {
      month: 'FEB',
      day: '24',
      weekday: 'THU',
      title: 'Discovery Hour: Deliver...',
      subtitle: 'El Corazon',
      time: '4:03 PM',
      image: '🎤'
    },
    {
      month: 'APR',
      day: '9',
      weekday: 'FRI',
      title: 'Sell...',
      subtitle: 'Atl...',
      time: '6:00',
      image: '🎨'
    },
    {
      month: 'FEB',
      day: '13',
      weekday: 'FRI',
      title: 'Microsoft Technical We...',
      subtitle: 'Home Kong',
      time: '1:30 PM',
      image: '👥'
    },
    {
      month: 'MAR',
      day: '6',
      weekday: 'FRI',
      title: 'Cloud & AI Endpoints...',
      subtitle: 'The Crocodile',
      time: '6:00 PM',
      image: '☁️'
    },
    {
      month: 'MAY',
      day: '20',
      weekday: 'FRI',
      title: 'Idea...',
      subtitle: 'Atl...',
      time: '6:00',
      image: '💡'
    }
  ]

  return (
    <div className="audio-summary">
      <header className="agent-header">
        <div className="agent-name">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="8" fill="#464feb"/>
          </svg>
          <span>Agent Name</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
            <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          </svg>
        </div>
        <div className="agent-actions">
          <button className="action-btn action-btn-primary">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 2v12M2 8h12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <button className="action-btn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 2a6 6 0 016 6v2a2 2 0 104 0V8A10 10 0 108 18h6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <circle cx="8" cy="8" r="4" fill="currentColor"/>
            </svg>
          </button>
          <button className="action-btn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <circle cx="8" cy="4" r="1.5"/>
              <circle cx="8" cy="8" r="1.5"/>
              <circle cx="8" cy="12" r="1.5"/>
            </svg>
          </button>
        </div>
      </header>

      <div className="audio-content">
        <div className="events-section-top">
          <div className="events-carousel">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="event-card-horizontal">
                <div className="event-date-box">
                  <div className="event-month-small">{event.month}</div>
                  <div className="event-day-large">{event.day}</div>
                  <div className="event-weekday-small">{event.weekday}</div>
                </div>
                <div className="event-image">{event.image}</div>
                <div className="event-details">
                  <h4 className="event-title-small">{event.title}</h4>
                  <p className="event-subtitle-small">{event.subtitle}</p>
                  <p className="event-time-small">{event.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="sources-section">
          <span className="sources-label">Sources:</span>
          <div className="source-icons">
            <span className="source-icon">📰</span>
            <span className="source-icon">📺</span>
            <span className="source-icon">📄</span>
            <button className="source-more">›</button>
          </div>
        </div>

        <div className="action-icons">
          <button className="action-icon-btn" title="Export">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2v10M6 8l4-4 4 4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <path d="M4 14v2a2 2 0 002 2h8a2 2 0 002-2v-2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            </svg>
          </button>
          <button className="action-icon-btn" title="Copy">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <rect x="6" y="6" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <path d="M4 14H3a1 1 0 01-1-1V3a1 1 0 011-1h10a1 1 0 011 1v1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            </svg>
          </button>
          <button className="action-icon-btn" title="Refresh">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M4 10a6 6 0 0112 0M16 10a6 6 0 01-12 0" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <path d="M4 6v4h4M16 14v-4h-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
          <button className="action-icon-btn" title="Like">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
              <path d="M6 10v6H4V10h2zm8-4c0-1.1-.9-2-2-2h-2.5l.75-3.6-.03-.3c0-.4-.16-.77-.43-1.03L9.23 0 4.62 4.62C4.23 5 4 5.5 4 6v8c0 1.1.9 2 2 2h7c.83 0 1.54-.5 1.84-1.22l2.14-5.02c.06-.17.09-.35.09-.54V7c0-1.1-.9-2-2-2h-3l1.93-4.5z" strokeWidth="1.5"/>
            </svg>
          </button>
          <button className="action-icon-btn" title="Dislike">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" transform="scale(1,-1)">
              <path d="M6 10v6H4V10h2zm8-4c0-1.1-.9-2-2-2h-2.5l.75-3.6-.03-.3c0-.4-.16-.77-.43-1.03L9.23 0 4.62 4.62C4.23 5 4 5.5 4 6v8c0 1.1.9 2 2 2h7c.83 0 1.54-.5 1.84-1.22l2.14-5.02c.06-.17.09-.35.09-.54V7c0-1.1-.9-2-2-2h-3l1.93-4.5z" strokeWidth="1.5"/>
            </svg>
          </button>
          <button className="action-icon-btn" title="More">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <circle cx="10" cy="4" r="1.5"/>
              <circle cx="10" cy="10" r="1.5"/>
              <circle cx="10" cy="16" r="1.5"/>
            </svg>
          </button>
        </div>

        <div className="audio-player-card">
          <div className="audio-player-header">
            <span className="audio-created-time">Created 1 minute ago</span>
          </div>

          <div className="audio-player-main">
            <div className="audio-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 4L4 8v8c0 5.5 3.8 7.8 8 9 4.2-1.2 8-3.5 8-9V8l-8-4z" fill="#464feb" stroke="#464feb" strokeWidth="1.5"/>
                <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="audio-info">
              <h3 className="audio-title">Your News Briefing</h3>
              <p className="audio-subtitle">This is your AI generated summary</p>
            </div>
            <div className="audio-time">
              <span>{formatTime(currentTime)} / {formatTime(totalTime)}</span>
            </div>
            <button className="audio-menu-btn">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <circle cx="8" cy="3" r="1.5"/>
                <circle cx="8" cy="8" r="1.5"/>
                <circle cx="8" cy="13" r="1.5"/>
              </svg>
            </button>
          </div>

          <div className="audio-progress-bar">
            <div
              className="audio-progress-fill"
              style={{ width: `${(currentTime / totalTime) * 100}%` }}
            />
          </div>

          <div className="audio-controls">
            <button className="audio-control-btn">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8 5l-5 5 5 5M13 5v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
            <button
              className="audio-play-btn"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="5" width="4" height="14" rx="1"/>
                  <rect x="14" y="5" width="4" height="14" rx="1"/>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </button>
            <button className="audio-control-btn">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M12 5l5 5-5 5M7 5v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
            <button className="audio-control-btn audio-mute-btn">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 4L5 8H2v4h3l4 4V4zM14 8l4 4M18 8l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="response-text-section">
          <p className="response-text-large">
            That's your day at a glance.
          </p>
          <p className="response-text-normal">
            Let me know if you'd like this recorded in a more conversational tone, compressed for a 30-second version, or rewritten for a podcast-style briefing.
          </p>
        </div>

        <div className="message-input-bottom">
          <div className="message-input-container">
            <button className="input-icon-btn">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 8h12M8 2v12" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </button>
            <span className="input-label">Tools</span>
            <button className="input-icon-btn">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M4 6h12M4 10h12" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </button>
            <span className="input-label">Sources</span>
            <input type="text" placeholder="Message Agent" className="message-input-field" />
            <button className="audio-mic-btn">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <rect x="6" y="2" width="4" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <path d="M3 9a5 5 0 0010 0M8 12v3" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AudioSummary
