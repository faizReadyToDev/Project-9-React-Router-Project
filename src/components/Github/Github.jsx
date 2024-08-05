import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/faizReadyToDev')
    //     .then((res) => res.json())
    //     .then(data=>{
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='flex justify-center items-center flex-col p-4 m-4 text-3xl font-bold text-orange-800 gap-5 bg-slate-100'>
      Github Followers: {data.followers}
      <img width={300} src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github
export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/faizReadyToDev')
    return response.json()
}