import Link from 'next/link'
import React from 'react'

const blogs = [
  {
    id:1,
    content:'Read this blog one'
  },
  {
    id:2,
    content:'Read this blog two'
  },
  {
    id:3,
    content:'Read this blog three'
  },
  {
    id:4,
    content:'Read this blog four'
  }
]

const Blog = () => {
  return (
    <div>
      <h3 className='capitalize font-semibold mb-4'>
        this is blogs page
      </h3>
      <ul>
        {
          blogs.map(blog => (
              <Link key={blog.id} href={`/pages-and-layouts/blogs/${blog.id}`} className='mb-4 underline'>
                <li>{blog.content}</li>
              </Link>
            ))
        }
      </ul>
    </div>
  )
}

export default Blog