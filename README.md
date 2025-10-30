# Inv_Dash - AI-Powered Inventory Management Dashboard

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)](https://typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-5.22-2D3748)](https://prisma.io/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC)](https://tailwindcss.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Latest-316192)](https://postgresql.org/)
[![OpenAI](https://img.shields.io/badge/OpenAI-API-412991)](https://openai.com/)

A modern, AI-powered inventory management dashboard for retail businesses built with **Next.js 16**, **TypeScript**, **Prisma ORM**, and **OpenAI integration**. This project demonstrates enterprise-grade software development practices including **Clean Architecture**, **Test-Driven Development**, comprehensive documentation, and professional code annotation.

## 🌟 Features

### Core Inventory Management
- 📦 **Product Management** - Complete CRUD operations for products with SKU tracking
- 📊 **Real-time Analytics** - Interactive charts and KPI dashboards
- 🏷️ **Category Management** - Hierarchical product categorization
- 📈 **Stock Level Monitoring** - Real-time inventory tracking with alerts
- 🔄 **Stock Movement Tracking** - Complete audit trail of all inventory changes
- 👥 **Supplier Management** - Comprehensive supplier database with performance metrics

### AI-Powered Intelligence
- 🤖 **Smart Reordering** - AI-driven reorder recommendations based on sales velocity
- 📈 **Predictive Analytics** - Machine learning predictions for demand forecasting
- 🎯 **Seasonal Adjustments** - Automatic seasonal demand pattern recognition
- 💡 **Optimization Insights** - AI-generated suggestions for inventory optimization
- 🚨 **Intelligent Alerts** - Smart low-stock and overstock notifications

### Modern Technology Stack
- ⚡ **Next.js 16** - Latest React framework with App Router and Server Components
- 🎨 **TailwindCSS** - Utility-first CSS framework for rapid UI development
- 🔗 **Prisma ORM** - Type-safe database access with PostgreSQL
- 📊 **Recharts** - Interactive and responsive data visualization
- 🧪 **Jest + React Testing Library** - Comprehensive testing framework
- 📝 **TypeScript** - Full type safety across the entire application

## 🏗️ Project Architecture

This application follows **Clean Architecture** principles with clear separation of concerns:

```
src/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout with providers
│   └── page.tsx                 # Dashboard homepage
├── components/                   # Reusable UI components
│   ├── providers.tsx            # React Query and other providers
│   └── dashboard/               # Dashboard-specific components
│       ├── DashboardHeader.tsx  # Navigation and user menu
│       ├── DashboardStats.tsx   # KPI cards with live data
│       ├── DashboardCharts.tsx  # Interactive analytics charts
│       ├── QuickActions.tsx     # Common action buttons
│       ├── StockAlerts.tsx      # Low stock notifications
│       ├── AIRecommendations.tsx # AI-powered suggestions
│       ├── RecentActivity.tsx   # Activity feed
│       └── DashboardSkeleton.tsx # Loading states
├── lib/                         # Utility functions and configurations
├── types/                       # TypeScript type definitions
└── utils/                       # Helper functions

prisma/
├── schema.prisma               # Database schema with full inventory model
└── seed.ts                     # Sample data for development

__tests__/                      # Test suites
├── components/                 # Component tests
├── pages/                      # Page tests
└── utils/                      # Utility function tests
```

### Database Schema

The application uses a comprehensive PostgreSQL schema designed for enterprise inventory management:

- **Users** - Role-based access control (Admin, Manager, Staff)
- **Products** - Complete product information with SKU, pricing, and stock levels
- **Categories** - Hierarchical product categorization
- **Suppliers** - Supplier management with performance tracking
- **Stock Movements** - Complete audit trail of inventory changes
- **Purchase Orders** - Purchase order management with line items
- **AI Recommendations** - Machine learning predictions and suggestions

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.0.0 or higher
- **npm** 9.0.0 or higher
- **PostgreSQL** 12 or higher
- **OpenAI API Key** (for AI features)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/inv-dash.git
   cd inv-dash
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment setup**
   ```bash
   # Copy environment template
   cp .env.example .env
   
   # Edit .env with your configuration:
   # - DATABASE_URL: PostgreSQL connection string
   # - OPENAI_API_KEY: Your OpenAI API key
   # - Other required environment variables
   ```

4. **Database setup**
   ```bash
   # Generate Prisma client
   npm run db:generate
   
   # Create and migrate database
   npm run db:migrate
   
   # Seed with sample data
   npm run db:seed
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the application.

### Environment Variables

Create a `.env` file with the following variables:

```env
# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/inv_dash"

# OpenAI API Configuration
OPENAI_API_KEY="your_openai_api_key_here"

# Next.js Configuration
NEXTAUTH_SECRET="your-nextauth-secret"
NEXTAUTH_URL="http://localhost:3000"

# Application Settings
NODE_ENV="development"
```

## 🧪 Testing

This project implements **Test-Driven Development (TDD)** with comprehensive test coverage:

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### Test Structure

- **Unit Tests** - Individual component and function testing
- **Integration Tests** - API endpoint and database integration
- **Component Tests** - React component rendering and interaction
- **E2E Tests** - Complete user workflow testing

### Test Philosophy

- **Red-Green-Refactor** - TDD methodology implementation
- **Test Coverage** - Minimum 90% code coverage requirement
- **Behavior Testing** - Focus on user behavior over implementation details
- **Mock Strategy** - Strategic mocking of external dependencies

## 📊 Dashboard Features

### Key Performance Indicators (KPIs)
- **Total Products** - Complete product count with growth metrics
- **Inventory Value** - Real-time inventory valuation
- **Low Stock Alerts** - Critical stock level monitoring
- **Monthly Revenue** - Sales performance tracking

### Interactive Analytics
- **Inventory Trends** - Historical inventory level analysis
- **Sales Performance** - Revenue and sales velocity charts
- **Category Distribution** - Product category breakdown
- **Reorder Patterns** - AI-identified reorder recommendations

### AI-Powered Insights
- **Reorder Recommendations** - ML-based stock replenishment suggestions
- **Seasonal Adjustments** - Historical pattern-based demand forecasting
- **Overstock Alerts** - Excess inventory identification
- **Trend Analysis** - Market trend impact on inventory needs

## 🤖 AI Integration

### OpenAI-Powered Features

The application integrates OpenAI's API for intelligent inventory management:

1. **Demand Forecasting**
   - Historical sales data analysis
   - Seasonal pattern recognition
   - Market trend integration

2. **Reorder Optimization**
   - Lead time consideration
   - Safety stock calculation
   - Economic order quantity optimization

3. **Anomaly Detection**
   - Unusual sales pattern identification
   - Inventory discrepancy alerts
   - Supplier performance analysis

### AI Recommendation Engine

```typescript
interface AIRecommendation {
  type: 'reorder' | 'overstock' | 'seasonal' | 'trend'
  product: string
  currentStock: number
  suggestedAction: string
  reasoning: string
  confidence: number // 0-1 confidence score
  factors: {
    salesVelocity: number
    seasonalFactor: number
    leadTime: number
    safetyStock: number
  }
}
```

## 🛠️ Development

### Code Quality Standards

- **TypeScript** - Full type safety with strict mode enabled
- **ESLint** - Consistent code style enforcement
- **Prettier** - Automatic code formatting
- **Husky** - Git hooks for quality gates
- **Lint-staged** - Pre-commit code quality checks

### Development Commands

```bash
# Development server
npm run dev

# Type checking
npm run type-check

# Linting
npm run lint
npm run lint:fix

# Code formatting
npm run format
npm run format:check

# Database management
npm run db:generate    # Generate Prisma client
npm run db:push       # Push schema changes
npm run db:migrate    # Run migrations
npm run db:studio     # Open Prisma Studio
npm run db:seed       # Seed database
```

### Code Organization

- **Component Architecture** - Modular, reusable components
- **Custom Hooks** - Business logic encapsulation
- **Type Definitions** - Centralized TypeScript interfaces
- **Utility Functions** - Pure, testable helper functions
- **Constants** - Configuration and magic number elimination

## 🚀 Deployment

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

### Deployment Options

- **Vercel** - Recommended for Next.js applications
- **Docker** - Containerized deployment
- **AWS/GCP/Azure** - Cloud platform deployment
- **Traditional VPS** - Server-based deployment

### Production Considerations

- Environment variable configuration
- Database connection pooling
- CDN setup for static assets
- Monitoring and logging implementation
- Backup and disaster recovery planning

## 📚 Documentation

### Code Documentation

All code is extensively documented with:

- **JSDoc comments** - Function and class documentation
- **Type annotations** - Complete TypeScript typing
- **Inline comments** - Complex logic explanation
- **README files** - Feature-specific documentation

### Architecture Documentation

- **Database Schema** - ERD and relationship documentation
- **API Documentation** - Endpoint specifications
- **Component Library** - Storybook component documentation
- **Deployment Guide** - Production setup instructions

## 🤝 Contributing

This project is designed as a portfolio demonstration but follows enterprise development standards:

### Development Process

1. **Feature Planning** - Issue creation and discussion
2. **Branch Strategy** - Feature branch workflow
3. **Code Review** - Pull request review process
4. **Testing** - Comprehensive test coverage requirement
5. **Documentation** - Update documentation with changes

### Coding Standards

- Follow TypeScript strict mode
- Maintain test coverage above 90%
- Use semantic commit messages
- Update documentation for new features
- Follow established code patterns

## 📄 License

This project is created for demonstration purposes. Please see the LICENSE file for details.

## 🔗 Related Projects

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://prisma.io/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [OpenAI API Documentation](https://platform.openai.com/docs)

## 📞 Support

For questions, suggestions, or issues:

- **GitHub Issues** - Technical problems and bug reports
- **Documentation** - Comprehensive guides and examples
- **Code Comments** - Inline documentation and explanations

---

**Built with ❤️ using modern TypeScript, Next.js, and AI technologies for enterprise-grade inventory management**