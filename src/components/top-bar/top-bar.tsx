import React from 'react';
import {Bell, Menu, User} from 'lucide-react';
import Image from 'next/image';

const TopBar = () => {
    const avatarUrl = '';

    return (
        <div className="container max-w-[1440px] mx-auto flex items-center justify-between h-16 py-4 px-8 bg-white">
            <div className="flex items-center gap-4">
                <Menu size={24} className="text-gray-600"/>
            </div>
            <div>
                <Image src={'/images/logo.svg'} alt={'YachtWat'}
                width={150} height={40}
                />
            </div>
            <div className="flex items-center gap-4">
                <div className="relative">
                    <Bell className="h-6 w-6 text-gray-600" size={24}/>
                    <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-400"/>
                </div>
                {/* Avatar */}
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-200">
                    {avatarUrl ? (
                        <img className="h-10 w-10 rounded-full" src={avatarUrl} alt="User Avatar"/>
                    ) : (
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <User className="h-6 w-6 text-gray-600"/>
                        </div>
                    )}  </div>
            </div>
        </div>
    );
};

export default TopBar;
