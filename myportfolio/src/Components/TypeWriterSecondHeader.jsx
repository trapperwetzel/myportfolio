import {TypeAnimation} from 'react-type-animation';

const TypeWriterSecondHeader = () => {
	return (
		<h2 className= "font-mono text-5xl font-bold text-green-200 drop-shadow-lg md:text-2xl">
		<TypeAnimation
		sequence = {[
			"Aspiring Full Stack Web Developer",
					5000,
					"",
			100,
			
		]}
		wrapper= "span"
		speed= {60}
		repeat = {Infinity}
		/>
	</h2>

	);
};

export default TypeWriterSecondHeader;