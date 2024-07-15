import { workExperience } from '@/data';
import React from 'react';
import { Button } from './ui/MovingBorder';

const Features = () => {
  return (
    <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pb-20" id="Features">
        <h1 className="text-white font-bold text-center text-[2.7rem] leading-snug tracking-wide">Explore <span className="text-purple">Chatter Features</span></h1>

       <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
         {workExperience.map((card) => (
            <Button
            key={card.id}
            borderRadius='1.75rem'
            duration={Math.floor(Math.random() *10000) + 10000}
            className='flex-1 text-white border-neutral-200 dark:border-slate-800'
            >
               <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                <img src={card.thumbnail} alt={card.thumbnail} className='lg:w-32 md:w-20 w-16'/>
                <div className='lg:ms-5'>
                   <h1 className='text-start text-xl md:text-2xl font-bold'>{card.title}</h1>
                   <p className='text-start text-white-100 mt-3 font-semibold'>{card.desc}</p>
                </div>
               </div>
            </Button>
         ))}
       </div>
    </div>
  )
}

export default Features;







 // import React from 'react';

// const Features = () => {
//   return (
//     <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pb-20">
//         <h1 className="text-white font-bold text-center text-[2.7rem] leading-snug tracking-wider">Explore <span className="text-purple">Chatter Features</span></h1>

//         <div className="max-auto max-w-container px-4 pb-16 sm:px-6 lg:px-8 mt-[4rem]">
//            <div className="relative max-auto grid max-w-[40rem] grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">

//                 <div className='flex flex-col border border-gray-800 p-4 rounded-lg bg-transparent'>
//                     <div className='flex items-start'>
//                         <img src="https://img.icons8.com/color/96/000000/user.png" alt="User Registration and Authentication" className="h-12 w-12 transform-cpu rounded-lg shadow-md shadow-sky-500/[.12] hover:scale-110 transition-transform" />
//                     </div>
//                     <div className='mt-4'>
//                         <h2 className='text-md font-semibold leading-6 text-slate-100'>User Registration and Authentication</h2>
//                         <p className='mt-2 text-sm leading-6 text-slate-300 py-2'>
//                             "Secure and seamless user onboarding with email and social media authentication."
//                         </p>
//                     </div>
//                 </div>

//                 <div className='flex flex-col border border-gray-800 p-4 rounded-lg bg-transparent'>
//                     <div className='flex items-start'>
//                         <img src="https://img.icons8.com/color/96/000000/edit.png" alt="Content Creation and Publishing" className="h-12 w-12 transform-cpu rounded-lg shadow-md shadow-sky-500/[.12] hover:scale-110 transition-transform" />
//                     </div>
//                     <div className='mt-4'>
//                         <h2 className='text-sm font-semibold leading-6 text-slate-100'>Content Creation and Publishing</h2>
//                         <p className='mt-2 text-sm leading-6 text-slate-300 py-2'>
//                             "Rich text editor for creating and publishing engaging content with ease."
//                         </p>
//                     </div>
//                 </div>

//                 <div className='flex flex-col border border-gray-800 p-4 rounded-lg bg-transparent'>
//                     <div className='flex items-start'>
//                         <img src="https://img.icons8.com/color/96/000000/search.png" alt="Personalized Content Discovery" className="h-12 w-12 transform-cpu rounded-lg shadow-md shadow-sky-500/[.12] hover:scale-110 transition-transform" />
//                     </div>
//                     <div className='mt-4'>
//                         <h2 className='text-sm font-semibold leading-6 text-slate-100'>Personalized Content Discovery</h2>
//                         <p className='mt-2 text-sm leading-6 text-slate-300 py-2'>
//                             "Discover new content based on your interests and reading history."
//                         </p>
//                     </div>
//                 </div>

//                 <div className='flex flex-col border border-gray-800 p-4 rounded-lg bg-transparent'>
//                     <div className='flex items-start'>
//                         <img src="https://img.icons8.com/color/96/000000/comments.png" alt="Social Interactions" className="h-12 w-12 transform-cpu rounded-lg shadow-md shadow-sky-500/[.12] hover:scale-110 transition-transform" />
//                     </div>
//                     <div className='mt-4'>
//                         <h2 className='text-sm font-semibold leading-6 text-slate-100'>Social Interactions</h2>
//                         <p className='mt-2 text-sm leading-6 text-slate-300 py-2'>
//                             "Engage with other users through comments and likes."
//                         </p>
//                     </div>
//                 </div>

//                 <div className='flex flex-col border border-gray-800 p-4 rounded-lg bg-transparent'>
//                     <div className='flex items-start'>
//                         <img src="https://img.icons8.com/color/96/000000/statistics.png" alt="Content Analytics" className="h-12 w-12 transform-cpu rounded-lg shadow-md shadow-sky-500/[.12] hover:scale-110 transition-transform" />
//                     </div>
//                     <div className='mt-4'>
//                         <h2 className='text-sm font-semibold leading-6 text-slate-100'>Content Analytics</h2>
//                         <p className='mt-2 text-sm leading-6 text-slate-300 py-2'>
//                             "Track the performance of your content with detailed analytics."
//                         </p>
//                     </div>
//                 </div>

//                 <div className='flex flex-col border border-gray-800 p-4 rounded-lg bg-transparent'>
//                     <div className='flex items-start'>
//                         <img src="https://img.icons8.com/color/96/000000/bookmark.png" alt="Content Bookmarking" className="h-12 w-12 transform-cpu rounded-lg shadow-md shadow-sky-500/[.12] hover:scale-110 transition-transform" />
//                     </div>
//                     <div className='mt-4'>
//                         <h2 className='text-sm font-semibold leading-6 text-slate-100'>Content Bookmarking</h2>
//                         <p className='mt-2 text-sm leading-6 text-slate-300 py-2'>
//                             "Save your favorite content for easy access later."
//                         </p>
//                     </div>
//                 </div>

//            </div>
//         </div>
//     </div>
//   )
// }

// export default Features;







