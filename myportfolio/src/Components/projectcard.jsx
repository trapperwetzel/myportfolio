
export default function ProjectCard({ title, image, video, programs, description, github }) {
  return (
    <div className="custom-slideInUp rounded-lg bg-gray-800 p-6 shadow-md">
      <h3 className="mb-4 text-xl font-semibold text-white">{title}</h3>
      {image && (
        <img
          src={image}
          alt={title}
          className="mb-4 h-48 w-full rounded-md object-cover"
        />
      )}
      {video && (
        <video
          src={video}
          controls
          className="mb-4 h-48 w-full rounded-md object-cover"
        />
      )}
      <p className="mb-2 text-gray-300"><span className="font-bold">Programs:</span> {programs}</p>
      <p className="mb-4 text-gray-300">{description}</p>
      <a
        href={github}
        className="text-green-300 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        View on GitHub
      </a>
    </div>
  )
}