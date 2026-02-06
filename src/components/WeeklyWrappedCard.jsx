import './WeeklyWrappedCard.css'
import weeklyWrappedBg from '../assets/home-icons/weekly-wrapped-bg.png'

const WeeklyWrappedCard = ({ onViewWrap }) => {
  return (
    <div className="weekly-wrapped-card">
      <div className="weekly-wrapped-hero">
        <div className="hero-image-grid">
          <div className="grid-image" style={{gridArea: '1 / 1 / 2 / 2'}}></div>
          <div className="grid-image" style={{gridArea: '1 / 2 / 2 / 3'}}></div>
          <div className="grid-image" style={{gridArea: '1 / 3 / 2 / 4'}}></div>
          <div className="grid-image" style={{gridArea: '2 / 1 / 3 / 2'}}></div>
          <div className="grid-image" style={{gridArea: '2 / 2 / 3 / 3'}}></div>
          <div className="grid-image" style={{gridArea: '2 / 3 / 3 / 4'}}></div>
          <div className="grid-image" style={{gridArea: '3 / 1 / 4 / 2'}}></div>
          <div className="grid-image grid-image-text" style={{gridArea: '3 / 2 / 4 / 3'}}>
            <span className="grid-image-overlay">New agent capabilities in Microsoft Copilot unlock business value</span>
          </div>
          <div className="grid-image" style={{gridArea: '3 / 3 / 4 / 4'}}></div>
          <button className="play-highlights-btn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="8" fill="none" stroke="white" strokeWidth="1.5"/>
              <path d="M8 6.5l5.5 3.5-5.5 3.5z" fill="white"/>
            </svg>
            <span>Play highlights</span>
          </button>
        </div>
      </div>

      <div className="weekly-wrapped-content">
        <div className="card-header">
          <div className="card-header-left">
            <h3 className="card-title">Trending now at Contoso</h3>
            <p className="card-date">Week of Feb 2, 2026</p>
          </div>
          <button className="card-menu-btn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <circle cx="8" cy="3" r="1.5"/>
              <circle cx="8" cy="8" r="1.5"/>
              <circle cx="8" cy="13" r="1.5"/>
            </svg>
          </button>
        </div>

        <p className="card-description">
          Catch the biggest news, trends, and announcements across Contoso, picked just for you.
        </p>

        <button className="view-wrap-btn" onClick={onViewWrap}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M8 6.5l5.5 3.5-5.5 3.5z" fill="currentColor"/>
          </svg>
          <span>Play highlights</span>
        </button>
      </div>
    </div>
  )
}

export default WeeklyWrappedCard
