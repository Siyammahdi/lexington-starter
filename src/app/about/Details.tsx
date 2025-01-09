import GradientTitle from "@/components/custom/grad-title";
import React from "react";

const Details = () => {
    return (
        <section className="bg-black text-white py-16">
            <div className="container mx-auto md:px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Text Content */}
                    <div>
                        <GradientTitle className="text-4xl" text="Learn About Us" />
                        <p className="text-neutral-400 mb-8 leading-relaxed">
                            At Uqidev, we specialize in crafting cutting-edge digital solutions that empower businesses to thrive in the online world.
                            Our goal is to bridge the gap between ideas and execution by delivering tailored web applications, modern designs,
                            and scalable systems. We are dedicated to helping businesses enhance their digital presence and achieve their goals
                            with innovation and precision.
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
                        <h3 className="text-xl mb-3">1. Deliver Innovative Solutions</h3>
                        <p className="text-neutral-400 leading-relaxed">
                            We create cutting-edge web and software solutions that solve real-world problems and help businesses thrive in the digital era.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl mb-3">2. Empower Business Growth</h3>
                        <p className="text-neutral-400 leading-relaxed">
                            Our tailored services are designed to enhance your digital presence, streamline operations, and foster long-term growth.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl mb-3">3. Build Lasting Partnerships</h3>
                        <p className="text-neutral-400 leading-relaxed">
                            At Uqidev, we believe in collaborating with our clients to understand their needs and deliver solutions that truly make an impact.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Details;
