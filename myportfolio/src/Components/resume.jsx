import React from 'react'
import { Link } from 'react-router-dom'
import resume from '../assets/resume.pdf'  
import TypeWriterResume from '../components/resumetypewriter'
import tCoding from '../assets/tcoding.png'

export default function Resume() {
    return (
        <section className="bg-gradient-to-br min-h-screen from-green-900 to-gray-800 p-8 text-white">
            <div className= "custom-slideInUp">
               <TypeWriterResume/>
            </div>
            

           

            <iframe
                src={resume}
                className="mt-8 h-[1000px] w-full rounded-xl shadow-lg"
                title="Resume PDF"
            />
            <a
                href={resume}
                download="Trappers_Resume.pdf"
                className="custom-slideInUp left-4 mt-4 inline-block rounded-lg bg-green-600 px-6 py-3 font-mono font-bold text-green-200 shadow-lg transition hover:bg-green-700"
            >
                Download Resume
            </a>
            <Link
                    to="/"
                className="custom-slideInUp absolute top-4 left-4 rounded-lg bg-green-600 px-6 py-3 font-mono font-bold text-green-200 shadow-lg transition hover:bg-green-700"
                >
                    Return Home
            </Link>
            
        </section>
    )
}
