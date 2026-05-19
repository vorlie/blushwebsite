import { useServerStatus } from '../context/ServerStatusContext'

export default function Footer() {
  const { status, loading } = useServerStatus()

  return (
    <footer className="border-t border-gray-700 bg-gray-900/50 mt-12 py-8">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-blood-red transition">Discord Server</a></li>
              <li><a href="#" className="hover:text-blood-red transition">Report Issues</a></li>
              <li><a href="#" className="hover:text-blood-red transition">Apply for Moderator</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-3">Server Info</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Version: 26.1.2</li>
              <li>Mode: Whitelist</li>
              <li>Difficulty: Normal</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-3">IP & Status</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="font-mono">blush.vorlie.pl</li>
              <li className="font-mono text-xs text-gray-500">bedrock: :19132</li>
              <li className={`${status?.online ? 'text-green-400' : 'text-red-400'}`}>
                {loading ? 'Checking...' : status?.online ? '● Online' : '● Offline'}
              </li>
              {status && (
                <li className="text-gray-300 text-sm">Players: {status.players}/{status.maxPlayers}</li>
              )}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          <p>© 2026 Blush • Fight with Honor</p>
        </div>
      </div>
    </footer>
  )
}
