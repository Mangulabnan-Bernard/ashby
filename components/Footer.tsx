import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-pink-600 dark:text-pink-400">
              Ashby Atelier
            </h3>
            <p className="text-sm text-muted-foreground">
              Cute finds for cute minds ✨
            </p>
            <p className="text-sm text-muted-foreground">
              Handmade accessories made with love, friendship, and shared memories.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="/about" 
                  className="text-muted-foreground hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/products" 
                  className="text-muted-foreground hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link 
                  href="/chatbot" 
                  className="text-muted-foreground hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                >
                  Ask Assistant
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-muted-foreground hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">
              Categories
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="/products?category=Bracelet%20Making" 
                  className="text-muted-foreground hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                >
                  Bracelet Making
                </Link>
              </li>
              <li>
                <Link 
                  href="/products?category=Hair%20Clips" 
                  className="text-muted-foreground hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                >
                  Hair Clips
                </Link>
              </li>
              <li>
                <Link 
                  href="/products?category=Keychains" 
                  className="text-muted-foreground hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                >
                  Keychains
                </Link>
              </li>
              <li>
                <Link 
                  href="/products?category=Lanyards" 
                  className="text-muted-foreground hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                >
                  Lanyards
                </Link>
              </li>
              <li>
                <Link 
                  href="/products?category=For%20School%20Purposes" 
                  className="text-muted-foreground hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                >
                  For School Purposes
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Ashby Atelier. All rights reserved. Made with 💕
          </p>
        </div>
      </div>
    </footer>
  )
}
