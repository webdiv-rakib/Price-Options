import React, { useState } from 'react';
import Link from '../Link/Link';
import { RiMenu2Fill, RiCloseLine } from "react-icons/ri";
const NavBar = () => {
    const [open, setOpen] = useState(false)


    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Blog", path: "/blog" },
        { id: 5, name: "Contact", path: "/contact" },
    ];

    return (
        <nav className='text-black bg-amber-400 p-5'>
            <div onClick={() => setOpen(!open)} className='md:hidden text-3xl'>
                {
                    open === true ?
                        <RiCloseLine ></RiCloseLine>
                        : <RiMenu2Fill></RiMenu2Fill>
                }

            </div>
            <ul className={`md:flex md:gap-5 absolute md:static duration-1000 bg-amber-300 px-5 ${open ? 'top-16':'-top-60'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>

        </nav>
    );
};

export default NavBar;