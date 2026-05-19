import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import axios from 'axios'

interface MCServerResponse {
  online: boolean
  players?: { online: number; max: number }
  motd?: { raw?: string[] }
  version?: string
}

export interface ServerStatus {
  online: boolean
  players: number
  maxPlayers: number
  motd: string
  version?: string
}

interface ServerStatusContextValue {
  status: ServerStatus | null
  loading: boolean
  error: string | null
  refresh: () => void
}

const ServerStatusContext = createContext<ServerStatusContextValue | undefined>(undefined)

export function ServerStatusProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<ServerStatus | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchStatus = useCallback(async () => {
    setLoading(true)
    try {
      const res = await axios.get<MCServerResponse>('https://api.mcsrvstat.us/2/blush.vorlie.pl', { timeout: 10000 })
      const data = res.data
      setStatus({
        online: !!data.online,
        players: data.players?.online || 0,
        maxPlayers: data.players?.max || 0,
        motd: data.motd?.raw?.[0] || "Zaraki's Arena",
        version: data.version
      })
      setError(null)
    } catch (err) {
      setError('Unable to fetch server status')
      setStatus(null)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchStatus()
    const id = setInterval(fetchStatus, 30000)
    return () => clearInterval(id)
  }, [fetchStatus])

  return (
    <ServerStatusContext.Provider value={{ status, loading, error, refresh: fetchStatus }}>
      {children}
    </ServerStatusContext.Provider>
  )
}

export function useServerStatus() {
  const ctx = useContext(ServerStatusContext)
  if (!ctx) throw new Error('useServerStatus must be used within ServerStatusProvider')
  return ctx
}

export default ServerStatusContext
