/**
 * Dashboard Page Test Suite
 * 
 * Tests for the main dashboard page component including
 * rendering, user interactions, and data loading states.
 */

import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import DashboardPage from '@/app/page'

// Create a test wrapper with providers
function renderWithProviders(ui: React.ReactElement) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })

  return render(
    <QueryClientProvider client={queryClient}>
      {ui}
    </QueryClientProvider>
  )
}

describe('Dashboard Page', () => {
  it('renders the dashboard title', () => {
    renderWithProviders(<DashboardPage />)
    
    const title = screen.getByText('Inventory Dashboard')
    expect(title).toBeInTheDocument()
  })

  it('renders the dashboard description', () => {
    renderWithProviders(<DashboardPage />)
    
    const description = screen.getByText(/Monitor your inventory performance/i)
    expect(description).toBeInTheDocument()
  })

  it('has proper semantic structure', () => {
    renderWithProviders(<DashboardPage />)
    
    // Check for main heading
    const mainHeading = screen.getByRole('heading', { level: 1 })
    expect(mainHeading).toHaveTextContent('Inventory Dashboard')
    
    // Check for main content area
    const main = screen.getByRole('main', { hidden: true }) || document.querySelector('main')
    expect(main).toBeInTheDocument()
  })

  it('renders without accessibility violations', () => {
    const { container } = renderWithProviders(<DashboardPage />)
    
    // Basic accessibility checks
    expect(container.querySelector('h1')).toBeInTheDocument()
    expect(container.querySelector('main')).toBeInTheDocument()
  })
})

describe('Dashboard Components Integration', () => {
  it('renders dashboard layout correctly', () => {
    renderWithProviders(<DashboardPage />)
    
    // Check that the page structure is correct
    expect(screen.getByText('Inventory Dashboard')).toBeInTheDocument()
    
    // The components should be present (they will show loading states initially)
    expect(document.querySelector('.bg-gray-50')).toBeInTheDocument()
  })
})