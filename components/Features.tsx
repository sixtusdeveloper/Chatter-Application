import React from 'react';

const Features = () => {
  return (
    <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pb-20">
        <h1 className="text-white font-bold text-center text-[2.7rem] leading-snug tracking-wider">Explore <span className="text-purple">Chatter Features</span></h1>

        <div className="max-auto max-w-container px-4 pb-16 sm:px-6 lg:px-8 mt-[4rem]">
           <div className="relative max-auto grid max-w-[40rem] grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">

                <div className='flex flex-col border border-gray-800 p-4 rounded-lg bg-transparent'>
                    <div className='flex items-start'>
                        <img src="https://img.icons8.com/color/96/000000/user.png" alt="User Registration and Authentication" className="h-12 w-12 transform-cpu rounded-lg shadow-md shadow-sky-500/[.12] hover:scale-110 transition-transform" />
                    </div>
                    <div className='mt-4'>
                        <h2 className='text-md font-semibold leading-6 text-slate-100'>User Registration and Authentication</h2>
                        <p className='mt-2 text-sm leading-6 text-slate-300 py-2'>
                            "Secure and seamless user onboarding with email and social media authentication."
                        </p>
                    </div>
                </div>

                <div className='flex flex-col border border-gray-800 p-4 rounded-lg bg-transparent'>
                    <div className='flex items-start'>
                        <img src="https://img.icons8.com/color/96/000000/edit.png" alt="Content Creation and Publishing" className="h-12 w-12 transform-cpu rounded-lg shadow-md shadow-sky-500/[.12] hover:scale-110 transition-transform" />
                    </div>
                    <div className='mt-4'>
                        <h2 className='text-sm font-semibold leading-6 text-slate-100'>Content Creation and Publishing</h2>
                        <p className='mt-2 text-sm leading-6 text-slate-300 py-2'>
                            "Rich text editor for creating and publishing engaging content with ease."
                        </p>
                    </div>
                </div>

                <div className='flex flex-col border border-gray-800 p-4 rounded-lg bg-transparent'>
                    <div className='flex items-start'>
                        <img src="https://img.icons8.com/color/96/000000/search.png" alt="Personalized Content Discovery" className="h-12 w-12 transform-cpu rounded-lg shadow-md shadow-sky-500/[.12] hover:scale-110 transition-transform" />
                    </div>
                    <div className='mt-4'>
                        <h2 className='text-sm font-semibold leading-6 text-slate-100'>Personalized Content Discovery</h2>
                        <p className='mt-2 text-sm leading-6 text-slate-300 py-2'>
                            "Discover new content based on your interests and reading history."
                        </p>
                    </div>
                </div>

                <div className='flex flex-col border border-gray-800 p-4 rounded-lg bg-transparent'>
                    <div className='flex items-start'>
                        <img src="https://img.icons8.com/color/96/000000/comments.png" alt="Social Interactions" className="h-12 w-12 transform-cpu rounded-lg shadow-md shadow-sky-500/[.12] hover:scale-110 transition-transform" />
                    </div>
                    <div className='mt-4'>
                        <h2 className='text-sm font-semibold leading-6 text-slate-100'>Social Interactions</h2>
                        <p className='mt-2 text-sm leading-6 text-slate-300 py-2'>
                            "Engage with other users through comments and likes."
                        </p>
                    </div>
                </div>

                <div className='flex flex-col border border-gray-800 p-4 rounded-lg bg-transparent'>
                    <div className='flex items-start'>
                        <img src="https://img.icons8.com/color/96/000000/statistics.png" alt="Content Analytics" className="h-12 w-12 transform-cpu rounded-lg shadow-md shadow-sky-500/[.12] hover:scale-110 transition-transform" />
                    </div>
                    <div className='mt-4'>
                        <h2 className='text-sm font-semibold leading-6 text-slate-100'>Content Analytics</h2>
                        <p className='mt-2 text-sm leading-6 text-slate-300 py-2'>
                            "Track the performance of your content with detailed analytics."
                        </p>
                    </div>
                </div>

                <div className='flex flex-col border border-gray-800 p-4 rounded-lg bg-transparent'>
                    <div className='flex items-start'>
                        <img src="https://img.icons8.com/color/96/000000/bookmark.png" alt="Content Bookmarking" className="h-12 w-12 transform-cpu rounded-lg shadow-md shadow-sky-500/[.12] hover:scale-110 transition-transform" />
                    </div>
                    <div className='mt-4'>
                        <h2 className='text-sm font-semibold leading-6 text-slate-100'>Content Bookmarking</h2>
                        <p className='mt-2 text-sm leading-6 text-slate-300 py-2'>
                            "Save your favorite content for easy access later."
                        </p>
                    </div>
                </div>

           </div>
        </div>
    </div>
  )
}

