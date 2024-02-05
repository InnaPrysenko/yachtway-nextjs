'use client';

import React from 'react';
import {GeneralInfo} from '@/app/types';
interface MainInfoProps {
    generalInfo: GeneralInfo;
}

const MainInfo: React.FC<MainInfoProps> = ( { generalInfo } ) => (
    <div className="w-full flex justify-between mt-8 flex-col md:flex-row">
        <div>
            <div className="text-gray-500 tracking-tight text-sm">{generalInfo.address}</div>
            <div className="text-gray-900 tracking-tight text-2xl md:text-4xl font-bold">
                {generalInfo?.make} {generalInfo.model}</div>
        </div>
        <div className="text-left md:text-right">
            <div className="text-gray-500 tracking-tight text-sm">
                {generalInfo?.saleStatus === 'available' && 'Available now'}
            </div>
            <div className="text-gray-900 tracking-tight text-2xl font-bold">
                {generalInfo.price?.currency === 'USD' && '$'}
                {generalInfo.price?.value.toLocaleString()}
            </div>
        </div>
    </div>

);
export default MainInfo;