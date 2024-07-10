import React from 'react'

const LoginButton = ({
    title
}: {
    title?: string;
}) => {
  return (
    <a href="#" className="text-sm font-semibold leading-6 text-blue-300 ring-1 inline-flex h-10 overflow-hidden rounded-lg p-[10px] gap-2 bg-black-300/10 hover:ring-gray-900/20 md:w-35">
        {title}<span aria-hidden="true">&rarr;</span>
    </a>
  )
}

export default LoginButton