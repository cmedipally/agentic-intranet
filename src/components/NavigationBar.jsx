import { useState } from 'react'
import './NavigationBar.css'

// Import navigation assets
import appBrand from '../assets/nav-icons/.App brand.png'
import rightSide from '../assets/nav-icons/Right Side.png'
import searchIcon from '../assets/nav-icons/Icon.png'
import searchTitle from '../assets/nav-icons/Tab title.png'
import chatIcon from '../assets/nav-icons/Icon-1.png'
import chatTitle from '../assets/nav-icons/Tab title-1.png'
import agentsTitle from '../assets/nav-icons/Tab title-2.png'
import chevron from '../assets/nav-icons/Chevron.png'
import researcherIcon from '../assets/nav-icons/Icon-2.png'
import researcherTitle from '../assets/nav-icons/Tab title-3.png'
import analystIcon from '../assets/nav-icons/Icon-3.png'
import analystTitle from '../assets/nav-icons/Tab title-4.png'
import zavaIcon from '../assets/nav-icons/Logo + Title.png'
import zavaTitle from '../assets/nav-icons/Tab title-5.png'
import activeIndicator from '../assets/nav-icons/active-5.png'
import conversationsTitle from '../assets/nav-icons/Tab title-6.png'
import chevron1 from '../assets/nav-icons/Chevron-1.png'
import pagesTitle from '../assets/nav-icons/Tab title-7.png'
import chevron2 from '../assets/nav-icons/Chevron-2.png'
import notebooksIcon from '../assets/nav-icons/Icon-4.png'
import notebooksTitle from '../assets/nav-icons/Tab title-8.png'
import createIcon from '../assets/nav-icons/Icon-5.png'
import createTitle from '../assets/nav-icons/Tab title-9.png'
import appsIcon from '../assets/nav-icons/Icon-6.png'
import appsTitle from '../assets/nav-icons/Tab title-10.png'
import bottomBar from '../assets/nav-icons/.Bottom bar - Me control.png'

const NavigationBar = ({ selectedThread, onThreadSelect, onHomeClick }) => {
  const [isAgentsExpanded, setIsAgentsExpanded] = useState(true)
  const [isConversationsExpanded, setIsConversationsExpanded] = useState(false)
  const [isPagesExpanded, setIsPagesExpanded] = useState(false)

  const agents = [
    {
      id: 'researcher',
      name: 'Researcher',
      icon: researcherIcon,
      title: researcherTitle
    },
    {
      id: 'analyst',
      name: 'Analyst',
      icon: analystIcon,
      title: analystTitle
    },
    {
      id: 'contoso-agent',
      name: 'ZavaCore',
      icon: zavaIcon,
      title: zavaTitle
    }
  ]

  return (
    <nav className="navigation-bar">
      <div className="nav-header">
        <img src={appBrand} alt="M365 Copilot" className="nav-logo-img" />
        <img src={rightSide} alt="Toggle" className="nav-toggle-img" />
      </div>

      <div className="nav-content">
        <button className="nav-item">
          <img src={searchIcon} alt="Search" className="nav-icon" />
          <img src={searchTitle} alt="Search" className="nav-title-img" />
        </button>

        <button className="nav-item">
          <img src={chatIcon} alt="Chat" className="nav-icon" />
          <img src={chatTitle} alt="Chat" className="nav-title-img" />
        </button>

        <div className="nav-section">
          <button
            className="nav-section-header"
            onClick={() => setIsAgentsExpanded(!isAgentsExpanded)}
          >
            <img src={agentsTitle} alt="Agents" className="nav-section-title" />
            <img
              src={chevron}
              alt="Toggle"
              className="nav-chevron"
              style={{ transform: isAgentsExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
            />
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
                  {selectedThread === agent.id && (
                    <img src={activeIndicator} alt="" className="active-indicator" />
                  )}
                  <img src={agent.icon} alt={agent.name} className="agent-icon-img" />
                  <img src={agent.title} alt={agent.name} className="agent-title-img" />
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
            <img src={conversationsTitle} alt="Conversations" className="nav-section-title" />
            <img
              src={chevron1}
              alt="Toggle"
              className="nav-chevron"
              style={{ transform: isConversationsExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
            />
          </button>
        </div>

        <div className="nav-section">
          <button
            className="nav-section-header"
            onClick={() => setIsPagesExpanded(!isPagesExpanded)}
          >
            <img src={pagesTitle} alt="Pages" className="nav-section-title" />
            <img
              src={chevron2}
              alt="Toggle"
              className="nav-chevron"
              style={{ transform: isPagesExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
            />
          </button>
        </div>

        <button className="nav-item">
          <img src={notebooksIcon} alt="Notebooks" className="nav-icon" />
          <img src={notebooksTitle} alt="Notebooks" className="nav-title-img" />
        </button>

        <button className="nav-item">
          <img src={createIcon} alt="Create" className="nav-icon" />
          <img src={createTitle} alt="Create" className="nav-title-img" />
        </button>

        <button className="nav-item">
          <img src={appsIcon} alt="Apps" className="nav-icon" />
          <img src={appsTitle} alt="Apps" className="nav-title-img" />
        </button>
      </div>

      <div className="nav-footer">
        <img src={bottomBar} alt="Erika Fuller" className="bottom-bar-img" />
      </div>
    </nav>
  )
}

export default NavigationBar
