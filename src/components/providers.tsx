'use client'

import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// Create a client instance for React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: false,
      retry: (failureCount, error) => {
        // Don't retry on 404s
        if (error instanceof Error && error.message.includes('404')) {
          return false
        }
        return failureCount < 3
      },
    },
  },
})

/**
 * Providers component that wraps the app with necessary context providers
 * 
 * This component provides:
 * - React Query for server state management
 * - Query devtools for development
 * 
 * @param children - The application content to wrap with providers
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* Only show React Query devtools in development */}
      {process.env.NODE_ENV === 'development' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  )
}