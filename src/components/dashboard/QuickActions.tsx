/**
 * Quick Actions Component
 * 
 * Provides quick access to common inventory management actions
 */

import {
  PlusIcon,
  ArrowPathIcon,
  DocumentTextIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline'

const actions = [
  {
    name: 'Add Product',
    description: 'Add new product to inventory',
    icon: PlusIcon,
    color: 'bg-blue-500 hover:bg-blue-600',
    href: '/products/new',
  },
  {
    name: 'Reorder Stock',
    description: 'Generate reorder suggestions',
    icon: ArrowPathIcon,
    color: 'bg-green-500 hover:bg-green-600',
    href: '/reorder',
  },
  {
    name: 'Create Report',
    description: 'Generate inventory reports',
    icon: DocumentTextIcon,
    color: 'bg-purple-500 hover:bg-purple-600',
    href: '/reports/new',
  },
  {
    name: 'View Analytics',
    description: 'Detailed analytics dashboard',
    icon: ChartBarIcon,
    color: 'bg-orange-500 hover:bg-orange-600',
    href: '/analytics',
  },
]

export default function QuickActions() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {actions.map((action) => {
            const Icon = action.icon
            return (
              <a
                key={action.name}
                href={action.href}
                className="group relative p-4 rounded-lg border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors duration-200"
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`p-2 rounded-lg ${action.color} transition-colors duration-200`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="mt-2 text-sm font-medium text-gray-900">
                    {action.name}
                  </span>
                  <span className="text-xs text-gray-500">
                    {action.description}
                  </span>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}