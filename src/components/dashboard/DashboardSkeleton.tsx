/**
 * Dashboard Skeleton Component
 * 
 * Provides loading skeleton UI while dashboard data is being fetched.
 * Uses pulse animation to indicate loading state.
 */

export default function DashboardSkeleton() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header skeleton */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="h-8 w-8 bg-gray-200 rounded-lg animate-pulse" />
              <div className="h-6 w-24 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="hidden md:flex space-x-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <div className="h-8 w-32 bg-gray-200 rounded animate-pulse" />
              <div className="h-6 w-6 bg-gray-200 rounded animate-pulse" />
              <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Main content skeleton */}
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Title skeleton */}
          <div className="mb-8">
            <div className="h-8 w-64 bg-gray-200 rounded animate-pulse mb-2" />
            <div className="h-4 w-96 bg-gray-200 rounded animate-pulse" />
          </div>

          {/* Stats skeleton */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
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

          {/* Quick actions and alerts skeleton */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="h-6 w-32 bg-gray-200 rounded animate-pulse mb-4" />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-20 bg-gray-200 rounded animate-pulse" />
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="h-6 w-24 bg-gray-200 rounded animate-pulse mb-4" />
                <div className="space-y-3">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-12 bg-gray-200 rounded animate-pulse" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Charts skeleton */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
            <div className="h-6 w-40 bg-gray-200 rounded animate-pulse mb-4" />
            <div className="h-96 bg-gray-200 rounded animate-pulse" />
          </div>

          {/* Activity and recommendations skeleton */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="h-6 w-32 bg-gray-200 rounded animate-pulse mb-4" />
              <div className="space-y-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="h-10 w-10 bg-gray-200 rounded-full animate-pulse" />
                    <div className="flex-1">
                      <div className="h-4 bg-gray-200 rounded animate-pulse mb-1" />
                      <div className="h-3 bg-gray-200 rounded animate-pulse w-2/3" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="h-6 w-40 bg-gray-200 rounded animate-pulse mb-4" />
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="p-4 bg-gray-50 rounded-lg">
                    <div className="h-4 bg-gray-200 rounded animate-pulse mb-2" />
                    <div className="h-3 bg-gray-200 rounded animate-pulse w-3/4 mb-2" />
                    <div className="h-8 bg-gray-200 rounded animate-pulse" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}