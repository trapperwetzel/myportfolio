import ProjectCard from '../components/ProjectCard'
import lifthubMainPage from '../assets/lifthubmainpage.png';

export default function Projects() { 
  const projects = [
    {
      title: 'Portfolio Website',
      image: 'lifthubmainpage.png',
      programs: 'React, Tailwind CSS, Vite',
      description: 'My personal portfolio showcasing web development projects with smooth animations.',
      github: 'https://github.com/yourusername/portfolio'
    },
    {
      title: 'To-Do List App',
      video: '', 
      programs: 'JavaScript, HTML, CSS',
      description: 'A task management app that uses a Azure Cloud database storage to save to-do items.',
      github: 'https://github.com/yourusername/todo-app'
    }
  ]

  return (
    <section className="bg-gradient-to-br custom-slideInUp flex min-h-screen flex-col items-center justify-center from-green-900 to-gray-800 px-4 text-white">
      <div className="container mx-auto">
        <h2 className="custom-slideInUp mb-8 text-center text-3xl font-bold md:text-4xl">My Projects</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              image={project.image}
              video={project.video}
              programs={project.programs}
              description={project.description}
              github={project.github}
            />
          ))}
        </div>
      </div>
    </section>
  )
}