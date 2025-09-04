import {TypeAnimation} from 'react-type-animation';

const TypeWriterSecondHeader = () => {
	return (
		<h2 className= "font-mono text-5xl font-bold text-green-200 drop-shadow-lg md:text-2xl">
		<TypeAnimation
		sequence = {[
			
			"A Front End Developer Intern",
			3000,
			"Currently loving these technologies",
			500,
			"React",
			500,
			"Node.JS",
			500,
			"Linux (arch btw)",
			500,
			""
			
		]}
		wrapper= "span"
		speed= {60}
		repeat = {Infinity}
		/>
	</h2>
	
	);
};

export default TypeWriterSecondHeader;