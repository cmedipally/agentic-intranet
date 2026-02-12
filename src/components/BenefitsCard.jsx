import './BenefitsCard.css'
import clipboardIcon from '../assets/benefits-icons/clipboard-icon.png'
import searchIcon from '../assets/benefits-icons/search-icon.png'
import calendarIcon from '../assets/benefits-icons/calendar-icon.png'
import pinIcon from '../assets/benefits-icons/pin-icon.png'
import settingsIcon from '../assets/benefits-icons/Shape.png'

const BenefitsCard = () => {
  return (
    <div className="benefits-card">
      <div className="benefits-card-header">
        <h3 className="benefits-card-title">Benefits</h3>
        <button className="benefits-settings-btn" aria-label="Settings">
          <img src={settingsIcon} alt="" style={{ width: '16px', height: '16px' }} />
        </button>
      </div>

      <div className="benefits-body">
        <div className="benefits-activities">
          {/* Activity Item 1 - Clipboard icon */}
          <div className="benefits-activity-item">
            <div className="benefits-activity-icon benefits-icon-clipboard benefits-icon-first">
              <img src={clipboardIcon} alt="" className="benefits-icon-img benefits-icon-img-first" />
            </div>
            <div className="benefits-activity-content">
              <h4 className="benefits-activity-title">Update to Benefits form</h4>
              <p className="benefits-activity-date">Opened 7/23/2026</p>
            </div>
          </div>

          {/* Activity Item 2 - Magnifying glass icon */}
          <div className="benefits-activity-item">
            <div className="benefits-activity-icon benefits-icon-search">
              <img src={searchIcon} alt="" className="benefits-icon-img" />
            </div>
            <div className="benefits-activity-content">
              <h4 className="benefits-activity-title">Update to Perks+ claim</h4>
              <p className="benefits-activity-date">7/21/2026</p>
            </div>
          </div>

          {/* Activity Item 3 - Calendar icon */}
          <div className="benefits-activity-item">
            <div className="benefits-activity-icon benefits-icon-calendar">
              <img src={calendarIcon} alt="" className="benefits-icon-img" />
            </div>
            <div className="benefits-activity-content">
              <h4 className="benefits-activity-title">Enrollment deadline approaching</h4>
              <p className="benefits-activity-date">Deadline 9/01/2026</p>
            </div>
          </div>

          {/* Activity Item 4 - Pin icon */}
          <div className="benefits-activity-item">
            <div className="benefits-activity-icon benefits-icon-pin">
              <img src={pinIcon} alt="" className="benefits-icon-img" />
            </div>
            <div className="benefits-activity-content">
              <h4 className="benefits-activity-title">Updated to dental plan for all employees</h4>
              <p className="benefits-activity-date">7/23/2026</p>
            </div>
          </div>
        </div>
      </div>

      <div className="benefits-footer">
        <button className="benefits-summarize-btn">
          Summarize all activity
        </button>
      </div>
    </div>
  )
}

export default BenefitsCard
