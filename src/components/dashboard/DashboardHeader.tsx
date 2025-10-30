/**
 * Dashboard Header Component
 * 
 * Provides the main navigation header for the dashboard with:
 * - Company branding and logo
 * - Navigation menu
 * - User profile dropdown
 * - Notifications
 * - Search functionality
 */

'use client'

import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import {
  BellIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline'
import { BellIcon as BellIconSolid } from '@heroicons/react/24/solid'

/**
 * Navigation menu items configuration
 */
const navigation = [
  { name: 'Dashboard', href: '/', current: true },
  { name: 'Products', href: '/products', current: false },
  { name: 'Inventory', href: '/inventory', current: false },
  { name: 'Orders', href: '/orders', current: false },
  { name: 'Suppliers', href: '/suppliers', current: false },
  { name: 'Reports', href: '/reports', current: false },
  { name: 'AI Insights', href: '/ai-insights', current: false },
]

/**
 * User profile menu items
 */
const userNavigation = [
  { name: 'Your Profile', href: '/profile', icon: UserCircleIcon },
  { name: 'Settings', href: '/settings', icon: Cog6ToothIcon },
  { name: 'Sign out', href: '/logout', icon: ArrowRightOnRectangleIcon },
]

/**
 * Utility function for conditional CSS classes
 */
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

/**
 * Dashboard Header Component
 * 
 * @returns JSX element containing the complete header navigation
 */
export default function DashboardHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [notificationsCount] = useState(3) // Mock notification count

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          {/* Logo and company name */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              {/* Logo placeholder - replace with actual logo */}
              <div className="h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">ID</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">
                Inv_Dash
              </span>
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? 'border-indigo-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right side: Search, Notifications, User menu */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  placeholder="Search products, SKUs..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Notifications */}
            <button
              type="button"
              className="relative p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="sr-only">View notifications</span>
              {notificationsCount > 0 ? (
                <div className="relative">
                  <BellIconSolid className="h-6 w-6" aria-hidden="true" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {notificationsCount}
                  </span>
                </div>
              ) : (
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>

            {/* User profile dropdown */}
            <Menu as="div" className="relative">
              <div>
                <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <span className="sr-only">Open user menu</span>
                  <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
                    <UserCircleIcon className="h-6 w-6 text-gray-600" />
                  </div>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {userNavigation.map((item) => (
                    <Menu.Item key={item.name}>
                      {({ active }) => (
                        <a
                          href={item.href}
                          className={classNames(
                            active ? 'bg-gray-100' : '',
                            'flex items-center px-4 py-2 text-sm text-gray-700'
                          )}
                        >
                          <item.icon className="mr-3 h-4 w-4" aria-hidden="true" />
                          {item.name}
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                      : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800',
                    'block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}