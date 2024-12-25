import { useState } from 'react';
import logo from "../../assets/img/image.png"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { name: 'Home', href: '#', current: true },
        { name: 'Features', href: '#', current: false },
        { name: 'About Us', href: '#', current: false },
        { name: 'Contact', href: '#', current: false },
    ];

    return (
        <nav className="bg-white border-b w-[100vw] border-gray-200 ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse"> */}
                <img src={logo} className="h-8 cursor-pointer" alt="Logo" />
                {/* </a> */}

                <button
                    onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                    aria-controls="navbar-default"
                    aria-expanded={isMenuOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>

                <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    className={`block py-2 px-3 ${item.current
                                        ? 'text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 '
                                        : 'text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0'
                                        }`}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* <div className={`${isMenuOpen ? 'hidden' : 'hidden'}w-full md:hidden`}>
                    <button type="button" className="text-white md:hidden bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Login
                    </button>
                </div> */}
            </div>
        </nav>
    );
};

export default Navbar;