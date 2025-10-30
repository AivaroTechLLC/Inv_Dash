/**
 * Stock Alerts Component
 * 
 * Displays low stock alerts and critical inventory notifications
 */

import { ExclamationTriangleIcon, ClockIcon } from '@heroicons/react/24/outline'

const alerts = [
  {
    id: 1,
    product: 'Laptop Pro 15"',
    sku: 'LAPTOP-001',
    currentStock: 5,
    minStock: 10,
    type: 'low-stock',
    urgency: 'high',
  },
  {
    id: 2,
    product: 'Wireless Mouse',
    sku: 'MOUSE-003',
    currentStock: 8,
    minStock: 15,
    type: 'low-stock',
    urgency: 'medium',
  },
  {
    id: 3,
    product: 'USB Cable Type-C',
    sku: 'CABLE-002',
    currentStock: 2,
    minStock: 20,
    type: 'critical',
    urgency: 'high',
  },
]

export default function StockAlerts() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-900">Stock Alerts</h3>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            {alerts.length} alerts
          </span>
        </div>
        
        <div className="space-y-3">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className={`p-3 rounded-lg border-l-4 ${
                alert.urgency === 'high'
                  ? 'border-red-400 bg-red-50'
                  : 'border-yellow-400 bg-yellow-50'
              }`}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  {alert.urgency === 'high' ? (
                    <ExclamationTriangleIcon className="h-5 w-5 text-red-400" />
                  ) : (
                    <ClockIcon className="h-5 w-5 text-yellow-400" />
                  )}
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {alert.product}
                  </p>
                  <p className="text-xs text-gray-500">SKU: {alert.sku}</p>
                  <p className="text-xs text-gray-600 mt-1">
                    Stock: {alert.currentStock} / Min: {alert.minStock}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4">
          <button className="w-full text-center text-sm text-indigo-600 hover:text-indigo-900 font-medium">
            View all alerts →
          </button>
        </div>
      </div>
    </div>
  )
}