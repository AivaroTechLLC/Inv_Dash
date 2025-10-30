/**
 * Dashboard Charts Component
 * 
 * Displays interactive charts and analytics for inventory data:
 * - Inventory levels over time
 * - Sales trends
 * - Category distribution
 * - Reorder recommendations
 */

'use client'

import { useState } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts'

// Mock data for charts
const inventoryData = [
  { month: 'Jan', inventory: 24000, sales: 18000, reorders: 12 },
  { month: 'Feb', inventory: 26500, sales: 22000, reorders: 8 },
  { month: 'Mar', inventory: 23000, sales: 19500, reorders: 15 },
  { month: 'Apr', inventory: 28000, sales: 25000, reorders: 6 },
  { month: 'May', inventory: 25500, sales: 21000, reorders: 10 },
  { month: 'Jun', inventory: 29000, sales: 27000, reorders: 4 },
]

const categoryData = [
  { name: 'Electronics', value: 35, color: '#3B82F6' },
  { name: 'Clothing', value: 25, color: '#10B981' },
  { name: 'Books', value: 20, color: '#F59E0B' },
  { name: 'Home & Garden', value: 15, color: '#EF4444' },
  { name: 'Sports', value: 5, color: '#8B5CF6' },
]

export default function DashboardCharts() {
  const [activeChart, setActiveChart] = useState<'inventory' | 'category'>('inventory')

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium text-gray-900">Analytics Overview</h3>
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveChart('inventory')}
              className={`px-3 py-1 text-sm rounded-md ${
                activeChart === 'inventory'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Inventory Trends
            </button>
            <button
              onClick={() => setActiveChart('category')}
              className={`px-3 py-1 text-sm rounded-md ${
                activeChart === 'category'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Category Distribution
            </button>
          </div>
        </div>

        <div className="h-80">
          {activeChart === 'inventory' ? (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={inventoryData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="inventory"
                  stroke="#3B82F6"
                  strokeWidth={2}
                  name="Inventory Value ($)"
                />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#10B981"
                  strokeWidth={2}
                  name="Sales ($)"
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  )
}