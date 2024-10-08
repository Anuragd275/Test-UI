"use client"

import * as React from "react"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ArrowRight, BarChart2, Bell, Heart, Search, ChevronLeft, ChevronRight, Menu, LogOut, User, Settings, ShoppingBag, ArrowUp } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
const [showScrollTop, setShowScrollTop] = useState(false)
const scrollContainerRef = useRef<HTMLDivElement>(null)

useEffect(() => {
  const handleScroll = () => {
    setShowScrollTop(window.scrollY > 300)
  }

  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const scrollProducts = (direction: 'left' | 'right') => {
  if (scrollContainerRef.current) {
    const scrollAmount = direction === 'left' ? -300 : 300
    scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }
}

return (
  <div className="flex flex-col min-h-screen bg-white">
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <BarChart2 className="h-8 w-8 text-pink-500" />
            <span className="ml-2 text-2xl font-bold text-gray-900">PriceTracker</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6 flex-grow justify-center">
            {["All", "Electronics", "Fashion", "Home", "Beauty", "Sports"].map((item) => (
              <Link key={item} href="#" className="text-gray-600 hover:text-pink-500 transition-colors">{item}</Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Input
                className="w-64 pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:bg-white transition-colors"
                placeholder="Search products..."
                type="search"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Heart className="h-5 w-5 text-pink-500" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="hidden md:flex text-black">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="flex items-center space-x-2 p-2">
                  <Avatar>
                    <AvatarImage src="/placeholder-avatar.jpg" alt="JD" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium text-black">Om shukla</p>
                    <p className="text-xs text-black">testUI@example.com</p>
                  </div>
                </div>
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  View Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Account Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  My Tracked Products
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Heart className="mr-2 h-4 w-4" />
                  Wishlist
                </DropdownMenuItem>
                <DropdownMenuItem className="text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-white">
                <div className="flex items-center space-x-2 p-4 border-b">
                  <Avatar>
                    <AvatarImage src="/placeholder-avatar.jpg" alt="JD" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium  text-black">Om Shukla</p>
                    <p className="text-xs text-black">testUI@example.com</p>
                  </div>
                </div>
                <nav className="flex flex-col space-y-4 mt-4">
                  <Input
                    className="w-full"
                    placeholder="Search products..."
                    type="search"
                  />
                  <Link href="#" className="text-gray-600 hover:text-pink-500 transition-colors">All</Link>
                  <Link href="#" className="text-gray-600 hover:text-pink-500 transition-colors">Electronics</Link>
                  <Link href="#" className="text-gray-600 hover:text-pink-500 transition-colors">Fashion</Link>
                  <Link href="#" className="text-gray-600 hover:text-pink-500 transition-colors">Kitchen</Link>
                  <Link href="#" className="text-gray-600 hover:text-pink-500 transition-colors">Beauty</Link>
                  <Link href="#" className="text-gray-600 hover:text-pink-500 transition-colors">Sports</Link>
                  <Link href="#" className="text-gray-600 hover:text-pink-500 transition-colors">
                    <Heart className="inline-block mr-2 h-5 w-5" />
                    Favorites
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-pink-500 transition-colors">
                    <Bell className="inline-block mr-2 h-5 w-5" />
                    Alerts
                  </Link>
                  <hr className="my-4" />
                  <Button variant="ghost" className="justify-start text-red-600">
                    <LogOut className="mr-2 h-5 w-5" />
                    Logout
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>

    <main className="flex-grow">
      <section className="bg-gradient-to-r from-pink-500 to-purple-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Track Prices. Save Money. Shop Smarter.
          </h1>
          <p className="text-xl mb-8">
            Monitor product prices across multiple e-commerce sites and get notified when prices drop.
          </p>
          <div className="max-w-2xl mx-auto">
            <form className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-2">
              <Input 
                className="flex-grow bg-white/10 backdrop-blur-md text-white placeholder-pink-200 border-white/20" 
                placeholder="Enter product URL to track" 
                type="url" 
              />
              <Button type="submit" className="bg-white text-pink-600 hover:bg-pink-100 transition-colors">
                Track Price
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-black">Trending Products</h2>
          <div className="relative">
            <div 
              ref={scrollContainerRef} 
              className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide"
            >
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-64"
                >
                  <Card className="overflow-hidden group">
                    <CardContent className="p-4 relative">
                      <div className="aspect-square bg-gray-200 rounded-md mb-4 relative overflow-hidden">
                        <img
                          src={`https://picsum.photos/seed/${i}/400/400`}
                          alt={`Product ${i + 1}`}
                          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-2 right-2 bg-white rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        >
                          <Heart className="h-4 w-4 text-pink-500" />
                        </Button>
                      </div>
                      <h3 className="font-semibold mb-1">Trending Product {i + 1}</h3>
                      <p className="text-sm text-gray-500 mb-2">Brand Name</p>
                      <div className="flex items-center justify-between">
                        <p className="text-lg font-bold text-pink-600">₹{(Math.random() * 10000).toFixed(2)}</p>
                        <p className="text-sm text-green-600">20% off</p>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 bg-gray-50 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button variant="outline" size="sm">View Details</Button>
                      <Button variant="ghost" size="sm">
                        <Bell className="h-4 w-4 mr-2" />
                        Set Alert
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full hidden md:flex"
              onClick={() => scrollProducts('left')}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full hidden md:flex"
              onClick={() => scrollProducts('right')}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-black">Your Tracked Products</h2>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
              <TabsTrigger value="all">All Products</TabsTrigger>
              <TabsTrigger value="favorites">Favorites</TabsTrigger>
              <TabsTrigger value="alerts">Price Alerts</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                  >
                    <Card className="overflow-hidden group">
                      <CardContent className="p-4 relative">
                        <div className="aspect-square bg-gray-200 rounded-md mb-4 relative overflow-hidden">
                          <img
                            src={`https://picsum.photos/seed/${i + 10}/400/400`}
                            alt={`Product ${i + 1}`}
                            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                          />
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-2 right-2 bg-white rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          >
                            <Heart className="h-4 w-4 text-pink-500" />
                          </Button>
                        </div>
                        <h3 className="font-semibold mb-1">Product Name {i + 1}</h3>
                        <p className="text-sm text-gray-500 mb-2">Brand Name</p>
                        <div className="flex items-center justify-between">
                          <p className="text-lg font-bold text-pink-600">₹{(Math.random() * 10000).toFixed(2)}</p>
                          <p className="text-sm text-green-600">10% off</p>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 bg-gray-100 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button variant="outline" size="sm">View History</Button>
                        <Button variant="ghost" size="sm">
                          <Bell className="h-4 w-4 mr-2" />
                          Set Alert
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="favorites">
              <div className="text-center text-gray-500">Your favorite products will appear here.</div>
            </TabsContent>
            <TabsContent value="alerts">
              <div className="text-center text-gray-500">Your price alerts will appear here.</div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">How It Works</h2>
          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto text-black">
            {[
              { icon: Search, title: "Add Products", description: "Simply paste the URL of the product you want to track. We support major e-commerce platforms." },
              { icon: BarChart2, title: "Monitor Prices", description: "We'll keep an eye on the prices and track their changes over time." },
              { icon: Bell, title: "Get Notified", description: "Receive instant notifications when prices drop or reach your desired level." }
            ].map((item, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className={`bg-${index === 0 ? 'pink' : index === 1 ? 'purple' : 'blue'}-100 p-4 rounded-full mb-4`}>
                  <item.icon className={`h-8 w-8 text-${index === 0 ? 'pink' : index === 1 ? 'purple' : 'blue'}-600`} />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>

    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About PriceTracker</h3>
            <p className="text-sm text-gray-400">
              PriceTracker helps you save money by tracking product prices across multiple e-commerce platforms.
            </p>
          </div>
          <div className="md:text-left text-center">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Home</Link></li>
              <li><Link className="text-sm text-gray-400 hover:text-white transition-colors" href="#">How It Works</Link></li>
              <li><Link className="text-sm text-gray-400 hover:text-white transition-colors" href="#">FAQs</Link></li>
              <li><Link className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Contact Us</Link></li>
            </ul>
          </div>
          <div className="md:text-left text-center">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Privacy Policy</Link></li>
              <li><Link className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Terms of Service</Link></li>
            </ul>
          </div>
          <div className="md:text-left text-center">
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex md:justify-start justify-center space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} PriceTracker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>

    {showScrollTop && (
      <Button
        className="fixed bottom-4 right-4 bg-pink-500 text-white rounded-full p-2 shadow-lg hover:bg-pink-600 transition-all duration-300"
        onClick={scrollToTop}
      >
        <ArrowUp className="h-6 w-6" />
      </Button>
    )}
  </div>
)
}