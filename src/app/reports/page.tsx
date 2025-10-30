/**
 * Reports & Analytics Page - Inv_Dash
 * 
 * Generate business reports, analytics, and export capabilities
 */

'use client'

import { useState } from 'react'
import { 
  DocumentArrowDownIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  ShoppingCartIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  CalendarIcon
} from '@heroicons/react/24/outline'

const reportTypes = [
  { id: 'inventory', name: 'Inventory Report', description: 'Current stock levels and valuation' },
  { id: 'sales', name: 'Sales Report', description: 'Sales performance and trends' },
  { id: 'supplier', name: 'Supplier Performance', description: 'Supplier metrics and delivery performance' },
  { id: 'profit', name: 'Profit & Loss', description: 'Financial performance analysis' },
  { id: 'forecast', name: 'Demand Forecast', description: 'Predictive inventory requirements' }
]

const mockAnalytics = {
  totalRevenue: 2450000,
  totalOrders: 1287,
  averageOrderValue: 1903,
  topProducts: [
    { name: 'iPhone 15 Pro', units: 145, revenue: 174000 },
    { name: 'Samsung QLED TV', units: 89, revenue: 133500 },
    { name: 'Nike Air Max 270', units: 234, revenue: 35100 },
    { name: 'KitchenAid Mixer', units: 67, revenue: 33500 },
    { name: 'iPad Air', units: 78, revenue: 46800 }
  ],
  monthlySales: [
    { month: 'Jan', sales: 185000, orders: 98 },
    { month: 'Feb', sales: 210000, orders: 112 },
    { month: 'Mar', sales: 195000, orders: 105 },
    { month: 'Apr', sales: 225000, orders: 118 },
    { month: 'May', sales: 240000, orders: 128 },
    { month: 'Jun', sales: 265000, orders: 142 },
    { month: 'Jul', sales: 280000, orders: 155 },
    { month: 'Aug', sales: 275000, orders: 148 },
    { month: 'Sep', sales: 290000, orders: 162 },
    { month: 'Oct', sales: 295000, orders: 159 }
  ],
  categoryPerformance: [
    { category: 'Electronics', revenue: 1470000, growth: 12.5 },
    { category: 'Footwear', revenue: 385000, growth: 8.2 },
    { category: 'Home & Kitchen', revenue: 345000, growth: -2.1 },
    { category: 'Clothing', revenue: 250000, growth: 15.7 }
  ]
}

