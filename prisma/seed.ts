/**
 * Database Seed Script for Inv_Dash
 * 
 * This script populates the database with sample data for development and testing.
 * It creates realistic inventory data for a retail business scenario.
 * 
 * Usage: npm run db:seed
 */

import { PrismaClient } from '@prisma/client'

// Import enum types for TypeScript
const UserRole = {
  ADMIN: 'ADMIN' as const,
  MANAGER: 'MANAGER' as const,
  STAFF: 'STAFF' as const,
}

const StockMovementType = {
  IN: 'IN' as const,
  OUT: 'OUT' as const,
  ADJUSTMENT: 'ADJUSTMENT' as const,
  TRANSFER: 'TRANSFER' as const,
  DAMAGED: 'DAMAGED' as const,
  EXPIRED: 'EXPIRED' as const,
  RETURN: 'RETURN' as const,
}

const PurchaseOrderStatus = {
  DRAFT: 'DRAFT' as const,
  PENDING: 'PENDING' as const,
  CONFIRMED: 'CONFIRMED' as const,
  SHIPPED: 'SHIPPED' as const,
  RECEIVED: 'RECEIVED' as const,
  CANCELLED: 'CANCELLED' as const,
  PARTIAL: 'PARTIAL' as const,
}

const RecommendationType = {
  REORDER: 'REORDER' as const,
  OVERSTOCK: 'OVERSTOCK' as const,
  SEASONAL: 'SEASONAL' as const,
  TREND: 'TREND' as const,
  PROMOTION: 'PROMOTION' as const,
}

const RecommendationStatus = {
  PENDING: 'PENDING' as const,
  APPROVED: 'APPROVED' as const,
  REJECTED: 'REJECTED' as const,
  IMPLEMENTED: 'IMPLEMENTED' as const,
  EXPIRED: 'EXPIRED' as const,
}

const prisma = new PrismaClient()

/**
 * Sample data sets for seeding
 */

// Sample users with different roles
const users = [
  {
    email: 'admin@invdash.com',
    name: 'System Administrator',
    role: UserRole.ADMIN,
  },
  {
    email: 'manager@invdash.com',
    name: 'Inventory Manager',
    role: UserRole.MANAGER,
  },
  {
    email: 'staff@invdash.com',
    name: 'Warehouse Staff',
    role: UserRole.STAFF,
  },
]

// Product categories with hierarchical structure
const categories = [
  { name: 'Electronics', description: 'Electronic devices and accessories' },
  { name: 'Clothing', description: 'Apparel and fashion items' },
  { name: 'Books', description: 'Books and educational materials' },
  { name: 'Home & Garden', description: 'Home improvement and garden supplies' },
  { name: 'Sports & Outdoors', description: 'Sports equipment and outdoor gear' },
]

// Sample suppliers
const suppliers = [
  {
    name: 'TechSupply Co.',
    contactName: 'John Smith',
    email: 'orders@techsupply.com',
    phone: '+1-555-0101',
    address: '123 Tech Street',
    city: 'San Francisco',
    country: 'USA',
    paymentTerms: 'Net 30',
    leadTime: 7,
    rating: 4.5,
  },
  {
    name: 'Fashion Forward Ltd.',
    contactName: 'Sarah Johnson',
    email: 'purchasing@fashionforward.com',
    phone: '+1-555-0202',
    address: '456 Fashion Ave',
    city: 'New York',
    country: 'USA',
    paymentTerms: 'Net 15',
    leadTime: 14,
    rating: 4.2,
  },
  {
    name: 'BookWorld Distributors',
    contactName: 'Mike Wilson',
    email: 'sales@bookworld.com',
    phone: '+1-555-0303',
    address: '789 Literary Lane',
    city: 'Chicago',
    country: 'USA',
    paymentTerms: 'COD',
    leadTime: 5,
    rating: 4.8,
  },
]

