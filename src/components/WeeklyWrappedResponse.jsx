import './WeeklyWrappedResponse.css'

const WeeklyWrappedResponse = ({ onCreateAudioSummary }) => {
  const topNews = [
    {
      id: 1,
      icon: '🏢',
      number: '1',
      title: 'Microsoft SDL: Evolving security practices for an AI-powered world',
      description: 'As AI reshapes the world, organizations encounter unprecedented risks and security leaders must stay vigilant. In addition to the traditional software security risks currently covered...'
    },
    {
      id: 2,
      icon: '🎨',
      number: '2',
      title: 'Updates in two of our core priorities',
      description: 'Sara Nichols Chrisman and CTO joined the bridge message to employees on Viva Engage this morning. I am excited to share a new agenda updates in two of our core priorities that Shaily beyond what is...'
    },
    {
      id: 3,
      icon: '🌍',
      number: '3',
      title: 'Farms to oceans: How Microsoft is working to scale carbon dioxide removal',
      description: 'There is widespread recognition that offsets are one of the key building science-based net and they also provide an important carbon dioxide removal projects underway - and accelerating...'
    }
  ]

  const moreNews = [
    {
      image: '🖥️',
      category: 'Growth, Biz - 1d',
      title: 'Microsoft SDL: Evolving security practices for an AI-powered world',
      source: 'The Information'
    },
    {
      image: '👥',
      category: 'Skipped News - 1h',
      title: 'Helps to assess: New sustainability board at Contoso aids their AI vision',
      source: 'The Washington Post'
    },
    {
      image: '📊',
      category: 'The Verge - 1d',
      title: 'Satnam Singh 101: Nails transparent value chain with Contoso',
      source: 'The Verge'
    }
  ]

  const upcomingEvents = [
    {
      month: 'FEB',
      day: '9',
      title: 'Microsoft AI Tour',
      subtitle: 'Multiple',
      time: '3:30 PM'
    },
    {
      month: 'FEB',
      day: '24',
      title: 'Discovery Hour: Deliver...',
      subtitle: 'El Corazon',
      time: '4:03 PM'
    },
    {
      month: 'APR',
      day: '9',
      title: 'Sell...',
      subtitle: 'Atl...',
      time: '6:00'
    },
    {
      month: 'FEB',
      day: '13',
      title: 'Microsoft Technical We...',
      subtitle: 'Home Kong',
      time: '1:30 PM'
    },
    {
      month: 'MAR',
      day: '6',
      title: 'Cloud & AI Endpoints...',
      subtitle: 'The Crocodile',
      time: '6:00 PM'
    },
    {
      month: 'MAY',
      day: '20',
      title: 'Idea...',
      subtitle: 'Atl...',
      time: '6:00'
    }
  ]

  return (
    <div className="weekly-wrapped-response">
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
          <button className="action-btn">
            <span>2:42</span>
          </button>
          <button className="action-btn">⏹</button>
          <button className="action-btn">☺</button>
        </div>
      </header>

      <div className="response-content">
        <div className="response-text">
          <h2 className="response-title">Copilot's Weekly Wrap for my organization in SharePoint</h2>
          <p className="response-paragraph">
            Summarize the most important News posts published this week. Highlight trending topics, notable leadership updates and announcements. Link to or quote the most valuable leadership updates or announcements.
          </p>

          <div className="response-section">
            <div className="section-icon">📋</div>
            <div className="section-content">
              <h3 className="section-title">Copilot</h3>
              <p className="section-text">
                Here's your Weekly Wrap in SharePoint, summarizing the most important News from this week, highlighting trending topics and categories based on engagement and activity, and calling out notable leadership updates or announcements.
              </p>
            </div>
          </div>

          <div className="video-recap-card">
            <div className="video-hero">
              <div className="hero-image-grid">
                {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                  <div key={i} className={`hero-image hero-image-${i}`}>
                    <div className="image-placeholder" />
                  </div>
                ))}
                <div className="video-play-overlay">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="white">
                    <circle cx="24" cy="24" r="24" fill="rgba(0,0,0,0.5)"/>
                    <path d="M18 12l18 12-18 12z" fill="white"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="video-card-content">
              <div className="video-badge">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <circle cx="8" cy="8" r="6" fill="#464feb"/>
                </svg>
                <span>VIDEO RECAP</span>
              </div>
              <h3 className="video-title">Watch a video of all of your most valuable weekly moments</h3>
            </div>
            <div className="article-preview">
              <span className="article-date">May 21, 2024 • 3 min read</span>
              <h4 className="article-title">New agent capabilities in Microsoft Copilot unlock business value</h4>
              <p className="article-author">by Jared Spataro, Chief Marketing Officer, AI at Work, Microsoft</p>
            </div>
          </div>

          <div className="top-news-section">
            <h3 className="section-heading">You top news</h3>
            {topNews.map(news => (
              <div key={news.id} className="news-item">
                <div className="news-icon">{news.icon}</div>
                <div className="news-content">
                  <div className="news-number">{news.number}</div>
                  <h4 className="news-title">{news.title}</h4>
                  <p className="news-description">{news.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="more-news-section">
            <h3 className="section-heading">More news</h3>
            <div className="more-news-grid">
              {moreNews.map((news, index) => (
                <div key={index} className="more-news-card">
                  <div className="more-news-image">{news.image}</div>
                  <div className="more-news-content">
                    <div className="more-news-category">{news.category}</div>
                    <h4 className="more-news-title">{news.title}</h4>
                    <div className="more-news-source">{news.source}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="events-section">
            <h3 className="section-heading">Upcoming events</h3>
            <div className="events-grid">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="event-card">
                  <div className="event-date">
                    <div className="event-month">{event.month}</div>
                    <div className="event-day">{event.day}</div>
                    <div className="event-weekday">MON</div>
                  </div>
                  <div className="event-content">
                    <h4 className="event-title">{event.title}</h4>
                    <p className="event-subtitle">{event.subtitle}</p>
                    <p className="event-time">{event.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="action-buttons">
            <button className="action-button-primary" onClick={onCreateAudioSummary}>
              <span>Create an audio summary</span>
            </button>
            <button className="action-button-secondary">
              <span>Provide a 30-second version</span>
            </button>
            <button className="action-button-secondary">
              <span>Make a more conversational</span>
            </button>
          </div>

          <div className="message-input-bottom">
            <div className="message-input-container">
              <button className="input-icon-btn">
                <span>💬</span>
              </button>
              <input type="text" placeholder="Message Agent" />
              <div className="input-actions">
                <button className="input-btn">Tools</button>
                <button className="input-btn">Sources</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeeklyWrappedResponse
