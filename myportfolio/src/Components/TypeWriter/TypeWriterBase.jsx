import { TypeAnimation } from 'react-type-animation';


const TypeWriterBase = ({title}) => {
	return (
		<h1 className="drop-shadow-lg flex items-center text-center font-mono font-bold text-green-300 italic text-5xl">
			<TypeAnimation
				sequence={[
					title,
				]}
				speed={30}
                repeat={0}
			/>
		</h1>

	);
};

export default TypeWriterBase;