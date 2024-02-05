import React from 'react';
import VesselCard, {Vessel} from '../vessel-card';

const vessels: Vessel[] = [
    {
        id: '2',
        make: 'Axopar',
        model: '45 XC Cross Cabin',
        slug:'axopar-45-xc-cross-cabin-axo000000',
        price: {
            value: 120000,
            currency: 'USD'
        },
        year: 2024,
        engineMake: 'Mercury 300',
        location: 'Yarmouth, US',
        engineHours: 1,
        offeredBy: 'East Coast Yacht Sales',
        saleStatus: false,
        imageUrl: 'https://yachtway.com/_next/image?url=https%3A%2F%2Ffiles.yachtway.com%2Fee980c5b-ff48-48b2-a34b-ab11e6b37f34%2F6db16d04-0bea-4bb8-abe0-128a316f850f.66536daf5a73.webp&w=3840&q=75'
    },
    {
        id: '3',
        make: 'Sirena Yachts',
        model: '68',
        slug:'sirena-yachts-68-sir000000',
        price: {
            value: 0,
            currency: 'USD'
        },
        year: 2024,
        engineMake: 'Volvo Penta D13',
        location: 'Stonington, US',
        engineHours: 0,
        offeredBy: 'East Coast Yacht Sales',
        saleStatus: 'contact for pricing',
        imageUrl: 'https://yachtway.com/_next/image?url=https%3A%2F%2Ffiles.yachtway.com%2Fee980c5b-ff48-48b2-a34b-ab11e6b37f34%2Ffbbd9d6d-ae6a-4702-bae3-9e0f7f6276a2.bb06d4b4c158.webp&w=1920&q=75'
    },
    {
        id: '4',
        make: 'Sirena Yachts',
        model: '58',
        slug:'sirena-yachts-58-sir000000',
        price: {
            value: 3500000,
            currency: 'USD'
        },
        year: 2024,
        engineMake: 'Volvo Penta D11',
        location: 'Yarmouth, US',
        engineHours: 1,
        offeredBy: 'East Coast Yacht Sales',
        saleStatus: false,
        imageUrl: 'https://yachtway.com/_next/image?url=https%3A%2F%2Ffiles.yachtway.com%2Fee980c5b-ff48-48b2-a34b-ab11e6b37f34%2F7f0defd1-5f30-4db8-8792-59353476eb32.43e041654cfe.webp&w=1920&q=75'
    }
];


const VesselGrid: React.FC = ( ) => {
    return (
        <div className="w-full">
            <h3 className="text-xl font-semibold mb-4">Similar vessels</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-4">
                {vessels.map( ( vessel ) => (
                    <VesselCard key={vessel.id} vessel={vessel}/>
                ) )}
            </div>
        </div>
    );
};

export default VesselGrid;