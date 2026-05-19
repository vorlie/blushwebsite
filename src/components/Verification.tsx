export default function Verification() {
  return (
    <div className="space-y-6">
      <div className="bg-discord/20 border border-discord/50 p-6 rounded">
        <h2 className="text-3xl font-bold text-discord mb-2">Link Your Account</h2>
        <p className="text-gray-300 mt-2">Before you can draw your blade and join the fight, you need to link your Discord account to your Minecraft account.</p>
      </div>

      <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/30 border border-gray-700 p-8 rounded-lg">
        <h3 className="text-2xl font-bold text-white mb-6">Verification Steps</h3>
        
        <div className="space-y-6">
          {[
            {
              step: 1,
              title: 'Launch Minecraft',
              description: 'Try to connect to the server.'
            },
            {
              step: 2,
              title: 'Get Your Code',
              description: 'The server will automatically kick you and display a unique 4-digit verification code on your screen. Copy or memorize that code.'
            },
            {
              step: 3,
              title: 'Link Your Account',
              description: 'Come back to Discord, go to the #verify channel, and use the bot command:'
            },
            {
              step: 4,
              title: 'Enter the Arena',
              description: 'Once the bot confirms the link, log back into Minecraft. You\'re officially cleared for combat.'
            }
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blood-red text-white font-bold text-lg">
                  {item.step}
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-800/40 border border-gray-700 p-6 rounded">
        <h3 className="text-lg font-bold text-gray-200 mb-3">Command to Use</h3>
        <div className="bg-gray-900/60 p-4 rounded font-mono text-discord text-center">
          /verify code: [Your Code Here]
        </div>
        <p className="text-gray-400 text-sm mt-2 text-center">Example: <code className="bg-gray-900/40 px-2 py-1 rounded">/verify code: 1234</code></p>
      </div>

      <div className="bg-yellow-900/20 border border-yellow-900/50 p-6 rounded">
        <h3 className="text-lg font-bold text-yellow-400 mb-3">⚠️ Note</h3>
        <p className="text-gray-300">If your code expires or doesn't work, just try logging into the Minecraft server again to generate a brand new one.</p>
      </div>

      <div className="bg-green-900/20 border border-green-900/50 p-6 rounded">
        <h3 className="text-lg font-bold text-green-400 mb-3">✅ Requirements</h3>
        <ul className="space-y-2 text-gray-300">
          <li>• A valid Minecraft account</li>
          <li>• A Discord account</li>
          <li>• Access to our Discord server</li>
          <li>• Less than 2 minutes to complete the process</li>
        </ul>
      </div>
    </div>
  )
}
