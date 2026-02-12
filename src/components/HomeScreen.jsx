import { useState, useEffect } from 'react'
import EngageCard from './EngageCard'
import BenefitsCard from './BenefitsCard'
import LearningsCard from './LearningsCard'
import './HomeScreen.css'

// Import home page assets
import zavaCoreLogo from '../assets/home-icons/zavacore-icon.png'
import lockupCheckmark from '../assets/home-icons/checkmark-starburst.svg'
import corpCommsBg from '../assets/home-icons/corp-comms-bg.png'
import arSiteIcon from '../assets/home-icons/ar-site-icon.png'
import shareIconCorrect from '../assets/home-icons/share-icon-correct.png'
import bgBase from '../assets/home-icons/bg-base.png'
import radialGradient from '../assets/home-icons/radial-gradient.png'
import gradientFade from '../assets/home-icons/gradient-fade.png'
import replayIconNew from '../assets/home-icons/replay-icon-new.svg'
import avatarSerena from '../assets/home-icons/avatar-serena.png'
import avatarDalaya from '../assets/home-icons/avatar-dalaya.png'
import avatarNoih from '../assets/home-icons/avatar-noih.png'
import avocadoLove from '../assets/home-icons/avocado-love.png'
import sunFace from '../assets/home-icons/sun-face.png'
import headphone from '../assets/home-icons/headphone.png'
import lightRail from '../assets/home-icons/light-rail.png'
import speechBalloon from '../assets/home-icons/speech-balloon.png'
import yenBanknote from '../assets/home-icons/yen-banknote.png'
import shapeIcon from '../assets/home-icons/shape-icon.png'
// Import perks assets
import perksVivaIcon from '../assets/perks-icons/viva-engage-icon.svg'
import perksTitle from '../assets/perks-icons/title.svg'
import perksAvatar from '../assets/perks-icons/avatar.svg'
import perksPrimaryText from '../assets/perks-icons/primary-text.svg'
import perksAiBody from '../assets/perks-icons/ai-body.svg'
import perksSummarizeButton from '../assets/perks-icons/summarize-all-activity-button.png'

// Import priority assets
import priorityTitle from '../assets/priority-icons/Title.png'
import priorityCheckbox1 from '../assets/priority-icons/Selection Container (24px).png'
import priorityCheckbox2 from '../assets/priority-icons/Selection Container (24px)-1.png'
import priorityCheckbox3 from '../assets/priority-icons/Selection Container (24px)-2.png'
import priorityAvatar1 from '../assets/priority-icons/Avatar Image Slot.png'
import priorityAvatar2 from '../assets/priority-icons/Avatar Image Slot-1.png'
import priorityAvatar3 from '../assets/priority-icons/Avatar Image Slot-2.png'
import priorityText1 from '../assets/priority-icons/PersonaText-Default.png'
import priorityText2 from '../assets/priority-icons/PersonaText-Default-1.png'
import priorityText3 from '../assets/priority-icons/PersonaText-Default-2.png'
import priorityButton1 from '../assets/priority-icons/ButtonBase.png'
import priorityButton2 from '../assets/priority-icons/ButtonBase-1.png'
import priorityButton3 from '../assets/priority-icons/ButtonBase-2.png'
import priorityNavLeft from '../assets/priority-icons/Shape.png'
import priorityNavRight from '../assets/priority-icons/Shape-2.png'
import priorityDot1 from '../assets/priority-icons/Active.png'
import priorityDot2 from '../assets/priority-icons/Active-1.png'
import priorityDot3 from '../assets/priority-icons/Active-2.png'
import priorityDot4 from '../assets/priority-icons/Active-3.png'

// Import header assets
import zAppBarLogo from '../assets/home-icons/z-appbar-new.png'
import chevronDownIcon from '../assets/home-icons/chevron-down-breadcrumb.svg'
import composeIcon from '../assets/home-icons/compose-icon-new.svg'
import chevronSplitIcon from '../assets/home-icons/chevron-split-new.svg'
import shieldTaskIcon from '../assets/home-icons/shield-task-new.svg'

