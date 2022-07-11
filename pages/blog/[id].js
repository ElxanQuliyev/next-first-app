import { useRouter } from 'next/router'
import React from 'react'

const BlogDetail = () => {
    const {id} =useRouter();
    console.log(id)
  return (
    <div>BLog Detail Page</div>
  )
}

export default BlogDetail