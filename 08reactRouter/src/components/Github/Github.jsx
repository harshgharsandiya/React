import React, { useEffect, useState } from 'react'
import { useParams, useLoaderData } from 'react-router-dom';

function Github() {
    const { username } = useParams();
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch(`https://api.github.com/users/harshgharsandiya`)
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    //     .catch(error => {
    //         console.error('Error fetching Github Data: ', error)
    //     })
    // }, [username]);


    const data = useLoaderData();

    if(!data) return <p className='text-center text-red-600'>Loading...</p>

  return (
    <div className='flex items-center justify-center bg-gray-800 text-white m-6 p-6 rounded-lg shadow-lg'>
        <img 
            src={data.avatar_url} 
            alt={`${data.login}'s avatar`}
            className='w-32 h-32 rounded-full border-4 border-white mr-6 shadow-md'
        />
        <div className='text-left'>
            <h2 className='text-2xl font-bold mb-2'>GitHub User: {data.login}</h2>
            <p className='mb-1'>Followers: <span className='font-semibold'>{data.followers}</span></p>
            <p>Following: <span className='font-semibold'>{data.following}</span></p>
        </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch(`https://api.github.com/users/harshgharsandiya`)
    return response.json()
}
