
import ProjectCard from './ProjectCard'
import TypeWriterProjectHeader from '../TypeWriter/TypeWriterProjectsHeader'
import FloatingNote from '../FloatingNote'
export default function Projects() {

    
  const projects = [  
      {
      title: 'WrestlerAPI',
      programs: 'Node.JS, React.JS, HTML/CSS',
      description: 'WrestlerAPI is a web application that fetches wrestling data from the Wiki API, parses it into JSON, and displays it using a dynamic React interface.',
      github: 'https://github.com/trapperwetzel/WrestlerAPI',
      role: 'Front-end Developer',
      highlights: [
        'Integrated Wiki API for real-time wrestling data',
        'Parsed and transformed API responses into structured JSON',
        'Rendered data in an interactive, user-friendly React UI'
      ],
      details: 'This project demonstrates my ability to work with external APIs, handle asynchronous data flows, and build modern front-end experiences.'
    },  
    {
      title: 'LiftHub Website',
      programs: 'JavaScript, HTML/CSS, SQL, C#, Azure',
      description: 'LiftHub is a website with features such as a nutrition calculator and one rep max calculator. A highlight of the project is configuring and managing the connection to an Azure Cloud database.',
      github: 'https://github.com/trapperwetzel/Lifthub',
      role: 'Full Stack',
      highlights: [
        'Built nutrition and one rep max calculators',
        'Configured Azure Cloud database'
      ],
      details: 'LiftHub was a major learning experience in full-stack development. I handled both front-end (UI with HTML/CSS and JavaScript) and back-end (C# for logic, SQL for database queries). The biggest challenge was setting up the Azure database connection securely and optimizing query performance.'
    },
    {
      title: 'Escape to Earth Video Game',
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
      details: 'The Mood Playlist Website required creative problem-solving to map user moods to song recommendations. I used JavaScript for the front-end logic and C# for back-end processing, with Azure SQL for storing song data.'
    },
    {
      title: 'My Productivity Website',
      programs: 'JavaScript, HTML/CSS',
      description: 'A personalized task management app that I created for my own use and to learn more javascript',
      github: 'https://github.com/trapperwetzel/myproductivity',
      role: 'Front-end',
      highlights: [
        'Built a clean and intuitive UI',
        'Implemented local storage for task persistence'
      ],
      details: 'This project was my first dive into JavaScript for dynamic web apps. I focused on the style of website I liked, and task management helpers that I wanted to use. To-Do-Lists, Pomodoro timers and Note taking capabilties make this something I use for myself daily!'
    }
  ]

  return (
    <section className="bg-gradient-to-br flex min-h-screen flex-col items-center justify-center from-green-900 to-gray-800 px-4 text-white">
      <div className="container mx-auto">
        <div className="custom-slideInUp min-h-screen- flex items-center justify-center">
            <TypeWriterProjectHeader />
              </div>
              <FloatingNote
                  imageSrc=''
                  imageAlt="Picture of my tCoding logo"
                  message=""
                  link="/"
                  linkText="Click here to return to the Home Page"

              />
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
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