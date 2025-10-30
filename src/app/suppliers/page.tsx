/**
 * Suppliers Management Page - Inv_Dash
 * 
 * Manage supplier relationships, performance metrics, and contact information
 */

'use client'

import { useState } from 'react'
import { 
  PlusIcon, 
  PencilIcon, 
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  StarIcon
} from '@heroicons/react/24/outline'

const mockSuppliers = [
  {
    id: 1,
    name: 'Apple Inc.',
    contactPerson: 'Sarah Johnson',
    email: 'sarah.johnson@apple.com',
    phone: '+1 (555) 123-4567',
    address: '1 Apple Park Way, Cupertino, CA 95014',
    category: 'Electronics',
    rating: 4.8,
    totalOrders: 45,
    totalValue: 1250000,
    averageDeliveryTime: 7,
    onTimeDelivery: 95,
    status: 'Active',
    lastOrder: '2025-10-25',
    products: ['iPhone 15 Pro', 'iPad Air', 'MacBook Pro']
  },
  {
    id: 2,
    name: 'Nike Distribution',
    contactPerson: 'Mike Rodriguez',
    email: 'mike.r@nike.com',
    phone: '+1 (555) 987-6543',
    address: '1 Bowerman Dr, Beaverton, OR 97005',
    category: 'Footwear',
    rating: 4.6,
    totalOrders: 32,
    totalValue: 485000,
    averageDeliveryTime: 5,
    onTimeDelivery: 89,
    status: 'Active',
    lastOrder: '2025-10-29',
    products: ['Nike Air Max 270', 'Nike React Infinity', 'Nike Dunk Low']
  },
  {
    id: 3,
    name: 'Samsung Electronics',
    contactPerson: 'Lisa Chen',
    email: 'lisa.chen@samsung.com',
    phone: '+1 (555) 456-7890',
    address: '85 Challenger Rd, Ridgefield Park, NJ 07660',
    category: 'Electronics',
    rating: 4.4,
    totalOrders: 28,
    totalValue: 675000,
    averageDeliveryTime: 10,
    onTimeDelivery: 82,
    status: 'Active',
    lastOrder: '2025-10-20',
    products: ['Samsung QLED TV', 'Galaxy S24', 'Galaxy Watch']
  },
  {
    id: 4,
    name: 'Levi Strauss & Co.',
    contactPerson: 'David Thompson',
    email: 'david.t@levi.com',
    phone: '+1 (555) 321-0987',
    address: '1155 Battery St, San Francisco, CA 94111',
    category: 'Clothing',
    rating: 4.2,
    totalOrders: 18,
    totalValue: 125000,
    averageDeliveryTime: 12,
    onTimeDelivery: 78,
    status: 'Inactive',
    lastOrder: '2025-09-15',
    products: ['501 Jeans', 'Trucker Jacket', 'Vintage Tee']
  }
]

