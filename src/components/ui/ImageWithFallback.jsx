'use client';

import { useState } from 'react';

const ImageWithFallback = ({ src, alt, fallbackSrc, className }) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setImgSrc(fallbackSrc)}
    />
  );
};

export default ImageWithFallback;


