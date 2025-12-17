import React from 'react'

const SlugRequired = async ({params}) => {

    const routeParams = await params; 
    console.log(routeParams);

    
  return (
    <div className='text-3xl font-semibold'>If you want to show the same page for any nested route . But the slug is <span className='text-red-500'>required</span>. for the [[...slug]], it will show the same page.js</div>
  )
}

export default SlugRequired