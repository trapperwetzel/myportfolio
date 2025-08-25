import React from 'react';
import { TypeAnimation } from 'react-type-animation'; 
import FloatingNote from './FloatingNote'
import liftingPhoto from '../assets/IMG_7711.png'
//import mountainPhoto from '../assets/IMG_7713.png'
import tCoding from '../assets/tcoding.png'
import montanaPhoto from '../assets/montanapic.png'
import keyboardpic from '../assets/keyboardpic.jpg'
import bookpic1 from '../assets/bookpic1.jpg'
//import bookpic2 from '../assets/bookpic2.jpg'


export default function About() {
  return (
      <section className="bg-gradient-to-br flex min-h-screen flex-col from-green-900 to-gray-800 px-4 text-white">
		  <div className="custom-slideInUp text-center">
              <TypeWriterAboutMe />
              
		  </div>
		  <FloatingNote
			  imageSrc={tCoding}
			  imageAlt="Picture of my tCoding logo"
              message=""
              link="/"
              linkText = "Click here to return to the Home Page"

		  />

          <div className="mt-20 flex flex-wrap items-center justify-center gap-12">
              {aboutFacts.map(fact => (
                  <div
                      key={fact.id}
                      className="animate-float w-60 rounded-lg border border-green-500/30 bg-green-900 p-4 text-center shadow-lg"
                  >
                      <img
                          src={fact.imageSrc}
                          alt={fact.imageAlt}
                          className="mx-auto mb-4 h-50 w-50 rounded-full object-cover"
                      />

                      <p className="text-sm font-bold whitespace-pre-wrap text-green-300">
                          {fact.message}
                      </p>
                  </div>
              ))}
          </div>

         <section className="custom-slideInUp animate-float space-y-4 md:space-y-6">
  <p className="text-center font-mono font-bold text-green-400 drop-shadow-lg md:text-2xl">
    I have always been interested in technology, computers specifically. I have been using computers since I was about 5 years old…
  </p>

  <p className="text-center font-mono font-bold text-green-400 drop-shadow-lg md:text-2xl">
    Goals: To become the best full‑stack developer I can possibly be, as well as being a fantastic team‑member and leader.
  </p>

  <p className="text-center font-mono font-bold text-green-400 drop-shadow-lg md:text-2xl">
    Coding Languages I am experienced in: C#, SQL, JavaScript, HTML, CSS.
  </p>

  <p className="text-center font-mono font-bold text-green-400 drop-shadow-lg md:text-2xl">
    Currently focusing on: React.JS
  </p>
</section>
      </section>
          
	  

  )
}
const aboutFacts = [
    {
        id: 1,
        imageSrc: keyboardpic,
        imageAlt: 'old keyboard',
        message: 'I love collecting old technology!\n\n Stuff like vintage monitors, keyboards, calculators, you name it.\n\n Like I mentioned previously, I have been using computers since a very young age so I have seen a bunch of different designs...\n\nThe keyboard in the picture above is one of my favorite "catches" I have had.',
    },
    {
        id: 2,
        imageSrc: montanaPhoto,
        imageAlt: '',
        message: 'I love nature, especially mountains and trees.\n\nHence my use of green throughout this website.\n\nThis picture was taken during a very steep hike in Montana with some friends.\n\nIt was a struggle but very worth it in the end!'
    },
    {
        id: 3,
        imageSrc: bookpic1,
        imageAlt: 'Books',
        message: 'I am an avid reader and collector of books.\n\nI love finding and reading old coding books and old math books.\n\nI have loved reading about neuroscience and focus related studies as of late.\n\nThough my absoloute favorite genre to read is historical non-fiction.'
    },
    {
        id: 4,
        imageSrc: liftingPhoto,
        imageAlt: 'Me deadlifting',
        message: 'The gym, specifcally powerlifting has always been a big passion of mine.\n\n I credit powerlifting for teaching me the discipline and mental strength that has helped me move foward in my programming journey!\n\n In the picture above I am deadlifting 600 pounds which was my favorite lift I have ever done... and my only good lift I have ever done'
    }
];



const TypeWriterAboutMe = () => {
	return (
		<h1 className="text-center font-mono font-bold text-green-400 drop-shadow-lg md:text-6xl">
			<TypeAnimation
				sequence={[
					"Learn More About Me!",
					5000,
					"",
					150,
				]}
				wrapper="span"
				speed={75}
				repeat={Infinity}
			/>
		</h1>

	);
};