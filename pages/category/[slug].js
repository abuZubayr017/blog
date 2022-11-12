import React from 'react'
import {getCategories, getCategoryPost} from "../../services"
import {PostCard, Categories, Loader} from "../../components"
import { useRouter } from 'next/router'

function Category({posts}) {
  const router = useRouter()
  
  if(router.isFallback) {
    return  <Loader/>
  }

  return (
    <div className='container mx-auto px-10 mb-8'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='col-span-1 lg:col-span-4 mt-4'>
          <div className='relative lg:sticky top-8'>
            <Categories />
          </div>
        </div>
        <dir className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </dir>
      </div>
    </div>
  )
}

export default Category;

export async function getStaticProps({params}) {
  const posts = await getCategoryPost(params.slug)

  return {
    props:{posts}
  }
}


export async function getStaticPaths() {
  const categories = await getCategories()
  return {
      paths: categories.map(({slug}) => ({params: {slug}})),
      fallback: true
  }
}