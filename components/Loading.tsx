// components/Loading.jsx
import React from 'react';
import Image from 'next/image';
// import logo from '/img/logo-black.png'; // Adjust the path to your logo

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image src='/img/logo-black.png' alt="Chatter Logo" width={100} height={100} className="animate-spin" />
    </div>
  );
};

export default Loading;