export default function ReportsPage() {
  const [selectedReport, setSelectedReport] = useState('inventory')
  const [dateRange, setDateRange] = useState('30')
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerateReport = async (reportType: string, format: string) => {
    setIsGenerating(true)
    // Simulate report generation
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsGenerating(false)
    
    // In a real app, this would trigger a download
    alert(`${reportTypes.find(r => r.id === reportType)?.name} (${format}) generated successfully!`)
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount)
  }

  const getGrowthIcon = (growth: number) => {
    return growth >= 0 
      ? <ArrowTrendingUpIcon className="h-4 w-4 text-green-500" />
      : <ArrowTrendingDownIcon className="h-4 w-4 text-red-500" />
  }

  const getGrowthColor = (growth: number) => {
    return growth >= 0 ? 'text-green-600' : 'text-red-600'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Reports & Analytics</h1>
              <p className="mt-2 text-sm text-gray-600">
                Generate business reports and analyze performance metrics
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <CalendarIcon className="h-5 w-5 text-gray-400" />
                <select
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="7">Last 7 days</option>
                  <option value="30">Last 30 days</option>
                  <option value="90">Last 90 days</option>
                  <option value="365">Last year</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-500">Total Revenue</h3>
                <p className="text-2xl font-bold text-gray-900">
                  {formatCurrency(mockAnalytics.totalRevenue)}
                </p>
                <div className="flex items-center mt-1">
                  {getGrowthIcon(12.5)}
                  <span className={`text-sm ml-1 ${getGrowthColor(12.5)}`}>+12.5%</span>
                </div>
              </div>
              <CurrencyDollarIcon className="h-12 w-12 text-green-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-500">Total Orders</h3>
                <p className="text-2xl font-bold text-gray-900">
                  {mockAnalytics.totalOrders.toLocaleString()}
                </p>
                <div className="flex items-center mt-1">
                  {getGrowthIcon(8.3)}
                  <span className={`text-sm ml-1 ${getGrowthColor(8.3)}`}>+8.3%</span>
                </div>
              </div>
              <ShoppingCartIcon className="h-12 w-12 text-blue-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-500">Avg Order Value</h3>
                <p className="text-2xl font-bold text-gray-900">
                  {formatCurrency(mockAnalytics.averageOrderValue)}
                </p>
                <div className="flex items-center mt-1">
                  {getGrowthIcon(3.7)}
                  <span className={`text-sm ml-1 ${getGrowthColor(3.7)}`}>+3.7%</span>
                </div>
              </div>
              <ChartBarIcon className="h-12 w-12 text-purple-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-500">Inventory Value</h3>
                <p className="text-2xl font-bold text-gray-900">$1,250,000</p>
                <div className="flex items-center mt-1">
                  {getGrowthIcon(5.2)}
                  <span className={`text-sm ml-1 ${getGrowthColor(5.2)}`}>+5.2%</span>
                </div>
              </div>
              <DocumentArrowDownIcon className="h-12 w-12 text-orange-500" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Report Generator */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Generate Reports</h2>
            
            <div className="space-y-4">
              {reportTypes.map((report) => (
                <div
                  key={report.id}
                  className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                    selectedReport === report.id 
                      ? 'border-indigo-500 bg-indigo-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedReport(report.id)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">{report.name}</h3>
                      <p className="text-sm text-gray-500">{report.description}</p>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleGenerateReport(report.id, 'PDF')
                        }}
                        disabled={isGenerating}
                        className="px-3 py-1 text-xs bg-red-100 text-red-700 rounded hover:bg-red-200 disabled:opacity-50"
                      >
                        PDF
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleGenerateReport(report.id, 'Excel')
                        }}
                        disabled={isGenerating}
                        className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded hover:bg-green-200 disabled:opacity-50"
                      >
                        Excel
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {isGenerating && (
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                  <span className="ml-2 text-sm text-blue-600">Generating report...</span>
                </div>
              </div>
            )}
          </div>

          {/* Top Products */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Top Performing Products</h2>
            
            <div className="space-y-4">
              {mockAnalytics.topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-500 w-6">#{index + 1}</span>
                    <div className="ml-3">
                      <h4 className="text-sm font-medium text-gray-900">{product.name}</h4>
                      <p className="text-xs text-gray-500">{product.units} units sold</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">
                      {formatCurrency(product.revenue)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sales Trend Chart */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Monthly Sales Trend</h2>
            
            <div className="space-y-3">
              {mockAnalytics.monthlySales.slice(-6).map((month, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 w-12">{month.month}</span>
                  <div className="flex-1 mx-4">
                    <div className="bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-indigo-600 h-2 rounded-full"
                        style={{ 
                          width: `${(month.sales / Math.max(...mockAnalytics.monthlySales.map(m => m.sales))) * 100}%` 
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">
                      {formatCurrency(month.sales)}
                    </p>
                    <p className="text-xs text-gray-500">{month.orders} orders</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category Performance */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Category Performance</h2>
            
            <div className="space-y-4">
              {mockAnalytics.categoryPerformance.map((category, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-medium text-gray-900">{category.category}</h4>
                    <div className="flex items-center">
                      {getGrowthIcon(category.growth)}
                      <span className={`text-sm ml-1 ${getGrowthColor(category.growth)}`}>
                        {category.growth > 0 ? '+' : ''}{category.growth}%
                      </span>
                    </div>
                  </div>
                  <p className="text-lg font-bold text-gray-900">
                    {formatCurrency(category.revenue)}
                  </p>
                  <div className="mt-2 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                      style={{ 
                        width: `${(category.revenue / Math.max(...mockAnalytics.categoryPerformance.map(c => c.revenue))) * 100}%` 
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Export Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <button
              onClick={() => handleGenerateReport('inventory', 'Excel')}
              className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <DocumentArrowDownIcon className="h-5 w-5 mr-2 text-gray-500" />
              <span className="text-sm font-medium">Export All Inventory</span>
            </button>
            <button
              onClick={() => handleGenerateReport('sales', 'PDF')}
              className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <ChartBarIcon className="h-5 w-5 mr-2 text-gray-500" />
              <span className="text-sm font-medium">Sales Summary</span>
            </button>
            <button
              onClick={() => handleGenerateReport('supplier', 'Excel')}
              className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <ArrowTrendingUpIcon className="h-5 w-5 mr-2 text-gray-500" />
              <span className="text-sm font-medium">Supplier Report</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}