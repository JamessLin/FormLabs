"use client"

import { useState } from "react"
import { Search, X } from "lucide-react"
import Pagination from "@/components/pagination"
import SearchResultCard from "@/components/searchResultCard"

const searchResultsData = [
  {
    title: "Form 3/Form 3B error messages",
    href: "#",
    appearsIn: [
      { name: "Troubleshooting The Form 3 (Form 3)", href: "#" },
      { name: "Troubleshooting The Form 3B (Form 3B)", href: "#" },
    ],
    readTime: 5,
    description: "Understand Form 3/Form 3B error messages, what they mean, and how to troubleshoot them.",
  },
  {
    title: "Form 3L/Form 3BL error messages",
    href: "#",
    appearsIn: [
      { name: "Troubleshooting The Form 3L (Form 3L)", href: "#" },
      { name: "Troubleshooting The Form 3BL (Form 3BL)", href: "#" },
    ],
    readTime: 5,
    description: "Understand Form 3L/Form 3BL error messages, what they mean, and how to troubleshoot them.",
  },
  {
    title: "Firmware downloads and release notes",
    href: "#",
    appearsIn: [
      { name: "Updating Firmware (Form 1+)", href: "#" },
      { name: "Updating Firmware (Form 2)", href: "#" },
      { name: "Updating Firmware (Software)", href: "#" },
      { name: "Updating Firmware (Form 3)", href: "#" },
      { name: "Updating Firmware (Form 3B)", href: "#" },
      { name: "Updating Firmware (Form 3L)", href: "#" },
      { name: "Updating Firmware (Fuse 1 Generation)", href: "#" },
      { name: "Updating Firmware (Fuse Sift)", href: "#" },
      { name: "Updating Firmware (Form 4)", href: "#" },
      { name: "Updating Firmware (Form 4L)", href: "#" },
    ],
    readTime: 12,
    description: "Formlabs regularly releases updated firmware versions to improve functionality. Review the firmware release notes to learn more about the improvements that come with each version's release.",
  },
  {
    title: "Updating Form Wash and Form Cure firmware",
    href: "#",
    appearsIn: [{ name: "Updating Firmware (Software)", href: "#" }],
    readTime: 3,
    description: "Formlabs occasionally releases updated firmware to fix bugs and improve functionality. Check your Form Wash and Form Cure firmware to ensure you're always up to date.",
  },
  {
    title: "PreForm downloads and release notes",
    href: "#",
    appearsIn: [{ name: "PreForm Software", href: "#" }],
    readTime: 2,
    description: "Formlabs regularly releases updated versions to improve functionality. Review the PreForm release notes to learn more about the improvements that come with each version's release.",
  },
]

export default function Home() {

  // These are just fake data for now. 
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages] = useState(10)

  const handleClearSearch = () => {
    setSearchQuery("")
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 300, behavior: "smooth" })
  }

  return (
    <div className="flex flex-col justify-start pt-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          <div className="w-full max-w-2xl">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-blue-600" />
              </div>

              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search our articles"
                className="w-full pl-12 pr-12 py-4 text-base border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm"
              />

              {searchQuery && (
                <button
                  onClick={handleClearSearch}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center rounded-full transition-colors"
                  aria-label="Clear search"
                >
                  <X className="h-5 w-5 text-gray-400 " />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Search Results */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-sm text-gray-600 mb-6 px-4">{searchResultsData.length} articles found</div>

        <div className="space-y-4">
          {searchResultsData.map((result, index) => (
            <SearchResultCard
              key={index}
              href={result.href}
              title={result.title}
              appearsIn={result.appearsIn}
              readTime={result.readTime}
              description={result.description}
            />
          ))}
        </div>

        {/* Pagination */}
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </div>
  );
}