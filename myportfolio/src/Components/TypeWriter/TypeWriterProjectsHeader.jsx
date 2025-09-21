import { TypeAnimation } from 'react-type-animation';


const TypeWriterProjectsHeader = () => {
	return (
		<h1 className="drop-shadow-lg flex items-center text-center font-mono font-bold text-green-300 italic md:text-4xl">
			<TypeAnimation
				sequence={[
					"Projects",
					
				]}
				speed={30}
                repeat={0}
			/>
		</h1>

	);
};

export default TypeWriterProjectsHeader;