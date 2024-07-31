'use client';

import { useState } from 'react';
import Image from 'next/image';

const ImageWithFallback = ({ src, alt, fallbackSrc, className }) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setImgSrc(fallbackSrc)}
    />
  );
};

export default ImageWithFallback;


