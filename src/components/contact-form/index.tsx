'use client'
import React, {useState} from 'react';
import {Mail, User, Phone, Send} from 'lucide-react';

interface ContactFormProps {
    onSubmit?: ( contactDetails: { email: string; fullName: string; phone: string } ) => void;
}

const ContactSellerForm: React.FC<ContactFormProps> = () => {
    const [ email, setEmail ] = useState( '' );
    const [ fullName, setFullName ] = useState( '' );
    const [ phone, setPhone ] = useState( '' );
    const handleFormSubmit = ( contactDetails: { email: string; fullName: string; phone: string } ) => {
        console.log( 'Contact Details:', contactDetails );
    };
    const handleSubmit = ( e: React.FormEvent ) => {
        e.preventDefault();
        handleFormSubmit( { email, fullName, phone } );
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-md max-w-md">
            <h3 className="text-xl font-bold mb-4">Contact Seller</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">Email</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail size={20}/>
                        </div>
                        <input type="email" id="email"
                               className="pl-10 block w-full sm:text-sm border-gray-300 rounded-md"
                               placeholder="you@example.com" value={email}
                               onChange={( e ) => setEmail( e.target.value )} required/>
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700">Full name</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User size={20}/>
                        </div>
                        <input type="text" id="name"
                               className="pl-10 block w-full sm:text-sm border-gray-300 rounded-md"
                               placeholder="John Dou" value={fullName}
                               onChange={( e ) => setFullName( e.target.value )} required/>
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700">Phone</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Phone size={20}/>
                        </div>
                        <input type="tel" id="phone"
                               className="pl-10 block w-full sm:text-sm border-gray-300 rounded-md"
                               placeholder="+1(000)000-0000" value={phone}
                               onChange={( e ) => setPhone( e.target.value )} required/>
                    </div>
                </div>
                {/* Repeat for fullName and phone with appropriate icons */}
                <button type="submit"
                        className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700">
                    <Send className="inline mr-2" size={16}/>Send Request
                </button>
            </form>
        </div>
    );
};

export default ContactSellerForm;
