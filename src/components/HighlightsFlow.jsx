import { useState } from 'react'
import './HighlightsFlow.css'

// Import icons
import copilotIcon from '../assets/highlights-assets/icons/Copilot.svg'
import playIcon from '../assets/highlights-assets/icons/Play/Regulation/Play.svg'
import micIcon from '../assets/highlights-assets/icons/Mic.svg'
import timerIcon from '../assets/highlights-assets/icons/Timer.svg'
import briefcaseIcon from '../assets/highlights-assets/icons/Briefcase.svg'
import chevronIcon from '../assets/highlights-assets/icons/Chevron.svg'

// Import images
import videoPreview from '../assets/highlights-assets/images/Video.png'
import featuredImage from '../assets/highlights-assets/images/Title with image/Hover control/Title with image/Image.png'
import newsThumb1 from '../assets/highlights-assets/images/Pole Carousel/Pole Carousel/image-1.png'
import newsThumb2 from '../assets/highlights-assets/images/Pole Carousel/Pole Carousel/image-2.png'
import newsThumb3 from '../assets/highlights-assets/images/Pole Carousel/Pole Carousel/image-3.png'
import titleImage1 from '../assets/highlights-assets/images/Title with image/Hover control/Title with image/Image-1.png'
import titleImage2 from '../assets/highlights-assets/images/Title with image/Hover control/Title with image/Image-2.png'
import titleImage3 from '../assets/highlights-assets/images/image-4.png'

