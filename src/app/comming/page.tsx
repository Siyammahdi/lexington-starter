import GradientTitle from '@/components/custom/grad-title';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react';

const Comming = () => {
    return (
        <div className='mx-5'>
            <div className=' md:w-2/3 space-y-6 mx-auto pt-40'>
                <GradientTitle className='text-2xl md:text-3xl lg:text-5xl leading-tight text-center md:w-4/5 mx-auto' text='Coming Soon through seamless online learning' />
                <p className="text-neutral-400 text-center md:w-1/2 mx-auto">Exciting updates and content are on their way. Stay tuned for new experiences!</p>
                <div className='flex bg-neutral-800 p-3 rounded-xl gap-4 lg:w-2/3 mx-auto'>
                    <Input className='' type="email" placeholder="Email" />
                    <Button className='bg-gradient-to-b from-neutral-400 via-neutral-500 to-neutral-600'>Subscribe me</Button>
                </div>
            </div>
        </div>
    );
};

export default Comming;