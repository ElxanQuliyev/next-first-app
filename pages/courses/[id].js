import { useRouter } from 'next/router'
import React from 'react'
import Image from "next/image";
const CourseDetail = ({course}) => {
    const {data} = course ?? {}
    return (
    <>
        {course ?
        <div className='container'>
            <div className='row my-5'>
                <div className='col-lg-5'>
            <Image loader={() => data.photoUrl} src={data.photoUrl}
              alt={data.courseName} width={400} height={200}
            />
                </div>
                <div className='col-lg-7'>
                   <h3>{data.courseName}</h3>
                   <p className='text-secondary'>{data.summary}</p>
                   <p>{data.description}</p>
                    <p>{data.discount && data.discount>0?(
                        <>
                        <del>{data.price} AZN</del> {" "}
                        {data.discount} AZN
                        </> 
                    
                    ):(<p>{data.price}</p>)}</p>
                    <button className='btn btn-success'>Add To Cart</button>
                </div>
            </div>
        </div>
    :<p>Loading...</p>}
    </>
  )
}

export async function getStaticPaths({locale}){
    return{
        paths:['/courses/3'],
        fallback:true
    }
}

export async function getStaticProps({params,locale}){
    const {id}=params;
    const response= await fetch(`${process.env.API_URL}/course/${locale.toUpperCase()}/${id}`)
    const data=await response.json()
    return {
        props:{
            course:{data}
        }
    }
}

export default CourseDetail