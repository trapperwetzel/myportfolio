import { Link, useLocation } from 'react-router-dom';
import React from 'react';

export default function FloatingNote({
    imageSrc,
    imageAlt = '',
    message,
    link,
    linkText
}) {
    const location = useLocation();

    // Decide the image size class depending on the current page
    let imageSizeClass = 'h-60 w-60'; // Default size
    
    if (location.pathname === '/') {
        imageSizeClass = 'h-60 w-60'; // Home page size
    } else if (location.pathname === '/about') {
        imageSizeClass = 'h-50 w-70';
        // About page = bigger image
    } else if (location.pathname === '/projects') {
        imageSizeClass = 'h-50 w-50';
    }

    return (
        <div className="animate-float w-60 rounded-lg border border-green-500/30 bg-green-900 p-4 shadow-lg">
            {imageSrc && (
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className={`mb-2 rounded-full object-cover ${imageSizeClass}`}
                />
            )}

            <p className="text-sm whitespace-pre-wrap text-green-300">{message}</p>

            {link && linkText && (
                <Link
                    to={link}
                    className="inline-block text-sm font-bold text-green-200 hover:underline"
                >
                    {linkText}
                </Link>
            )}
        </div>
    );
}
