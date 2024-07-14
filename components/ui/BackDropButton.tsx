import React from 'react'

const BackDropButton = ({
    title, icon, position, handleClick, otherClasses
}: {
    title: string;
    icon?: React.ReactNode,
    position?: string;
    handleClick?: () => void;
    otherClasses?: string;
}) => {
  return (
    <button className="w-full relative inline-flex h-12 overflow-hidden p-[1px] focus:outline-none md:w-40">
        {/* <span className="absolute" /> */}
        <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium hover:text-white-100 text-purple backdrop-blur-3xl gap-2 ${otherClasses}`}>
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
        </span>
    </button>
  )
}

export default BackDropButton