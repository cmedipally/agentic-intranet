import { useState, useEffect } from 'react'
import WeeklyWrappedCard from './WeeklyWrappedCard'
import './HomeScreen.css'

// Import home page assets
import lockupColor1 from '../assets/home-icons/lockup-color1.svg'
import lockupColor2 from '../assets/home-icons/lockup-color2.svg'
import lockupCheckmark from '../assets/home-icons/lockup-checkmark.svg'
import promptStarterIcon from '../assets/home-icons/prompt-starter-icon.svg'
import avatarSerena from '../assets/home-icons/avatar-serena.png'
import avatarDalaya from '../assets/home-icons/avatar-dalaya.png'
import avatarNoih from '../assets/home-icons/avatar-noih.png'
import avocadoLove from '../assets/home-icons/avocado-love.png'
import sunFace from '../assets/home-icons/sun-face.png'
import headphone from '../assets/home-icons/headphone.png'
import lightRail from '../assets/home-icons/light-rail.png'
import speechBalloon from '../assets/home-icons/speech-balloon.png'
import yenBanknote from '../assets/home-icons/yen-banknote.png'

// Import header assets
import headerAgentColor1 from '../assets/header-icons/Agent/Color 1.png'
import headerAgentColor2 from '../assets/header-icons/Agent/Color 2.png'
import headerText from '../assets/header-icons/Agent/Text.png'
import headerChevron from '../assets/header-icons/Agent/Shape.png'
import splitBtn1 from '../assets/header-icons/Agent/Shape-1.png'
import splitBtn2 from '../assets/header-icons/Agent/Shape-4.png'
import headerBtn2 from '../assets/header-icons/Agent/Shape-2.png'
import headerBtn3 from '../assets/header-icons/Agent/Shape-3.png'

