import GradientTitle from "@/components/custom/grad-title";
import Image from "next/image";
import React from "react";

const SkillJourney: React.FC = () => {
    return (
        <div className="relative text-white">
            <Image width={60} height={60} className="absolute blur-3xl w-96 inset-x-0 h-96 mx-auto bottom-12 left-0 -z-10" src="/assets/avatar1.svg" alt=""></Image>
            <div className="max-w-6xl mx-auto text-center">
                <GradientTitle className="text-2xl md:text-3xl lg:text-5xl lg:w-2/5 mx-auto" text="A skill building journey with Vanta" />
                <p className="text-neutral-500 text-lg mb-12">
                    Read how Vanta helped master new skills
                </p>

                <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
                    {/* Card 1 */}


                    <div className='bg-gradient-to-b from-black/70 to-neutral-800/70 rounded-3xl border border-neutral-800  md:-rotate-12'>
                        <div className="bg-gradient-to-b from-neutral-900/30 to-neutral-800/30 rounded-2xl border border-neutral-800 shadow-md m-[6px] text-center space-y-4 ">
                            <div className=" text-left p-5 lg:p-12 rounded-xl shadow-lg max-w-sm md:max-w-xs">
                                <p className="text-neutral-300 mb-10 text-sm">
                                    Im amazed by the quality of courses offered on this platform. The instructors
                                    are experts in their fields, and the interactive learning approach keeps me engaged.
                                    Ive gained skills I can immediately apply to my career.
                                </p>
                                <div>
                                    <h4 className="font-bold">Roberto Johnson</h4>
                                    <p className="text-neutral-500">Digital Marketing</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}


                    <div className='bg-gradient-to-b from-black/70 to-neutral-800/70 rounded-3xl border border-neutral-800 '>
                        <div className="bg-gradient-to-b from-neutral-900/30 to-neutral-800/30 rounded-2xl border border-neutral-800 shadow-md m-[6px] text-center space-y-4 ">
                            <div className="text-left p-5 lg:p-12 rounded-xl shadow-lg max-w-sm md:max-w-xs ">
                                <p className="text-neutral-300 mb-10 text-sm">
                                    As a full-time professional, I needed flexible learning options. This platform
                                    exceeded my expectations. The self-paced courses and diverse subjects let me customize
                                    my learning journey. Ive gained new skills that helped me stand out in my industry.
                                </p>
                                <div>
                                    <h4 className="font-bold">Emilio Pirelli</h4>
                                    <p className="text-neutral-500">Data Science</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}


                    <div className='bg-gradient-to-b from-black/70 to-neutral-800/70 rounded-3xl border border-neutral-800 md:rotate-12'>
                        <div className="bg-gradient-to-b from-neutral-900/30 to-neutral-800/30 rounded-2xl border border-neutral-800 shadow-md m-[6px] text-center space-y-4 ">
                            <div className="text-left p-5 lg:p-12 rounded-xl shadow-lg max-w-sm md:max-w-xs">
                                <p className="text-neutral-300 mb-10 text-sm">
                                    The community here is incredible. From insightful discussions to peer feedback,
                                    I feel supported every step of the way. The certifications I earned have boosted
                                    my resume, and Ive found a platform that truly values my growth.
                                </p>
                                <div>
                                    <h4 className="font-bold">Fino Como</h4>
                                    <p className="text-neutral-500">Creative Writing</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SkillJourney;
