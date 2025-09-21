
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TypeWriterResume= () => {
    return (
        <h1 className="justify-center text-center font-mono font-bold text-green-300 drop-shadow-lg md:text-6xl">
            <TypeAnimation
                sequence={[
                    "My Resume!",
                ]}
                speed={30}
                repeat={0}
            />
        </h1>

    );
};

export default TypeWriterResume;