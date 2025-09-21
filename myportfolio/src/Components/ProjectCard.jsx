
import githublogo from "../assets/github.jpg";

export default function ProjectCard({ title, images, programs, description, github, role, highlights, details }) {
  

  return (
    <div className="custom-slideInUp rounded-xl border border-green-500 bg-green-950 p-6 shadow-lg transition-all hover:shadow-green-500/30">
      {/* Title */}
      <h3 className="mb-4 font-mono text-2xl font-bold text-green-400">{title}</h3>

      {/* Optional Images */}
      {images && images.length > 0 && (
        <div className="mb-4 space-y-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${title} screenshot ${index + 1}`}
              className="mx-auto max-h-64 w-full rounded-md object-contain"
            />
          ))}
        </div>
      )}

      {/* Metadata */}
      <p className="mb-2 text-gray-300">
        <span className="font-semibold text-green-300">Technologies:</span> {programs}
      </p>
      <p className="mb-2 text-gray-300">
        <span className="font-bold">Role:</span> {role}
      </p>
      <p className="mb-4 text-gray-300">{description}</p>

      {/* Highlights */}
      {highlights?.length > 0 && (
        <div className="mb-4">
          <p className="font-bold text-gray-300">Highlights:</p>
          <ul className="list-inside list-disc text-gray-300">
            {highlights.map((highlight, i) => (
              <li key={i}>{highlight}</li>
            ))}
          </ul>
        </div>
      )}

      

      {/* GitHub Link */}
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 mt-4 text-green-300 hover:underline"
        >
          <img src={githublogo} alt="GitHub" className="h-6 w-6 rounded" />
          <span className="font-mono font-semibold">View on GitHub</span>
        </a>
      )}
    </div>
  );
}
