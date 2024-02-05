'use client'
import Image from 'next/image';
import {Photo} from '@/app/types';
import React, {useState} from 'react';
import Modal from '@/components/modal';

type ImageGridProps = {
    images: Photo[];
};


const ImageGrid: React.FC<ImageGridProps> = ( { images } ) => {
    const [ showAll, setShowAll ] = useState( false );
    const [ showModal, setShowModal ] = useState( false );
    const extraImagesCount = images.length - 4;
    const shouldShowButton = extraImagesCount > 0;

    // When the show all photos button is clicked
    const handleShowAll = () => {
        setShowModal( true );
    };

    return (
        <div className="grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 w-full rounded-lg overflow-hidden">
            {/* First column for the first image */}
            <Image
                width={500}
                height={280}
                alt="TODO: Add alt text here (yacht make/model)"
                //@ts-ignore
                src={images[ 0 ]?.image.url}
                className="w-full h-full object-cover"
            />

            {/* Second column  */}
            <div className="grid grid-cols-1 gap-y-4">
                {/* Top */}
                <Image
                    width={500}
                    height={280}
                    alt="TODO: Add alt text here (yacht make/model)"
                    //@ts-ignore
                    src={images[ 1 ]?.image.url}
                    className="w-full h-full object-cover"
                />
                {/* Bottom */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
                    <Image
                        width={500}
                        height={280}
                        alt="TODO: Add alt text here (yacht make/model)"
                        //@ts-ignore
                        src={images[ 2 ]?.image.url}
                        className="w-full h-full object-cover"
                    />
                    {images[ 3 ] && <div className="relative">
                        <Image
                            width={500}
                            height={280}
                            alt="TODO: Add alt text here (yacht make/model)"
                            //@ts-ignore
                            src={images[ 3 ]?.image.url}
                            className="w-full h-full object-cover"
                        />
                        { !showAll && shouldShowButton && (
                            <button
                                onClick={handleShowAll}
                                className="absolute inset-0 bg-black bg-opacity-50 text-white flex justify-center items-center"
                            >
                                +{extraImagesCount} photos
                            </button>
                        )}
                    </div>}
                    {/* Modal for showing all photos */}
                    {showModal && (
                        <Modal images={images} onClose={() => setShowModal( false )}/>
                    )}

                </div>
            </div>
        </div>
    );
};

export default ImageGrid