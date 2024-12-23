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
        <div className="bg-gradient-to-b from-[#101010] to-neutral-900 p-8 border border-neutral-800 rounded-2xl shadow-sm space-y-4">
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
            title: 'Personalized learning paths',
            description: 'Embark on a tailored educational journey, with courses curated to match your interests, goals, and learning pace.',
        },
        {
            icon: <FiMessageCircle />,
            title: 'Interactive discussions',
            description: 'Engage in vibrant discussions with fellow learners and educators, fostering a collaborative learning environment.',
        },
        {
            icon: <FiFileText />,
            title: 'Rich multimedia content',
            description: 'Dive into a variety of learning materials, from video lectures to interactive quizzes, ensuring an engaging experience.',
        },
        {
            icon: <FiMonitor />,
            title: 'Anytime, anywhere access',
            description: 'Enjoy the flexibility of learning on your schedule, accessing courses and resources seamlessly across devices.',
        },
        {
            icon: <FiActivity />,
            title: 'Progress tracking',
            description: 'Monitor your learning milestones and accomplishments, motivating you to stay on track and celebrate your achievements.',
        },
        {
            icon: <FiUsers />,
            title: 'Expert instructors',
            description: 'Learn from accomplished experts and industry professionals, gaining insights from their real-world experience.',
        },
    ];

    return (
        <section className=" text-gray-100 pt-32">
            <div className="max-w-6xl mx-auto space-y-2">
                <div className='bg-gradient-to-b from-black to-neutral-800 rounded-3xl border border-neutral-800'>
                    <div className="bg-gradient-to-b from-neutral-950 to-neutral-800 rounded-2xl border border-neutral-800 shadow-md m-[6px] text-center space-y-4 ">
                        <div className='md:w-1/3 mx-auto py-10'>
                            <GradientTitle text='Empowering learning experiences' />
                            <p className="text-neutral-400">Discover the features that make our platform your ultimate learning companion.</p>
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
