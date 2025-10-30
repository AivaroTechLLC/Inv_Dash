/**
 * Dashboard Stats Component
 * 
 * Displays key performance indicators (KPIs) for inventory management:
 * - Total products count
 * - Total inventory value
 * - Low stock alerts
 * - Monthly revenue
 */

'use client'

import { useState, useEffect } from 'react'
import {
  CubeIcon,
  CurrencyDollarIcon,
  ExclamationTriangleIcon,
  ChartBarIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from '@heroicons/react/24/outline'

/**
 * Interface for stat item configuration
 */
interface StatItem {
  id: string
  name: string
  value: string
  change: string
  changeType: 'increase' | 'decrease' | 'neutral'
  icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>
  color: string
}

/**
 * Mock data for dashboard statistics
 * In a real application, this would come from an API
 */
const getMockStats = (): StatItem[] => [
  {
    id: 'total-products',
    name: 'Total Products',
    value: '2,847',
    change: '+12%',
    changeType: 'increase',
    icon: CubeIcon,
    color: 'text-blue-600 bg-blue-100',
  },
  {
    id: 'inventory-value',
    name: 'Inventory Value',
    value: '$84,290',
    change: '+8.2%',
    changeType: 'increase',
    icon: CurrencyDollarIcon,
    color: 'text-green-600 bg-green-100',
  },
  {
    id: 'low-stock',
    name: 'Low Stock Items',
    value: '23',
    change: '-5',
    changeType: 'decrease',
    icon: ExclamationTriangleIcon,
    color: 'text-yellow-600 bg-yellow-100',
  },
  {
    id: 'monthly-revenue',
    name: 'Monthly Revenue',
    value: '$24,570',
    change: '+15.3%',
    changeType: 'increase',
    icon: ChartBarIcon,
    color: 'text-indigo-600 bg-indigo-100',
  },
]

/**
 * Utility function for conditional CSS classes
 */
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

/**
 * Individual Stat Card Component
 */
function StatCard({ stat }: { stat: StatItem }) {
  const Icon = stat.icon
  
  return (
    <div className="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-200">
      <div className="p-6">
        <div className="flex items-center">
          <div className={classNames('flex-shrink-0 p-2 rounded-lg', stat.color)}>
            <Icon className="h-6 w-6" aria-hidden="true" />
          </div>
          <div className="ml-4 flex-1">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-500 truncate">
                {stat.name}
              </p>
              <div className="flex items-center">
                {stat.changeType === 'increase' ? (
                  <ArrowUpIcon className="h-4 w-4 text-green-500 mr-1" />
                ) : stat.changeType === 'decrease' ? (
                  <ArrowDownIcon className="h-4 w-4 text-red-500 mr-1" />
                ) : null}
                <span
                  className={classNames(
                    'text-sm font-medium',
                    stat.changeType === 'increase'
                      ? 'text-green-600'
                      : stat.changeType === 'decrease'
                      ? 'text-red-600'
                      : 'text-gray-600'
                  )}
                >
                  {stat.change}
                </span>
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900 mt-1">
              {stat.value}
            </p>
          </div>
        </div>
        
        {/* Progress indicator for specific stats */}
        {stat.id === 'low-stock' && (
          <div className="mt-4">
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>Alert Threshold</span>
              <span>23 of 50</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-yellow-500 h-2 rounded-full transition-all duration-300"
                style={{ width: '46%' }}
              />
            </div>
          </div>
        )}
        
        {/* Additional info for inventory value */}
        {stat.id === 'inventory-value' && (
          <div className="mt-4 text-xs text-gray-500">
            <p>Avg. cost per unit: $29.62</p>
          </div>
        )}
      </div>
    </div>
  )
}

/**
 * Loading Skeleton Component
 */
function StatsSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-200">
          <div className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 p-2 rounded-lg bg-gray-200 animate-pulse">
                <div className="h-6 w-6 bg-gray-300 rounded" />
              </div>
              <div className="ml-4 flex-1">
                <div className="h-4 bg-gray-200 rounded animate-pulse mb-2" />
                <div className="h-8 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

/**
 * Main Dashboard Stats Component
 * 
 * @returns JSX element containing the stats grid
 */
export default function DashboardStats() {
  const [stats, setStats] = useState<StatItem[]>([])
  const [loading, setLoading] = useState(true)

  // Simulate API call to fetch stats
  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true)
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      setStats(getMockStats())
      setLoading(false)
    }

    fetchStats()
  }, [])

  if (loading) {
    return <StatsSkeleton />
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.id} stat={stat} />
      ))}
    </div>
  )
}