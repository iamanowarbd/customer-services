import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar max-w-svw bg-white">
            <div className="flex-1">
                <h1 className="text-2xl font-bold"> CS — Ticket System</h1>
            </div>
            <div className="flex-none text-base">
                <ul className="menu menu-horizontal px-1 gap-1">
                    <li><a>Home</a></li>
                    <li><a>FAQ</a></li>
                    <li><a>Changelog</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Download</a></li>
                    <li><a>Contact</a></li>
                    <button><a className='btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>+ <span></span> New Ticket</a></button>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;