export default Features;









// import React from 'react';

// const Features = () => {
//   return (
//     <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pb-32">
//         <h1 className="text-white font-bold text-center text-[2.7rem] leading-snug tracking-wider">Explore <span className="text-purple">Chatter</span></h1>

//         <div className="max-auto max-w-container px-4 pb-16 sm:px-6 lg:px-8 mt-[4rem]">
//            <div className="relative max-auto grid max-w-[40rem] grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
//                 <div className='flex border border-gray-800 p-4 rounded-lg bg-transparent'>
//                     <div className='p-0.5'>
//                         <svg className="h-10 w-5 shrink-0 transform-cpu rounded-lg shadow-md shadow-sky-500/[.12]"
//                             viewBox="0 0 40 40" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
//                             >
//                             <path opacity="0.4" d="M17.25 33.25h-8.5a2 2 0 01-2-2V8.75a2 2 0 012-2h22.5a2 2 0 012 2v1m-4 3h-18.5" className="stroke-white/40"></path>
//                             <path d="M31.25 12.75h-8.5a2 2 0 00-2 2v16.5a2 2 0 002 2h8.5a2 2 0 002-2v-16.5a2 2 0 002-2v-16.5a2 2 0 00-2-2z" className="fill-white stroke-white"></path>
//                             <path d="M26.75 30.25h.5" className="stroke-white"></path>
//                         </svg>
//                     </div>
//                     <div className='ml-6'>
//                         <h2 className='text-md font-semibold leading-6 text-slate-100'>User Registration and Authentication</h2>
//                         <p className='mt-2 text-sm leading-6 text-slate-300 py-2'>
//                             "Secure and seamless user onboarding with email and social media authentication."
//                         </p>
//                     </div>
//                 </div>

//                 <div className='flex border border-gray-800 p-4 rounded-lg bg-transparent'>
//                     <div className='p-0.5'>
//                         <svg className="h-10 w-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-sky-500/[.12]"
//                             viewBox="0 0 40 40" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
//                             >
//                             <path d="M0.75 8A7.25 7.25 0 018 0.75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 010.75 32V8z" className="fill-white stroke-white"></path>
//                             <path d="M24.827 33.25l-6.426-6.426-6.426 6.426c-.324.846-.543 1.656-1.261 1.351L24.827 33.25z" className="fill-white stroke-white"></path>
//                             <path d="M33.25 20.25V9.75a3 3 0 00-3 3v20.5a3 3 0 003 3h10.5" className="stroke-white/40"></path>
//                             <path d="M11.75 11.75v16.5" className="stroke-white"></path>
//                         </svg>
//                     </div>
//                     <div className='ml-6'>
//                         <h2 className='text-sm font-semibold leading-6 text-slate-100'>Content Creation and Publishing</h2>
//                         <p className='mt-2 text-sm leading-6 text-slate-300 py-2'>
//                             "Rich text editor for creating and publishing engaging content with ease."
//                         </p>
//                     </div>
//                 </div>

//                 <div className='flex border border-gray-800 p-4 rounded-lg bg-transparent'>
//                     <div className='p-0.5'>
//                         <svg className="h-10 w-5 shrink-0 transform-cpu rounded-lg shadow-md shadow-sky-500/[.12]"
//                             viewBox="0 0 40 40" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
//                             >
//                             <path d="M0.75 8A7.25 7.25 0 018 0.75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 010.75 32V8z" className="fill-white stroke-white"></path>
//                             <path d="M31.817 26a13.194 13.194 0 001.433-6c0-7.318-5.932-13.25-13.25-13.25S6.75 12.682 6.75 20c0 2.16.517 4.199 1.433 6" className="stroke-white/40"></path>
//                             <path d="M15.75 18a4.25 4.25 0 108.5 0 4.25 4.25 0 00-8.5 0z" className="fill-white stroke-white"></path>
//                             <path d="M28.982 29.74c-.994-2.29-4.638-3.99-8.982-3.99-4.344 0-7.989 1.7-8.982 3.99A13.202 13.202 0 0020 33.25c3.466 0 6.62-1.33 8.982-3.51z" className="fill-white stroke-white"></path>
//                         </svg>
//                     </div>
//                     <div className='ml-6'>
//                         <h2 className='text-sm font-semibold leading-6 text-slate-100'>Personalized Content Discovery</h2>
//                         <p className='mt-2 text-sm leading-6 text-slate-300 py-2'>
//                             "Discover new content based on your interests and reading history."
//                         </p>
//                     </div>
//                 </div>
//            </div>
//         </div>
//     </div>
//   )
// }

// export default Features;




