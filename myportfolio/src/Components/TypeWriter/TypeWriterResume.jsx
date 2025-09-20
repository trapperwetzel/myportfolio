
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TypeWriterResume= () => {
    return (
        <h1 className="justify-center text-center font-mono font-bold text-green-400 drop-shadow-lg md:text-6xl">
            <TypeAnimation
                sequence={[
                    "My Resume!",
                    10000,
                
                ]}
                wrapper="span"
                speed={75}
                repeat={Infinity}
            />
        </h1>

    );
};

export default TypeWriterResume;