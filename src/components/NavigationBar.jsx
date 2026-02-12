import { useState } from 'react'
import './NavigationBar.css'

// Import navigation assets - icons only
import copilotLogo from '../assets/nav-icons/copilot-logo.png'
import menuToggle from '../assets/nav-icons/menu-toggle.png'
import searchIcon from '../assets/nav-icons/Icon.png'
import chatIcon from '../assets/nav-icons/Icon-1.png'
import researcherIcon from '../assets/nav-icons/Icon-2.png'
import analystIcon from '../assets/nav-icons/Icon-3.png'
import contosoIcon from '../assets/nav-icons/Logo + Title.png'
import notebooksIcon from '../assets/nav-icons/Icon-4.png'
import createIcon from '../assets/nav-icons/Icon-5.png'
import appsIcon from '../assets/nav-icons/Icon-6.png'
import userAvatar from '../assets/nav-icons/user-avatar.png'

// SVG chevron as component
const ChevronIcon = ({ isExpanded }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    style={{
      transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'transform 0.2s'
    }}
  >
    <path d="M2 4L6 8L10 4" stroke="#424242" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const NavigationBar = ({ selectedThread, onThreadSelect, onHomeClick }) => {
  const [isAgentsExpanded, setIsAgentsExpanded] = useState(true)
  const [isConversationsExpanded, setIsConversationsExpanded] = useState(false)
  const [isPagesExpanded, setIsPagesExpanded] = useState(false)

  const agents = [
    {
      id: 'researcher',
      name: 'Researcher',
      icon: researcherIcon,
      color: '#0078D4' // Blue
    },
    {
      id: 'analyst',
      name: 'Analyst',
      icon: analystIcon,
      color: '#8764B8' // Purple
    },
    {
      id: 'contoso-agent',
      name: 'Contoso agent',
      icon: contosoIcon,
      color: '#D83B01' // Orange
    }
  ]

  return (
    <nav className="navigation-bar">
      <div className="nav-header">
        <div className="nav-brand">
          <img src={copilotLogo} alt="M365 Copilot" className="nav-logo" />
          <span className="nav-title">M365 Copilot</span>
        </div>
        <button className="nav-toggle" aria-label="Toggle navigation">
          <img src={menuToggle} alt="" className="nav-toggle-icon" />
        </button>
      </div>

      <div className="nav-content">
        <button className="nav-item">
          <img src={searchIcon} alt="" className="nav-icon" />
          <span className="nav-label">Search</span>
        </button>

        <button className="nav-item">
          <img src={chatIcon} alt="" className="nav-icon" />
          <span className="nav-label">Chat</span>
        </button>

        <div className="nav-section">
          <button
            className="nav-section-header"
            onClick={() => setIsAgentsExpanded(!isAgentsExpanded)}
          >
            <span className="nav-section-title">Agents</span>
            <ChevronIcon isExpanded={isAgentsExpanded} />
          </button>
          {isAgentsExpanded && (
            <div className="nav-section-content">
              {agents.map(agent => (
                <button
                  key={agent.id}
                  className={`nav-agent-item ${selectedThread === agent.id ? 'active' : ''}`}
                  onClick={() => {
                    onThreadSelect(agent.id)
                    onHomeClick()
                  }}
                >
                  <img src={agent.icon} alt="" className="agent-icon" />
                  <span className="agent-label">{agent.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="nav-section">
          <button
            className="nav-section-header"
            onClick={() => setIsConversationsExpanded(!isConversationsExpanded)}
          >
            <span className="nav-section-title">Conversations</span>
            <ChevronIcon isExpanded={isConversationsExpanded} />
          </button>
        </div>

        <div className="nav-section">
          <button
            className="nav-section-header"
            onClick={() => setIsPagesExpanded(!isPagesExpanded)}
          >
            <span className="nav-section-title">Pages</span>
            <ChevronIcon isExpanded={isPagesExpanded} />
          </button>
        </div>

        <button className="nav-item">
          <img src={notebooksIcon} alt="" className="nav-icon" />
          <span className="nav-label">Notebooks</span>
        </button>

        <button className="nav-item">
          <img src={createIcon} alt="" className="nav-icon" />
          <span className="nav-label">Create</span>
        </button>

        <button className="nav-item">
          <img src={appsIcon} alt="" className="nav-icon" />
          <span className="nav-label">Apps</span>
        </button>
      </div>

      <div className="nav-footer">
        <div className="user-profile">
          <img src={userAvatar} alt="User profile" className="user-avatar" />
          <div className="user-info">
            <span className="user-name">Erika Fuller</span>
          </div>
          <button className="user-menu-btn" aria-label="User menu">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="4" r="1" fill="#424242"/>
              <circle cx="8" cy="8" r="1" fill="#424242"/>
              <circle cx="8" cy="12" r="1" fill="#424242"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar
