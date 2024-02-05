// http://localhost:3000/vessels/pardo-yachts-p43-itcdpp4254e122
// https://api.yachtway.com/api/listings/pardo-yachts-p43-itcdpp4254e122
// Figma: https://www.figma.com/file/Ypo1nOrjnalbgDtm1UgARz/vehically?type=design&node-id=0%3A2009&mode=design&t=lzmIRP8kHY84Dq2r-1

// Importing necessary types and context
import {YachtDetails} from '@/app/types';
import ImageMasonry from '@/components/image-massory/image-masonry';
import {VesselProvider, useVessel} from '@/context/vessel-context';
import TopBar from '@/components/top-bar/top-bar';
import Divider from '@/components/divider';
import TopDetails from '@/components/top-details';
import React from 'react';
import FeatureList from '@/components/feature-list';
import VesselGrid from '@/components/vessel-grid';
import DealerCard from '../components/dealer-card';
import ProductDescription from '@/components/product-description';
import MainInfo from '@/components/main-info';
import TechnicalInfo from '@/components/technical-info';

// Function to fetch vessel-card details from the API
const fetchVessel = async ( slug: string ): Promise<YachtDetails> => {
    try {
        const response = await fetch(
            `https://api.yachtway.com/api/listings/${slug}`
        );
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error( 'Failed to fetch vessel-card data' );
    }
};

// Main component
const Page = async ( props: any ) => {
    // Fetching the yacht details using the fetchVessel function
    const yachtDetails = await fetchVessel( 'pardo-yachts-p43-itcdpp4254e122' );
    return (
        // Providing the fetched vessel-card details to the VesselProvider context
        <VesselProvider vessel={yachtDetails}>
            <main className="flex min-h-screen flex-col container max-w-[1440px] mx-auto px-4 md:px-8">
                <MainInfo generalInfo={yachtDetails.generalInfo}/>
                <ImageMasonry images={yachtDetails?.photos}/>
                <Divider/>
                <TopDetails generalInfo={yachtDetails.generalInfo}/>
                <div className="flex justify-between mb-7  flex-col md:flex-row md:pb-10">
                    <div className="w-full md:w-2/3 pr-4">
                        <ProductDescription description={yachtDetails.generalInfo.description}/>
                        <Divider/>
                        <FeatureList data={yachtDetails.generalInfo.features}/>
                        <Divider/>
                        <TechnicalInfo
                            technicalInfo={yachtDetails.technicalInfo}
                            powerInfo={yachtDetails.powerInfo}
                            accommodation={yachtDetails.accommodation}/>
                    </div>
                    <div className="w-full md:w-1/3 min-w-[30%] md:pl-4 md:relative">
                        <DealerCard
                            location={yachtDetails.generalInfo.address}
                            dealerName={yachtDetails.brandInfo.name}
                            phoneNumber={'+1(305)849-7681'}
                            logoUrl={yachtDetails.brandInfo.banner.compressedImg}
                        />
                    </div>
                </div>
                <VesselGrid/>
            </main>
        </VesselProvider>
    );
};

export default Page;
