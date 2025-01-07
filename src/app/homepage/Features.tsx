import GradientTitle from '@/components/custom/grad-title';
import React, { JSX } from 'react';
import { FiSettings, FiMessageCircle, FiFileText, FiMonitor, FiActivity, FiUsers } from 'react-icons/fi';


interface CardProps {
    icon: JSX.Element;
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
    return (
        <div className="bg-gradient-to-b from-[#101010] to-neutral-900 p-3 md:p-8 border border-neutral-800 rounded-2xl shadow-sm space-y-4">
            <div className='p-2 bg-neutral-800 border border-neutral-700 rounded-full w-fit'>
            <div className="text-gray-200 text-xl">{icon}</div>
            </div>
            <h3 className="text-white text-lg ">{title}</h3>
            <p className="text-neutral-400 text-sm">{description}</p>
        </div>
    );
};



const Features: React.FC = () => {
    const features = [
        {
            icon: <FiSettings />,
            title: 'Tailored Solutions',
            description: 'We craft unique, client-focused digital experiences that align with your specific goals and vision.',
        },
        {
            icon: <FiMessageCircle />,
            title: 'Seamless Collaboration',
            description: 'Foster transparent communication and collaboration throughout the project lifecycle for exceptional outcomes.',
        },
        {
            icon: <FiFileText />,
            title: 'Rich, Dynamic Interfaces',
            description: 'Delivering interactive and visually compelling interfaces that captivate users and enhance engagement.',
        },
        {
            icon: <FiMonitor />,
            title: 'Cross-Platform Accessibility',
            description: 'Ensure your digital presence is optimized for seamless performance across all devices and platforms.',
        },
        {
            icon: <FiActivity />,
            title: 'Real-Time Progress Tracking',
            description: 'Stay informed with regular updates and insights into project milestones and development progress.',
        },
        {
            icon: <FiUsers />,
            title: 'Expert-Driven Development',
            description: 'Leverage the expertise of skilled professionals committed to bringing your ideas to life with precision.',
        },
    ];
    

    return (
        <section className=" text-gray-100">
            <div className="max-w-6xl mx-auto space-y-2">
                <div className='bg-gradient-to-b from-black to-neutral-800 rounded-3xl border border-neutral-800'>
                    <div className="bg-gradient-to-b from-neutral-950 to-neutral-800 rounded-2xl border border-neutral-800 shadow-md m-[6px] text-center space-y-4 ">
                        <div className='md:w-1/3 mx-auto py-10'>
                            <GradientTitle text='Where Ideas Meet Execution' />
                            <p className="text-neutral-400">Transforming challenges into seamless and impactful digital experiences.</p>
                        </div>
                    </div>
                </div>
                <div className='bg-gradient-to-b from-black to-neutral-800 rounded-3xl border border-neutral-800'>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[6px] m-[6px]">
                        {features.map((feature, index) => (
                            <Card
                                key={index}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
