import GradientTitle from "@/components/custom/grad-title";
import React from "react";

const Details = () => {
    return (
        <section className="bg-black text-white py-16">
            <div className="container mx-auto md:px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Text Content */}
                    <div>
                        <GradientTitle className="text-4xl" text="Learn about us" />
                        <p className="text-neutral-400 mb-8 leading-relaxed">
                            Elevate your skills in brand identity design with our comprehensive e-learning platform. Dive into the
                            world of branding and discover the art of creating impactful identities that resonate with your audience.
                        </p>
                    </div>

                    {/* Right Side - Image */}


                    <div className='bg-gradient-to-b from-black to-neutral-800 rounded-3xl border border-neutral-800'>
                        <div className="bg-gradient-to-b from-neutral-950 to-neutral-800 rounded-2xl border border-neutral-800 shadow-md m-[6px] text-center space-y-4 ">
                            <div className="flex justify-center">
                                <div className="rounded-xl overflow-hidden shadow-lg">
                                    <img
                                        src="/about/photo-1504384308090-c894fdcc538d.avif"
                                        alt="Classroom"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Section - Features */}
                <div className="grid lg:grid-cols-3 gap-8 mt-16">
                    <div>
                        <h3 className="text-xl mb-3">1. Make Education Accessible</h3>
                        <p className="text-neutral-400 leading-relaxed">
                            Dive into the world of branding and discover the art of creating impactful identities that resonate with
                            your audience.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl mb-3">2. Help you Grow</h3>
                        <p className="text-neutral-400 leading-relaxed">
                            Embark on a tailored educational journey, with courses curated to match your interests, goals, and
                            learning pace.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl mb-3">3. Grow a Community</h3>
                        <p className="text-neutral-400 leading-relaxed">
                            At our e-learning platform, our mission is to empower individuals from all walks of life with the skills
                            and knowledge.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Details;
