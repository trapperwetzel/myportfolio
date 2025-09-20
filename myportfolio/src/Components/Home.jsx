import { Link } from "react-router-dom";
import TypeWriterHeader from "./TypeWriter/TypeWriterHeader";
import Silk from "./Silk";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center text-white">
      {/* Silk Background */}
      <div className="absolute inset-0 -z-10">
        <Silk speed={5} scale={1} color="#065f46" noiseIntensity={1} />
      </div>

      {/* Hero + Card-Nav Section */}
      <section className="relative w-full overflow-hidden py-32 text-center">
        <div className="relative z-10 mx-auto max-w-3xl px-4">
          <div className="custom-slideInUp">
            <TypeWriterHeader /> 
          </div>

          {/* NAV-CARDS GRID */}
          <div className="custom-slideInUp mx-auto mt-12 grid max-w-3xl grid-cols-1 justify-items-center gap-8 px-4 sm:grid-cols-3">
            {/* About Me Card */}
            <Link
              to="/about"
              className="animate-float flex w-60 flex-col rounded-lg border border-green-500/30 bg-green-900 p-6 shadow-lg transition-shadow duration-300 hover:shadow-green-500/40"
            >
              <h3 className="mb-2 text-2xl font-semibold font-mono text-green-300">
                About Me
              </h3>
            </Link>

            {/* Projects Card */}
            <Link
              to="/projects"
              className="animate-float flex w-60 flex-col rounded-lg border border-green-500/30 bg-green-900 p-6 shadow-lg transition-shadow duration-300 hover:shadow-green-500/40"
            >
              <h3 className="mb-2 text-2xl font-semibold text-green-300">
                Projects
              </h3>
            </Link>

            {/* Resume Card */}
            <Link
              to="/resume"
              className="animate-float flex w-60 flex-col rounded-lg border border-green-500/30 bg-green-900 p-6 shadow-lg transition-shadow duration-300 hover:shadow-green-500/40"
            >
              <h3 className="mb-2 text-2xl font-semibold text-green-300">
                Resume
              </h3>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
