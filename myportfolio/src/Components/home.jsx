
import { Link } from 'react-router-dom'
import FloatingNote from '../components/FloatingNote'
import TypeWriterHeader from '../components/typewriterheader';
import TypeWriterSecondHeader from '../components/typewritersecondheader';

export default function Home() {
  return (
    <div className="bg-gradient-to-br flex min-h-screen flex-col items-center justify-center from-green-900 to-gray-800 text-white">
      {/* Floating Note */}
      <FloatingNote 
              message="Hey! I'm Trapper! Want to learn about me? Well... click the About me section!"
              link="/about"
              linkText="Learn more about what intrests me, and motivates me everyday!"
          />

      {/* Hero + Card-Nav Section */}
      <section className="relative w-full overflow-hidden py-32 text-center">
        {/* Foreground: title, subtitle, then nav-cards */}
        <div className="relative z-10 mx-auto max-w-3xl px-4">
        <div className= "custom-slideInUp">
            <TypeWriterHeader/>
            <TypeWriterSecondHeader/>
        </div>
          {/* NAV-CARDS GRID */}
          <div className="custom-slideInUp mx-auto mt-12 grid max-w-3xl grid-cols-1 justify-items-center gap-8 px-4 sm:grid-cols-3">
            {/* About Me Card */}
            <Link
              to="/about"
              className="animate-float flex w-60 flex-col rounded-lg border border-green-500/30 bg-green-900 p-6 shadow-lg transition-shadow duration-300 hover:shadow-green-500/40"
            >
              <h3 className="mb-2 text-2xl font-semibold text-green-300">
                About Me
              </h3>
              <p className="text-gray-300">Learn more about me.</p>
            </Link>

            {/* Projects Card */}
            <Link
              to="/projects"
              className="animate-float flex w-60 flex-col rounded-lg border border-green-500/30 bg-green-900 p-6 shadow-lg transition-shadow duration-300 hover:shadow-green-500/40"
            >
              <h3 className="mb-2 text-2xl font-semibold text-green-300">
                Projects
              </h3>
              <p className="text-gray-300">Check out my work.</p>
            </Link>

            {/* Resume Card */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-float flex w-60 flex-col rounded-lg border border-green-500/30 bg-green-900 p-6 shadow-lg transition-shadow duration-300 hover:shadow-green-500/40"
            >
              <h3 className="mb-2 text-2xl font-semibold text-green-300">
                Resume
              </h3>
              <p className="text-gray-300">Download my CV.</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
