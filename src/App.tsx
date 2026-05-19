import { useState } from 'react'
import Header from './components/Header'
import Rules from './components/Rules'
import ServerStatus from './components/ServerStatus'
import Verification from './components/Verification'
import ProhibitedMods from './components/ProhibitedMods'
import Footer from './components/Footer'

export default function App() {
  const [activeTab, setActiveTab] = useState('rules')

  return (
    <div className="min-h-screen bg-dark-slate">
      <Header />
      
      <nav className="sticky top-0 bg-black/70 backdrop-blur border-b border-blood-red/30 z-40">
        <div className="container py-4">
          <div className="flex gap-4 flex-wrap">
            {[
              { id: 'rules', label: 'Rules' },
              { id: 'mods', label: 'Prohibited Mods' },
              { id: 'status', label: 'Server Status' },
              { id: 'verify', label: 'Verification' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded font-semibold transition ${
                  activeTab === tab.id
                    ? 'bg-blood-red text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/30'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="container py-8">
        {activeTab === 'rules' && <Rules />}
        {activeTab === 'mods' && <ProhibitedMods />}
        {activeTab === 'status' && <ServerStatus />}
        {activeTab === 'verify' && <Verification />}
      </main>

      <Footer />
    </div>
  )
}
