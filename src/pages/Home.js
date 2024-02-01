import React from 'react'
import { useQuery } from '@tanstack/react-query'
import MovieCard from '../components/cards/MovieCard'
import { getShows } from '../services/services'

const Home = () => {
 
  const {data:shows,isLoading,isError} = useQuery({
    queryKey:["shows"],
    queryFn:() => getShows(),
  })


  return (
    <>
    <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-5 justify-items-center place-content-start p-5">
     
     {
      shows?.data?.map((show,index) => {
        return(
          <MovieCard show={show}/>
        )
      })
     }
     
      


    </div>
    </>
  )
}

export default Home