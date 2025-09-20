import { motion } from "framer-motion";
import portrait from "../assets/portrait.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
            className="h-48 w-48 rounded-full border-4 border-green-500 object-cover shadow-lg shadow-green-800"
          />

          {/* Name */}
          <h1 className="font-mono text-2xl font-bold text-green-300">
            Trapper Wetzel
          </h1>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/trapperwetzel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-300 hover:text-green-400 transition-colors"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/trapper-wetzel-15ab18269/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-300 hover:text-green-400 transition-colors"
            >
              <FaLinkedin size={28} />
            </a>
          </div>
        </motion.div>

        {/* About Text */}
        <div className="font-mono space-y-6 text-green-300">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h2 className="text-green-400 text-xl">❯ whoami</h2>
            <p>
              I am a Front-End Developer Intern with valuable experience in React.js, Git, and Azure DevOps. I know I have only scratched the surface of what I want to learn, but I am eager to grow, contribute, and be beneficial to any project I take on.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h2 className="text-green-400 text-xl">❯ experience</h2>
            <p>
              Transitioning from a QA Intern to a Developer has only motivated me further to keep improving my skills. The opportunity to work with modern technologies such as React.js early in my career has been incredibly rewarding. I’ve also enjoyed diving into Node.js and exploring JavaScript more deeply as a whole. Right now, I’m focusing on building stronger fundamentals in networking and algorithms, while also nurturing my passion for Linux and the open-source ecosystem.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <h2 className="text-green-400 text-xl">❯ motivation</h2>
            <p>
              Software development is the most fulfilling thing I have done in my life. I love learning and programming scratches that itch for me. I’m grateful for the chance to be in this field and to do what I love every day.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <h2 className="text-green-400 text-xl">❯ to the senior devs:</h2>
            <p>
              When you boil it down, the fact that we are able to define instructions and craft them in such a manner that allows us to make websites that are accessible across the world, automate tasks, do advanced calculations, etc etc…. is truly amazing and I am just fascinated by it all. Being a software developer/engineer is something I will hold with pride forever. The respect and passion I have for this craft will never leave me.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
