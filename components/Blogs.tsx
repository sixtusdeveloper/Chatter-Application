// import React from "react";
// import { Spotlight } from './ui/Spotlight';


// const posts = [
//   {
//     id: 1,
//     title: "Boost your conversion rate",
//     href: "#",
//     description:
//       "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
//     date: "Mar 16, 2020",
//     datetime: "2020-03-16",
//     category: { title: "Marketing", href: "#" },
//     author: {
//       name: "Michael Foster",
//       role: "Co-Founder / CTO",
//       href: "#",
//       imageUrl:
//         "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     },
//   },
//   {
//     id: 2,
//     title: "Improve your website design",
//     href: "#",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec justo id mi varius ultricies. Proin quis maximus nisi. Sed convallis consequat sem, sed cursus velit tincidunt nec.",
//     date: "Apr 22, 2020",
//     datetime: "2020-04-22",
//     category: { title: "Design", href: "#" },
//     author: {
//       name: "Sarah Johnson",
//       role: "Lead Designer",
//       href: "#",
//       imageUrl:
//         "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     },
//   },
//   {
//     id: 3,
//     title: "Maximize your SEO efforts",
//     href: "#",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec justo id mi varius ultricies. Proin quis maximus nisi. Sed convallis consequat sem, sed cursus velit tincidunt nec.",
//     date: "May 30, 2020",
//     datetime: "2020-05-30",
//     category: { title: "SEO", href: "#" },
//     author: {
//       name: "John Doe",
//       role: "SEO Specialist",
//       href: "#",
//       imageUrl:
//         "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     },
//   },
// ];

// const Example = () => {
//   return (
//     <div className="relative py-20 sm:py-12">
//       <Spotlight className="-top-40 -right-10 md:-right-32 md:-top-20 h-screen spotlight" fill="white" />
//       <Spotlight className="top-10 left-full h-[80vh] w-[50vw] spotlight" fill="purple" />
//       <Spotlight className="top-28 left-80 h-[80vh] w-[50vw] spotlight" fill="blue" />

//       <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
//         <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
//       </div>

//       <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
//         <div className="lg:mx-0 mx-auto text-center">
//           <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
//             From <span className="text-purple">the blog</span>
//           </h2>
//           <p className="mt-2 text-lg leading-8 text-white">
//             Learn how to grow your business with our expert advice.
//           </p>
//         </div>
//         <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 border-t border-gray-700 pt-10 sm:mt-16 sm:pt-16">
//           {posts.map((post) => (
//             <article
//               key={post.id}
//               className="bg-black-200 rounded-lg shadow-lg overflow-hidden flex flex-col"
//             >
//               <div className="p-6">
//                 <div className="flex items-center gap-4 text-xs">
//                   <time dateTime={post.datetime} className="text-gray-200">
//                     {post.date}
//                   </time>
//                   <a
//                     href={post.category.href}
//                     className="rounded-full bg-gray-200 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-300"
//                   >
//                     {post.category.title}
//                   </a>
//                 </div>
//                 <div className="mt-3">
//                   <h3 className="text-lg font-semibold leading-6 text-gray-100">
//                     <a href={post.href} className="hover:text-gray-400">
//                       {post.title}
//                     </a>
//                   </h3>
//                   <p className="mt-2 text-sm leading-6 text-gray-300">
//                     {post.description}
//                   </p>
//                 </div>
//               </div>
//               <div className="p-6 border-t border-gray-700 mt-auto">
//                 <div className="flex items-center gap-4">
//                   <img
//                     alt=""
//                     src={post.author.imageUrl}
//                     className="h-10 w-10 rounded-full bg-gray-200"
//                   />
//                   <div className="text-sm leading-6">
//                     <p className="font-semibold text-gray-300">
//                       <a href={post.author.href} className="hover:text-gray-400">
//                         {post.author.name}
//                       </a>
//                     </p>
//                     <p className="text-gray-400">{post.author.role}</p>
//                   </div>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Example;







