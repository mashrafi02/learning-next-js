import { notFound } from 'next/navigation';
import React from 'react'

const Article = async ({params}) => {

    const {id} = await params;

    if(id == "5"){
      return notFound()
    }

  return (
    <div>This is Blog&apos;s id number is {id}</div>
  )
}

export default Article