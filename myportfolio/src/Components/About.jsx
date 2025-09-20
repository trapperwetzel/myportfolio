import { motion } from "framer-motion";
import Silk from "./Silk";
import portrait from "../assets/portrait.jpg";

export default function About() {
  return (
    <div className="relative min-h-screen text-white">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Silk speed={5} scale={1} color="#065f46" noiseIntensity={1} />
      </div>

      {/* Content */}
      <section className="flex min-h-screen flex-col items-center justify-center px-4 py-12">
        <div className="grid max-w-5xl gap-8 md:grid-cols-2">
          
          {/* Picture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src={portrait}
              alt="Your portrait"
              className="h-48 w-48 rounded-full border-4 border-green-500 object-cover shadow-lg shadow-green-800"
            />
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
                I am a Front-End Developer Intern with valuable experience in React.js, 
                Git, and Azure DevOps. I know I have only scratched the surface of what I 
                want to learn, but I am eager to grow, contribute, and be beneficial to 
                any project I take on.
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
                Software development is the most fulfilling thing I have done in my life. 
                I love learning and programming scratches that itch for me. I’m grateful 
                for the chance to be in this field and to do what I love every day.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <h2 className="text-green-400 text-xl">❯ senior devs:</h2>
              <p>
                Being a software developer/engineer is something I will hold with pride 
                forever. The respect and passion I have for this craft will never leave me.
				When you boil it down, the fact that we are able to define instructions and craft them in such a manner that allows us to make websites that are accesible across the world, automate tasks, do advanced calculations, etc etc.... is truly amazing and I am just fascinated by it all.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
