import { useServerStatus } from '../context/ServerStatusContext'

export default function ServerStatus() {
  const { status, loading, error } = useServerStatus()

  if (loading) {
    return (
      <div className="bg-gray-900/50 border border-gray-700 p-12 rounded text-center">
        <p className="text-gray-400">Checking server status...</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-blood-red mb-6">Server Status</h2>

      {error && (
        <div className="bg-yellow-900/20 border border-yellow-900/50 p-4 rounded text-yellow-300">
          {error}
        </div>
      )}

      {status && (
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-800/40 border border-gray-700 p-8 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-4 h-4 rounded-full ${status.online ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <h3 className="text-2xl font-bold">{status.online ? 'Online' : 'Offline'}</h3>
            </div>
            <p className="text-gray-400">Server Status</p>
          </div>

          <div className="bg-gray-800/40 border border-gray-700 p-8 rounded-lg">
            <p className="text-4xl font-bold text-blood-red">{status.players}/{status.maxPlayers}</p>
            <p className="text-gray-400">Players Online</p>
          </div>
        </div>
      )}

      {status?.motd && (
        <div className="bg-blood-red/10 border border-blood-red/30 p-6 rounded">
          <p className="text-gray-300 italic">"{status.motd}"</p>
        </div>
      )}

      <div className="bg-blue-900/20 border border-blue-900/50 p-6 rounded mt-8">
        <h3 className="text-xl font-bold text-blue-400 mb-3">📍 Server Connection</h3>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-400 mb-1">Java Edition:</p>
            <p className="text-gray-300 text-lg font-mono bg-gray-900/50 p-3 rounded">
              blush.vorlie.pl
            </p>
            <p className="text-gray-400 text-sm mt-1">Port: 25565 (Default)</p>
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-1">Bedrock Edition:</p>
            <p className="text-gray-300 text-lg font-mono bg-gray-900/50 p-3 rounded">
              blush.vorlie.pl:19132
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-900/30 border border-gray-700 p-6 rounded">
        <h3 className="text-lg font-bold text-gray-200 mb-3">⚡ Quick Facts</h3>
        <ul className="space-y-2 text-gray-400">
          <li>• Version: {status?.version || 'Loading...'}</li>
          <li>• Mode: Pure Vanilla (Whitelist Only)</li>
          <li>• Difficulty: Normal</li>
        </ul>
      </div>
    </div>
  )
}
