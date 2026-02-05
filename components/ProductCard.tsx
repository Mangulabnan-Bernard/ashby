'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Product } from '@/data/products'
import { X, Heart } from 'lucide-react'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div 
        className="group cursor-pointer bg-card rounded-xl border shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
        onClick={() => setShowModal(true)}
      >
        <div className="aspect-square relative overflow-hidden bg-muted">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-200 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={(e) => {
                e.stopPropagation()
                // Add to favorites logic here
              }}
              className="bg-white/90 dark:bg-black/90 p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-black transition-colors"
            >
              <Heart className="h-4 w-4 text-pink-600 dark:text-pink-400" />
            </button>
          </div>
        </div>
        
        <div className="p-4 space-y-2">
          <h3 className="font-semibold text-foreground line-clamp-1">
            {product.name}
          </h3>
          <p className="text-lg font-bold text-pink-600 dark:text-pink-400">
            ₱{product.price}
          </p>
          <div className="flex flex-wrap gap-1">
            {product.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="bg-card rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 z-10 bg-white/90 dark:bg-black/90 p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-black transition-colors"
              >
                <X className="h-5 w-5 text-foreground" />
              </button>
              
              <div className="aspect-square relative bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  {product.name}
                </h2>
                <p className="text-xl font-bold text-pink-600 dark:text-pink-400">
                  ₱{product.price}
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-2">
                  Category
                </h3>
                <span className="inline-block px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full text-sm">
                  {product.category}
                </span>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-2">
                  Description
                </h3>
                <p className="text-muted-foreground">
                  {product.description}
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-2">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <button className="w-full bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                  Contact for Order
                </button>
                <p className="text-xs text-muted-foreground text-center mt-2">
                  No checkout available - contact us directly to order
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
