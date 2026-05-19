export default function Rules() {
  const rules = [
    {
      title: 'No Cheating or Hacked Clients',
      description: 'X-ray, auto-clickers, fly hacks, or any unfair advantages are strictly banned. If you can\'t win with your own raw skill, you don\'t belong here.'
    },
    {
      title: 'No Combat Logging',
      description: 'Do not disconnect or log out while in the middle of a fight to save your gear. Take your defeat like a true warrior.'
    },
    {
      title: 'No Glitch Exploiting',
      description: 'Do not abuse game bugs, dupes, or map glitches.'
    },
    {
      title: 'Respect the Team Limits',
      description: 'Stick to the 2-3 player limit per team. Mega-alliances will be dismantled on sight.'
    }
  ]

  return (
    <div className="space-y-6">
      <div className="bg-gray-900/50 border-l-4 border-blood-red p-6 rounded">
        <h2 className="text-3xl font-bold text-blood-red mb-4">MC Server Rules</h2>
        <p className="text-gray-300">Zaraki loves a good bloodbath, but he hates cheaters and cowards. Fight with honor, or get thrown out of the Soul Society permanently.</p>
      </div>

      <div className="grid gap-4">
        {rules.map((rule, idx) => (
          <div key={idx} className="bg-gray-800/30 border border-gray-700 p-5 rounded hover:border-blood-red/50 transition">
            <h3 className="text-xl font-bold text-blood-red mb-2">Rule {idx + 1}: {rule.title}</h3>
            <p className="text-gray-300">{rule.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-red-900/20 border border-red-900/50 p-6 rounded mt-8">
        <h3 className="text-2xl font-bold text-red-400 mb-3">⚠️ Punishments & Enforcement</h3>
        <ul className="space-y-3 text-gray-300">
          <li className="flex gap-3">
            <span className="text-red-400 font-bold">•</span>
            <span><strong>WE LOG ALL IPs:</strong> Every connection is recorded in the server logs. If you try to bypass a ban using alt accounts or VPNs, you will be caught immediately.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-red-400 font-bold">•</span>
            <span><strong>First Offense:</strong> Temporary ban from the server and all your gear is wiped.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-red-400 font-bold">•</span>
            <span><strong>Severe/Repeated Offenses:</strong> Permanent IP ban. No second chances, no appeals.</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
