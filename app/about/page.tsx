import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Heart, Sparkles, Users } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-pink-50/50 to-background dark:from-pink-900/10">
        <div className="container px-4 py-16 md:py-24">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              About <span className="text-pink-600 dark:text-pink-400">Ashby Atelier</span>
            </h1>
            <p className="text-xl text-muted-foreground font-light">
              Our story, our passion, our handmade journey
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Ashby Atelier began as a small dream shared between friends who believed in the magic of handmade creations. 
                    What started as weekend craft sessions quickly blossomed into a passion for creating adorable accessories 
                    that bring joy to everyday moments.
                  </p>
                  <p>
                    Our name "Ashby" represents the friendship and memories that inspire each piece we create. 
                    Every bracelet, hair clip, and accessory carries a piece of our heart and the love we pour into our craft.
                  </p>
                  <p>
                    Based in Maharlika Village, Taguig, we're proud to share our handmade creations with the community 
                    and beyond, spreading cuteness one accessory at a time.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 rounded-2xl flex items-center justify-center">
                  <Heart className="w-24 h-24 text-pink-600 dark:text-pink-400" />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-pink-200 dark:bg-pink-800 rounded-full opacity-50 blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-200 dark:bg-purple-800 rounded-full opacity-50 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Philosophy
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The values that guide everything we create
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Made with Love
              </h3>
              <p className="text-muted-foreground">
                Every piece is crafted with care and attention to detail, ensuring quality that you can feel and see.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="h-8 w-8 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Spreading Joy
              </h3>
              <p className="text-muted-foreground">
                We believe cute accessories have the power to brighten days and bring smiles to faces.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Building Connections
              </h3>
              <p className="text-muted-foreground">
                Our creations are meant to be shared, gifted, and cherished - strengthening bonds between friends and loved ones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our Inspiration
              </h2>
              <p className="text-muted-foreground">
                What drives our creativity
              </p>
            </div>
            
            <div className="bg-card border rounded-xl p-8 space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <Heart className="h-5 w-5 text-pink-600 dark:text-pink-400" />
                  Friendship & Memories
                </h3>
                <p className="text-muted-foreground">
                  Many of our designs are inspired by the bonds of friendship and the precious memories we create together. 
                  Each piece tells a story and carries the warmth of shared moments.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-pink-600 dark:text-pink-400" />
                  Everyday Magic
                </h3>
                <p className="text-muted-foreground">
                  We find inspiration in the small, magical moments of everyday life - the sparkle in someone's eyes, 
                  the joy of giving a thoughtful gift, the confidence that comes from wearing something special.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <Users className="h-5 w-5 text-pink-600 dark:text-pink-400" />
                  Community & Connection
                </h3>
                <p className="text-muted-foreground">
                  Being part of the Maharlika Village community inspires us to create pieces that resonate with the people around us, 
                  reflecting local culture while embracing universal themes of love and friendship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Join Our Journey
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover handmade accessories that speak to your heart and celebrate the beauty of friendship and memories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="inline-flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Explore Our Collection
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-pink-600 text-pink-600 dark:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-900/20 font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
