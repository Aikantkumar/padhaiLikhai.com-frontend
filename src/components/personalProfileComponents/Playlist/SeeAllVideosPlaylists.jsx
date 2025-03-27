import React, { useState, useEffect } from 'react'


const SeeAllVideosPlaylists = () => {

    const {userId} = JSON.parse(localStorage.getItem('user'))
    const [page, setPage] = useState(1)
    const [videos, setVideos] = useState([])

    useEffect(() => {
        const fetchVideos = async() => {
            const response = await fetch(`http://localhost:4000/api/v1/student/${userId}/videos?page=${page}&limit=10`)
            const data = response.json()
            setVideos(data)
        }
    
        fetchVideos()
    }, [page, userId])


  return (
    <>
    <div className='flex flex-row '>
        <div className="left Videos">
            {
                videos.map((video) => (
                    <div className=''>
                        <video src={video.videoFile}></video>
                        <div>{video.title}</div>
                    </div>
                ))

            }
                <button onClick={() => setPage((prev) => prev + 1)} >Previous</button>
                <button  onClick={() => setPage((prev) => Math.max(prev - 1, 1))} >Next</button>
        </div>
    </div>
    </>
  )
}

export default SeeAllVideosPlaylists