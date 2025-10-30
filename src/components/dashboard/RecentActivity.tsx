/**
 * Recent Activity Component
 * 
 * Displays recent inventory activities and transactions
 */

import { format } from 'date-fns'
import {
  ArrowUpIcon,
  ArrowDownIcon,
  ExclamationTriangleIcon,
  UserIcon,
} from '@heroicons/react/24/outline'

const activities = [
  {
    id: 1,
    type: 'stock_in',
    description: 'Received 50 units of Laptop Pro 15"',
    user: 'John Smith',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    quantity: 50,
  },
  {
    id: 2,
    type: 'stock_out',
    description: 'Sold 15 units of Wireless Mouse',
    user: 'Sarah Johnson',
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
    quantity: -15,
  },
  {
    id: 3,
    type: 'adjustment',
    description: 'Stock adjustment for USB Cables',
    user: 'Mike Wilson',
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
    quantity: -5,
  },
  {
    id: 4,
    type: 'reorder',
    description: 'Reorder placed for Smartphone Pro',
    user: 'System',
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000), // 8 hours ago
    quantity: 100,
  },
  {
    id: 5,
    type: 'alert',
    description: 'Low stock alert for T-Shirts',
    user: 'System',
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
    quantity: 0,
  },
]

function getActivityIcon(type: string) {
  switch (type) {
    case 'stock_in':
      return <ArrowUpIcon className="h-4 w-4 text-green-500" />
    case 'stock_out':
      return <ArrowDownIcon className="h-4 w-4 text-red-500" />
    case 'adjustment':
      return <ExclamationTriangleIcon className="h-4 w-4 text-yellow-500" />
    case 'reorder':
      return <ArrowUpIcon className="h-4 w-4 text-blue-500" />
    case 'alert':
      return <ExclamationTriangleIcon className="h-4 w-4 text-orange-500" />
    default:
      return <UserIcon className="h-4 w-4 text-gray-500" />
  }
}

function getActivityColor(type: string) {
  switch (type) {
    case 'stock_in':
      return 'bg-green-50 border-green-200'
    case 'stock_out':
      return 'bg-red-50 border-red-200'
    case 'adjustment':
      return 'bg-yellow-50 border-yellow-200'
    case 'reorder':
      return 'bg-blue-50 border-blue-200'
    case 'alert':
      return 'bg-orange-50 border-orange-200'
    default:
      return 'bg-gray-50 border-gray-200'
  }
}

export default function RecentActivity() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
          <button className="text-sm text-indigo-600 hover:text-indigo-900 font-medium">
            View all
          </button>
        </div>
        
        <div className="space-y-3">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className={`p-3 rounded-lg border ${getActivityColor(activity.type)}`}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-0.5">
                  {getActivityIcon(activity.type)}
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm text-gray-900">
                    {activity.description}
                  </p>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-xs text-gray-500">
                      by {activity.user}
                    </p>
                    <p className="text-xs text-gray-500">
                      {format(activity.timestamp, 'MMM d, h:mm a')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 text-center">
          <button className="text-sm text-indigo-600 hover:text-indigo-900 font-medium">
            Load more activities
          </button>
        </div>
      </div>
    </div>
  )
}