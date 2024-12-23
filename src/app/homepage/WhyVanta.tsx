import GradientTitle from '@/components/custom/grad-title';
import { Button } from '@/components/ui/button';
import React from 'react';

const WhyVanta = () => {
    return (
        <div>
            <div className='bg-gradient-to-b from-black to-neutral-800 rounded-3xl border border-neutral-800'>
                <div className="bg-gradient-to-b from-neutral-950 to-neutral-800 rounded-2xl border border-neutral-800 shadow-md m-[6px] flex flex-col lg:flex-row space-y-4 px-10 py-16 ">
                    <div className='lg:w-1/2 '>
                        <GradientTitle text='Why learning from Vanta' />
                        <p className="text-neutral-400">Looking to expand your skills and explore your creativity? Our hands-on creative classes are the perfect way to learn at your own pace and discover new talents.</p>
                    </div>
                    <div className='relative flex  gap-2 mt-12 justify-center items-center lg:w-1/2'>
                        <Button className='bg-gradient-to-b from-neutral-400 via-neutral-500 to-neutral-600 lg:w-1/3'>See all courses</Button>
                        <Button className='border border-neutral-700 bg-gradient-to-b from-neutral-800 to-neutral-900 lg:w-1/3'>Learn more</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyVanta;