'use client';

import {Photo} from '@/app/types';
import React, {useState} from 'react';
import {ImageCategory} from '@/components/button';
import CategorySelector from '@/components/image-massory/caregoty-selector';
import ImageGrid from '@/components/images-grid';

interface ImageMasonryProps {
    images: {
        interior: Photo[];
        exterior: Photo[];
        deckLayout: Photo[];
    };
}

const ImageMasonry: React.FC<ImageMasonryProps> = ( { images } ) => {
    const [ imageType, setImageType ] = useState<ImageCategory>( 'exterior' );
    const categories = Object.keys( images ).filter(
        ( key ) => images[ key as ImageCategory ].length > 0
    ) as ImageCategory[];

    return (
        <section className="flex h-full">
            <div className="flex flex-col">
                <CategorySelector
                    categories={categories}
                    selectedType={imageType}
                    onSelectCategory={setImageType}
                />
                <ImageGrid images={images[ imageType ]}/>
            </div>
        </section>
    );
};

export default ImageMasonry;
