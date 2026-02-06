import { useState } from 'react'
import NavigationBar from './components/NavigationBar'
import HomeScreen from './components/HomeScreen'
import WeeklyWrappedResponse from './components/WeeklyWrappedResponse'
import AudioSummary from './components/AudioSummary'
import './App.css'

function App() {
  const [currentView, setCurrentView] = useState('home')
  const [selectedThread, setSelectedThread] = useState('contoso-agent')

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomeScreen onViewWeeklyWrap={() => setCurrentView('weekly-wrapped')} />
      case 'weekly-wrapped':
        return <WeeklyWrappedResponse onCreateAudioSummary={() => setCurrentView('audio-summary')} />
      case 'audio-summary':
        return <AudioSummary />
      default:
        return <HomeScreen onViewWeeklyWrap={() => setCurrentView('weekly-wrapped')} />
    }
  }

  return (
    <div className="app">
      <NavigationBar
        selectedThread={selectedThread}
        onThreadSelect={setSelectedThread}
        onHomeClick={() => setCurrentView('home')}
      />
      <main className="main-content">
        {renderView()}
      </main>
    </div>
  )
}

export default App
