import './EngageCard.css'
import engageIcon from '../assets/home-icons/engage-icon.png'
import avatar1 from '../assets/home-icons/engage-avatar-1.png'
import avatar2 from '../assets/home-icons/engage-avatar-2.png'
import avatar3 from '../assets/home-icons/engage-avatar-3.png'

const EngageCard = () => {
  return (
    <div className="engage-card">
      <div className="engage-card-header">
        <h3 className="engage-card-title">Engage</h3>
        <button className="engage-settings-btn" aria-label="Settings">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M9.405 1.653a1.5 1.5 0 0 0-2.81 0l-.35.933a.5.5 0 0 1-.28.28l-.933.35a1.5 1.5 0 0 0 0 2.81l.933.35a.5.5 0 0 1 .28.28l.35.933a1.5 1.5 0 0 0 2.81 0l.35-.933a.5.5 0 0 1 .28-.28l.933-.35a1.5 1.5 0 0 0 0-2.81l-.933-.35a.5.5 0 0 1-.28-.28l-.35-.933zM8 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm1.5 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-6-3.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
          </svg>
        </button>
      </div>

      <div className="engage-body">
        <div className="engage-activities">
          {/* Activity Item 1 - Orange icon */}
          <div className="engage-activity-item">
            <div className="engage-activity-icon">
              <img src={engageIcon} alt="" className="engage-icon-img" />
            </div>
            <div className="engage-activity-content">
              <h4 className="engage-activity-title">New responses Q&A</h4>
              <p className="engage-activity-community">in Core Community</p>
            </div>
          </div>

          {/* Activity Item 2 - Avatar pie */}
          <div className="engage-activity-item">
            <div className="engage-avatar-pie">
              <img src={avatar1} alt="" className="engage-avatar engage-avatar-1" />
              <img src={avatar2} alt="" className="engage-avatar engage-avatar-2" />
              <img src={avatar3} alt="" className="engage-avatar engage-avatar-3" />
            </div>
            <div className="engage-activity-content">
              <h4 className="engage-activity-title">New leadership updates</h4>
              <p className="engage-activity-community">in Leadership Corner</p>
            </div>
          </div>
        </div>

        {/* AI Insights Container */}
        <div className="engage-insights">
          <p className="engage-insights-text">
            Leadership changes were announced company wide and there were 24 answers to questions in...
          </p>
        </div>
      </div>

      <div className="engage-footer">
        <button className="engage-summarize-btn">
          Summarize all activity
        </button>
      </div>
    </div>
  )
}

export default EngageCard
