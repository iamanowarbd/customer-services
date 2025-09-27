import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-8 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">

                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold mb-4">CS — Ticket System</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a 
                            type specimen book.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Our Mission</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact Sales</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Services</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="#" className="hover:text-white transition-colors">Products & Services</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Customer Stories</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Download Apps</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Information</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Join Us</a></li>
                        </ul>
                    </div>
                    <div className="border-t border-gray-700 pt-8">
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                @CS — Ticket System
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                @CS — Ticket System
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                @CS — Ticket System
                            </a>
                        </div>

                        <div className="text-gray-300">
                            support@cst.com
                        </div>
                    </div>
                </div>
                </div>

                

                <div className="border-t border-gray-700 pt-4 mt-4">
                    <p className="text-center text-gray-400 text-sm">
                        © 2025 CS — Ticket System. All rights reserved.
                    </p>
                </div>
        </footer>
    );
};

export default Footer;