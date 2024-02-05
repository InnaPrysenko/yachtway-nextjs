'use client'
import React, {useState} from 'react';
import {Photo} from '@/app/types';
import Image from 'next/image';

type ModalProps = {
    images: Photo[];
    onClose: () => void;
};


const Modal: React.FC<ModalProps> = ( { images, onClose } ) => {
    const [ currentIndex, setCurrentIndex ] = useState( 0 );
    const totalImages = images.length;

    const goToPrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex( currentIndex - 1 );
        }
    };

    const goToNext = () => {
        if (currentIndex < totalImages - 1) {
            setCurrentIndex( currentIndex + 1 );
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center p-4 z-50">
            <div className="relative w-full h-full flex items-center justify-center">
                {/* Close Button */}
                <button onClick={onClose} className="absolute top-0 right-0 m-4 text-black p-4 bg-white rounded">
                    Close
                </button>

                {/* Image Counter */}
                <div className="absolute top-0 left-0 m-4 text-white">
                    {currentIndex + 1} / {totalImages}
                </div>

                {/* Current Image */}
                <div className="max-w-3xl">
                    <Image
                        width={800}
                        height={600}
                        //@ts-ignore
                        src={images[ currentIndex ].image.url}
                        alt="Image"
                        className="rounded"
                    />
                </div>


                {/* Previous Button */}
                {currentIndex > 0 && (
                    <button onClick={goToPrevious}
                            className="absolute p-4 bg-white left-0 top-1/2 transform -translate-y-1/2 text-black rounded">
                        &lt;
                    </button>
                )}

                {/* Next Button */}
                {currentIndex < totalImages - 1 && (
                    <button onClick={goToNext}
                            className="absolute p-4 bg-white right-0 top-1/2 transform -translate-y-1/2 text-black rounded">
                        &gt;
                    </button>
                )}
            </div>
        </div>
    );
};

export default Modal;