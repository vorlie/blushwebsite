export default function Header() {
  return (
    <header className="bg-gradient-to-b from-blood-red/20 to-transparent border-b border-blood-red/50 py-8">
      <div className="container flex items-center gap-6">
        <div className="flex-shrink-0">
          <img
            src="/logo.png"
            alt="Blush Logo"
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/logo.svg' }}
            className="w-20 h-20 rounded-md object-cover shadow-md"
          />
        </div>

        <div className="text-left">
          <h1 className="text-4xl sm:text-5xl font-black text-blood-red leading-tight">BLUSH MC</h1>
          <p className="text-sm sm:text-lg text-gray-300 mt-1">A PvP Server for True Warriors</p>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">MC 26.1.2 | Pure Vanilla Combat | Whitelist Only</p>
        </div>
      </div>
    </header>
  )
}
