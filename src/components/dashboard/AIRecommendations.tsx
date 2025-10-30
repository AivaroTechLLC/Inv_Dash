/**
 * AI Recommendations Component
 * 
 * Displays AI-powered inventory recommendations and insights
 */

'use client'

import { useState } from 'react'
import {
  SparklesIcon,
  ArrowTrendingUpIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline'

interface Recommendation {
  id: string
  type: 'reorder' | 'overstock' | 'seasonal' | 'trend'
  product: string
  sku: string
  currentStock: number
  suggestedAction: string
  reasoning: string
  confidence: number
  status: 'pending' | 'approved' | 'rejected'
}

const mockRecommendations: Recommendation[] = [
  {
    id: '1',
    type: 'reorder',
    product: 'Smartphone Pro',
    sku: 'PHONE-001',
    currentStock: 15,
    suggestedAction: 'Reorder 75 units',
    reasoning: 'Based on sales velocity, current stock will be depleted in 8 days. Lead time is 7 days.',
    confidence: 0.92,
    status: 'pending',
  },
  {
    id: '2',
    type: 'seasonal',
    product: 'Winter Coat',
    sku: 'COAT-001',
    currentStock: 45,
    suggestedAction: 'Increase stock by 60%',
    reasoning: 'Winter season approaching. Historical data shows 60% increase in demand.',
    confidence: 0.85,
    status: 'pending',
  },
  {
    id: '3',
    type: 'overstock',
    product: 'Summer T-Shirt',
    sku: 'SHIRT-003',
    currentStock: 200,
    suggestedAction: 'Reduce by 40% through promotion',
    reasoning: 'End of summer season. High stock levels detected with declining demand.',
    confidence: 0.78,
    status: 'pending',
  },
]

function getRecommendationIcon(type: string) {
  switch (type) {
    case 'reorder':
      return <ArrowTrendingUpIcon className="h-5 w-5 text-blue-500" />
    case 'seasonal':
      return <SparklesIcon className="h-5 w-5 text-purple-500" />
    case 'overstock':
      return <ExclamationTriangleIcon className="h-5 w-5 text-orange-500" />
    case 'trend':
      return <ArrowTrendingUpIcon className="h-5 w-5 text-green-500" />
    default:
      return <SparklesIcon className="h-5 w-5 text-gray-500" />
  }
}

function getConfidenceColor(confidence: number) {
  if (confidence >= 0.9) return 'text-green-600 bg-green-100'
  if (confidence >= 0.8) return 'text-yellow-600 bg-yellow-100'
  return 'text-red-600 bg-red-100'
}

export default function AIRecommendations() {
  const [recommendations, setRecommendations] = useState<Recommendation[]>(mockRecommendations)

  const handleRecommendation = (id: string, action: 'approve' | 'reject') => {
    setRecommendations(prev =>
      prev.map(rec =>
        rec.id === id
          ? { ...rec, status: action === 'approve' ? 'approved' : 'rejected' }
          : rec
      )
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <SparklesIcon className="h-5 w-5 text-indigo-500 mr-2" />
            <h3 className="text-lg font-medium text-gray-900">AI Recommendations</h3>
          </div>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
            {recommendations.filter(r => r.status === 'pending').length} pending
          </span>
        </div>
        
        <div className="space-y-4">
          {recommendations.map((recommendation) => (
            <div
              key={recommendation.id}
              className={`p-4 rounded-lg border ${
                recommendation.status === 'approved'
                  ? 'border-green-200 bg-green-50'
                  : recommendation.status === 'rejected'
                  ? 'border-red-200 bg-red-50'
                  : 'border-gray-200 bg-gray-50'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3 flex-1">
                  <div className="flex-shrink-0 mt-0.5">
                    {getRecommendationIcon(recommendation.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-medium text-gray-900">
                        {recommendation.product}
                      </h4>
                      <span className={`px-2 py-1 text-xs font-medium rounded ${getConfidenceColor(recommendation.confidence)}`}>
                        {Math.round(recommendation.confidence * 100)}% confidence
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>{recommendation.suggestedAction}</strong>
                    </p>
                    <p className="text-xs text-gray-500 mb-3">
                      {recommendation.reasoning}
                    </p>
                    
                    {recommendation.status === 'pending' && (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleRecommendation(recommendation.id, 'approve')}
                          className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium rounded text-green-700 bg-green-100 hover:bg-green-200"
                        >
                          <CheckCircleIcon className="h-3 w-3 mr-1" />
                          Approve
                        </button>
                        <button
                          onClick={() => handleRecommendation(recommendation.id, 'reject')}
                          className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium rounded text-red-700 bg-red-100 hover:bg-red-200"
                        >
                          <XCircleIcon className="h-3 w-3 mr-1" />
                          Reject
                        </button>
                      </div>
                    )}
                    
                    {recommendation.status === 'approved' && (
                      <div className="flex items-center text-xs text-green-600">
                        <CheckCircleIcon className="h-3 w-3 mr-1" />
                        Approved
                      </div>
                    )}
                    
                    {recommendation.status === 'rejected' && (
                      <div className="flex items-center text-xs text-red-600">
                        <XCircleIcon className="h-3 w-3 mr-1" />
                        Rejected
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 text-center">
          <button className="text-sm text-indigo-600 hover:text-indigo-900 font-medium">
            View all recommendations →
          </button>
        </div>
      </div>
    </div>
  )
}