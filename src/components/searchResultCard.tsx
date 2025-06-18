"use client"

import { useRouter } from "next/navigation"

interface AppearsInLink {
  name: string;
  href: string;
}

interface SearchResultCardProps {
  title: string;
  appearsIn: AppearsInLink[];
  readTime: number;
  description: string;
  href: string;
}

export default function SearchResultCard({ title, appearsIn, readTime, description, href }: SearchResultCardProps) {
  const router = useRouter()

  const handleCardClick = () => {
    router.push(href)
  }

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, linkHref: string) => {
    e.stopPropagation() // Prevent card's onClick from firing
    router.push(linkHref)
  }

  return (
    <div onClick={handleCardClick} className="group p-4 transition-colors cursor-pointer rounded-lg hover:bg-gray-50 border-b border-gray-200">
      <h3 className="text-xl font-semibold mb-2 text-black group-hover:text-blue-600 transition-colors">
        <a href={href} onClick={(e) => handleLinkClick(e, href)}>
          {title}
        </a>
      </h3>
      <div className="text-sm text-gray-600 mb-2">
        <div>
          <span className="italic">Article appears in: </span>
          {appearsIn.map((link, index) => (
            <span key={index}>
              <a href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-blue-600 hover:underline">
                {link.name}
              </a>
              {index < appearsIn.length - 1 && <span>, </span>}
            </span>
          ))}
        </div>
        <div className="flex items-center text-gray-500 mt-2">
          <span className="inline-block h-1 w-1 bg-gray-400 rounded-full mr-2 mb-1"></span>
          <span>{readTime} min read</span>
        </div>
      </div>
      <p className="text-gray-800">
        {description}
      </p>
    </div>
  );
} 