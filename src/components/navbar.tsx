"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react";
import { Menu, X } from "lucide-react"

export default function Navbar() {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }
        
    return (
        <nav className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-200">
            <div className="flex items-center justify-between h-16">
            
            <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                <Image
                    src="/FormLabs/Formlabs-logo-black.svg"
                    alt="Formlabs Logo"
                    width={120}
                    height={44}
                    className=""
                />
                </div>
                <div className="h-8 w-px bg-gray-300 mx-2" />
                <span className="text-base text-black">Support</span>
            </div>

            {/* Navigation links */}
            <div className="hidden lg:flex items-center space-x-8 h-full">
                <Link href="/#" className="relative text-sm text-black transition-colors group h-full flex items-center">
                    <span className="relative z-10">FAQ</span>
                    <div className="absolute bottom-0 left-0 w-full h-0 bg-blue-600 transition-all duration-300 ease-out group-hover:h-1"></div>
                </Link>
                <Link
                    href="/#"
                    className="relative text-sm text-black transition-colors group h-full flex items-center"
                >
                    <span className="relative z-10">Forums</span>
                    <div className="absolute bottom-0 left-0 w-full h-0 bg-blue-600 transition-all duration-300 ease-out group-hover:h-1"></div>
                </Link>
                <Link
                    href="/#"
                    className="relative text-sm text-black transition-colors group h-full flex items-center"
                >
                    <span className="relative z-10">Dashboard</span>
                    <div className="absolute bottom-0 left-0 w-full h-0 bg-blue-600 transition-all duration-300 ease-out group-hover:h-1"></div>
                </Link>
                <Link
                    href="/#"
                    className="relative text-sm text-black transition-colors group h-full flex items-center"
                >
                    <span className="relative z-10">Store</span>
                    <div className="absolute bottom-0 left-0 w-full h-0 bg-blue-600 transition-all duration-300 ease-out group-hover:h-1"></div>
                </Link>
                <Link
                    href="/#"
                    className="relative text-sm text-black transition-colors group h-full flex items-center"
                >
                    <span className="relative z-10">Contact Support</span>
                    <div className="absolute bottom-0 left-0 w-full h-0 bg-blue-600 transition-all duration-300 ease-out group-hover:h-1"></div>
                </Link>
                <Link
                    href="https://formlabs.com"
                    className="relative text-sm text-black transition-colors group h-full flex items-center"
                >
                    <span className="relative z-10">Back to Formlabs.com</span>
                    <div className="absolute bottom-0 left-0 w-full h-0 bg-blue-600 transition-all duration-300 ease-out group-hover:h-1"></div>
                </Link>
            </div>
            {/* Mobile menu button */}
            <div className="lg:hidden">
                <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-expanded="false"
                >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                    <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                    <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
                </button>
            </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
            <div className="lg:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
                <Link
                    href="/faq"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    FAQ
                </Link>
                <Link
                    href="/forums"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    Forums
                </Link>
                <Link
                    href="/dashboard"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    Dashboard
                </Link>
                <Link
                    href="/store"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    Store
                </Link>
                <Link
                    href="/contact-support"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    Contact Support
                </Link>
                <Link
                    href="https://formlabs.com"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    Back to Formlabs.com
                </Link>
            </div>
        </div>
        )}
            
    </div>
    </nav>
  )
}

