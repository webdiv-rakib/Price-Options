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
        <nav className='md:flex items-center '>
            <div onClick={() => setOpen(!open)} className='md:hidden text-3xl'>
                {
                    open === true ?
                        <RiCloseLine ></RiCloseLine>
                        : <RiMenu2Fill></RiMenu2Fill>
                }

            </div>
            <ul className='md:flex md:gap-5'>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>

        </nav>
    );
};

export default NavBar;