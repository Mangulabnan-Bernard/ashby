import Link from 'next/link'
import { ArrowRight, Sparkles, Heart } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container px-4 py-16 md:py-24">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 dark:bg-pink-900/30 rounded-full text-pink-700 dark:text-pink-300 text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              Welcome to Ashby Atelier
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              <span className="text-pink-600 dark:text-pink-400">Ashby Atelier</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Cute finds for cute minds ✨
            </p>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Handmade accessories made with love, friendship, and shared memories. 
              Each piece is carefully crafted to bring joy and beauty to your everyday life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link 
                href="/products"
                className="inline-flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
              >
                Browse Products
                <ArrowRight className="h-4 w-4" />
              </Link>
              
              <Link 
                href="/chatbot"
                className="inline-flex items-center justify-center gap-2 border border-pink-600 text-pink-600 dark:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-900/20 font-medium py-3 px-8 rounded-lg transition-colors"
              >
                Ask Our Assistant
                <Heart className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative Background */}
        <div className="absolute inset-0 -z-10 opacity-5 dark:opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-pink-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-300 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Choose Ashby Atelier?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We put our heart into every piece we create
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Handmade with Love
              </h3>
              <p className="text-muted-foreground">
                Every accessory is carefully crafted by hand, ensuring unique quality and attention to detail.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="h-8 w-8 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Cute & Trendy Designs
              </h3>
              <p className="text-muted-foreground">
                Stay stylish with our adorable designs that capture the latest trends while maintaining timeless appeal.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mx-auto">
                <ArrowRight className="h-8 w-8 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Made for You
              </h3>
              <p className="text-muted-foreground">
                Whether for school, daily wear, or special occasions, we have the perfect accessory for every moment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Explore Our Collections
            </h2>
            <p className="text-muted-foreground">
              Discover cute accessories for every style and occasion
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { name: 'Bracelet Making', emoji: '📿', href: '/products?category=Bracelet%20Making' },
              { name: 'Hair Clips', emoji: '🎀', href: '/products?category=Hair%20Clips' },
              { name: 'Keychains', emoji: '🔑', href: '/products?category=Keychains' },
              { name: 'Lanyards', emoji: '📱', href: '/products?category=Lanyards' },
              { name: 'For School', emoji: '📚', href: '/products?category=For%20School%20Purposes' },
            ].map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="group bg-card border rounded-xl p-6 text-center hover:shadow-md transition-all duration-200 hover:border-pink-200 dark:hover:border-pink-800"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {category.emoji}
                </div>
                <h3 className="font-medium text-foreground text-sm">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Find Your Perfect Accessory?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Browse our collection of handmade accessories and find the perfect piece that speaks to your style.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
          >
            Shop Now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
