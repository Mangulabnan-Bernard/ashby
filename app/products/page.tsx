'use client'

import { Suspense } from 'react'
import { useState, useEffect, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ProductCard } from '@/components/ProductCard'
import { FilterTabs } from '@/components/FilterTabs'
import { products, categories } from '@/data/products'
import { Search, Filter } from 'lucide-react'

function ProductsContent() {
  const searchParams = useSearchParams()
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Set category from URL params on mount
  useEffect(() => {
    const categoryParam = searchParams.get('category')
    if (categoryParam) {
      setActiveCategory(categoryParam)
    }
  }, [searchParams])

  // Filter products based on category and search term
  const filteredProducts = useMemo(() => {
    let filtered = products

    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(product => product.category === activeCategory)
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    return filtered
  }, [activeCategory, searchTerm])

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header Section */}
      <section className="py-12 bg-gradient-to-b from-pink-50/50 to-background dark:from-pink-900/10">
        <div className="container px-4">
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Products
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover handmade accessories crafted with love
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 border-b">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products, tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-colors"
            >
              <Filter className="h-4 w-4" />
              Filters
            </button>
          </div>

          {/* Filter Tabs */}
          <div className={`${isFilterOpen ? 'block' : 'hidden'} lg:block mt-6`}>
            <FilterTabs
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container px-4">
          {/* Results Count */}
          <div className="mb-8">
            <p className="text-muted-foreground">
              {filteredProducts.length === 0 
                ? 'No products found' 
                : `Showing ${filteredProducts.length} ${filteredProducts.length === 1 ? 'product' : 'products'}`
              }
              {activeCategory !== 'all' && ` in ${activeCategory}`}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-12 w-12 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No products found
              </h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setActiveCategory('all')
                }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-lg transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Category Highlights */}
      {filteredProducts.length > 0 && (
        <section className="py-16 bg-muted/50">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Shop by Category
              </h2>
              <p className="text-muted-foreground">
                Explore our different collections
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {categories.map((category) => {
                const categoryProducts = products.filter(p => p.category === category)
                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`p-4 rounded-lg border text-center transition-all duration-200 ${
                      activeCategory === category
                        ? 'bg-pink-600 text-white border-pink-600'
                        : 'bg-card hover:border-pink-200 dark:hover:border-pink-800'
                    }`}
                  >
                    <div className="font-medium mb-1">{category}</div>
                    <div className={`text-sm ${activeCategory === category ? 'text-pink-100' : 'text-muted-foreground'}`}>
                      {categoryProducts.length} items
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center">Loading...</div>}>
      <ProductsContent />
    </Suspense>
  )
}
