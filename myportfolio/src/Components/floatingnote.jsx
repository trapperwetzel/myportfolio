import { Link } from 'react-router-dom'

export default function FloatingNote({message, link, linkText }) {
  return (
    <div className="animate-float absolute top-4 left-4 w-48 rounded-lg border border-green-500/30 bg-green-900 p-4 shadow-lg">
      <p className="text-sm text-gray-300"> {message} </p>
          {link && linkText && (
              <Link
                  to={link}
                  className="mt-2 inline-block text-sm text-green-300 hover:underline"
              >
                  {linkText}
              </Link>
          )}
    </div>
  )
}