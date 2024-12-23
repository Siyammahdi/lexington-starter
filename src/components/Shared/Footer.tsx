import Image from 'next/image';
import React from 'react';
import logo from '../../../public/assets/logo.svg'

const Footer = () => {
    return (
        <footer className="max-w-5xl mx-auto text-white pb-20 pt-40 px-5">


            <div className='bg-gradient-to-b from-black/70 to-neutral-800/70 rounded-3xl border border-neutral-800'>
                <div className="bg-gradient-to-b from-neutral-900/30 to-neutral-800/30 rounded-2xl border border-neutral-800 shadow-md m-[6px] text-left space-y-4 ">
                    <div className="container mx-auto p-8 lg:p-24">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                            {/* Brand Section */}
                            <div className='flex items-center'>
                                <Image src={logo} alt='logo' height={50} width={50} />
                                <h3 className='uppercase text-xl mt-1 text-white font-semibold'>Vanta</h3>
                            </div>

                            {/* Navigation Section */}
                            <div>
                                <h3 className="font-semibold text-lg mb-3">Navigation</h3>
                                <ul className="space-y-2 text-sm">
                                    <li>
                                        <a href="#" className="text-neutral-400 hover:text-white">
                                            Overview
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-neutral-400 hover:text-white">
                                            Style Guide
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Stay Updated Section */}
                            <div>
                                <h3 className="font-semibold text-lg mb-3">Stay updated</h3>
                                <ul className="space-y-2 text-sm">
                                    <li>
                                        <a href="#" className="text-neutral-400 hover:text-white">
                                            License
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-neutral-400 hover:text-white">
                                            Documentation
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Socials Section */}
                            <div>
                                <h3 className="font-semibold text-lg mb-3">Socials</h3>
                                <ul className="space-y-2 text-sm">
                                    <li>
                                        <a href="https://twitter.com/lexingtonthemes" className="text-neutral-400 hover:text-white">
                                            @lexingtonthemes
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/Mike_Andreuzza" className="text-neutral-400 hover:text-white">
                                            @Mike_Andreuzza
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className=" mt-8 pt-6 text-sm text-neutral-400">
                            <p className='mb-6'>&copy; 2022 Lexington Themes. All rights reserved</p>
                            <p className="mt-2">
                                Lexington Themes is not affiliated with Astro or Tailwind Labs team, nor is it endorsed by or sponsored by
                                this one. A side project by{' '}
                                <span className="text-white font-medium">Michael Andreuzza</span>. This website was built with Astro & Tailwind.
                                Crafted in Åland Islands, Finland.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
