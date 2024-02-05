import React from 'react';
import {Facebook, Instagram, Linkedin, Twitter} from 'lucide-react';
import MapComponent from '@/components/map';

interface DealerCardProps {
    location: string;
    dealerName: string;
    phoneNumber: string;
    logoUrl: string;
}

const DealerCard: React.FC<DealerCardProps> = ( {
                                                    location,
                                                    dealerName,
                                                    phoneNumber,
                                                    logoUrl,
                                                } ) => {
    return (
        <div
            className="w-full md:max-w-[90%] bg-white h-fit rounded-lg p-6 border border-gray-200 overflow-hidden md:sticky top-10">
            <div className="flex flex-col items-start">
                <div className="flex mb-4">
                    <img className="w-14 h-14 rounded-lg border-[1px] border-gray-400 mr-5" src={logoUrl}
                         alt={`${dealerName} logo`}/>
                    <div>
                        <h3 className="text-xl font-semibold mb-1">{dealerName}</h3>
                        <p className="text-gray-600">{location}</p>
                    </div>
                </div>
                <MapComponent/>
                <button className="bg-purple-950 hover:bg-purple-900 text-white mt-4 px-4 py-2 rounded w-full">
                    Get in Touch
                </button>
                <div className="flex mt-4 w-full items-center justify-between flex-wrap">
                    <div className='flex gap-x-2.5'>
                        <a href="#" className="text-gray-500">
                        <Instagram size={18}/>
                    </a>
                    <a href="#" className="text-gray-500">
                        <Facebook size={18}/>
                    </a>
                    <a href="#" className="text-gray-500">
                        <Twitter size={18}/>
                    </a>
                    <a href="#" className="text-gray-500">
                        <Linkedin size={18}/>
                    </a>
                    </div>
                    <a href={`tel:${phoneNumber}`} className="font-bold text-gray-600 hover:text-gray-900">
                        {phoneNumber}
                    </a>
                </div>

            </div>
        </div>
    );
};

export default DealerCard;