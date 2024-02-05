import React from 'react';

export type ImageCategory = 'interior' | 'exterior' | 'deckLayout';

type ButtonProps = {
    label: ImageCategory;
    isActive: boolean;
    onClick: ( category: ImageCategory ) => void;
};

const Button: React.FC<ButtonProps> = ( { label, isActive, onClick } ) => (
    <button
        onClick={() => onClick( label )}
        className={`${
            isActive ? 'text-black' : 'text-gray-400'
        } font-bold text-sm md:text-md`}
    >
        {label.toLocaleUpperCase()}
    </button>
);
export default Button

