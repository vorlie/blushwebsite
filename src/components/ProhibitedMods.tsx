export default function ProhibitedMods() {
  const banned = [
    {
      title: 'Hacked Clients',
      items: ['Meteor', 'Aristois', 'Wurst', 'Clients with fly, killaura, reach, jesus, or auto-armor']
    },
    {
      title: 'X-Ray',
      items: ['X-ray mods', 'X-ray resource packs', 'X-ray texture packs that make blocks invisible']
    },
    {
      title: 'Movement & Combat Exploits',
      items: ['Auto-clickers', 'Macro keys for PvP macros', 'Macro-recorders', 'Mods that alter knockback or reach distance']
    },
    {
      title: 'Map & Player Trackers',
      items: ['Minimaps with player positions (radar)', 'Entity trackers', 'Cave-mapping functions that expose underground bases']
    },
    {
      title: 'Automation',
      items: ['Baritone', 'Auto-builders', 'Auto-eat', 'Auto-fish mods']
    }
  ]

  const allowed = [
    'Standard performance boosters (Sodium, Optifine)',
    'Cosmetic mods',
    'Simple HUD mods (ArmorStatus, Keystrokes)'
  ]

  return (
    <div className="space-y-6">
      <div className="bg-red-900/20 border border-red-900/50 p-6 rounded">
        <h2 className="text-3xl font-bold text-red-400 mb-2">🚫 Prohibited Mods & Clients</h2>
        <p className="text-gray-300 mt-4">If it gives you an unfair advantage over someone playing on a vanilla client, it is <strong>banned</strong>. We check logs and player behavior strictly.</p>
      </div>

      <div className="grid gap-4">
        {banned.map((mod, idx) => (
          <div key={idx} className="bg-red-900/10 border border-red-900/30 p-4 rounded">
            <h3 className="text-lg font-bold text-red-400 mb-2">❌ {mod.title}</h3>
            <ul className="space-y-1">
              {mod.items.map((item, i) => (
                <li key={i} className="text-gray-300 text-sm ml-4">• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-green-900/20 border border-green-900/50 p-6 rounded">
        <h3 className="text-2xl font-bold text-green-400 mb-4">✅ Allowed Mods</h3>
        <ul className="space-y-2">
          {allowed.map((mod, idx) => (
            <li key={idx} className="text-gray-300 flex gap-2">
              <span className="text-green-400 font-bold">•</span>
              <span>{mod}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-blue-900/20 border border-blue-900/50 p-6 rounded">
        <h3 className="text-xl font-bold text-blue-400 mb-3">💡 If Unsure?</h3>
        <p className="text-gray-300">Ask in Discord before you log in with a mod. Once you're caught, it's too late!</p>
      </div>
    </div>
  )
}
