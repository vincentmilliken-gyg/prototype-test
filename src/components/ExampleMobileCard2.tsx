export default function ExampleMobileCard2() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-purple-50 via-pink-50 to-white overflow-y-auto">
      {/* Safe area spacing for dynamic island */}
      <div className="h-[54px]" />
      
      {/* Hero Section */}
      <div className="px-4 py-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <h1 className="text-3xl font-bold">View 2</h1>
        <p className="text-sm opacity-90 mt-2">Alternative mobile layout example</p>
      </div>

      {/* Content */}
      <div className="px-4 py-4 space-y-4">
        {/* Image Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="h-40 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-gray-900 text-lg">Featured Content</h3>
            <p className="text-sm text-gray-600 mt-2">
              This demonstrates a different layout style with image cards and rich content blocks.
            </p>
            <div className="flex gap-2 mt-3">
              <button className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg text-sm font-medium">
                Action
              </button>
              <button className="flex-1 border border-purple-600 text-purple-600 py-2 px-4 rounded-lg text-sm font-medium">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-xl shadow-md p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">24</div>
            <div className="text-xs text-gray-600 mt-1">Items</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4 text-center">
            <div className="text-2xl font-bold text-pink-600">12</div>
            <div className="text-xs text-gray-600 mt-1">Active</div>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <h3 className="font-semibold text-gray-900 mb-3">Recent Activity</h3>
          <div className="space-y-3">
            {[
              { icon: '🎯', text: 'Goal completed', time: '2 min ago' },
              { icon: '⭐', text: 'New achievement', time: '1 hour ago' },
              { icon: '🔔', text: 'Reminder set', time: '3 hours ago' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-lg">
                  {activity.icon}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.text}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Toggle Switches */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <h3 className="font-semibold text-gray-900 mb-3">Settings</h3>
          <div className="space-y-3">
            {['Notifications', 'Auto-sync', 'Dark mode'].map((setting, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-700">{setting}</span>
                <div className="w-11 h-6 bg-purple-600 rounded-full relative">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom spacing */}
        <div className="h-6" />
      </div>
    </div>
  );
}

