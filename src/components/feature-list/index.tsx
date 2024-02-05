'use client'
import React, {useState} from 'react';
import {Cable, Cog, Container, Lock, Sofa, TentTree, WashingMachine} from 'lucide-react';
import {Feature} from '@/app/types';


interface FeatureListProp {
    data: Feature[];
}

type CategoryIconTypes = {
    [ key: string ]: JSX.Element;
};

const FeatureList: React.FC<FeatureListProp> = ( { data } ) => {
    const [ showAll, setShowAll ] = useState( false );

    // Define a mapping of category names to Lucide icons
    const categoryIcons: CategoryIconTypes = {
        aesthetics: <TentTree size={18}/>,
        appliances: <WashingMachine size={18}/>,
        systems: <Cog size={18}/>,
        electronics: <Cable size={18}/>,
        safety: <Lock size={18}/>,
        comfortOptions: <Sofa size={18}/>,
    };

    const displayedData = showAll ? data : data.slice( 0, 6 );

    return (
        <div className="container mx-auto mt-8">
            <h3 className="text-xl font-semibold mb-4">Main features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {displayedData.map( ( feature ) => (
                    <div key={feature.id} className="flex items-center gap-2">
                        <div
                            className="flex items-center justify-center bg-gray-200 rounded-lg w-11 h-11 text-gray-500 mr-4 aspect-square">
                            {categoryIcons[ feature.category ] || <Container size={18}/>}
                        </div>
                        <span className="text-sm mb-1 font-bold text-gray-900">{feature.name}</span>
                    </div>
                ) )}
            </div>
            <button
                onClick={() => setShowAll( !showAll )}
                className="mt-3 font-bold text-gray-600 py-2 hover:text-purple-950 focus:outline-none">
                {showAll ? 'Show less' : 'Show More'}
            </button>
        </div>
    );
};

export default FeatureList;
