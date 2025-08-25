import {TypeAnimation} from 'react-type-animation';

const TypeWriterHeader = () => {
	return (
		<h1 className= "font-mono text-5xl font-bold text-green-400 drop-shadow-lg md:text-6xl">
		<TypeAnimation
		sequence = {[
			"Trapper's Website!",
			5000,
			"Welcome to", 
			350,
		]}
		wrapper= "span"
		speed= {75}
		repeat = {Infinity}
		/>
	</h1>

	);
};

export default TypeWriterHeader;