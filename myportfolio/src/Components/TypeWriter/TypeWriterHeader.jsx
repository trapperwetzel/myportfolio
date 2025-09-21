import {TypeAnimation} from 'react-type-animation';

const TypeWriterHeader = () => {
	return (
		<h1 className= "font-mono text-4xl font-bold text-green-300">
		<TypeAnimation
		sequence = {[
			"Trapper Wetzel", 
			
		]}
		wrapper= "span"
		speed= {30}
		repeat = {0}
		/>
	</h1>

	);
};

export default TypeWriterHeader;