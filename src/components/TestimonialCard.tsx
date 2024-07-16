import React from 'react';

interface TestimonialCardProps {
  ProfileImg: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  ProfileImg
}) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <figure className="md:w-[80vw] w-80 md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src={ProfileImg || "/img/socials001.jpg"}
          alt=""
          width={384}
          height={512}
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
            <div className="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default TestimonialCard;
