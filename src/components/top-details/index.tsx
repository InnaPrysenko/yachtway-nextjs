import {BrickWall, Cpu, MapPin, Shield, Star, Users} from 'lucide-react';
import React from 'react';
import {GeneralInfo} from '@/app/types';
interface TopDetailsProps {
    generalInfo: GeneralInfo;
}
const TopDetails:React.FC<TopDetailsProps> = ({generalInfo}) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2.5 gap-y-2.5 w-full mb-10">
            <div className="flex items-center">
                <div className="flex items-center justify-center bg-gray-200 rounded-lg w-11 h-11 mr-4 aspect-square">
                    <MapPin className="text-gray-500" size={18}/>
                </div>
                <div className="flex flex-col text-gray-500">
                    <span className="text-sm mb-1 font-bold text-gray-900">Italy</span>
                    <span className="text-xs">Country of origin</span>
                </div>
            </div>
            <div className="flex items-center">
                <div className="flex items-center justify-center bg-gray-200 rounded-lg w-11 h-11 mr-4 aspect-square">
                    <BrickWall className="text-gray-500" size={18}/>
                </div>
                <div className="flex flex-col text-gray-500">
                    <span className="text-sm mb-1 font-bold text-gray-900">Composite</span>
                    <span className="text-xs">Hull material</span>
                </div>
            </div>
            <div className="flex items-center">
                <div className="flex items-center justify-center bg-gray-200 rounded-lg w-11 h-11 mr-4 aspect-square">
                    <Star className="text-gray-500" size={18}/>
                </div>
                <div className="flex flex-col text-gray-500">
                    <span className="text-sm mb-1 font-bold text-gray-900">{generalInfo.isLikeNew && 'Yes'}</span>
                    <span className="text-xs">Like new</span>
                </div>
            </div>
            <div className="flex items-center">
                <div className="flex items-center justify-center bg-gray-200 rounded-lg w-11 h-11 mr-4 aspect-square">
                    <Shield className="text-gray-500" size={18}/>
                </div>
                <div className="flex flex-col text-gray-500">
                    <span className="text-sm mb-1 font-bold text-gray-900">{generalInfo.isCaptainMaintained && 'Yes'}</span>
                    <span className="text-xs">Captain maintained</span>
                </div>
            </div>
        </div>
    );
};

export default TopDetails;
