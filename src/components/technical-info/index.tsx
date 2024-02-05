import React from 'react';
import {Bed, DoorOpen, Fuel, Gauge, Ship, ShowerHead, Weight} from 'lucide-react';
import {Accommodation, PowerInfo, TechnicalInfo} from '@/app/types';

interface TechnicalItemProps {
    icon: React.ReactNode;
    title: string;
    detail: string | number;
}


const TechnicalItem: React.FC<TechnicalItemProps> = ( { icon, title, detail } ) => (
    <div className="flex items-center ">
        <div className="text-gray-500">{icon}</div>
        <div className="ml-4 ">
            <span className="text-xs">{title}</span>
            <p className='text-sm mb-1 font-bold text-gray-900'>{detail}</p>
        </div>
    </div>
);

export interface TechnicalInfoProps {
    technicalInfo: TechnicalInfo;
    accommodation: Accommodation;
    powerInfo: PowerInfo;
}

const TechnicalInfo: React.FC<TechnicalInfoProps> = ( { technicalInfo, accommodation, powerInfo } ) => {

    return (
        <div className="w-full mb-8">
            <h3 className="text-xl font-semibold mb-4">Measurements</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2.5 md:gap-x-4 gap-y-4 mb-5">
                <TechnicalItem icon={<Ship size={24}/>} title="Beam"
                               detail={`${technicalInfo.beam} FT`}/>
                <TechnicalItem icon={<Ship size={24}/>} title="Draft"
                               detail={`${technicalInfo.draft} FT`}/>
                <TechnicalItem icon={<Weight size={24}/>} title="Dry weight"
                               detail={`${technicalInfo.dryWeight} LB`}/>
                <TechnicalItem icon={<Ship size={24}/>} title="Waterline length"
                               detail={`${technicalInfo.lengthOfWaterline} FT`}/>
                <TechnicalItem icon={<Ship size={24}/>} title="Overal length"
                               detail={`${technicalInfo.lengthOverall} FT`}/>
            </div>
            <h3 className="text-xl font-semibold mb-4">Engines</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2.5 md:gap-x-4  gap-y-2  mb-5">
                <TechnicalItem icon={<Ship size={24}/>} title="Engine type"
                               detail={powerInfo.type}/>
                <TechnicalItem icon={<Gauge size={24}/>} title="Top speed"
                               detail={`${powerInfo.topSpeed} KN`}/>
                <TechnicalItem icon={<Fuel size={24}/>} title="Fuel type"
                               detail={powerInfo.fuel}/>
                <TechnicalItem icon={<Fuel size={24}/>} title="Horsepower per engine"
                               detail={powerInfo.powerPerEngine}/>
            </div>
            <h3 className="text-xl font-semibold mb-4">Accommodation</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2.5 md:gap-x-4  gap-y-2  mb-5">
                <TechnicalItem icon={<DoorOpen size={24}/>} title="Cabin"
                               detail={accommodation.cabins}/>
                <TechnicalItem icon={<Bed size={24}/>} title="Double bed"
                               detail={accommodation.doubleBeds}/>
                <TechnicalItem icon={<ShowerHead size={24}/>} title="Dry head"
                               detail={accommodation.showerDryHead}/>
            </div>
        </div>
    );
};


export default TechnicalInfo