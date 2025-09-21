import ProjectCard from './ProjectCard';
import TypeWriterProjectHeader from './TypeWriter/TypeWriterProjectsHeader';

export default function Projects() {
  const projects = [
    
    {
      title: 'LiftHub Website',
      programs: 'JavaScript/HTML/CSS, MSSQL, C#, Azure',
      description: 'LiftHub is a collab website project with features such as a nutrition calculator and one rep max calculator, with an Azure Cloud database backend.',
      github: 'https://github.com/trapperwetzel/Lifthub',
      role: 'Full-Stack Developer',
      highlights: [
        'Built nutrition and one rep max calculators',
        'Azure Cloud database',
        'M-V-C Design Pattern'
      ],
    },
    {
      title: 'WrestlerAPI',
      programs: 'Node.JS, React.JS + Tanstack Query, Javascript/HTML/CSS',
      description: 'WrestlerAPI is a web application that fetches wrestling data from the Wiki API, parses it into JSON, and displays it using a dynamic React interface.',
      github: 'https://github.com/trapperwetzel/WrestlerAPI',
      role: 'Full Stack Developer', 
     highlights: [
      'Fetched and merged wrestling data from multiple Wiki APIs',
      'Interactive React interface for filtering, sorting, and exploring championship stats',
      'Planned PostgreSQL integration and daily automated updates'
      ],
    },
    {
      title: 'Mood Playlist Website',
      programs: 'JavaScript/HTML/CSS, C#, MSSQL, Azure',
      description: 'A project that was created for my Advanced Object Oriented Programming class. This is a website that lets users search for songs/artists based on mood, powered by an Azure Cloud database.',
      github: 'https://github.com/trapperwetzel/CIS_414_Playlist_Project',
      role: 'Full-Stack Developer',
      highlights: [
        'Developed mood-based search functionality',
        'Azure Cloud database',
        'M-V-C Design Pattern'
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
