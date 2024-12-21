import React from 'react';

interface GradientTitleProps {
  text: string;
  className?: string;
}

const GradientTitle: React.FC<GradientTitleProps> = ({ text, className = '' }) => {
  return (
    <h1
      className={`pb-2 text-4xl leading-normal font-normal tracking-tight text-transparent bg-gradient-to-r from-neutral-50 via-neutral-400 to-neutral-600 bg-clip-text font-display ${className}`}
    >
      {text}
    </h1>
  );
};

export default GradientTitle;