function HighlightsFlow({ onClose }) {
  const [inputValue, setInputValue] = useState('')

  const handleScrollEvents = () => {
    const container = document.querySelector('.events-scroll-container')
    if (container) {
      container.scrollBy({ left: 340, behavior: 'smooth' })
    }
  }

  return (
    <div className="highlights-flow">
      <div className="highlights-container">
        {/* Agent Header */}
        <div className="highlights-header">
          <div className="agent-avatar">
            <img src={copilotIcon} alt="Contoso Agent" />
          </div>
          <div className="agent-info">
            <div className="agent-title-row">
              <h2 className="agent-name">Contoso Agent</h2>
              <span className="agent-badge">Update</span>
            </div>
            <p className="agent-description">
              I created a summary of what's trending across the organization at Contoso—tailored just for you based on trending topics, engagement, and key announcements. Here's the week's breakdown, organized by trending updates, top news, upcoming events, and upcoming events. Swipe for the summary as a highlight.
            </p>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="highlights-main-content">
          {/* Video Recap Card */}
          <div className="video-recap-card">
            <div className="video-card-header">
              <span className="video-badge">📹 Videocard</span>
              <h3 className="video-title">Watch a recap of all your work</h3>
              <p className="video-subtitle">The latest insights from your team's weekly meetings</p>
            </div>
            <div className="video-preview">
              <img src={videoPreview} alt="Video recap" className="video-main-image" />
            </div>
          </div>

          {/* Your Top News */}
          <div className="highlights-section">
            <h3 className="section-title">Your top news</h3>

            {/* Main News Items */}
            <div className="news-main-list">
              <div className="news-main-item">
                <div className="news-main-header">
                  <span className="news-emoji">💼</span>
                  <h4 className="news-main-title">1. Microsoft SDL: Evolving security practices for an AI-powered world</h4>
                </div>
                <p className="news-main-description">
                  As AI reshapes the world, organizations encounter unprecedented risks, and security leaders take on new responsibilities. Microsoft's Secure Development Lifecycle (SDL) is expanding to address AI-specific security concerns in addition to the traditional software security areas that it has historically covered.
                </p>
                <hr className="news-divider" />
              </div>

              <div className="news-main-item">
                <div className="news-main-header">
                  <span className="news-emoji">🏆</span>
                  <h4 className="news-main-title">2. Updates in two of our core priorities</h4>
                </div>
                <p className="news-main-description">
                  Satya Nadella, Chairman and CEO, posted the below message to employees on Viva Engage this morning.<br/><br/>
                  I am excited to share a couple updates in two of our core priorities: security and quality. Hayete Gallot is rejoining Microsoft as Executive Vice President, Security, reporting to me. I've also asked Charlie Bell to take on a new role focused on engineering quality, reporting to me.
                </p>
                <hr className="news-divider" />
              </div>

              <div className="news-main-item">
                <div className="news-main-header">
                  <span className="news-emoji">🌱</span>
                  <h4 className="news-main-title">3. Farms to oceans: How Microsoft is working to scale carbon dioxide removal</h4>
                </div>
                <p className="news-main-description">
                  There is widespread recognition that efforts to meet global climate targets cannot be met by curbing new carbon dioxide emissions alone and will also require removing carbon from the atmosphere at scale.<br/><br/>
                  Today, a wide range of advanced carbon dioxide removal projects are underway – and accelerating.
                </p>
              </div>
            </div>

            {/* Featured Card and More News */}
            <div className="news-bottom-section">
              <div className="news-featured-card">
                <img src={featuredImage} alt="Featured news" className="news-featured-image" />
                <div className="news-featured-content">
                  <div className="news-featured-meta">
                    <svg className="news-source-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <rect width="7" height="7" fill="#F25022"/>
                      <rect x="9" width="7" height="7" fill="#7FBA00"/>
                      <rect y="9" width="7" height="7" fill="#00A4EF"/>
                      <rect x="9" y="9" width="7" height="7" fill="#FFB900"/>
                    </svg>
                    <span className="news-featured-source">Security blog • 1d</span>
                  </div>
                  <h4 className="news-featured-title">Microsoft SDL: Evolving security practices for an AI-powered world</h4>
                  <p className="news-featured-excerpt">
                    As AI reshapes the world, organizations encounter unprecedented risks, and security leaders take on new responsibilities. Microsoft's Secure Development Lifecycle (SDL)...
                  </p>
                </div>
              </div>

              <div className="news-more-section">
                <div className="news-more-header">
                  <h4 className="news-more-title">More news</h4>
                  <button className="news-more-btn" aria-label="View more news">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>
                <div className="news-more-list">
                  <div className="news-more-item">
                    <div className="news-more-content">
                      <div className="news-more-meta">
                        <svg className="news-source-icon" width="14" height="14" viewBox="0 0 16 16" fill="none">
                          <rect width="7" height="7" fill="#F25022"/>
                          <rect x="9" width="7" height="7" fill="#7FBA00"/>
                          <rect y="9" width="7" height="7" fill="#00A4EF"/>
                          <rect x="9" y="9" width="7" height="7" fill="#FFB900"/>
                        </svg>
                        <span className="news-more-source">The Source</span>
                        <span className="news-more-time">10h</span>
                      </div>
                      <h5 className="news-more-item-title">Updates in two of our core priorities</h5>
                    </div>
                    <img src={newsThumb1} alt="" className="news-more-thumb" />
                  </div>

                  <div className="news-more-item">
                    <div className="news-more-content">
                      <div className="news-more-meta">
                        <svg className="news-source-icon" width="14" height="14" viewBox="0 0 16 16" fill="none">
                          <rect width="7" height="7" fill="#F25022"/>
                          <rect x="9" width="7" height="7" fill="#7FBA00"/>
                          <rect y="9" width="7" height="7" fill="#00A4EF"/>
                          <rect x="9" y="9" width="7" height="7" fill="#FFB900"/>
                        </svg>
                        <span className="news-more-source">Microsoft News</span>
                        <span className="news-more-time">7h</span>
                      </div>
                      <h5 className="news-more-item-title">Farms to oceans: How Microsoft is working to scale carbon dioxide removal</h5>
                    </div>
                    <img src={newsThumb2} alt="" className="news-more-thumb" />
                  </div>

                  <div className="news-more-item">
                    <div className="news-more-content">
                      <div className="news-more-meta">
                        <svg className="news-source-icon" width="14" height="14" viewBox="0 0 16 16" fill="none">
                          <rect width="7" height="7" fill="#F25022"/>
                          <rect x="9" width="7" height="7" fill="#7FBA00"/>
                          <rect y="9" width="7" height="7" fill="#00A4EF"/>
                          <rect x="9" y="9" width="7" height="7" fill="#FFB900"/>
                        </svg>
                        <span className="news-more-source">Xbox Wire</span>
                        <span className="news-more-time">1d</span>
                        <span className="news-more-platform">on MSN</span>
                      </div>
                      <h5 className="news-more-item-title">Safer Internet Day 2026: Xbox Transparency Report and tools to Play with Confidence</h5>
                    </div>
                    <img src={newsThumb3} alt="" className="news-more-thumb" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Calendar Section */}
          <div className="highlights-section">
            <h3 className="section-title">🗓️ Friday, 19 January | Not your calendar yet</h3>
            <div className="calendar-item">
              <div className="calendar-time">
                <span className="time-badge">9am - 10am</span>
              </div>
              <div className="calendar-content">
                <h4 className="calendar-title">Presenting new Microsoft Security Practices</h4>
                <p className="calendar-location">Teams • microsoft.com/meeting-id=111222-33-444</p>
              </div>
            </div>
          </div>

          {/* What's Happening Section - Event Carousel */}
          <div className="highlights-section">
            <h3 className="section-title">What's happening</h3>
            <div className="events-carousel">
              <div className="events-scroll-container">
                <div className="event-card">
                  <div className="event-content">
                    <div className="event-date-badge">
                      <div className="event-month">FEB</div>
                      <div className="event-day">9</div>
                      <div className="event-weekday">MON</div>
                    </div>
                    <div className="event-details">
                      <h4 className="event-title">Microsoft AI Tour</h4>
                      <p className="event-location">Multiple</p>
                      <p className="event-time">2:30 PM</p>
                    </div>
                  </div>
                  <img src={titleImage1} alt="" className="event-thumbnail" />
                </div>

                <div className="event-card">
                  <div className="event-content">
                    <div className="event-date-badge">
                      <div className="event-month">FEB</div>
                      <div className="event-day">24</div>
                      <div className="event-weekday">TUE</div>
                    </div>
                    <div className="event-details">
                      <h4 className="event-title">Discovery Hour: Delivering customer value</h4>
                      <p className="event-location">Redmond</p>
                      <p className="event-time">6:00 PM</p>
                    </div>
                  </div>
                  <img src={titleImage2} alt="" className="event-thumbnail" />
                </div>

                <div className="event-card">
                  <div className="event-content">
                    <div className="event-date-badge">
                      <div className="event-month">FEB</div>
                      <div className="event-day">13</div>
                      <div className="event-weekday">FRI</div>
                    </div>
                    <div className="event-details">
                      <h4 className="event-title">Microsoft Technical Workshop</h4>
                      <p className="event-location">Hong Kong</p>
                      <p className="event-time">3:30 PM</p>
                    </div>
                  </div>
                  <img src={titleImage3} alt="" className="event-thumbnail" />
                </div>

                <div className="event-card">
                  <div className="event-content">
                    <div className="event-date-badge">
                      <div className="event-month">MAR</div>
                      <div className="event-day">6</div>
                      <div className="event-weekday">FRI</div>
                    </div>
                    <div className="event-details">
                      <h4 className="event-title">Cloud & AI Endpoints Summit</h4>
                      <p className="event-location">Multiple</p>
                      <p className="event-time">6:00 PM</p>
                    </div>
                  </div>
                  <img src={newsThumb1} alt="" className="event-thumbnail" />
                </div>

                <div className="event-card">
                  <div className="event-content">
                    <div className="event-date-badge">
                      <div className="event-month">APR</div>
                      <div className="event-day">9</div>
                      <div className="event-weekday">FRI</div>
                    </div>
                    <div className="event-details">
                      <h4 className="event-title">Solid Edge Summit</h4>
                      <p className="event-location">Allegheny</p>
                      <p className="event-time">6:00 AM</p>
                    </div>
                  </div>
                  <img src={newsThumb2} alt="" className="event-thumbnail" />
                </div>

                <div className="event-card">
                  <div className="event-content">
                    <div className="event-date-badge">
                      <div className="event-month">MAY</div>
                      <div className="event-day">20</div>
                      <div className="event-weekday">FRI</div>
                    </div>
                    <div className="event-details">
                      <h4 className="event-title">Idaho Technical Conference</h4>
                      <p className="event-location">Allegheny</p>
                      <p className="event-time">6:00 PM</p>
                    </div>
                  </div>
                  <img src={newsThumb3} alt="" className="event-thumbnail" />
                </div>
              </div>
              <button className="events-scroll-btn" onClick={handleScrollEvents} aria-label="Scroll right">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Events Footer - Sources and Actions */}
            <div className="events-footer">
              <div className="events-sources">
                <span className="events-sources-label">Sources</span>
                <div className="events-sources-icons">
                  <div className="source-icon" style={{background: '#E81123'}}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                      <rect width="16" height="16" rx="2"/>
                    </svg>
                  </div>
                  <div className="source-icon" style={{background: '#000000'}}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                      <path d="M8 2L2 8l6 6 6-6-6-6z"/>
                    </svg>
                  </div>
                  <div className="source-icon" style={{background: '#E81123'}}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                      <path d="M4 4h8v8H4z"/>
                    </svg>
                  </div>
                  <button className="event-action-btn">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="events-actions">
                <button className="event-action-btn" aria-label="Copy">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7 7V5a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2h-2m-4 0H5a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2z" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </button>
                <button className="event-action-btn" aria-label="Copy link">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="5" y="5" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </button>
                <button className="event-action-btn" aria-label="Share">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M8 12l4-4m0 0l-4-4m4 4H4m8 8a8 8 0 100-16 8 8 0 000 16z" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </button>
                <button className="event-action-btn" aria-label="Like">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M14 9V5a3 3 0 00-3-3l-1 9-4 2v7h9a2 2 0 002-2v-2a2 2 0 00-2-2V9z" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </button>
                <button className="event-action-btn" aria-label="Dislike">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M6 11V15a3 3 0 003 3l1-9 4-2V0H5a2 2 0 00-2 2v2a2 2 0 002 2V11z" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </button>
                <button className="event-action-btn" aria-label="More options">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="5" r="1.5" fill="currentColor"/>
                    <circle cx="10" cy="10" r="1.5" fill="currentColor"/>
                    <circle cx="10" cy="15" r="1.5" fill="currentColor"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Chat Input */}
        <div className="highlights-chat-input">
          <div className="chat-input-container">
            <input
              type="text"
              className="chat-input-field"
              placeholder="Message Contoso agent"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div className="chat-input-controls">
              <button className="chat-action-btn" aria-label="Add">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              <button className="chat-toolbar-btn" aria-label="Tools">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span>Tools</span>
              </button>
              <button className="chat-toolbar-btn chat-sources-btn" aria-label="Sources">
                <span>Sources</span>
              </button>
              <button className="chat-action-btn" aria-label="Voice input">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2a3 3 0 00-3 3v5a3 3 0 006 0V5a3 3 0 00-3-3z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <path d="M5 10a5 5 0 0010 0M10 15v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HighlightsFlow
