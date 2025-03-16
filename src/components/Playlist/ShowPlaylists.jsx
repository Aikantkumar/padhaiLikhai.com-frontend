import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';

const ShowPlaylists = () => {

    const { id } = useParams() //userId
    const [folders, setFolders] = useState([]) //folder is basically a playlist
    const [folderName, setFolderName] = useState('')
    const [folderDescription, setFolderDescription] = useState('')
    // const [userPlaylists, setUserPlaylists] = useState([])
    const [selectedPlaylists, setSelectedPlaylists] = useState([])
    const [videos, setVideos] = useState([])
    const [videoTitle, setVideoTitle] = useState('')
    const [videoDescription, setVideoDescription] = useState('')
    const [selectedFile, setSelectedFile] = useState(null)

    const [videosOfPlaylist, setVideosOfPlaylist] = useState([])

    // GLOBAL VARIABLE
    let selectedVideoId = null

    useEffect(() => {

        // async function fetchUserPlaylists() {
        //     try {
        //         const response = await fetch()
        //         const data = await response.json()
        //         setFolders(data)


        //         toast.success(response.data.message)
        //     } catch (error) {
        //         toast.error(error.response.data.message)
        //     }
        // }


        async function fetchUserVideos() {
            try {
                const response = await fetch()
                const data = await response.json()
                setVideos(data)


                toast.success(response.data.message)
            } catch (error) {
                toast.error(error.response.data.message)
            }
        }

        fetchUserPlaylists(id)
        fetchUserVideos()

    }, [id])

    const fetchUserPlaylists = async(userId) => {
        try {
            const response = await fetch()
            const data = await response.json()
            setFolders(data)


            toast.success(response.data.message)
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }



    const handleCreateFolderPlaylist = async () => {
        // const { userId } = localStorage.getItem() /////////////////////////////////////
        const userId = JSON.parse(localStorage.getItem('userId'));

        try {
            const response = await axios.post(`http://localhost:4000/api/v1/users/playlists/${userId}`, { folderName, folderDescription },
                {
                    withCredentials: true,
                    headers: { "Content-Type": "application/json" }
                }
            )

            toast.success(response.data.message)
        } catch (error) {
            toast.error(error.response.data.message)
        }

        // setFolders([...folders, { name: folderName, description: folderDescription, files: [] }])
        fetchUserPlaylists(userId) // Fetch the updated list of folders after creating a new one
        setFolderName('')
    }

    const handle3dots = () => {
        const optionpage = document.getElementById('options')
        optionpage.classList.remove('options')

    }
    const handlecross1 = () => {
        const optionpage = document.getElementById('options')
        optionpage.classList.add('options')
    }
    const handlesaveplaylist = (videoId) => {
        selectedVideoId = videoId //selectedVideoId is a global variable declared initially as null, and we are updating its value here.
        const allplaylistcomponent = document.getElementById('allplaylists')
        allplaylistcomponent.classList.remove('allplaylists')
    }
    const handlecross2 = () => {
        const allplaylistcomponent = document.getElementById('allplaylists')
        allplaylistcomponent.classList.add('allplaylists')
    }

    const handleCreatePlaylist = () => {
        // alert('hello')
        const createPlaylistComponent = document.getElementById('createPlaylist')
        createPlaylistComponent.classList.remove('createPlaylist')
    }
    const handleCross3 = () => {
        // alert('hlo')
        const createPlaylistComponent = document.getElementById('createPlaylist')
        createPlaylistComponent.classList.add('createPlaylist')
    }

    const handleUploadVideo = () => {
        // alert('hello')
        const createPlaylistComponent = document.getElementById('uploadVideo')
        createPlaylistComponent.classList.remove('uploadVideo')
    }
    const handleCross4 = () => {
        // alert('hlo')
        const createPlaylistComponent = document.getElementById('uploadVideo')
        createPlaylistComponent.classList.add('uploadVideo')
    }

    const handlePlaylistCheckbox = (e, videoId) => {
        const id = e.target.name

        const allplaylists = folders.filter(folder => {
            folder.id === id //it will filter out those items whose checkbox are selected.
        })

        setSelectedPlaylists(prevSelectedPlaylists => [...prevSelectedPlaylists, ...allplaylists]);
        // prevSelectedPlaylists is automatically provided by React, representing the current state of selectedPlaylists.
        // The spread operator ...prevSelectedPlaylists is used to include all items from the current state in the new array.
        // The spread operator ...allplaylists is used to include the newly selected items in the new array.


        // now we will run a loop on the array selectedPlaylists and we will pick the videoId and playlistId and will send them to backend to add video to the playlist
        selectedPlaylists.map(async (item) => {
            try {
                const playlistId = item.id


                const response = await axios.post(`http://localhost:4000/api/v1/users/playlists/${playlistId}/videos/${videoId}`,
                    {
                        withCredentials: true,
                        headers: { "Content-Type": "application/json" }
                    }
                )

                toast.success(response.data.message)
            } catch (error) {
                toast.error(error.response.data.message)
            }

        })

    }


    const handleVideoUploading = () => {
       try {

        const formData = new FormData();
        formData.append('video', selectedFile); // File from input
        formData.append('title', videoTitle); // Video title
        formData.append('description', videoDescription); // Video description

         const response = axios.post('http://localhost:4000/api/v1/teacher/videos', formData ,
             {
                 withCredentials: true,
                 headers: { "Content-Type": "application/json" }
             }
         )

         toast.success(response.data.message)
       } catch (error) {
            toast.error(error.response.data.message)
       }
    }



    const showpage = (pageId) => {
        console.log("hnji start hogya si")
        const pages = document.querySelectorAll('.content')
        pages.forEach(page => {
            page.classList.remove('active')
        })

        const currentpage = document.getElementById(pageId)
        currentpage.classList.add('active')

        // const blocks = document.querySelectorAll('.css1')
        // blocks.forEach(block => {
        //     block.classList.remove('.css2')
        // });

        // currentpage.classList.add('.css2')

    }

    const handleVideosOfPlalyist = async(playlistId) => {
        try {
            const response = await fetch(`http://localhost:4000/api/v1/users/playlist/${playlistId}`)
            const data = await response.json()
            setVideosOfPlaylist(data) 
            // this data just doesnt contain the videoIds, but also all the info of a video like the title, description, etc. bcz we have used ".populate" in the backend
    

            const videopage = document.getElementById('videosOfPlaylist')
            videopage.classList.remove('videosOfPlaylist')


            toast.success(response.data.message)        
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    const handlecross5 = () => {
        // alert('hlo')
        const createPlaylistComponent = document.getElementById('videosOfPlaylist')
        createPlaylistComponent.classList.add('videosOfPlaylist')
    }




    return (
        <>
            <div className='relative h-[100vh] bg-[#0D0D0D] p-6 flex flex-row gap-2'>
                <div className="left flex flex-col gap-y-2  w-[50vw]">
                    <div className=" relative upparwala h-[50vh] bg-gray-800 rounded-[8px] p-4">
                        <div className="text-white text-[20px]">Upload a video </div>
                        <div onClick={() => handleUploadVideo()} className='absolute cursor-pointer bottom-4 left-[225px]  bg-green-600 button w-[200px] h-[40px] flex items-center justify-center font-semibold border-[1px] border-gray-400 text-black rounded-md'>Uplaod</div>
                    </div>
                    <div className=" relative p-4 neechewala h-[50vh] bg-gray-800 rounded-[8px]">
                        <div className="text-white text-[20px]">Create a playlist </div>
                        <div onClick={() => handleCreatePlaylist()} className='absolute cursor-pointer bottom-4 left-[225px]  bg-green-600 button w-[200px] h-[40px] flex items-center justify-center font-semibold border-[1px] border-gray-400 text-black rounded-md'>Create</div>
                    </div>
                </div>


                <div className="right h-[93vh] w-[50vw] bg-gray-800 rounded-[8px] p-4">

                    <div className="header">
                        <span onClick={() => showpage('page1')} className='Allyourvideos css1 css2 cursor-pointer text-white mx-2 text-[18px] '>All your videos</span>
                        <span onClick={() => showpage('page2')} className='Allyourplaylists css1 cursor-pointer text-white mx-2 text-[18px]'>All your playlists</span>
                    </div>

                    <div className='relative'>
                        {/* files or videos */}
                        <div id='page1' className='content active absolute  videoholder h-[80vh] bg-slate-600 p-2 rounded-[8px]'>

                            {
                                videos.map(video => (
                                    <div key={video.id} className=" relative video flex flex-row items-center w-[45vw] p-1 h-[100px] border-[1px] border-white rounded-[8px]">
                                        <div className='h-[90px] w-[180px]  bg-red-600 rounded-[8px] border-[1px] border-white'></div>
                                        <div className="pl-2">
                                            <div className='text-[15px] text-white'>{video.title}</div> {/*also handle the video.videofile*/}
                                            <div className='text-[13px] text-white'>{video.description}</div>
                                            <video src={video.videofile}></video>
                                        </div>
                                        <div onClick={() => handle3dots()} className="circleand3dots cursor-pointer h-[25px] w-[25px] rounded-full bg-yellow-300">:::</div>


                                        <div id='options' className='options absolute right-2 top-[50px]  p-3 h-[200px] w-[200px] text-white border-white border-[1px] bg-gray-800 rounded-[8px]'>
                                            <div onClick={() => handlecross1()} className='absolute right-2 cursor-pointer '>X</div>
                                            <div onClick={() => handlesaveplaylist(video.id)} className='cursor-pointer font-thin text-lg'>Save to Playlist</div>
                                            <div className='cursor-pointer font-thin text-lg'>Delete</div>
                                        </div>
                                    </div>
                                ))
                            }


                        </div>

                        {/* folders or playlists */}
                        <div id='page2' className=' content absolute playlistholder h-[80vh] bg-slate-600 p-2 rounded-[8px]'>
                            {
                                folders.map((folder) => (
                                    <div onClick={() => handleVideosOfPlalyist(folder.id)} key={folder.id} className="video flex flex-row items-center w-[45vw] p-1 h-[100px] border-[1px] border-white rounded-[8px]">
                                        <div className='h-[90px] w-[180px]  bg-red-600 rounded-[8px] border-[1px] border-white'></div>
                                        <div className="pl-2">
                                            <div className='text-[15px] text-white'> {folder.name} </div>
                                            <div className='text-[13px] text-white'> {folder.description} </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>

            </div>

            <div id='createPlaylist' className='createPlaylist absolute top-[130px] left-[475px] opacity-1 z-10 border-white border-[1px] bg-gray-800 rounded-[8px] h-[400px] w-[400px] p-4 flex items-center justify-center'>
                <div>
                    <div className='text-white text-[30px] font-thin'>Create Playlist</div>
                    <div onClick={() => handleCross3()} className='absolute text-white text-lg cursor-pointer right-2 top-1'>X</div>
                    <form action="">
                        <div className='pb-[10px]'>

                            <div className=' text-white text-[20px] tracking-[3px]'>Name of playlist</div>
                            <input value={folderName} onChange={(e) => setFolderName(e.target.value)} className='bg-gray-800 h-[40px] w-[250px] border-[2px] border-white  rounded-md' type="text" />
                        </div>

                        <div>

                            <div className='text-white text-[20px] tracking-[3px]'>Description of playlist</div>
                            <input value={folderDescription} onChange={(e) => setFolderDescription(e.target.value)} className='bg-gray-800 h-[40px] w-[250px] border-[2px] border-white  rounded-md' type="text" />
                        </div>
                        <div onClick={() => handleCreateFolderPlaylist()} className='mt-[20px] cursor-pointer   bg-green-600 button w-[200px] h-[40px] flex items-center justify-center font-semibold border-[1px] border-gray-400 text-black rounded-md'>Create</div>
                    </form>
                </div>
            </div>

            <div id='uploadVideo' className='uploadVideo absolute top-[130px] left-[475px]  border-white border-[1px] bg-gray-800 rounded-[8px] h-[400px] w-[400px] p-4 flex items-center justify-center'>
                <div>
                    <div className='text-white text-[30px] font-thin'>Upload Video</div>
                    <div onClick={() => handleCross4()} className='absolute text-white text-lg cursor-pointer right-2 top-1'>X</div>
                    <form onSubmit={handleVideoUploading} action="">

                            <input type="file" accept='video/*' onChange={(e) => setSelectedFile(e.target.files[0])} name="" id="" />

                        <div className='pb-[10px] text-white'>
                            <div className=' text-white text-[20px] tracking-[3px]'>Title of video</div>
                            <input value={videoTitle} required onChange={(e) => setVideoTitle(e.target.value)} className='bg-gray-800 h-[40px] w-[250px] border-[2px] border-white  rounded-md' type="text" />
                        </div>

                        <div className='text-white'>

                            <div className='text-white text-[20px] tracking-[3px]'>Description of video</div>
                            <textarea value={videoDescription} onChange={(e) => setVideoDescription(e.target.value)} className='bg-gray-800 h-[40px] w-[250px] border-[2px] border-white  rounded-md' type="text" />
                        </div>
                        <div type="submit" className='mt-[20px] cursor-pointer   bg-green-600 button w-[200px] h-[40px] flex items-center justify-center font-semibold border-[1px] border-gray-400 text-black rounded-md'>Upload</div>
                    </form>
                </div>
            </div>


            <div id='allplaylists' className='allplaylists absolute top-[130px] left-[475px] opacity-1 border-white border-[1px] bg-gray-800 rounded-[8px] h-[400px] w-[400px] flex p-4'>
                <div>
                    <div className='text-white text-[30px] font-thin'>Add Video to Playlist</div>
                    <div onClick={() => handlecross2()} className='text-white cursor-pointer absolute right-2 top-1'>X</div>
                    <div>

                        {
                            folders.map((folder) => (
                                <div className='flex items-center'>
                                    <input onChange={(e) => handlePlaylistCheckbox(e, selectedVideoId)} className='mr-[6px]' type="checkbox" name={folder.id} id="" /> {/*checkbox*/}
                                    <div className=' text-white text-[20px] tracking-[3px] font-thin'>{folder.name}</div>
                                </div>
                            ))
                        }

                    </div>

                    {/* <div className='mt-[20px] cursor-pointer  absolute bottom-2 left-[100px]  bg-green-600 button w-[200px] h-[40px] flex items-center justify-center font-semibold border-[1px] border-gray-400 text-black rounded-md'>Add</div> */}
                </div>
            </div>
{/* top-[130px] left-[475px] */}
            <div id='videosOfPlaylist' className='videosOfPlaylist absolute  opacity-1 border-white border-[1px] bg-gray-800 rounded-[8px] h-[600px] w-[600px] flex p-4'>
                <div>
                    <div className='text-white text-[30px] font-thin'>`All Videos of ${}`</div>
                    <div onClick={() => handlecross5()} className='text-white cursor-pointer absolute right-2 top-1'>X</div>
                    <div>

                        {
                            videosOfPlaylist.map((video) => (
                                <div key={video.id} className="video flex flex-row items-center w-[500px] p-1 h-[100px] border-[1px] border-white rounded-[8px]">
                                        <div className='h-[90px] w-[180px]  bg-red-600 rounded-[8px] border-[1px] border-white'></div>
                                        <div className="pl-2">
                                            <video src={video.videoFile}></video>
                                            <div className='text-[15px] text-white'> {video.title} </div>
                                            <div className='text-[13px] text-white'> {video.description} </div>
                                        </div>
                                    </div>
                            ))
                        }

                    </div>

                    {/* <div className='mt-[20px] cursor-pointer  absolute bottom-2 left-[100px]  bg-green-600 button w-[200px] h-[40px] flex items-center justify-center font-semibold border-[1px] border-gray-400 text-black rounded-md'>Add</div> */}
                </div>
            </div>

        </>
    )
}

export default ShowPlaylists