'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export type Vessel = {
    id: number | string;
    slug: string;
    imageUrl: string;
    make: string;
    model: string;
    year: number;
    engineHours: number;
    engineMake: string;
    location: string;
    price: Price;
    offeredBy: string;
    saleStatus: string | boolean;
    isBestseller?: boolean;
};
type Price = {
    value: number,
    currency: string
}

type VesselCardProps = {
    vessel: Vessel;
};

const VesselCard: React.FC<VesselCardProps> = ( { vessel } ) => {

    return (
        <div className="w-full rounded overflow-hidden border border-gray-200">
            <Image className="w-full aspect-video"
                   src={vessel.imageUrl} alt={`${vessel.make} ${vessel.model}`}
                   width={300} height={250}/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"><Link
                    href={`/vessels/${vessel.slug}`}> {vessel.make} {vessel.model}</Link></div>
                <div className="text-gray-500 text-base font-bold">{vessel.year} | {vessel.engineMake}</div>
                <div className="text-gray-500 text-base">
                    <span className="text-xs">Location: </span>
                    <span className="text-sm font-bold text-gray-900"> {vessel.location}</span>
                </div>
                <div className="text-gray-500 text-base"><span className="text-xs">Engine Hours: </span>
                    <span className="text-sm font-bold text-gray-900">{vessel.engineHours}</span></div>
                <div className="py-2.5">

                    {vessel.saleStatus ? (
                        <span className="inline-block text-sm font-semibold mr-2">{vessel.saleStatus}</span>
                    ) : <span
                        className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-2">
                        {vessel.price.value.toLocaleString()} {vessel.price.currency}
                    </span>}
                </div>
                <div className="text-gray-500">
                    <span className="text-xs">Offered by: </span>
                    <span className="text-sm mb-1 font-bold text-gray-900">{vessel.offeredBy}</span>
                </div>
            </div>
        </div>
    );
};

export default VesselCard;
