﻿
import { useState } from 'react'

export default function ProjectCard({ title, images, programs, description, github, role, highlights, details }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="custom-slideInUp rounded-xl border border-green-500 bg-green-950 p-6 shadow-lg transition-all hover:shadow-green-500/30">
     <h3 className="mb-4 font-mono text-2xl font-bold text-green-400">{title}</h3>
      {images && images.length > 0 && (
        <div className="mb-4 space-y-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${ title } screenshot ${ index + 1 } `}
              className="mx-auto max-h-64 w-full rounded-md object-contain"
            />
          ))}
        </div>
      )}
      
      <p className="mb-2 text-gray-300"><span className="font-semibold text-green-300">Programs:</span> {programs}</p>
      <p className="mb-2 text-gray-300"><span className="font-bold">Role:</span> {role}</p>
      <p className="mb-4 text-gray-300">{description}</p>
      {highlights && highlights.length > 0 && (
        <div className="mb-4">
          <p className="font-bold text-gray-300">Highlights:</p>
          <ul className="list-inside list-disc text-gray-300">
            {highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
      )}
      {details && (
        <div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-green-300 hover:underline mb-2 focus:outline-none"
          >
            {isExpanded ? 'Show Less' : 'Learn More'}
          </button>
          {isExpanded && (
            <div className="text-gray-300 transition-all duration-300">
              {details}
            </div>
          )}
        </div>
      )}
      <a
        href={github}
        className="flex items-center space-x-2 text-green-300 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-green-300"
        >
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.332-1.754-1.332-1.754-1.087-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.304 3.495.998.108-.776.417-1.304.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z" />
        </svg>
        <span className="font-mono font-semibold">View on GitHub</span>
      </a>
    </div>
  )
}