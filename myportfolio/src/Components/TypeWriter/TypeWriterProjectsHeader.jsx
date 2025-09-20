import { TypeAnimation } from 'react-type-animation';


const TypeWriterProjectsHeader = () => {
	return (
		<h1 className="rop-shadow-lg flex items-center text-center font-mono font-bold text-green-500 italic md:text-4xl">
			<TypeAnimation
				sequence={[
					"Projects",
					10000,
					

				]}
				wrapper="span"
				speed={75}
				repeat={Infinity}
			/>
		</h1>

	);
};

export default TypeWriterProjectsHeader;