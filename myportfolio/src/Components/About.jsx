import React from 'react';
import { TypeAnimation } from 'react-type-animation'; 
import FloatingNote from './FloatingNote'
import aboutmetext from './TypeWriter/aboutmetext';

export default function About() {
  return (
      <section className="bg-gradient-to-br flex min-h-screen flex-col from-green-900 to-gray-800 px-4 text-white">
		  <div className = "mt-10 sm:mt-16">
		  <FloatingNote
              message=""
              link="/"
              linkText = "Click here to return to the Home Page"
		  />
          </div>
          <div className="custom-slideInUp text-center">
              <TypeWriterAboutMe />
		  </div>
          
      </section>

  )
}




const TypeWriterAboutMe = () => {
	return (
		<h1 className="text-center font-mono font-bold text-green-400 drop-shadow-lg md:text-6xl">
			<TypeAnimation
				sequence={[
					aboutmetext,
				]}
				wrapper="span"
				speed={100}
				
			/>
		</h1>

	);
};