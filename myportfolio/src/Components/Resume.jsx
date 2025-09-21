import resume from '../assets/resume.pdf';
import TypeWriterBase from "./TypeWriter/TypeWriterBase";

export default function Resume() {
  return (
    <section
      id="resume"
      className="min-h-screen font italic flex flex-col items-center justify-center px-4"
    >
      {/* Header */}
      <div className="custom-slideInUp mb-8">
        <TypeWriterBase 
              title = {"Resume"}>
        </TypeWriterBase> 
      </div>

      {/* Full-page PDF Embed */}
      <iframe
        src={resume}
        className="w-full h-[80vh] rounded-xl shadow-lg"
        title="Resume PDF"
      />
  
    </section>
  );
}
