/**
 * Orders Management Page - Inv_Dash
 * 
 * Manage purchase orders, sales orders, and order fulfillment
 */

'use client'

import { useState } from 'react'
import { 
  PlusIcon, 
  EyeIcon,
  TruckIcon,
  CheckCircleIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

const mockOrders = [
  {
    id: 1,
    orderNumber: 'PO-2025-001',
    type: 'Purchase Order',
    supplier: 'Apple Inc.',
    customer: null,
    date: '2025-10-25',
    status: 'Pending',
    total: 75000.00,
    items: [
      { product: 'iPhone 15 Pro', quantity: 50, unitPrice: 999.99 },
      { product: 'iPhone 15', quantity: 30, unitPrice: 799.99 }
    ],
    deliveryDate: '2025-11-05',
    priority: 'High'
  },
  {
    id: 2,
    orderNumber: 'SO-2025-145',
    type: 'Sales Order',
    supplier: null,
    customer: 'TechMart Retail',
    date: '2025-10-28',
    status: 'Shipped',
    total: 12599.85,
    items: [
      { product: 'Samsung 55" QLED TV', quantity: 8, unitPrice: 799.99 },
      { product: 'iPhone 15 Pro', quantity: 5, unitPrice: 999.99 }
    ],
    deliveryDate: '2025-10-30',
    priority: 'Medium'
  },
  {
    id: 3,
    orderNumber: 'PO-2025-002',
    type: 'Purchase Order',
    supplier: 'Nike Distribution',
    customer: null,
    date: '2025-10-29',
    status: 'Delivered',
    total: 8750.00,
    items: [
      { product: 'Nike Air Max 270', quantity: 50, unitPrice: 150.00 },
      { product: 'Nike React Infinity', quantity: 25, unitPrice: 130.00 }
    ],
    deliveryDate: '2025-10-29',
    priority: 'Low'
  },
  {
    id: 4,
    orderNumber: 'SO-2025-146',
    type: 'Sales Order',
    supplier: null,
    customer: 'Sports Excellence',
    date: '2025-10-30',
    status: 'Processing',
    total: 4250.00,
    items: [
      { product: 'Nike Air Max 270', quantity: 15, unitPrice: 150.00 },
      { product: 'Adidas Ultraboost', quantity: 10, unitPrice: 180.00 }
    ],
    deliveryDate: '2025-11-02',
    priority: 'High'
  }
]

export default function OrdersPage() {
  const [orders, setOrders] = useState(mockOrders)
  const [filterType, setFilterType] = useState('all')
  const [filterStatus, setFilterStatus] = useState('all')
  const [selectedOrder, setSelectedOrder] = useState<any>(null)

  // Filter orders
  const filteredOrders = orders.filter(order => {
    const matchesType = filterType === 'all' || order.type === filterType
    const matchesStatus = filterStatus === 'all' || order.status === filterStatus
    return matchesType && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-800'
      case 'Processing': return 'bg-blue-100 text-blue-800'
      case 'Shipped': return 'bg-purple-100 text-purple-800'
      case 'Delivered': return 'bg-green-100 text-green-800'
      case 'Cancelled': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'text-red-600'
      case 'Medium': return 'text-yellow-600'
      case 'Low': return 'text-green-600'
      default: return 'text-gray-600'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Pending': return <ClockIcon className="h-5 w-5 text-yellow-500" />
      case 'Processing': return <ClockIcon className="h-5 w-5 text-blue-500" />
      case 'Shipped': return <TruckIcon className="h-5 w-5 text-purple-500" />
      case 'Delivered': return <CheckCircleIcon className="h-5 w-5 text-green-500" />
      default: return <ClockIcon className="h-5 w-5 text-gray-500" />
    }
  }

  const updateOrderStatus = (orderId: number, newStatus: string) => {
    setOrders(prev => prev.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Orders Management</h1>
              <p className="mt-2 text-sm text-gray-600">
                Manage purchase orders, sales orders, and track fulfillment
              </p>
            </div>
            <button
              onClick={() => alert('Create order functionality would be implemented here')}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <PlusIcon className="h-5 w-5 mr-2" />
              Create Order
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter Bar */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Order Types</option>
              <option value="Purchase Order">Purchase Orders</option>
              <option value="Sales Order">Sales Orders</option>
            </select>
          </div>
          <div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Statuses</option>
              <option value="Pending">Pending</option>
              <option value="Processing">Processing</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500">Total Orders</h3>
            <p className="text-2xl font-bold text-gray-900">{orders.length}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500">Pending Orders</h3>
            <p className="text-2xl font-bold text-yellow-600">
              {orders.filter(o => o.status === 'Pending').length}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500">Total Value</h3>
            <p className="text-2xl font-bold text-green-600">
              ${orders.reduce((sum, order) => sum + order.total, 0).toLocaleString()}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500">This Month</h3>
            <p className="text-2xl font-bold text-blue-600">
              {orders.filter(o => o.date.startsWith('2025-10')).length}
            </p>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Recent Orders</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer/Supplier</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Priority</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{order.orderNumber}</div>
                        <div className="text-sm text-gray-500">Due: {order.deliveryDate}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {order.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {order.customer || order.supplier}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {order.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {getStatusIcon(order.status)}
                        <span className={`ml-2 inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`text-sm font-medium ${getPriorityColor(order.priority)}`}>
                        {order.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      ${order.total.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => setSelectedOrder(order)}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          <EyeIcon className="h-4 w-4" />
                        </button>
                        {order.status === 'Pending' && (
                          <button
                            onClick={() => updateOrderStatus(order.id, 'Processing')}
                            className="text-green-600 hover:text-green-900 text-xs"
                          >
                            Process
                          </button>
                        )}
                        {order.status === 'Processing' && (
                          <button
                            onClick={() => updateOrderStatus(order.id, 'Shipped')}
                            className="text-blue-600 hover:text-blue-900 text-xs"
                          >
                            Ship
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <OrderDetailsModal
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
        />
      )}
    </div>
  )
}

// Order Details Modal Component
function OrderDetailsModal({ order, onClose }: any) {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-900">
              Order Details - {order.orderNumber}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
          </div>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-500">Type</label>
                <p className="text-sm text-gray-900">{order.type}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Status</label>
                <p className="text-sm text-gray-900">{order.status}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Date</label>
                <p className="text-sm text-gray-900">{order.date}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Delivery Date</label>
                <p className="text-sm text-gray-900">{order.deliveryDate}</p>
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-500">
                {order.customer ? 'Customer' : 'Supplier'}
              </label>
              <p className="text-sm text-gray-900">{order.customer || order.supplier}</p>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-500 block mb-2">Order Items</label>
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500">Product</th>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500">Qty</th>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500">Unit Price</th>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {order.items.map((item: any, index: number) => (
                      <tr key={index}>
                        <td className="px-3 py-2 text-sm text-gray-900">{item.product}</td>
                        <td className="px-3 py-2 text-sm text-gray-900">{item.quantity}</td>
                        <td className="px-3 py-2 text-sm text-gray-900">${item.unitPrice}</td>
                        <td className="px-3 py-2 text-sm text-gray-900">
                          ${(item.quantity * item.unitPrice).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between">
                <span className="text-lg font-medium text-gray-900">Total:</span>
                <span className="text-lg font-bold text-gray-900">${order.total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}