const HomeScreen = ({ onViewWeeklyWrap }) => {
  const [messageInput, setMessageInput] = useState('')

  const promptStarters = [
    {
      title: 'Plan my day',
      text: 'What should I prioritize based on my schedule?',
      highlight: '',
      reason: ''
    },
    {
      title: 'Take action',
      text: 'Find marketing documents that need my feedback',
      highlight: '',
      reason: ''
    },
    {
      title: 'Catch up',
      text: 'Highlight town hall updates relevant to my work',
      highlight: '',
      reason: ''
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
    { title: 'Submit time off', subtitle: 'HR', icon: sunFace },
    { title: 'Ask a question', subtitle: 'Help desk', icon: headphone },
    { title: 'Book a shuttle', subtitle: 'Transportation', icon: lightRail },
    { title: 'Paystub', subtitle: 'ADP', icon: yenBanknote },
    { title: 'Clock in', subtitle: 'Time management', icon: speechBalloon }
  ]

  return (
    <div className="home-screen">
      <header className="agent-header">
        <div className="header-left-nav">
          <div className="z-appbar-logo">
            <img src={zAppBarLogo} alt="" className="z-appbar-img" />
          </div>
          <button className="breadcrumb-button">
            <span className="breadcrumb-text">Zava agent</span>
            <img src={chevronDownIcon} alt="" className="chevron-down-img" />
          </button>
        </div>
        <div className="header-right-nav">
          <div className="split-button-group">
            <button className="split-button-primary">
              <img src={composeIcon} alt="" className="compose-icon" />
            </button>
            <button className="split-button-secondary">
              <img src={chevronSplitIcon} alt="" className="chevron-icon" />
            </button>
          </div>
          <button className="protection-btn">
            <img src={shieldTaskIcon} alt="" className="shield-icon" />
          </button>
          <button className="more-btn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <circle cx="5" cy="10" r="1.5"/>
              <circle cx="10" cy="10" r="1.5"/>
              <circle cx="15" cy="10" r="1.5"/>
            </svg>
          </button>
        </div>
      </header>

      <div className="home-content">
        <div className="golden-gradient-overlay">
          <div className="background-base">
            <img src={bgBase} alt="" className="bg-base-img" />
            <div className="bg-blend-overlay"></div>
          </div>
          <div className="radial-gradient-wrapper">
            <img src={radialGradient} alt="" className="radial-gradient-img" />
          </div>
          <div className="gradient-fade-wrapper">
            <img src={gradientFade} alt="" className="gradient-fade-img" />
          </div>
        </div>

        <div className="agent-lockup">
          <div className="lockup-header">
            <div className="lockup-icon-wrapper">
              <div className="lockup-icon-container">
                <img src={zavaCoreLogo} alt="" className="lockup-icon-single" />
              </div>
            </div>
            <h1 className="lockup-title">ZavaCore Agent</h1>
          </div>
          <p className="lockup-subtitle">
            <span>Created by ZavaCore</span>
            <img src={lockupCheckmark} alt="" className="lockup-checkmark-icon" />
          </p>
        </div>

        <div className="home-chat-input-wrapper">
          <div className="home-chat-input">
            <input
              type="text"
              placeholder="Message ZavaCore agent"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
            />
            <div className="home-chat-controls">
              <button className="home-chat-btn home-chat-plus" aria-label="Add">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              <button className="home-chat-btn home-chat-labeled" aria-label="Tools">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span>Tools</span>
              </button>
              <button className="home-chat-btn home-chat-labeled home-chat-sources" aria-label="Sources">
                <img src={shapeIcon} alt="" className="chat-shape-icon" />
                <span>Sources</span>
              </button>
              <button className="home-chat-btn home-chat-mic" aria-label="Voice input">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2a3 3 0 00-3 3v5a3 3 0 006 0V5a3 3 0 00-3-3z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <path d="M5 10a5 5 0 0010 0M10 15v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
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
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2C8.897 2 8 2.897 8 4V8C8 9.103 8.897 10 10 10C11.103 10 12 9.103 12 8V4C12 2.897 11.103 2 10 2ZM10 12C8.897 12 8 12.897 8 14V16C8 17.103 8.897 18 10 18C11.103 18 12 17.103 12 16V14C12 12.897 11.103 12 10 12ZM4 8C2.897 8 2 8.897 2 10C2 11.103 2.897 12 4 12C5.103 12 6 11.103 6 10C6 8.897 5.103 8 4 8ZM16 8C14.897 8 14 8.897 14 10C14 11.103 14.897 12 16 12C17.103 12 18 11.103 18 10C18 8.897 17.103 8 16 8Z" fill="#242424"/>
                  </svg>
                </div>
                <div className="prompt-title">{prompt.title}</div>
              </div>
              <div className="prompt-content">
                <div className="prompt-text">{prompt.text}</div>
              </div>
            </button>
          ))}
          <button className="see-more">See more ›</button>
        </div>

        <div className="catch-up-card">
          <img src={corpCommsBg} alt="" className="catch-up-bg-image" />
          <div className="catch-up-gradient-overlay"></div>

          <div className="catch-up-container">
            <div className="catch-up-header">
              <img src={arSiteIcon} alt="" className="catch-up-site-icon" />
              <div className="catch-up-actions">
                <button className="catch-up-action-btn" aria-label="Share">
                  <div className="catch-up-icon-container">
                    <img src={shareIconCorrect} alt="" className="catch-up-action-icon" />
                  </div>
                </button>
                <button className="catch-up-action-btn" aria-label="More options">
                  <div className="catch-up-icon-container">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <circle cx="3" cy="8" r="1.5" />
                      <circle cx="8" cy="8" r="1.5" />
                      <circle cx="13" cy="8" r="1.5" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            <div className="catch-up-content">
              <div className="catch-up-title-plate">
                <p className="catch-up-main-title">
                  Carole, here's your <span className="catch-up-title-italic">daily</span> update
                  <br />
                  <span className="catch-up-subtitle">Zava highlights, personalized for you</span>
                </p>
                <button className="catch-up-cta-btn">
                  <img src={replayIconNew} alt="" className="catch-up-cta-icon" />
                  <span>Catch up</span>
                </button>
              </div>

              <div className="catch-up-pagination">
                <div className="catch-up-progress-bar catch-up-progress-active">
                  <div className="catch-up-progress-fill"></div>
                </div>
                <div className="catch-up-progress-bar"></div>
                <div className="catch-up-progress-bar"></div>
                <div className="catch-up-progress-bar"></div>
                <div className="catch-up-progress-bar"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="cards-row">
          <EngageCard />

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
              <button className="people-catch-up-btn">
                Catch up with coworkers
              </button>
            </div>

            <div className="your-work-card">
              <div className="activity-content">
                <div className="activity-items">
                  <div className="activity-item">
                    <div className="activity-icon-circle">
                      <svg width="24" height="24" viewBox="0 0 20 20" fill="white">
                        <path d="M6 2h8a4 4 0 014 4v6a4 4 0 01-4 4h-2l-4 3v-3H6a4 4 0 01-4-4V6a4 4 0 014-4z"/>
                      </svg>
                    </div>
                    <div className="activity-item-text">
                      <div className="activity-number">12 comments</div>
                      <div className="activity-label">in Manufacturin...</div>
                    </div>
                  </div>

                  <div className="activity-item">
                    <div className="activity-icon-circle">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 12a1 1 0 110-2 1 1 0 010 2zm1-3.5v.5a1 1 0 11-2 0v-1a1 1 0 011-1 1.5 1.5 0 10-1.5-1.5 1 1 0 11-2 0 3.5 3.5 0 117 0 3.45 3.45 0 01-1.5 2.86V10.5z"/>
                      </svg>
                    </div>
                    <div className="activity-item-text">
                      <div className="activity-number">3 mentions</div>
                      <div className="activity-label">across several files</div>
                    </div>
                  </div>

                  <div className="activity-item">
                    <div className="activity-icon-circle">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm4.707 6.707l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L9 11.586l4.293-4.293a1 1 0 011.414 1.414z"/>
                      </svg>
                    </div>
                    <div className="activity-item-text">
                      <div className="activity-number">8 tasks</div>
                      <div className="activity-label">action items</div>
                    </div>
                  </div>
                </div>

                <button className="activity-summarize-btn">
                  Summarize updates
                </button>

                <button className="activity-next-btn">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M5.5 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="action-cards">
          <div className="action-cards-container">
            <div className="action-cards-grid">
              {actionCards.map((card, index) => (
                <button key={index} className="action-card">
                  <div className="action-card-icon-circle">
                    <img src={card.icon} alt="" className="action-card-icon" />
                  </div>
                  <div className="action-card-content">
                    <div className="action-card-title">{card.title}</div>
                    <div className="action-card-subtitle">{card.subtitle}</div>
                  </div>
                </button>
              ))}
            </div>
            <button className="action-cards-next-btn" aria-label="Next">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5.5 3l5 5-5 5" stroke="#242424" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="bottom-cards-row">
          <BenefitsCard />
          <LearningsCard />
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