// Sample products with realistic inventory data
const products = [
  // Electronics
  {
    sku: 'LAPTOP-001',
    name: 'Professional Laptop 15"',
    description: 'High-performance laptop for business use',
    costPrice: 800.00,
    sellingPrice: 1299.99,
    wholesalePrice: 1100.00,
    weight: 2.1,
    dimensions: '35.6 x 25.1 x 1.9 cm',
    barcode: '1234567890123',
    currentStock: 25,
    minStock: 10,
    maxStock: 100,
    reorderPoint: 15,
    reorderQty: 20,
    categoryName: 'Electronics',
    supplierName: 'TechSupply Co.',
  },
  {
    sku: 'PHONE-001',
    name: 'Smartphone Pro',
    description: 'Latest generation smartphone with advanced features',
    costPrice: 600.00,
    sellingPrice: 999.99,
    wholesalePrice: 850.00,
    weight: 0.2,
    dimensions: '15.8 x 7.7 x 0.8 cm',
    barcode: '1234567890124',
    currentStock: 50,
    minStock: 20,
    maxStock: 200,
    reorderPoint: 30,
    reorderQty: 50,
    categoryName: 'Electronics',
    supplierName: 'TechSupply Co.',
  },
  
  // Clothing
  {
    sku: 'SHIRT-001',
    name: 'Cotton T-Shirt (Medium)',
    description: 'Comfortable cotton t-shirt in various colors',
    costPrice: 8.00,
    sellingPrice: 19.99,
    wholesalePrice: 15.00,
    weight: 0.2,
    dimensions: '30 x 40 x 2 cm (folded)',
    barcode: '1234567890125',
    currentStock: 150,
    minStock: 50,
    maxStock: 500,
    reorderPoint: 75,
    reorderQty: 100,
    categoryName: 'Clothing',
    supplierName: 'Fashion Forward Ltd.',
  },
  
  // Books
  {
    sku: 'BOOK-001',
    name: 'Business Strategy Handbook',
    description: 'Comprehensive guide to modern business strategies',
    costPrice: 15.00,
    sellingPrice: 29.99,
    wholesalePrice: 24.99,
    weight: 0.5,
    dimensions: '23 x 15 x 3 cm',
    barcode: '1234567890126',
    currentStock: 75,
    minStock: 25,
    maxStock: 200,
    reorderPoint: 40,
    reorderQty: 50,
    categoryName: 'Books',
    supplierName: 'BookWorld Distributors',
  },
  
  // Home & Garden
  {
    sku: 'TOOL-001',
    name: 'Professional Drill Set',
    description: 'Complete drill set with various bits and accessories',
    costPrice: 45.00,
    sellingPrice: 89.99,
    wholesalePrice: 75.00,
    weight: 2.5,
    dimensions: '35 x 25 x 12 cm',
    barcode: '1234567890127',
    currentStock: 30,
    minStock: 10,
    maxStock: 80,
    reorderPoint: 15,
    reorderQty: 25,
    categoryName: 'Home & Garden',
    supplierName: 'TechSupply Co.',
  },
]

/**
 * Main seeding function
 */
