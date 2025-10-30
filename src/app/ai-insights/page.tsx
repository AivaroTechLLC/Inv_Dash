/**
 * AI Insights Page - Inv_Dash
 * 
 * AI-powered analytics, recommendations, and predictive insights
 */

'use client'

import { useState } from 'react'
import { 
  SparklesIcon,
  LightBulbIcon,
  ArrowTrendingUpIcon,
  ExclamationTriangleIcon,
  ChartBarIcon,
  ClockIcon,
  ShoppingCartIcon,
  CubeIcon
} from '@heroicons/react/24/outline'

const mockAIInsights = {
  recommendations: [
    {
      id: 1,
      type: 'reorder',
      priority: 'high',
      title: 'Reorder Alert: iPhone 15 Pro',
      description: 'Current stock (12 units) will run out in 3 days based on current sales velocity.',
      action: 'Order 50 units from Apple Inc.',
      confidence: 94,
      potentialImpact: 'Prevent $45,000 in lost sales'
    },
    {
      id: 2,
      type: 'pricing',
      priority: 'medium',
      title: 'Price Optimization: Nike Air Max 270',
      description: 'Analysis suggests a 5% price increase could improve margins without affecting demand.',
      action: 'Increase price from $150 to $158',
      confidence: 87,
      potentialImpact: '+$2,340 monthly revenue'
    },
    {
      id: 3,
      type: 'demand',
      priority: 'medium',
      title: 'Seasonal Demand: Winter Jackets',
      description: 'Historical data indicates 40% increase in jacket sales in next 30 days.',
      action: 'Increase winter inventory by 35%',
      confidence: 91,
      potentialImpact: 'Capture $18,500 additional sales'
    },
    {
      id: 4,
      type: 'supplier',
      priority: 'low',
      title: 'Supplier Performance: Samsung',
      description: 'Delivery delays detected. Consider backup supplier for critical items.',
      action: 'Evaluate alternative suppliers',
      confidence: 78,
      potentialImpact: 'Reduce stockout risk by 25%'
    }
  ],
  predictions: [
    {
      product: 'iPhone 15 Pro',
      currentStock: 12,
      predictedDemand: 45,
      recommendedOrder: 50,
      daysUntilStockout: 3,
      confidence: 94
    },
    {
      product: 'Samsung QLED TV',
      currentStock: 8,
      predictedDemand: 25,
      recommendedOrder: 30,
      daysUntilStockout: 7,
      confidence: 89
    },
    {
      product: 'Nike Air Max 270',
      currentStock: 45,
      predictedDemand: 78,
      recommendedOrder: 100,
      daysUntilStockout: 12,
      confidence: 92
    }
  ],
  trends: [
    {
      category: 'Electronics',
      trend: 'increasing',
      change: '+15%',
      period: 'Last 30 days',
      insight: 'Back-to-school season driving electronics demand'
    },
    {
      category: 'Footwear',
      trend: 'stable',
      change: '+2%',
      period: 'Last 30 days',
      insight: 'Steady demand across all shoe categories'
    },
    {
      category: 'Home & Kitchen',
      trend: 'decreasing',
      change: '-8%',
      period: 'Last 30 days',
      insight: 'Post-holiday decline in home goods purchases'
    }
  ]
}