const HomeScreen = ({ onViewWeeklyWrap }) => {
  const [messageInput, setMessageInput] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const promptStarters = [
    {
      title: 'Benefits action',
      text: 'Check status of your recent ',
      highlight: 'claim',
      reason: 'Your close connection'
    },
    {
      title: 'Daily priorities',
      text: 'Write an agenda for ',
      highlight: 'my next meeting',
      reason: 'Arrive prepared'
    },
    {
      title: 'Suggested for you',
      text: 'Catch me up on my company ',
      highlight: 'news',
      reason: 'Recently shared with you'
    }
  ]

  const people = [
    { name: 'Serena Lee', avatar: avatarSerena },
    { name: 'Dalaya Lahav', avatar: avatarDalaya },
    { name: 'Noih Kan', avatar: avatarNoih },
    { name: 'Kevin Bolma', avatar: avatarSerena }
  ]

  const actionCards = [
    { title: 'Order lunch', subtitle: 'Cafe', icon: avocadoLove },
    { title: 'Submit a claim', subtitle: 'Perks +', icon: sunFace },
    { title: 'Ask a question', subtitle: 'Help Desk', icon: headphone },
    { title: 'Book a shuttle', subtitle: 'Transportation', icon: lightRail },
    { title: 'View benefits', subtitle: 'Ask HR', icon: speechBalloon },
    { title: 'View Paystub', subtitle: 'ADP', icon: yenBanknote }
  ]

  return (
    <div className="home-screen">
      <header className={`agent-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-breadcrumb">
          {isScrolled ? (
            <button className="breadcrumb-button compact">
              <div className="header-agent-icon">
                <img src={lockupColor1} alt="" className="compact-icon-layer" />
                <img src={lockupColor2} alt="" className="compact-icon-layer" />
              </div>
              <span className="agent-name-text">Agent Name</span>
              <img src={headerChevron} alt="" className="header-chevron-img" />
            </button>
          ) : (
            <button className="breadcrumb-button">
              <div className="header-agent-icon">
                <img src={headerAgentColor1} alt="" className="header-icon-layer" />
                <img src={headerAgentColor2} alt="" className="header-icon-layer" />
              </div>
              <img src={headerText} alt="" className="header-text-img" />
              <img src={headerChevron} alt="" className="header-chevron-img" />
            </button>
          )}
        </div>
        <div className="agent-actions">
          <div className="split-button-group">
            <button className="split-button-left">
              <img src={splitBtn1} alt="" className="split-icon" />
            </button>
            <button className="split-button-right">
              <img src={splitBtn2} alt="" className="split-icon" />
            </button>
          </div>
          <button className="action-btn">
            <img src={headerBtn2} alt="" className="header-btn-icon" />
          </button>
          <button className="action-btn">
            <img src={headerBtn3} alt="" className="header-btn-icon" />
          </button>
        </div>
      </header>

      <div className="home-content">
        <div className="agent-lockup">
          <div className="lockup-header">
            <div className="lockup-icon-wrapper">
              <div className="lockup-icon-container">
                <img src={lockupColor1} alt="" className="lockup-icon-layer lockup-icon-color1" />
                <img src={lockupColor2} alt="" className="lockup-icon-layer lockup-icon-color2" />
              </div>
            </div>
            <h1 className="lockup-title">Contoso Agent</h1>
          </div>
          <p className="lockup-subtitle">
            <span>Created by Contoso</span>
            <img src={lockupCheckmark} alt="" className="lockup-checkmark-icon" />
          </p>
        </div>

        <div className="chat-input-container">
          <div className="chat-input">
            <input
              type="text"
              placeholder="Message Contoso agent"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
            />
            <div className="chat-input-actions">
              <button className="chat-input-btn chat-input-add">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
              <button className="chat-input-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 7h10M5 13h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span>Tools</span>
              </button>
              <button className="chat-input-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="3" y="5" width="14" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <path d="M7 5V3M13 5V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span>Sources</span>
              </button>
              <button className="chat-input-btn chat-input-mic">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="8" y="3" width="4" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <path d="M5 11a5 5 0 0010 0M10 15v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="prompt-starters">
          {promptStarters.map((prompt, index) => (
            <button key={index} className="prompt-starter-card">
              <div className="prompt-card-header">
                <div className="prompt-icon">
                  <img src={promptStarterIcon} alt="" className="prompt-icon-svg" />
                </div>
                <div className="prompt-feedback-btns">
                  <button className="feedback-btn">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M4.5 7V2.5L8 1L8.5 5H12.5C13.0523 5 13.5 5.44772 13.5 6V7.5C13.5 7.66667 13.4833 7.83333 13.45 8L12 12.5C11.8833 12.9167 11.5 13.2 11.0667 13.2H5.5C4.94772 13.2 4.5 12.7523 4.5 12.2V7ZM4.5 7H2.5V13H4.5V7Z" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button className="feedback-btn">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M11.5 9V13.5L8 15L7.5 11H3.5C2.94772 11 2.5 10.5523 2.5 10V8.5C2.5 8.33333 2.51667 8.16667 2.55 8L4 3.5C4.11667 3.08333 4.5 2.8 4.93333 2.8H10.5C11.0523 2.8 11.5 3.24772 11.5 3.8V9ZM11.5 9H13.5V3H11.5V9Z" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="prompt-content">
                <div className="prompt-title">{prompt.title}</div>
                <div className="prompt-text">
                  {prompt.text}
                  <span className="prompt-highlight">{prompt.highlight}</span>
                </div>
              </div>
            </button>
          ))}
          <button className="see-more">See more ›</button>
        </div>

        <div className="cards-row">
          <WeeklyWrappedCard onViewWrap={onViewWeeklyWrap} />

          <div className="right-cards-column">
            <div className="people-card">
              <h3 className="people-card-title">People</h3>
              <div className="people-grid">
                {people.map((person, index) => (
                  <div key={index} className="person-column">
                    <img src={person.avatar} alt={person.name} className="person-avatar-img" />
                    <div className="person-name">{person.name}</div>
                  </div>
                ))}
                <button className="person-next-btn">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M5.5 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>

            <div className="your-work-card">
              <h3 className="your-work-title">Your work</h3>
              <div className="your-work-grid">
                <div className="work-stat-item">
                  <div className="work-stat-icon mention-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 12a1 1 0 110-2 1 1 0 010 2zm1-3.5v.5a1 1 0 11-2 0v-1a1 1 0 011-1 1.5 1.5 0 10-1.5-1.5 1 1 0 11-2 0 3.5 3.5 0 117 0 3.45 3.45 0 01-1.5 2.86V10.5z"/>
                    </svg>
                  </div>
                  <div className="work-stat-number">5</div>
                  <div className="work-stat-label">Mentions of you</div>
                </div>
                <div className="work-stat-item">
                  <div className="work-stat-icon comment-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                      <path d="M6 2h8a4 4 0 014 4v6a4 4 0 01-4 4h-2l-4 3v-3H6a4 4 0 01-4-4V6a4 4 0 014-4z"/>
                    </svg>
                  </div>
                  <div className="work-stat-number">8</div>
                  <div className="work-stat-label">File comments</div>
                </div>
                <div className="work-stat-item">
                  <div className="work-stat-icon action-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm4.707 6.707l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L9 11.586l4.293-4.293a1 1 0 011.414 1.414z"/>
                    </svg>
                  </div>
                  <div className="work-stat-number">12</div>
                  <div className="work-stat-label">Action items</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="action-cards">
          <div className="action-cards-grid">
            {actionCards.map((card, index) => (
              <button key={index} className="action-card">
                <img src={card.icon} alt="" className="action-card-icon" />
                <div className="action-card-content">
                  <div className="action-card-title">{card.title}</div>
                  <div className="action-card-subtitle">{card.subtitle}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="bottom-cards-row">
          <div className="perks-card">
            <h3 className="perks-card-title">Perks +</h3>
            <div className="perks-progress">
              <svg className="progress-circle" viewBox="0 0 120 120">
                <circle className="progress-bg" cx="60" cy="60" r="50" />
                <circle className="progress-bar" cx="60" cy="60" r="50" strokeDasharray="314" strokeDashoffset="94" />
              </svg>
              <div className="progress-number">50</div>
            </div>
            <div className="perks-footer">
              <button className="perks-btn">AI Suggestions</button>
              <button className="perks-btn-small">+2</button>
            </div>
          </div>

          <div className="priorities-card">
            <div className="priorities-header">
              <h3 className="priorities-title">Top priorities</h3>
              <button className="priorities-settings-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10.5 3.5a1 1 0 10-2 0v.55a5.5 5.5 0 000 10.9v.55a1 1 0 102 0v-.55a5.5 5.5 0 000-10.9V3.5zm-1 2.45a4.5 4.5 0 010 8.1V5.95z" fill="currentColor"/>
                  <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                </svg>
              </button>
            </div>
            <div className="priorities-list">
              <div className="priority-item">
                <input type="checkbox" className="priority-checkbox" />
                <div className="priority-icon" style={{background: '#4CC2FF'}}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                    <path d="M4 3h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm1 2v10h10V5H5z"/>
                  </svg>
                </div>
                <div className="priority-content">
                  <div className="priority-title">Create a brief for Summer Campai...</div>
                  <div className="priority-subtitle">First review is scheduled for this Friday</div>
                </div>
                <button className="priority-action-btn">Draft brief</button>
              </div>
              <div className="priority-item">
                <input type="checkbox" className="priority-checkbox" />
                <div className="priority-icon" style={{background: '#0078D4'}}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                    <rect x="4" y="4" width="12" height="12" rx="1"/>
                  </svg>
                </div>
                <div className="priority-content">
                  <div className="priority-title">Reply to Fw: Q3 Launch</div>
                  <div className="priority-subtitle">Barbara Bauer is waiting since yesterday...</div>
                </div>
                <button className="priority-action-btn">Draft reply</button>
              </div>
              <div className="priority-item">
                <input type="checkbox" className="priority-checkbox" />
                <div className="priority-icon" style={{background: '#C239B3'}}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                    <path d="M5 5h10v10H5z"/>
                  </svg>
                </div>
                <div className="priority-content">
                  <div className="priority-title">Create social media post illu...</div>
                  <div className="priority-subtitle">Adam Morris is asking to see upd...</div>
                </div>
                <button className="priority-action-btn">Draft illustration</button>
              </div>
            </div>
            <div className="priorities-pagination">
              <button className="pagination-btn">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M10.5 3l-5 5 5 5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="pagination-dots">
                <span className="pagination-dot active"></span>
                <span className="pagination-dot"></span>
                <span className="pagination-dot"></span>
                <span className="pagination-dot"></span>
              </div>
              <button className="pagination-btn">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M5.5 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
