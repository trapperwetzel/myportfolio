import resume from '../assets/resume.pdf';
import TypeWriterResume from './TypeWriter/TypeWriterResume';

export default function Resume() {
  return (
    <section
      id="resume"
      className="min-h-screen flex flex-col items-center justify-center px-4 text-white"
    >
      {/* Header */}
      <div className="custom-slideInUp mb-8">
        <TypeWriterResume />
      </div>

      {/* Full-page PDF Embed */}
      <iframe
        src={resume}
        className="w-full h-[80vh] rounded-xl shadow-lg"
        title="Resume PDF"
      />

      {/* Download Button */}
      <a
        href={resume}
        download="Trappers_Resume.pdf"
        className="custom-slideInUp mt-6 inline-block rounded-lg bg-green-600 px-6 py-3 font-mono font-bold text-green-200 shadow-lg transition hover:bg-green-700"
      >
        Download Resume
      </a>

      {/* Back to Top */}
      <a
        href="#hero"
        className="mt-4 inline-block font-mono text-sm text-green-400 hover:underline"
      >
        ↑ Back to Top 
      </a>
    </section>
  );
}
