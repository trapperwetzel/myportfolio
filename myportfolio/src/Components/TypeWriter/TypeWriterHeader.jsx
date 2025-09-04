import {TypeAnimation} from 'react-type-animation';

const TypeWriterHeader = () => {
	return (
		<h1 className= "font-mono text-5xl font-bold text-green-400 drop-shadow-lg md:text-6xl">
		<TypeAnimation
		sequence = {[
			"Welcome to", 
			1000,
			"Trapper's Website!",
			100000,
		]}
		wrapper= "span"
		speed= {75}
		repeat = {Infinity}
		/>
	</h1>

	);
};

export default TypeWriterHeader;