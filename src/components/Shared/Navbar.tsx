import Image from 'next/image';
import React from 'react';
import logo from '../../../public/assets/logo.svg'
import Link from 'next/link';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Button } from '../ui/button';

const Navbar = () => {
    return (
        <div className='fixed w-full z-10 top-0 bg-black/50 backdrop-blur-md'>
            <div className='max-w-5xl mx-auto flex justify-between items-center py-3'>
                <div className='flex items-center'>
                    <Image src={logo} alt='logo' height={50} width={50} />
                    <h3 className='uppercase text-xl mt-1 text-white font-semibold'>Vanta</h3>
                </div>
                <div className='flex gap-8 items-center text-white'>
                    <Link href="/">Overview</Link>
                    <Link href="/">Styleguide</Link>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button className='bg-gradient-to-b from-neutral-800 to-neutral-700 border-neutral-600 rounded-lg hover:text-neutral-300' variant="outline">Linked pages</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56 bg-neutral-900 border-neutral-800 text-white">
                            <DropdownMenuLabel>Linked pages</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <Link href="/">
                                    <DropdownMenuItem>
                                        <span>Home</span>
                                    </DropdownMenuItem>
                                </Link>
                                <Link href="/about">
                                    <DropdownMenuItem>
                                        <span>About</span>
                                    </DropdownMenuItem>
                                </Link>
                                <Link href="/faq">
                                    <DropdownMenuItem>
                                        <span>FAQ</span>
                                    </DropdownMenuItem>
                                </Link>
                                <Link href="/contact">
                                    <DropdownMenuItem>
                                        <span>Contact</span>
                                    </DropdownMenuItem>
                                </Link>
                                <Link href="/comming">
                                    <DropdownMenuItem>
                                        <span>Comming soon</span>
                                    </DropdownMenuItem>
                                </Link>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    );
};

export default Navbar;