import React from "react";
import { Spotlight } from './ui/Spotlight';

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "Improve your website design",
    href: "#",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec justo id mi varius ultricies. Proin quis maximus nisi. Sed convallis consequat sem, sed cursus velit tincidunt nec.",
    date: "Apr 22, 2020",
    datetime: "2020-04-22",
    category: { title: "Design", href: "#" },
    author: {
      name: "Sarah Johnson",
      role: "Lead Designer",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Maximize your SEO efforts",
    href: "#",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec justo id mi varius ultricies. Proin quis maximus nisi. Sed convallis consequat sem, sed cursus velit tincidunt nec.",
    date: "May 30, 2020",
    datetime: "2020-05-30",
    category: { title: "SEO", href: "#" },
    author: {
      name: "John Doe",
      role: "SEO Specialist",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

const Example = () => {
  return (
    <div className="relative py-20 sm:py-12">
      <Spotlight className="-top-40 -right-10 md:-right-32 md:-top-20 h-screent" fill="white" />
      <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
      <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
        <div className="lg:mx-0 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            From <span className="text-purple">the blog</span>
          </h2>
          <p className="mt-2 text-lg leading-8 text-white">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 border-t border-gray-700 pt-10 sm:mt-16 sm:pt-16">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-black-200 rounded-lg shadow-lg overflow-hidden flex flex-col"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-200">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="rounded-full bg-gray-200 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-300"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="mt-3">
                  <h3 className="text-lg font-semibold leading-6 text-gray-100">
                    <a href={post.href} className="hover:text-gray-400">
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-300">
                    {post.description}
                  </p>
                </div>
              </div>
              <div className="p-6 border-t border-gray-700 mt-auto">
                <div className="flex items-center gap-4">
                  <img
                    alt=""
                    src={post.author.imageUrl}
                    className="h-10 w-10 rounded-full bg-gray-200"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-300">
                      <a href={post.author.href} className="hover:text-gray-400">
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-400">{post.author.role}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Example;






// import React from "react";
// import { Spotlight } from './ui/Spotlight';

// const posts = [
//   {
//     id: 1,
//     title: "Boost your conversion rate",
//     href: "#",
//     description:
//       "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
//     date: "Mar 16, 2020",
//     datetime: "2020-03-16",
//     category: { title: "Marketing", href: "#" },
//     author: {
//       name: "Michael Foster",
//       role: "Co-Founder / CTO",
//       href: "#",
//       imageUrl:
//         "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     },
//   },
//   {
//     id: 2,
//     title: "Improve your website design",
//     href: "#",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec justo id mi varius ultricies. Proin quis maximus nisi. Sed convallis consequat sem, sed cursus velit tincidunt nec.",
//     date: "Apr 22, 2020",
//     datetime: "2020-04-22",
//     category: { title: "Design", href: "#" },
//     author: {
//       name: "Sarah Johnson",
//       role: "Lead Designer",
//       href: "#",
//       imageUrl:
//         "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     },
//   },
//   {
//     id: 3,
//     title: "Maximize your SEO efforts",
//     href: "#",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec justo id mi varius ultricies. Proin quis maximus nisi. Sed convallis consequat sem, sed cursus velit tincidunt nec.",
//     date: "May 30, 2020",
//     datetime: "2020-05-30",
//     category: { title: "SEO", href: "#" },
//     author: {
//       name: "John Doe",
//       role: "SEO Specialist",
//       href: "#",
//       imageUrl:
//         "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     },
//   },
// ];

// const Example = () => {
//   return (
//     <div className="bg-black-100 py-20 sm:py-12">
//         <div>
//             <Spotlight className="-top-40 -right-10 md:-left-32 md:-top-20 h-screen" fill="white" />
//             <Spotlight className="top-10 right-full h-[80vh] w-[50vw]" fill="purple" />
//             <Spotlight className="top-28 right-80 h-[80vh] w-[50vw]" fill="blue" />
//         </div>
//         <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute flex items-center justify-center top-0 right-0">
//             <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
//         </div>

//         <div className="mx-auto max-w-7xl px-6 lg:px-8">
//             <div className="mx-auto lg:mx-0">
//             <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
//                 From <span className="text-purple">the blog</span>
//             </h2>
//             <p className="mt-2 text-lg leading-8 text-white">
//                 Learn how to grow your business with our expert advice.
//             </p>
//             </div>
//             <div className="mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 border-t border-gray-700 pt-10 sm:mt-16 sm:pt-16 lg:mx-0">
//             {posts.map((post) => (
//                 <article
//                 key={post.id}
//                 className="bg-black-200 rounded-lg shadow-lg overflow-hidden flex flex-col"
//                 >
//                 <div className="p-6">
//                     <div className="flex items-center gap-4 text-xs">
//                     <time dateTime={post.datetime} className="text-gray-200">
//                         {post.date}
//                     </time>
//                     <a
//                         href={post.category.href}
//                         className="rounded-full bg-gray-200 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-300"
//                     >
//                         {post.category.title}
//                     </a>
//                     </div>
//                     <div className="mt-3">
//                     <h3 className="text-lg font-semibold leading-6 text-gray-100">
//                         <a href={post.href} className="hover:text-gray-400">
//                         {post.title}
//                         </a>
//                     </h3>
//                     <p className="mt-2 text-sm leading-6 text-gray-300">
//                         {post.description}
//                     </p>
//                     </div>
//                 </div>
//                 <div className="p-6 border-t border-gray-700 mt-auto">
//                     <div className="flex items-center gap-4">
//                     <img
//                         alt=""
//                         src={post.author.imageUrl}
//                         className="h-10 w-10 rounded-full bg-gray-200"
//                     />
//                     <div className="text-sm leading-6">
//                         <p className="font-semibold text-gray-300">
//                         <a href={post.author.href} className="hover:text-gray-400">
//                             {post.author.name}
//                         </a>
//                         </p>
//                         <p className="text-gray-400">{post.author.role}</p>
//                     </div>
//                     </div>
//                 </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Example;


// // components/Example.tsx

// import React from 'react';

// const posts = [
//   {
//     id: 1,
//     title: 'Boost your conversion rate',
//     href: '#',
//     description:
//       'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
//     date: 'Mar 16, 2020',
//     datetime: '2020-03-16',
//     category: { title: 'Marketing', href: '#' },
//     author: {
//       name: 'Michael Foster',
//       role: 'Co-Founder / CTO',
//       href: '#',
//       imageUrl:
//         'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//   },
//   // More posts...
// ];

// const Example = () => {
//   return (
//     <div className="bg-black-100 py-24 sm:py-32">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto lg:mx-0">
//           <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">From the blog</h2>
//           <p className="mt-2 text-lg leading-8 text-white">
//             Learn how to grow your business with our expert advice.
//           </p>
//         </div>
//         <div className="mx-auto mt-10 grid grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:grid-cols-3">
//           {posts.map((post) => (
//             <article key={post.id} className="flex flex-col items-start justify-between">
//               <div className="flex items-center gap-x-4 text-xs">
//                 <time dateTime={post.datetime} className="text-white-100">
//                   {post.date}
//                 </time>
//                 <a
//                   href={post.category.href}
//                   className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-200"
//                 >
//                   {post.category.title}
//                 </a>
//               </div>
//               <div className="group relative mt-3">
//                 <h3 className="text-lg font-semibold leading-6 text-white group-hover:text-white-100">
//                   <a href={post.href}>
//                     <span className="absolute inset-0" />
//                     {post.title}
//                   </a>
//                 </h3>
//                 <p className="mt-2 line-clamp-3 text-sm leading-6 text-white-100">{post.description}</p>
//               </div>
//               <div className="relative mt-4 flex items-center gap-x-4">
//                 <img
//                   alt=""
//                   src={post.author.imageUrl}
//                   className="h-10 w-10 rounded-full bg-gray-50"
//                 />
//                 <div className="text-sm leading-6">
//                   <p className="font-semibold text-white-100">
//                     <a href={post.author.href}>
//                       <span className="absolute inset-0" />
//                       {post.author.name}
//                     </a>
//                   </p>
//                   <p className="text-white-200">{post.author.role}</p>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Example;

// const posts = [
//     {
//       id: 1,
//       title: 'Boost your conversion rate',
//       href: '#',
//       description:
//         'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
//       date: 'Mar 16, 2020',
//       datetime: '2020-03-16',
//       category: { title: 'Marketing', href: '#' },
//       author: {
//         name: 'Michael Foster',
//         role: 'Co-Founder / CTO',
//         href: '#',
//         imageUrl:
//           'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       },
//     },
//     // More posts...
// ]

// export default function Example() {
// return (
//     <div className="bg-white py-24 sm:py-32">
//     <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto max-w-2xl lg:mx-0">
//         <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
//         <p className="mt-2 text-lg leading-8 text-gray-600">
//             Learn how to grow your business with our expert advice.
//         </p>
//         </div>
//         <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
//         {posts.map((post) => (
//             <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
//             <div className="flex items-center gap-x-4 text-xs">
//                 <time dateTime={post.datetime} className="text-gray-500">
//                 {post.date}
//                 </time>
//                 <a
//                 href={post.category.href}
//                 className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
//                 >
//                 {post.category.title}
//                 </a>
//             </div>
//             <div className="group relative">
//                 <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
//                 <a href={post.href}>
//                     <span className="absolute inset-0" />
//                     {post.title}
//                 </a>
//                 </h3>
//                 <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
//             </div>
//             <div className="relative mt-8 flex items-center gap-x-4">
//                 <img alt="" src={post.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
//                 <div className="text-sm leading-6">
//                 <p className="font-semibold text-gray-900">
//                     <a href={post.author.href}>
//                     <span className="absolute inset-0" />
//                     {post.author.name}
//                     </a>
//                 </p>
//                 <p className="text-gray-600">{post.author.role}</p>
//                 </div>
//             </div>
//             </article>
//         ))}
//         </div>
//     </div>
//     </div>
// )
// }
