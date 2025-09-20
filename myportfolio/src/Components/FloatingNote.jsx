import { Link, useLocation } from "react-router-dom";
import React from "react";

export default function FloatingNote({
  imageSrc,
  imageAlt = "",
  message,
  link,
  linkText,
}) {
  const location = useLocation();

  // Tailwind-safe sizes
  let imageSizeClass = "h-40 w-40"; // default

  if (location.pathname === "/") {
    imageSizeClass = "h-40 w-40"; // Home page
  } else if (location.pathname === "/about") {
    imageSizeClass = "h-48 w-48"; // About page = bigger image
  } else if (location.pathname === "/projects") {
    imageSizeClass = "h-36 w-36"; // Projects = smaller
  }

  return (
    <div className="w-60 rounded-lg border border-green-500/30 bg-green-900 p-4 shadow-lg">
      {imageSrc && (
        <div className="flex justify-center">
          <img
            src={imageSrc}
            alt={imageAlt}
            className={`mb-3 rounded-full object-cover ${imageSizeClass} animate-float`}
          />
        </div>
      )}

      {message && (
        <p className="mb-2 whitespace-pre-wrap text-center text-green-300">
          {message}
        </p>
      )}

      {link && linkText && (
        <div className="text-center">
          <Link
            to={link}
            className="inline-block font-bold text-green-200 hover:underline"
          >
            {linkText}
          </Link>
        </div>
      )}
    </div>
  );
}
