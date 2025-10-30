import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from '@/components/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Inv_Dash - Intelligent Inventory Management',
  description: 'Modern inventory dashboard for retail business with AI-powered reordering and analytics',
  keywords: ['inventory', 'retail', 'dashboard', 'AI', 'analytics', 'stock management'],
  authors: [{ name: 'Your Name' }],
  creator: 'Inv_Dash Team',
  openGraph: {
    title: 'Inv_Dash - Intelligent Inventory Management',
    description: 'Modern inventory dashboard for retail business with AI-powered reordering',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

/**
 * Root layout component that wraps the entire application
 * Provides global styling, font loading, and context providers
 * 
 * @param children - The page content to render
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full bg-gray-50 antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}