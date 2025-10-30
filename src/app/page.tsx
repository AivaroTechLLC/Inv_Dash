/**
 * Dashboard Home Page - Inv_Dash
 * 
 * This is the main dashboard page that provides an overview of inventory status,
 * key metrics, and quick actions for inventory management.
 * 
 * Features:
 * - Key performance indicators (KPIs)
 * - Quick action buttons
 * - Recent activity feed
 * - AI recommendations preview
 * - Stock alerts and notifications
 */

import { Suspense } from 'react'
import { Metadata } from 'next'
import DashboardHeader from '@/components/dashboard/DashboardHeader'
import DashboardStats from '@/components/dashboard/DashboardStats'
import DashboardCharts from '@/components/dashboard/DashboardCharts'
import RecentActivity from '@/components/dashboard/RecentActivity'
import StockAlerts from '@/components/dashboard/StockAlerts'
import AIRecommendations from '@/components/dashboard/AIRecommendations'
import QuickActions from '@/components/dashboard/QuickActions'
import DashboardSkeleton from '@/components/dashboard/DashboardSkeleton'

export const metadata: Metadata = {
  title: 'Dashboard Overview',
  description: 'Inventory management dashboard with real-time analytics and AI-powered insights',
}

/**
 * Dashboard Loading Component
 * Provides skeleton UI while dashboard data is loading
 */
function DashboardLoading() {
  return <DashboardSkeleton />
}

/**
 * Dashboard Page Component
 * 
 * This component orchestrates the entire dashboard layout and manages
 * the data flow between different dashboard widgets.
 * 
 * @returns JSX element containing the complete dashboard interface
 */
export default function DashboardPage() {
  return (
    <>
      {/* Dashboard Header with navigation and user menu */}
      <DashboardHeader />
      
      {/* Main dashboard content */}
      <main className="min-h-screen bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-7xl mx-auto">
            {/* Dashboard title and description */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">
                Inventory Dashboard
              </h1>
              <p className="mt-2 text-sm text-gray-600">
                Monitor your inventory performance with real-time analytics and AI-powered insights
              </p>
            </div>

            {/* Dashboard content grid */}
            <div className="space-y-8">
              {/* Key Performance Indicators */}
              <Suspense fallback={<DashboardLoading />}>
                <DashboardStats />
              </Suspense>

              {/* Quick Actions and Alerts Row */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <QuickActions />
                </div>
                <div>
                  <StockAlerts />
                </div>
              </div>

              {/* Charts and Analytics */}
              <Suspense fallback={<div className="h-96 bg-white rounded-lg animate-pulse" />}>
                <DashboardCharts />
              </Suspense>

              {/* Activity and Recommendations Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Suspense fallback={<div className="h-96 bg-white rounded-lg animate-pulse" />}>
                  <RecentActivity />
                </Suspense>
                <Suspense fallback={<div className="h-96 bg-white rounded-lg animate-pulse" />}>
                  <AIRecommendations />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}