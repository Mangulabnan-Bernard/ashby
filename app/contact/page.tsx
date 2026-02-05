import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { MapPin, Phone, Mail, Clock, Heart, MessageCircle } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-pink-50/50 to-background dark:from-pink-900/10">
        <div className="container px-4 py-16 md:py-24">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Get in <span className="text-pink-600 dark:text-pink-400">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground font-light">
              We'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Temporarily Closed Notice */}
      <section className="py-8">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200">
                  Temporarily Closed
                </h3>
              </div>
              <p className="text-yellow-700 dark:text-yellow-300">
                Our physical store is temporarily closed, but we're still available for online orders and inquiries!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Details */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Contact Information
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-pink-600 dark:text-pink-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Location</h3>
                        <p className="text-muted-foreground">
                          Maharlika Village<br />
                          Taguig, Philippines
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-pink-600 dark:text-pink-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                        <p className="text-muted-foreground">
                          <a href="tel:+639070213521" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                            +63 907 021 3521
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-pink-600 dark:text-pink-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Email</h3>
                        <p className="text-muted-foreground">
                          <a href="mailto:hello@ashbyatelier.com" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                            hello@ashbyatelier.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Business Hours
                  </h3>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Monday - Friday</span>
                        <span className="text-foreground">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Saturday</span>
                        <span className="text-foreground">10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sunday</span>
                        <span className="text-foreground">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    How to Order
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="bg-card border rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <MessageCircle className="h-4 w-4 text-pink-600 dark:text-pink-400" />
                        1. Browse Products
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Explore our collection of handmade accessories on the Products page to find items you love.
                      </p>
                    </div>

                    <div className="bg-card border rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Phone className="h-4 w-4 text-pink-600 dark:text-pink-400" />
                        2. Contact Us
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Call or message us with your order details. We'll confirm availability and pricing.
                      </p>
                    </div>

                    <div className="bg-card border rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Heart className="h-4 w-4 text-pink-600 dark:text-pink-400" />
                        3. Receive Your Order
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        We'll arrange delivery or pickup for your handmade accessories. Payment options available upon confirmation.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Custom Orders */}
                <div className="bg-pink-50 dark:bg-pink-900/20 border border-pink-200 dark:border-pink-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Custom Orders Welcome! 🌸
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Have something special in mind? We love creating custom pieces! Whether you want specific colors, designs, or personalized accessories, we're here to bring your vision to life.
                  </p>
                  <Link
                    href="/chatbot"
                    className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm"
                  >
                    Ask About Custom Orders
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              Find Us
            </h2>
            <div className="bg-card border rounded-xl overflow-hidden">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <div className="text-center space-y-4">
                  <MapPin className="h-12 w-12 text-pink-600 dark:text-pink-400 mx-auto" />
                  <div>
                    <h3 className="font-semibold text-foreground">Maharlika Village, Taguig</h3>
                    <p className="text-muted-foreground">Philippines</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Map view coming soon! For now, please contact us for directions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Do you ship nationwide?
                </h3>
                <p className="text-muted-foreground text-sm">
                  Yes, we ship across the Philippines! Shipping fees and delivery times vary by location.
                </p>
              </div>

              <div className="bg-card border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  What payment methods do you accept?
                </h3>
                <p className="text-muted-foreground text-sm">
                  We accept cash, bank transfer, GCash, and other digital payment methods.
                </p>
              </div>

              <div className="bg-card border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  How long does delivery take?
                </h3>
                <p className="text-muted-foreground text-sm">
                  Local deliveries in Taguig typically take 1-2 days. Provincial shipping takes 3-7 days.
                </p>
              </div>

              <div className="bg-card border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Can I return or exchange items?
                </h3>
                <p className="text-muted-foreground text-sm">
                  Due to the handmade nature of our products, we don't accept returns. However, we'll address any quality issues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
