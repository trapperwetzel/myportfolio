import { motion } from "framer-motion";
import portrait from "../assets/portrait.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import TypeWriterBase from "./TypeWriter/TypeWriterBase";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12"
    >
      <div className="grid max-w-5xl gap-8 md:grid-cols-2">
        {/* Picture + Name + Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center space-y-4"
        >
          <img
            src={portrait}
            alt="Your portrait"
            className="h-52 w-52 rounded-full border-4 border-green-500 object-cover shadow-lg shadow-green-800"
          />

          {/* Name */}
          <h1>
            <TypeWriterBase 
              title = {"Trapper Wetzel"}>
            </TypeWriterBase> 
          </h1>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/trapperwetzel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-300 hover:text-green-400 transition-colors"
            >
              <FaGithub size={45} />
            </a>
            <a
              href="https://www.linkedin.com/in/trapper-wetzel-15ab18269/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-300 hover:text-green-400 transition-colors"
            >
              <FaLinkedin size={45} />
            </a>
          </div>
        </motion.div>

        
        <div className="font-mono space-y-6 text-green-300">
          {/* whoami */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h2 className="text-green-400 text-xl">❯ whoami</h2>
            <p>
              Hi, I’m Trapper — a Front-End Developer Intern (previously QA) with hands-on industry experience working with React.js, Git, and Azure DevOps.
              <br /><br />
              A big part of my current role involves using TanStack Query (formerly React Query)  to restructure our service calls, which has taught me a lot about how data flows through an application. It’s helped me connect the dots between APIs, caching, and performance — and made me realize how much I enjoy working with APIs and turning data into something usable.
              <br /><br />
              On the side, I’ve been having fun diving deeper into JavaScript on the backend with Node.js, as well as exploring the Linux ecosystem for personal and educational use.
              I love not just learning, but striving to be great in something. I really enjoy building projects that allow me to grow as a programmer while also solving issues for others and myself — the perfect combo!
            </p>
          </motion.div>
      
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h2 className="text-green-400 text-xl">❯ skills</h2>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-md text-green-300">
            <li><strong>Languages:</strong> JavaScript, C#, Python, SQL</li>
            <li><strong>Technologies:</strong> React.js, Tanstack Query</li>
            <li><strong>Tools:</strong> Git, Azure DevOps, Linux</li>
            <li><strong>Currently Learning:</strong> Node.JS, TypeScript, PostgreSQL</li>
          </ul>
      </motion.div>
        </div>
      </div>
    </section>
  );
}
