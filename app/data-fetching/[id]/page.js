import Comments from '@/app/_components/Comments';
import getAllPosts from '@/lib/getAllPosts';
import getAllPost from '@/lib/getPost';
import getAllPostComments from '@/lib/getPostComments';
import React, { Suspense } from 'react'


export async function generateMetadata({params}) {
    const {id} = await params;
    const post = await getAllPost(id);

    return {
        title: post.title,
        description: post.description
    }
}

const PostSingle = async ({params}) => {

    const {id} = await params;
    const post = await getAllPost(id);
    const commentPromise = getAllPostComments(id);

  return (
    <div>
        <h4>{post.title}</h4>
        <p>
            {post.body}
        </p>
        <hr  className='mb-6'/>

        <Suspense fallback={`Loading Comments...`}>
            <Comments promise={commentPromise}/>
        </Suspense>
    </div>
  )
}

export default PostSingle


export async function generateStaticParams(){
    const posts = await getAllPosts();

    return posts.map(post => ({
        id: post.id.toString(),
    }))
}