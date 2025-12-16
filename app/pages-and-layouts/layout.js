import Link from 'next/link'
import React from 'react'

const layout = ({children}) => {
  return (
    <main>
        <div className='flex items-center gap-x-10 justify-center text-xl font-semibold p-4 mb-2'>
            <Link href={'/pages-and-layouts'}>Home</Link>
            <Link href={'/pages-and-layouts/about'}>About</Link>
            <Link href={'/pages-and-layouts/blogs'}>Blog</Link>
            <Link href={'/pages-and-layouts/contact'}>Contact</Link>
        </div>
        <div className='px-4 text-lg'>
            {children}
        </div>
    </main>
  )
}

export default layout