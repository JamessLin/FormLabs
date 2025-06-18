import { Facebook, Twitter, Instagram, Linkedin, Globe, ChevronDown } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Social Media */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Image
                src="/FormLabs/Formlabs-logo-white.svg"
                alt="Formlabs Logo"
                width={160}
                height={64}
                className="w-auto h-10"
              />
              {/* <span className="text-lg font-medium text-white">formlabs</span> */}
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-medium mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Printers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Materials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Software
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Industries
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Formlabs Dental
                </a>
              </li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h3 className="text-white font-medium mb-4">Learn</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Forum
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-white font-medium mb-4">Help</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  All Service Plans
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Dental Service Plan
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Support Articles
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Support Request
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Contact Sales
                </a>
              </li>
            </ul>
          </div>

          {/* Language Selector */}
          <div>
            <div className="flex items-center space-x-2 text-white">
              <Globe className="h-4 w-4" />
              <span>English</span>
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className=" mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">© Formlabs 2025</div>
          <div className="text-gray-400 text-sm mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="mx-2">•</span>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <span className="mx-2">•</span>
            <a href="#" className="hover:text-white transition-colors">
              Shipping & Returns
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
