// 'use client';

// import { useState, useEffect } from 'react';
// import { navigation } from '@/data';
// import { Dialog, DialogPanel } from '@headlessui/react';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
// import LogoImg from '@/public/img/logo-white.png'; 
// import LogoImgDark from '@/public/img/logo-black.png';
// import Image from 'next/image';
// import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

// export default function Navbar({
//     LogoImg, title, LogoImgDark, 
// }: {
//     LogoImg?: string;
//     title?: string;
//     LogoImgDark?: string;
// }) {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [scrolling, setScrolling] = useState(false);
//   const [activeSection, setActiveSection] = useState('');

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         setScrolling(true);
//       } else {
//         setScrolling(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     const sections = navigation.map(item => document.querySelector(item.href));
//     const options = {
//       root: null,
//       rootMargin: '0px',
//       threshold: 0.3
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           setActiveSection(entry.target.id);
//         }
//       });
//     }, options);

//     sections.forEach(section => {
//       if (section) observer.observe(section);
//     });

//     return () => {
//       sections.forEach(section => {
//         if (section) observer.unobserve(section);
//       });
//     };
//   }, []);

//   const handleClick = (href: string) => {
//     setActiveSection(href.substring(1));
//   };

//   return (
//     <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${scrolling ? 'bg-black-200' : 'bg-transparent'}`}>
//       <nav aria-label="Global" className="flex items-center justify-between p-4 lg:px-8">
//         <div className="flex lg:flex-1">
//           <a href="/" className="-m-1.5 p-1.5">
//             <span className="sr-only">Your Company</span>
//             <Image
//               alt="Chatter"
//               src={LogoImg || "/img/logo-black.png"}
//               className="h-16 w-auto"
//               width={200}
//               height={150}
//             />
//           </a>
//         </div>
//         <div className="flex lg:hidden">
//           <button
//             type="button"
//             onClick={() => setMobileMenuOpen(true)}
//             className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-blue-100"
//           >
//             <span className="sr-only">Open main menu</span>
//             <Bars3Icon aria-hidden="true" className="h-6 w-6" />
//           </button>
//         </div>
//         <div className="hidden lg:flex lg:gap-x-12">
//           {navigation.map((item) => (
//             <a
//               key={item.name}
//               href={item.href}
//               className={`text-sm font-semibold leading-6 tracking-wider ${activeSection === item.href.substring(1) ? 'text-blue-300' : 'text-blue-100'} hover:text-blue-200`}
//               onClick={() => handleClick(item.href)}
//             >
//               {item.name}
//             </a>
//           ))}
//         </div>
//         <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-5">
//           <SignedOut>
//             <SignInButton />
//           </SignedOut>
//           <SignedIn>
//             <UserButton />
//           </SignedIn>
//         </div>
//       </nav>
//       <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
//         <div className="fixed inset-0 z-50" />
//         <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-blue-100 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
//           <div className="flex items-center justify-between">
//             <a href="#" className="-m-1.5 p-1.5">
//               <span className="sr-only">Your Company</span>
//               <Image
//                 alt="Chatter"
//                 src={LogoImgDark || "/img/logo-white.png"}
//                 className="h-16 w-auto"
//                 width={200}
//                 height={150}
//               />
//             </a>
//             <button
//               type="button"
//               onClick={() => setMobileMenuOpen(false)}
//               className="-m-2.5 rounded-md p-2.5 text-black-100"
//             >
//               <span className="sr-only">Close menu</span>
//               <XMarkIcon aria-hidden="true" className="h-6 w-6" />
//             </button>
//           </div>
//           <div className="mt-6 flow-root">
//             <div className="-my-6 divide-y divide-gray-500/10">
//               <div className="space-y-2 py-6">
//                 {navigation.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black-100 hover:tpurple-8"
//                     onClick={() => handleClick(item.href)}
//                   >
//                     {item.name}
//                   </a>
//                 ))}
//               </div>
//               <div className="py-3">
//                 <SignedOut>
//                   <SignInButton />
//                 </SignedOut>
//                 <SignedIn>
//                   <UserButton />
//                 </SignedIn>
//               </div>
//             </div>
//           </div>
//         </DialogPanel>
//       </Dialog>
//     </header>
//   );
// }





// Update file

'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import { navigation } from '@/data';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

export default function Navbar({
  LogoImg,
  title,
  LogoImgDark,
}: {
  LogoImg?: string;
  title?: string;
  LogoImgDark?: string;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navigation.map(item => document.querySelector(item.href));
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleClick = (href: string) => {
    setActiveSection(href.substring(1));
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${scrolling ? 'bg-black-200' : 'bg-transparent'}`}>
      <nav aria-label="Global" className="flex items-center justify-between p-4 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              alt="Chatter"
              src={LogoImg || "/img/logo-black.png"}
              className="h-16 w-auto"
              width={200}
              height={150}
              style={{ width: 'auto', height: 'auto' }} // Maintain aspect ratio
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-blue-100"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold leading-6 tracking-wider ${activeSection === item.href.substring(1) ? 'text-blue-300' : 'text-blue-100'} hover:text-blue-200`}
              onClick={() => handleClick(item.href)}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-5">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-blue-100 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                alt="Chatter"
                src={LogoImgDark || "/img/logo-white.png"}
                className="h-16 w-auto"
                width={200}
                height={150}
                style={{ width: 'auto', height: 'auto' }} // Maintain aspect ratio
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-black-100"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black-100 hover:tpurple-8"
                    onClick={() => handleClick(item.href)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-3">
                <SignedOut>
                  <SignInButton />
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}



