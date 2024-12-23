import GradientTitle from '@/components/custom/grad-title';
import React from 'react';

const AboutTitle = () => {
    return (
        <div>
            <div className="text-center">
                <GradientTitle className="text-2xl md:text-3xl lg:text-6xl lg:w-2/5 mx-auto leading-none" text="The mission behind Vanta." />
                <p className="mt-4 text-neutral-300 mx-auto lg:w-1/3">
                    Your pathway to exploring brand &amp; identity design for marketers online
                </p>
                <div className="grid grid-cols-2 mt-12 sm:grid-cols-4 lg:grid-cols-4 justify-between text-center -ml-4">
                    <p>
                        <img className="mx-auto" src="/about/brand/1.svg" alt="" />
                    </p>
                    <p>
                        <img className="mx-auto" src="/about/brand/2.svg" alt="" />
                    </p>
                    <p>
                        <img className="mx-auto" src="/about/brand/3.svg" alt="" />
                    </p>
                    <p>
                        <img className="mx-auto" src="/about/brand/4.svg" alt="" />
                    </p>
                </div>
            </div>
            <div className="lg:grid lg:grid-cols-4 mt-12 gap-2 hidden">
                <div>
                    <div className="lg:ring-white/10 lg:ring-1 lg:p-2 lg:rounded-3xl lg:bg-gradient-to-t from-white/20 hover:rotate-0 duration-500 lg:rotate-6">
                        <img className="block ring-1 ring-white/10 rounded-2xl shadow-massive" src="/about/head1.svg" />
                    </div>
                </div>
                <div>
                    <div className="lg:ring-white/10 lg:ring-1 lg:p-2 lg:rounded-3xl lg:bg-gradient-to-t from-white/20 hover:rotate-0 duration-500 lg:-rotate-12">
                        <img className="block ring-1 ring-white/10 rounded-2xl shadow-massive" src="/about/head2.svg" />
                    </div>
                </div>
                <div>
                    <div className="lg:ring-white/10 lg:ring-1 lg:p-2 lg:rounded-3xl lg:bg-gradient-to-t from-white/20 hover:rotate-0 duration-500 lg:-rotate-12">
                        <img className="block ring-1 ring-white/10 rounded-2xl shadow-massive" src="/about/head4.svg" />
                    </div>
                </div>
                <div>
                    <div className="ring-white/10 lg:ring-1 lg:p-2 lg:rounded-3xl lg:bg-gradient-to-t from-white/20 lg: rotate-12 hover:rotate-0 duration-500">
                        <img className="block ring-1 ring-white/10 rounded-2xl shadow-massive" src="/about/head6.svg" />
                    </div>
                </div>
            </div>
            <div className="grid gap-x-8 gap-y-16 text-center grid-cols-3 py-24">
                <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                    <div className="leading-7 text-neutral-300">Students</div>
                    <div className="order-first text-3xl font-semibold tracking-tight text-white font-display sm:text-5xl">
                        8000+
                    </div>
                </div>
                <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                    <div className="leading-7 text-neutral-300">Courses
                    </div>
                    <div className="order-first text-3xl font-semibold tracking-tight text-white font-display sm:text-5xl">
                        200+
                    </div>
                </div>
                <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                    <div className="leading-7 text-neutral-300">Teachers</div>
                    <div className="order-first text-3xl font-semibold tracking-tight text-white font-display sm:text-5xl">
                        50+
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutTitle;