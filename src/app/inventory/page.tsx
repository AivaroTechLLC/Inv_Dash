/**
 * Inventory Management Page - Inv_Dash
 * 
 * Track stock levels, movements, and perform inventory adjustments
 */

'use client'

import { useState } from 'react'
import { 
  PlusIcon, 
  ArrowUpIcon, 
  ArrowDownIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

const mockInventoryData = [
  { 
    id: 1, 
    productName: 'iPhone 15 Pro', 
    sku: 'APL-IP15P-128', 
    currentStock: 45,
    minThreshold: 20,
    maxThreshold: 100,
    location: 'Warehouse A - Section 1',
    lastMovement: '2025-10-29',
    movementType: 'Sale',
    movementQty: -3,
    value: 44997.55,
    status: 'Healthy'
  },
  { 
    id: 2, 
    productName: 'Nike Air Max 270', 
    sku: 'NK-AM270-BK-10', 
    currentStock: 23,
    minThreshold: 30,
    maxThreshold: 80,
    location: 'Warehouse B - Section 2',
    lastMovement: '2025-10-28',
    movementType: 'Restock',
    movementQty: +15,
    value: 3450.00,
    status: 'Low Stock'
  },
  { 
    id: 3, 
    productName: 'Samsung 55" QLED TV', 
    sku: 'SAM-Q55-4K', 
    currentStock: 12,
    minThreshold: 15,
    maxThreshold: 40,
    location: 'Warehouse A - Section 3',
    lastMovement: '2025-10-27',
    movementType: 'Sale',
    movementQty: -2,
    value: 9599.88,
    status: 'Critical'
  }
]

export default function InventoryPage() {
  const [inventory, setInventory] = useState(mockInventoryData)
  const [isAdjustmentModalOpen, setIsAdjustmentModalOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<any>(null)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Healthy': return 'bg-green-100 text-green-800'
      case 'Low Stock': return 'bg-yellow-100 text-yellow-800'
      case 'Critical': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const handleStockAdjustment = (itemId: number, adjustment: number, reason: string) => {
    // Log the reason for audit trail
    console.log(`Stock adjustment for item ${itemId}: ${reason}`)
    setInventory(prev => prev.map(item => {
      if (item.id === itemId) {
        const newStock = item.currentStock + adjustment
        const newStatus = newStock <= item.minThreshold / 2 ? 'Critical' :
                         newStock <= item.minThreshold ? 'Low Stock' : 'Healthy'
        return {
          ...item,
          currentStock: newStock,
          status: newStatus,
          lastMovement: new Date().toISOString().split('T')[0],
          movementType: 'Adjustment',
          movementQty: adjustment
        }
      }
      return item
    }))
    setIsAdjustmentModalOpen(false)
    setSelectedItem(null)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Inventory Management</h1>
              <p className="mt-2 text-sm text-gray-600">
                Track stock levels, movements, and manage inventory thresholds
              </p>
            </div>
            <button
              onClick={() => setIsAdjustmentModalOpen(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <PlusIcon className="h-5 w-5 mr-2" />
              Stock Adjustment
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <CheckCircleIcon className="h-8 w-8 text-green-500" />
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Healthy Stock</h3>
                <p className="text-2xl font-bold text-gray-900">
                  {inventory.filter(item => item.status === 'Healthy').length}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <ExclamationTriangleIcon className="h-8 w-8 text-yellow-500" />
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Low Stock</h3>
                <p className="text-2xl font-bold text-yellow-600">
                  {inventory.filter(item => item.status === 'Low Stock').length}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <ExclamationTriangleIcon className="h-8 w-8 text-red-500" />
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Critical</h3>
                <p className="text-2xl font-bold text-red-600">
                  {inventory.filter(item => item.status === 'Critical').length}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Total Value</h3>
                <p className="text-2xl font-bold text-green-600">
                  ${inventory.reduce((sum, item) => sum + item.value, 0).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Inventory Table */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Current Inventory Levels</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Current Stock</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Thresholds</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Movement</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Value</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {inventory.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{item.productName}</div>
                        <div className="text-sm text-gray-500">{item.sku}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-bold text-gray-900">{item.currentStock}</div>
                      <div className="flex items-center text-xs text-gray-500">
                        {item.movementType === 'Sale' ? (
                          <ArrowDownIcon className="h-3 w-3 text-red-500 mr-1" />
                        ) : (
                          <ArrowUpIcon className="h-3 w-3 text-green-500 mr-1" />
                        )}
                        {Math.abs(item.movementQty)} {item.movementType}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div>Min: {item.minThreshold}</div>
                      <div>Max: {item.maxThreshold}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.lastMovement}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ${item.value.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => {
                          setSelectedItem(item)
                          setIsAdjustmentModalOpen(true)
                        }}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Adjust Stock
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Stock Adjustment Modal */}
      {isAdjustmentModalOpen && (
        <StockAdjustmentModal
          item={selectedItem}
          onAdjust={handleStockAdjustment}
          onClose={() => {
            setIsAdjustmentModalOpen(false)
            setSelectedItem(null)
          }}
        />
      )}
    </div>
  )
}

// Stock Adjustment Modal Component
function StockAdjustmentModal({ item, onAdjust, onClose }: any) {
  const [adjustment, setAdjustment] = useState(0)
  const [reason, setReason] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (item) {
      onAdjust(item.id, adjustment, reason)
    }
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Stock Adjustment
          </h3>
          {item && (
            <div className="mb-4 p-3 bg-gray-50 rounded-lg">
              <div className="text-sm font-medium text-gray-900">{item.productName}</div>
              <div className="text-sm text-gray-500">Current Stock: {item.currentStock}</div>
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Adjustment Quantity (+ for increase, - for decrease)
              </label>
              <input
                type="number"
                required
                value={adjustment}
                onChange={(e) => setAdjustment(parseInt(e.target.value) || 0)}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="e.g., +10 or -5"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Reason</label>
              <select
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Select reason...</option>
                <option value="Damaged goods">Damaged goods</option>
                <option value="Lost/Stolen">Lost/Stolen</option>
                <option value="Cycle count">Cycle count</option>
                <option value="Return">Return</option>
                <option value="Manual correction">Manual correction</option>
              </select>
            </div>
            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
              >
                Apply Adjustment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}