'use client'
import React, {useState} from 'react';

type ProductDescriptionProps = {
    description: string;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ( { description } ) => {
    const [ showFullDescription, setShowFullDescription ] = useState( false );

    const toggleDescription = () => {
        setShowFullDescription( !showFullDescription );
    };

    return (
        <div>
            <div
                className={`text-balance ${showFullDescription ? '' : 'line-clamp-[8]'}`}
                dangerouslySetInnerHTML={{ __html: description }}
            />
            <button onClick={toggleDescription}
                    className="mt-3 font-bold text-gray-600 py-2 focus:outline-none hover:text-purple-950">
                {showFullDescription ? 'Show less' : 'Show more'}
            </button>
        </div>
    );
};

export default ProductDescription;
