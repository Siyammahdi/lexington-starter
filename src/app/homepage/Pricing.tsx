import GradientTitle from '@/components/custom/grad-title';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

const Pricing = () => {
    return (
        <div className='relative'>
            <Image width={60} height={60} className="absolute blur-3xl w-96 inset-x-0 h-96 mx-auto left-0 -z-10" src="/assets/avatar1.svg" alt=""></Image>
            <div className='bg-gradient-to-b from-black/50 to-neutral-800/50 backdrop-blur-md rounded-3xl border border-neutral-800'>
                <div className="bg-gradient-to-b from-neutral-950/70 to-neutral-800/70 rounded-2xl border border-neutral-800 shadow-md m-[6px] text-center space-y-4 ">
                    <div className='w-2/3 mx-auto py-20'>
                        <GradientTitle className='text-6xl leading-none' text='Join the community, and start learning from today' />
                        <p className="text-neutral-400 my-8">At Vanta we believe that learning is a collaborative process.</p>
                        <Button className='bg-gradient-to-b from-neutral-400 via-neutral-500 to-neutral-600'>See our pricing</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;