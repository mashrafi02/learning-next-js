import getAllPosts from '@/lib/getAllPosts'
import Link from 'next/link';
import React from 'react'

const Posts = async () => {

    const posts = await getAllPosts(); // no useEffect needed cause it's a server component 

  return (
    <div>
        <h2 className='text-xl font-bold my-6'>
            All posts
        </h2>

        <ul>
            {posts.map(post => (
                <Link key={post.id} href={`/data-fetching/${post.id}`}>
                    <li>
                        <h4 className='underline font-semibold capitalize text-xl'>{post.title}</h4>
                    </li>
                </Link>
            ))}
        </ul>
    </div>
  )
}

export default Posts