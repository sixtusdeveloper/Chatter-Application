'use client';

import { gridItems } from '@/data'
import { BentoGrid, BentoGridItem } from '@/components/ui/BentoGrid'

const Grid = () => {
  return (
    <section className="md:mb-[3.5rem] sm:mb-[2rem] lg:mb-[4rem]" id="about">
       <BentoGrid>
        {gridItems.map
        (({ id, title, description, className, SocialImg, imgClassName, titleClassName, spareImg}) => (
            <BentoGridItem
             id={id}
             key={id}
             title={title}
             description={description}
             className={className}
             SocialImg={SocialImg}
             imgClassName={imgClassName}
             titleClassName={titleClassName}
             spareImg={spareImg}
            />
        ))}
       </BentoGrid>
    </section>
  )
}

export default Grid