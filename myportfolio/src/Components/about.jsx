
export default function About() {
  return (
      <section className="bg-gradient-to-br custom-slideInUp flex min-h-screen flex-col items-center justify-center from-green-900 to-gray-800 px-4 text-white">
      <h2 className="custom-slideInUp mb-8 text-3xl font-bold md:text-4xl">About Me</h2>
      <div className="max-w-2xl text-center">
              <p className="custom-slideInUp mb-6 text-lg">
          I'm Trapper, a beginner web developer passionate about creating intuitive and modern websites.
          I started coding to turn my ideas into reality and enjoy solving problems through code.
        </p>
              <p className="custom-slideInUp mb-6 text-lg">
          <span className="font-bold">Goals:</span> To become a full-stack developer, contribute to open-source projects, and build apps that make a difference.
        </p>
        <p className="custom-slideInUp text-lg">
          <span className="font-bold">Coding Languages & Tools:</span> HTML, CSS, JavaScript, React, Tailwind CSS, Vite
        </p>
      </div>
    </section>
  )
}