export default function AIInsightsPage() {
  const [selectedTab, setSelectedTab] = useState('recommendations')
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleRefreshAI = async () => {
    setIsRefreshing(true)
    // Simulate AI analysis refresh
    await new Promise(resolve => setTimeout(resolve, 3000))
    setIsRefreshing(false)
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200'
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'low': return 'bg-green-100 text-green-800 border-green-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'reorder': return <CubeIcon className="h-5 w-5" />
      case 'pricing': return <ArrowTrendingUpIcon className="h-5 w-5" />
      case 'demand': return <ChartBarIcon className="h-5 w-5" />
      case 'supplier': return <ExclamationTriangleIcon className="h-5 w-5" />
      default: return <LightBulbIcon className="h-5 w-5" />
    }
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'increasing': return <ArrowTrendingUpIcon className="h-5 w-5 text-green-500" />
      case 'decreasing': return <ArrowTrendingUpIcon className="h-5 w-5 text-red-500 transform rotate-180" />
      case 'stable': return <ArrowTrendingUpIcon className="h-5 w-5 text-gray-500 transform rotate-90" />
      default: return <ArrowTrendingUpIcon className="h-5 w-5 text-gray-500" />
    }
  }

  const tabs = [
    { id: 'recommendations', name: 'AI Recommendations', icon: SparklesIcon },
    { id: 'predictions', name: 'Demand Predictions', icon: ChartBarIcon },
    { id: 'trends', name: 'Market Trends', icon: ArrowTrendingUpIcon }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                <SparklesIcon className="h-8 w-8 mr-3 text-indigo-600" />
                AI Insights
              </h1>
              <p className="mt-2 text-sm text-gray-600">
                AI-powered recommendations and predictive analytics for your inventory
              </p>
            </div>
            <button
              onClick={handleRefreshAI}
              disabled={isRefreshing}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50"
            >
              {isRefreshing ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Analyzing...
                </>
              ) : (
                <>
                  <SparklesIcon className="h-5 w-5 mr-2" />
                  Refresh AI Analysis
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`flex items-center py-2 px-1 border-b-2 font-medium text-sm ${
                    selectedTab === tab.id
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-2" />
                  {tab.name}
                </button>
              )
            })}
          </nav>
        </div>

        {/* AI Recommendations Tab */}
        {selectedTab === 'recommendations' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-sm font-medium text-gray-500">Active Recommendations</h3>
                <p className="text-2xl font-bold text-gray-900">{mockAIInsights.recommendations.length}</p>
                <p className="text-sm text-green-600">3 high priority</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-sm font-medium text-gray-500">Potential Revenue Impact</h3>
                <p className="text-2xl font-bold text-green-600">+$65,840</p>
                <p className="text-sm text-gray-500">If all recommendations implemented</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-sm font-medium text-gray-500">AI Confidence</h3>
                <p className="text-2xl font-bold text-indigo-600">90%</p>
                <p className="text-sm text-gray-500">Average across all recommendations</p>
              </div>
            </div>

            <div className="space-y-4">
              {mockAIInsights.recommendations.map((rec) => (
                <div key={rec.id} className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className={`p-2 rounded-lg ${getPriorityColor(rec.priority)}`}>
                          {getTypeIcon(rec.type)}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-medium text-gray-900">{rec.title}</h3>
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getPriorityColor(rec.priority)}`}>
                            {rec.priority} priority
                          </span>
                        </div>
                        <p className="text-gray-600 mb-3">{rec.description}</p>
                        <div className="flex items-center space-x-4 text-sm">
                          <div className="flex items-center text-indigo-600">
                            <LightBulbIcon className="h-4 w-4 mr-1" />
                            <span className="font-medium">Action: </span>
                            <span>{rec.action}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500 mb-1">AI Confidence</div>
                      <div className="text-lg font-bold text-indigo-600">{rec.confidence}%</div>
                      <div className="text-sm text-green-600 mt-2">{rec.potentialImpact}</div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end space-x-3">
                    <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200">
                      Dismiss
                    </button>
                    <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
                      Implement
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Demand Predictions Tab */}
        {selectedTab === 'predictions' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Inventory Demand Predictions</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Product
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Current Stock
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Predicted Demand (30 days)
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Recommended Order
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Days Until Stockout
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Confidence
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {mockAIInsights.predictions.map((pred, index) => (
                      <tr key={index} className={pred.daysUntilStockout <= 5 ? 'bg-red-50' : ''}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {pred.product}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {pred.currentStock} units
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {pred.predictedDemand} units
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-600 font-medium">
                          {pred.recommendedOrder} units
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className={`flex items-center ${
                            pred.daysUntilStockout <= 5 ? 'text-red-600' : 
                            pred.daysUntilStockout <= 10 ? 'text-yellow-600' : 'text-green-600'
                          }`}>
                            <ClockIcon className="h-4 w-4 mr-1" />
                            {pred.daysUntilStockout} days
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <div className="flex items-center">
                            <div className="flex-1 bg-gray-200 rounded-full h-2 mr-2">
                              <div 
                                className="bg-indigo-600 h-2 rounded-full"
                                style={{ width: `${pred.confidence}%` }}
                              ></div>
                            </div>
                            <span className="text-sm">{pred.confidence}%</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Market Trends Tab */}
        {selectedTab === 'trends' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mockAIInsights.trends.map((trend, index) => (
                <div key={index} className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium text-gray-900">{trend.category}</h3>
                    {getTrendIcon(trend.trend)}
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Change</span>
                      <span className={`text-lg font-bold ${
                        trend.trend === 'increasing' ? 'text-green-600' :
                        trend.trend === 'decreasing' ? 'text-red-600' : 'text-gray-600'
                      }`}>
                        {trend.change}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Period</span>
                      <span className="text-sm text-gray-900">{trend.period}</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-700">{trend.insight}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-6">AI Market Intelligence</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-md font-medium text-gray-900">Key Insights</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                      <LightBulbIcon className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-blue-900">Seasonal Opportunity</p>
                        <p className="text-sm text-blue-700">Winter clothing demand expected to peak in 2 weeks</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
                      <ExclamationTriangleIcon className="h-5 w-5 text-yellow-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-yellow-900">Supply Chain Alert</p>
                        <p className="text-sm text-yellow-700">Electronics shipping delays expected due to port congestion</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                      <ShoppingCartIcon className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-green-900">Market Growth</p>
                        <p className="text-sm text-green-700">Athleisure category showing 25% growth month-over-month</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-md font-medium text-gray-900">Recommended Actions</h3>
                  <div className="space-y-3">
                    <div className="p-3 border border-gray-200 rounded-lg">
                      <p className="text-sm font-medium text-gray-900">Increase Winter Inventory</p>
                      <p className="text-sm text-gray-600">Stock up on winter jackets and accessories before peak season</p>
                      <div className="mt-2">
                        <button className="text-xs px-2 py-1 bg-indigo-100 text-indigo-700 rounded">
                          View Details
                        </button>
                      </div>
                    </div>
                    <div className="p-3 border border-gray-200 rounded-lg">
                      <p className="text-sm font-medium text-gray-900">Diversify Suppliers</p>
                      <p className="text-sm text-gray-600">Add backup electronics suppliers to mitigate delays</p>
                      <div className="mt-2">
                        <button className="text-xs px-2 py-1 bg-indigo-100 text-indigo-700 rounded">
                          View Suppliers
                        </button>
                      </div>
                    </div>
                    <div className="p-3 border border-gray-200 rounded-lg">
                      <p className="text-sm font-medium text-gray-900">Expand Athleisure</p>
                      <p className="text-sm text-gray-600">Consider adding more athleisure brands to product mix</p>
                      <div className="mt-2">
                        <button className="text-xs px-2 py-1 bg-indigo-100 text-indigo-700 rounded">
                          Explore Options
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}