import { useRouter } from 'next/router'
import React from 'react'
import Image from "next/image";
const CourseDetail = ({course}) => {
    const {data} = course ?? {}
    console.log(data)
  return (
      <>
        {course ?
        <div>
            <Image loader={() => data.photoUrl} src={data.photoUrl}
             alt={data.courseName} width={400} height={200}
            />
            <h3>{data.courseName}</h3> 
        </div>

    :<p>Loading...</p>}
    </>
  )
}

export async function getStaticPaths(){
    return{
        paths:['/courses/3'],
        fallback:true
    }
}

export async function getStaticProps({params}){
    const {id}=params;
    const response= await fetch(`http://elxanquliyev2-001-site3.htempurl.com/api/course/${id}`)
    const data=await response.json()
    return {
        props:{
            course:{data}
        }
    }
}

export default CourseDetail