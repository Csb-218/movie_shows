import { useEffect, useState } from 'react'
import { useParams, Outlet } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getShows } from '../../services/services'
import errorImage from '../../assets/errorImage.png'
import { getDisplayDate } from '../../utils/helper'
import * as DOMPurify from 'dompurify';


const Movie = () => {

  const { id } = useParams()

  const [movie, setMovie] = useState()

  const { data: res, isLoding, isError } = useQuery({
    queryKey: ['movie'],
    queryFn: () => getShows(),
    refetchIntervalInBackground: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  })

  useEffect(() => {

    const show = res?.data?.find(show => show?.show?.id.toString() === id)
    setMovie(show)
    console.log(res, show)

  }, [res,id])



  return (
    <>
      <div className=" mt-16 flex justify-center items-center min-h-screen bg-gray-900 text-white">
        <div className="max-w-4xl bg-gray-800 p-4 rounded-md shadow-lg">
          <div className="flex lg:flex-row md:flex-row md:justify-start lg:justify-start justify-center flex-col ">
            <img
              className=" lg:w-4/12 md:w-4/12 object-cover rounded-md"
              src={movie?.show?.image?.original ? movie?.show?.image?.original : errorImage}
              alt="Movie Poster"
            />
            <div className="lg:ml-8 md:ml-8 mt-4">
              <h1 className="text-3xl font-bold">{movie?.show?.name}</h1>
              <p className="text-gray-400 text-sm">Release : {getDisplayDate(movie?.show?.premiered)}</p>
              <p className="text-gray-400 text-sm">Genre: {movie?.show?.genres?.map((genre, index) => `${genre} `)}</p>
              <p className="text-gray-400 text-sm">Language: {movie?.show?.language}</p>
              <p className="text-gray-400 text-sm">Run time: {movie?.show?.runtime} minutes</p>
              <p className="text-gray-400 text-sm">Rating: {movie?.show?.rating?.average}/10</p>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold">Overview</h2>
            <p className="text-gray-400 mt-2">
            {DOMPurify.sanitize(movie?.show?.summary).replaceAll('<p>',"").replaceAll('</p>',"").replaceAll('<b>',"").replaceAll('</b>')}
            </p>
          </div>

          {/* <div className="mt-8">
            <h2 className="text-xl font-bold">Cast</h2>
            <ul className="grid grid-cols-2 gap-4 mt-2">
              <li className="text-gray-400">Actor 1</li>
              <li className="text-gray-400">Actor 2</li>
              <li className="text-gray-400">Actor 3</li>
              <li className="text-gray-400">Actor 4</li>
            </ul>
          </div> */}
        </div>
      </div>

      
    </>
  )
}

export default Movie