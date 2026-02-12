import './LearningsCard.css'
import settingsIcon from '../assets/benefits-icons/Shape.png'
import course1Image from '../assets/learnings-icons/course1.png'
import course2Image from '../assets/learnings-icons/course2.png'

const LearningsCard = () => {
  return (
    <div className="learnings-card">
      <div className="learnings-card-header">
        <h3 className="learnings-card-title">Learning</h3>
        <button className="learnings-settings-btn" aria-label="Settings">
          <img src={settingsIcon} alt="" style={{ width: '16px', height: '16px' }} />
        </button>
      </div>

      <div className="learnings-body">
        <div className="learnings-courses">
          {/* Course Item 1 */}
          <div className="learnings-course-item">
            <div className="learnings-course-thumbnail">
              <img src={course1Image} alt="" className="learnings-course-img" />
            </div>
            <div className="learnings-course-content">
              <h4 className="learnings-course-title">Security Foundations: Secure on the Go</h4>
              <p className="learnings-course-due">Due: 7/23/2026</p>
              <p className="learnings-course-meta">Course | 30 mins</p>
            </div>
          </div>

          {/* Course Item 2 */}
          <div className="learnings-course-item">
            <div className="learnings-course-thumbnail">
              <img src={course2Image} alt="" className="learnings-course-img" />
            </div>
            <div className="learnings-course-content">
              <h4 className="learnings-course-title">Innovating smart materials for tomorrow</h4>
              <div className="learnings-trending-badge">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10L5.5 6.5L8 9L10 4M10 4H7M10 4V7" stroke="#0F6CBD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="learnings-trending-text">Trending</span>
              </div>
              <p className="learnings-course-meta">Course | 30 mins</p>
            </div>
          </div>
        </div>
      </div>

      <div className="learnings-footer">
        <button className="learnings-upskill-btn">
          What can I upskill on today?
        </button>
      </div>
    </div>
  )
}

export default LearningsCard
