import React from 'react'

const SlugNotRequired = async ({params}) => {

    const routeParams = await params; 
    console.log(routeParams);

    
  return (
    <div className='text-3xl font-semibold'>If you want to show the same page for any nested route . But the slug is <span className='text-red-500'>not required</span>. for the [...slug], it will show the same page.js</div>
  )
}

export default SlugNotRequired