async function main() {
  console.log('🌱 Starting database seed...')

  try {
    // Clear existing data (in correct order due to foreign key constraints)
    console.log('🧹 Cleaning existing data...')
    await prisma.aIRecommendation.deleteMany()
    await prisma.purchaseOrderItem.deleteMany()
    await prisma.purchaseOrder.deleteMany()
    await prisma.stockMovement.deleteMany()
    await prisma.productSupplier.deleteMany()
    await prisma.product.deleteMany()
    await prisma.category.deleteMany()
    await prisma.supplier.deleteMany()
    await prisma.user.deleteMany()

    // Create users
    console.log('👤 Creating users...')
    const createdUsers = await Promise.all(
      users.map(user => prisma.user.create({ data: user }))
    )
    const adminUser = createdUsers.find(u => u.role === UserRole.ADMIN)!

    // Create categories
    console.log('📂 Creating categories...')
    const createdCategories = await Promise.all(
      categories.map(category => prisma.category.create({ data: category }))
    )

    // Create suppliers
    console.log('🏭 Creating suppliers...')
    const createdSuppliers = await Promise.all(
      suppliers.map(supplier => prisma.supplier.create({ data: supplier }))
    )

    // Create products
    console.log('📦 Creating products...')
    for (const productData of products) {
      const category = createdCategories.find(c => c.name === productData.categoryName)!
      const supplier = createdSuppliers.find(s => s.name === productData.supplierName)!

      // Extract product data without category and supplier names
      const { categoryName, supplierName, ...productProps } = productData

      const product = await prisma.product.create({
        data: {
          ...productProps,
          categoryId: category.id,
          createdById: adminUser.id,
          updatedById: adminUser.id,
        },
      })

      // Create product-supplier relationship
      await prisma.productSupplier.create({
        data: {
          productId: product.id,
          supplierId: supplier.id,
          supplierSku: `SUP-${product.sku}`,
          supplierPrice: product.costPrice,
          leadTime: supplier.leadTime,
          minOrderQty: 10,
          isPreferred: true,
        },
      })

      // Create initial stock movement
      await prisma.stockMovement.create({
        data: {
          productId: product.id,
          type: StockMovementType.IN,
          quantity: product.currentStock,
          reason: 'Initial stock import',
          reference: 'SEED-001',
          stockBefore: 0,
          stockAfter: product.currentStock,
          unitCost: product.costPrice,
          totalCost: product.costPrice * product.currentStock,
          createdById: adminUser.id,
        },
      })
    }

    // Create sample purchase orders
    console.log('📋 Creating purchase orders...')
    const techSupplier = createdSuppliers.find(s => s.name === 'TechSupply Co.')!
    const laptopProduct = await prisma.product.findFirst({ where: { sku: 'LAPTOP-001' } })
    
    if (!laptopProduct) {
      throw new Error('Laptop product not found for purchase order creation')
    }

    const purchaseOrder = await prisma.purchaseOrder.create({
      data: {
        poNumber: 'PO-2024-001',
        supplierId: techSupplier.id,
        status: PurchaseOrderStatus.PENDING,
        orderDate: new Date(),
        expectedDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
        subtotal: 16000.00,
        taxAmount: 1280.00,
        totalAmount: 17280.00,
        notes: 'Quarterly laptop restocking order',
        createdById: adminUser.id,
      },
    })

    await prisma.purchaseOrderItem.create({
      data: {
        purchaseOrderId: purchaseOrder.id,
        productId: laptopProduct.id,
        quantity: 20,
        unitCost: 800.00,
        totalCost: 16000.00,
      },
    })

    // Create sample AI recommendations
    console.log('🤖 Creating AI recommendations...')
    const phoneProduct = await prisma.product.findFirst({ where: { sku: 'PHONE-001' } })
    
    if (!phoneProduct) {
      throw new Error('Phone product not found for AI recommendation creation')
    }

    await prisma.aIRecommendation.create({
      data: {
        productId: phoneProduct.id,
        type: RecommendationType.REORDER,
        currentStock: phoneProduct.currentStock,
        suggestedQty: 75,
        confidence: 0.85,
        reasoning: 'Based on sales velocity and seasonal trends, current stock will be depleted in 12 days. Recommended reorder to maintain service levels.',
        factors: {
          dailySalesAverage: 4.2,
          salesVelocityTrend: 'increasing',
          seasonalFactor: 1.15,
          leadTime: 7,
          safetyStock: 15
        },
        seasonality: 'Q4 peak season detected',
        trendAnalysis: 'Sales increasing 15% week-over-week',
        status: RecommendationStatus.PENDING,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
        createdById: adminUser.id,
      },
    })

    console.log('✅ Database seeded successfully!')
    console.log(`Created:`)
    console.log(`  - ${createdUsers.length} users`)
    console.log(`  - ${createdCategories.length} categories`) 
    console.log(`  - ${createdSuppliers.length} suppliers`)
    console.log(`  - ${products.length} products`)
    console.log(`  - 1 purchase order`)
    console.log(`  - 1 AI recommendation`)

  } catch (error) {
    console.error('❌ Error seeding database:', error)
    throw error
  }
}

/**
 * Cleanup function
 */
async function cleanup() {
  await prisma.$disconnect()
}

// Run the seed script
main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(cleanup)