export default function SuppliersPage() {
  const [suppliers, setSuppliers] = useState(mockSuppliers)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingSupplier, setEditingSupplier] = useState<any>(null)
  const [filterCategory, setFilterCategory] = useState('all')
  const [filterStatus, setFilterStatus] = useState('all')

  // Filter suppliers
  const filteredSuppliers = suppliers.filter(supplier => {
    const matchesCategory = filterCategory === 'all' || supplier.category === filterCategory
    const matchesStatus = filterStatus === 'all' || supplier.status === filterStatus
    return matchesCategory && matchesStatus
  })

  const categories = [...new Set(suppliers.map(s => s.category))]

  const getRatingStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <StarIcon
        key={index}
        className={`h-4 w-4 ${index < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ))
  }

  const getPerformanceColor = (percentage: number) => {
    if (percentage >= 90) return 'text-green-600'
    if (percentage >= 75) return 'text-yellow-600'
    return 'text-red-600'
  }

  const handleAddSupplier = (supplierData: any) => {
    const newSupplier = {
      ...supplierData,
      id: Date.now(),
      totalOrders: 0,
      totalValue: 0,
      averageDeliveryTime: 0,
      onTimeDelivery: 100,
      lastOrder: null,
      products: []
    }
    setSuppliers([...suppliers, newSupplier])
    setIsModalOpen(false)
  }

  const handleEditSupplier = (supplierData: any) => {
    const updatedSuppliers = suppliers.map(s => 
      s.id === editingSupplier.id ? { ...editingSupplier, ...supplierData } : s
    )
    setSuppliers(updatedSuppliers)
    setEditingSupplier(null)
    setIsModalOpen(false)
  }

  const openEditModal = (supplier: any) => {
    setEditingSupplier(supplier)
    setIsModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Suppliers</h1>
              <p className="mt-2 text-sm text-gray-600">
                Manage supplier relationships and performance metrics
              </p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <PlusIcon className="h-5 w-5 mr-2" />
              Add Supplier
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
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Categories</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500">Total Suppliers</h3>
            <p className="text-2xl font-bold text-gray-900">{suppliers.length}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500">Active Suppliers</h3>
            <p className="text-2xl font-bold text-green-600">
              {suppliers.filter(s => s.status === 'Active').length}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500">Total Value</h3>
            <p className="text-2xl font-bold text-blue-600">
              ${suppliers.reduce((sum, s) => sum + s.totalValue, 0).toLocaleString()}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500">Avg. Rating</h3>
            <p className="text-2xl font-bold text-yellow-600">
              {(suppliers.reduce((sum, s) => sum + s.rating, 0) / suppliers.length).toFixed(1)}
            </p>
          </div>
        </div>

        {/* Suppliers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredSuppliers.map((supplier) => (
            <div key={supplier.id} className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{supplier.name}</h3>
                  <p className="text-sm text-gray-500">{supplier.category}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => openEditModal(supplier)}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    <PencilIcon className="h-4 w-4" />
                  </button>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    supplier.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {supplier.status}
                  </span>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <EnvelopeIcon className="h-4 w-4 mr-2" />
                  {supplier.email}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <PhoneIcon className="h-4 w-4 mr-2" />
                  {supplier.phone}
                </div>
                <div className="flex items-start text-sm text-gray-600">
                  <MapPinIcon className="h-4 w-4 mr-2 mt-0.5" />
                  <span className="leading-tight">{supplier.address}</span>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex mr-2">
                  {getRatingStars(supplier.rating)}
                </div>
                <span className="text-sm text-gray-600">{supplier.rating}</span>
              </div>

              {/* Performance Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-xs text-gray-500">Total Orders</div>
                  <div className="text-lg font-semibold">{supplier.totalOrders}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Total Value</div>
                  <div className="text-lg font-semibold">${supplier.totalValue.toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Avg. Delivery</div>
                  <div className="text-lg font-semibold">{supplier.averageDeliveryTime} days</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">On-Time Delivery</div>
                  <div className={`text-lg font-semibold ${getPerformanceColor(supplier.onTimeDelivery)}`}>
                    {supplier.onTimeDelivery}%
                  </div>
                </div>
              </div>

              {/* Products */}
              <div>
                <div className="text-xs text-gray-500 mb-2">Main Products</div>
                <div className="flex flex-wrap gap-1">
                  {supplier.products.slice(0, 3).map((product, index) => (
                    <span
                      key={index}
                      className="inline-flex px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded"
                    >
                      {product}
                    </span>
                  ))}
                  {supplier.products.length > 3 && (
                    <span className="inline-flex px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded">
                      +{supplier.products.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {supplier.lastOrder && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="text-xs text-gray-500">Last Order: {supplier.lastOrder}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Add/Edit Supplier Modal */}
      {isModalOpen && (
        <SupplierModal
          supplier={editingSupplier}
          onSave={editingSupplier ? handleEditSupplier : handleAddSupplier}
          onClose={() => {
            setIsModalOpen(false)
            setEditingSupplier(null)
          }}
        />
      )}
    </div>
  )
}

// Supplier Add/Edit Modal Component
function SupplierModal({ supplier, onSave, onClose }: any) {
  const [formData, setFormData] = useState({
    name: supplier?.name || '',
    contactPerson: supplier?.contactPerson || '',
    email: supplier?.email || '',
    phone: supplier?.phone || '',
    address: supplier?.address || '',
    category: supplier?.category || 'Electronics',
    rating: supplier?.rating || 5,
    status: supplier?.status || 'Active'
  })

  const handleSubmit = (e: any) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            {supplier ? 'Edit Supplier' : 'Add New Supplier'}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Company Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Contact Person</label>
              <input
                type="text"
                required
                value={formData.contactPerson}
                onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <textarea
                required
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                rows={3}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="Electronics">Electronics</option>
                  <option value="Footwear">Footwear</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Home & Kitchen">Home & Kitchen</option>
                  <option value="Sports">Sports</option>
                  <option value="Beauty">Beauty</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Status</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({...formData, status: e.target.value})}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
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
                {supplier ? 'Update' : 'Create'} Supplier
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}