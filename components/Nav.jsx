"use client";
import {headerLogo} from "../public/assets/images";
import {hamburger} from "../public/assets/icons";
import Image from "next/image";
import {navLinks} from "@/constants";
import {useState, useEffect} from "react";
const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    // Controla el estado de overflow del body
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        // Cleanup en caso de que el componente se desmonte
        return () => document.body.classList.remove("overflow-hidden");
    }, [isOpen]);
    return (
        <header className="padding-x py-8 absolute z-20 w-full">
            <nav className="flex justify-between items-center max-container">
                <a href="/">
                    <Image priority src={headerLogo} alt="Logo" width={130} height={29}/>
                </a>
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href}
                               className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red ">{item.label}</a>
                        </li>

                    ))}
                </ul>
                {/* Mobile Menu Button */}
                <div className="lg:hidden z-20 ">
                    <button
                        onClick={toggleMenu}
                        className="p-2 text-gray-500 hover:text-gray-600"
                        aria-label="Toggle Menu"
                        aria-expanded={isOpen}
                    >

                        {isOpen ? (
                            <span className="text-2xl z-50 ">X</span>
                        ) : (
                            <Image src={hamburger} alt="Menu icon" width={24} height={24} />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <>
                        <div
                            className="fixed inset-0 bg-black bg-opacity-50 z-50"
                            onClick={toggleMenu}
                        ></div>
                        <nav className="absolute top-20 left-0 right-0 bg-white shadow-md z-50 transition-all ease-in-out duration-300 flex-1 w-full  px-2 py-16">
                            <ul className="flex flex-col items-center py-4">
                                {navLinks.map((item) => (
                                    <li key={item.label} className="w-full">
                                        <a
                                            href={item.href}
                                            className="block py-2 px-4 text-center font-montserrat text-lg text-slate-600 hover:bg-slate-100"
                                            onClick={toggleMenu}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Nav;