import ProjectCard from './ProjectCard';
import TypeWriterProjectHeader from './TypeWriter/TypeWriterProjectsHeader';

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
    },
    {
      title: 'LiftHub Website',
      programs: 'JavaScript, HTML/CSS, SQL, C#, Azure',
      description: 'LiftHub is a collab website project with features such as a nutrition calculator and one rep max calculator, with an Azure Cloud database backend.',
      github: 'https://github.com/trapperwetzel/Lifthub',
      role: 'Full Stack',
      highlights: [
        'Built nutrition and one rep max calculators',
        'Configured Azure Cloud database'
      ],
    },
    {
      title: 'Mood Playlist Website',
      programs: 'JavaScript, HTML/CSS, C#, SQL, Azure',
      description: 'A project that was created for my Advanced Object Oriented Programming class. This is a website that lets users search for songs/artists based on mood, powered by an Azure Cloud database.',
      github: 'https://github.com/trapperwetzel/CIS_414_Playlist_Project',
      role: 'Full Stack',
      highlights: [
        'Developed mood-based search functionality',
        'Integrated Azure Cloud database for song data'
      ],
      
    },
    {
      title: 'Escape to Earth Video Game',
      programs: 'C#, Unity',
      description: 'A collaborative project made in Data Structures class.',
      github: 'https://github.com/trapperwetzel/EscapeToEarth',
      role: 'Game Developer',
      highlights: [
        'Collaborated with a team to design game levels',
        'Implemented player movement and enemy AI',
        'Implemented physics, gameplay, and animations'
      ],
    },
    
  ];

  return (
    <div id = "projects" className="min-h-screen flex flex-col items-center justify-center ">
      {/* Header */}
      <div className="custom-slideInUp mb-12">
        <TypeWriterProjectHeader />
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
