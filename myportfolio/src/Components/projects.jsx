
import ProjectCard from '../components/ProjectCard'
import lifthubMainPage from '../assets/lifthubmainpage.png'
import escapeToEarth from '../assets/escapetoearth.png'
import TypeWriterProjectHeader from '../components/typewriterprojectsheader';
export default function Projects() {
  const projects = [
    {
      title: 'Powerlifting Video Game',
      images: [], // No images for now
      programs: 'C#, Unity',
      description: 'Powerlifting video game I am currently working on for my advanced object-oriented programming class.',
      github: 'https://github.com/trapperwetzel/Lift',
      role: 'Game Developer',
      highlights: [
        'Designed interactive gameplay mechanics',
        'Implemented physics-based lifting simulations'
      ],
      details: 'This project challenged me to combine my passion for powerlifting with game development. I focused on creating realistic lifting mechanics using Unity’s physics engine, which required learning about rigidbody dynamics and animation states.'
    },
    {
      title: 'LiftHub Website',
      images: [lifthubMainPage], // Add more PNGs if available
      programs: 'JavaScript, HTML/CSS, SQL, C#, Azure',
      description: 'LiftHub is a website with features such as a nutrition calculator and one rep max calculator. A highlight of the project is configuring and managing the connection to an Azure Cloud database.',
      github: 'https://github.com/trapperwetzel/Lifthub',
      role: 'Full Stack',
      highlights: [
        'Built nutrition and one rep max calculators',
        'Configured Azure Cloud database integration'
      ],
      details: 'LiftHub was a major learning experience in full-stack development. I handled both front-end (UI with HTML/CSS and JavaScript) and back-end (C# for logic, SQL for database queries). The biggest challenge was setting up the Azure database connection securely and optimizing query performance.'
    },
    {
      title: 'Escape to Earth Video Game',
      images: [escapeToEarth], 
      programs: 'C#, Unity',
      description: 'A collab project made in Data Structures class.',
      github: 'https://github.com/trapperwetzel/EscapeToEarth',
      role: 'Game Developer',
      highlights: [
        'Collaborated with a team to design game levels',
        'Implemented player movement and enemy AI',
        'Implemented the physics, gameplay, and animations'
      ],
      details: 'This was my first collaborative project, teaching me teamwork and version control with Git. I contributed to level design and scripting player movements, while also brainstorming the concept for the trailer to make it engaging and fun.'
    },
    {
      title: 'Mood Playlist Website',
      images: [],
      programs: 'JavaScript, HTML/CSS, C#, SQL, Azure',
      description: 'Another project for my advanced OOP class. This website allows a user to search for songs or artists based on their mood. This project also used an Azure Cloud database.',
      github: 'https://github.com/trapperwetzel/CIS_414_Playlist_Project',
      role: 'Full Stack',
      highlights: [
        'Developed mood-based search functionality',
        'Integrated Azure Cloud database for song data'
      ],
      details: 'The Mood Playlist Website required creative problem-solving to map user moods to song recommendations. I used JavaScript for the front-end logic and C# for back-end processing, with Azure SQL for storing song data. A key challenge was designing an efficient search algorithm.'
    },
    {
      title: 'My Productivity Website',
      images: [],
      programs: 'JavaScript, HTML/CSS',
      description: 'A personalized task management app that I created for my own use and to learn more javascript',
      github: 'https://github.com/trapperwetzel/myproductivity',
      role: 'Front-end',
      highlights: [
        'Built a clean and intuitive UI',
        'Implemented local storage for task persistence'
      ],
      details: 'This project was my first dive into JavaScript for dynamic web apps. I focused on creating a user-friendly interface for task management, using local storage to persist data. It taught me the basics of DOM manipulation and event handling.'
    }
  ]

  return (
    <section className="bg-gradient-to-br flex min-h-screen flex-col items-center justify-center from-green-900 to-gray-800 px-4 text-white">
      <div className="container mx-auto">
        <div className="custom-slideInUp min-h-screen- flex items-center justify-center">
            <TypeWriterProjectHeader />
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              images={project.images}
              video={project.video}
              programs={project.programs}
              description={project.description}
              github={project.github}
              role={project.role}
              highlights={project.highlights}
              details={project.details}
            />
          ))}
        </div>
      </div>
    </section>
  )
}