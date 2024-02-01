import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getDisplayDate } from '../../utils/helper'
import Star from '../rating/Star'
import errorImage from '../../assets/errorImage.png'


const MovieCard = ({ show }) => {

    const navigate = useNavigate()

    return (
        <div className="max-w-sm overflow-hidden  shadow-lg transition-transform transform hover:scale-105 duration-300">
            <img
                className="w-full h-4/6 object-contain "
                src={
                    show?.show?.image?.original ?
                        show?.show?.image?.original
                        :
                        errorImage
                }
                alt="Video Thumbnail"
                // onError="https://images.unsplash.com/photo-1584824486509-112e4181ff6b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZXJyb3J8ZW58MHx8MHx8fDA%3D"
            />
            <div className="px-6 py-4 h-1/12 grid grid-cols-1  ">
                <p className="font-bold text-xl mb-2">{show?.show?.name}</p>
                <p className="text-gray-500 text-base">{show?.show?.language}</p>
                <p className="text-gray-500 text-base">premiered on {getDisplayDate(show?.show?.premiered)}</p>
                <p className="text-gray-500 text-base">{show?.show?.runtime} minutes</p>
                {/* <Star rating={show?.show?.rating?.average}/> */}
                {
                    show?.show?.rating?.average ?
                        <p className="text-gray-500 text-base">rated {show?.show?.rating?.average}</p>
                        :
                        <p className="text-gray-500 text-base">no ratings</p>
                }
                <button 
                type="button" 
                class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                onClick={() => navigate(`movie/${show?.show?.id}`)}
                >
                    see details
                </button>

            </div>
            <div className="px-6 py-4 h-1/12">
                {
                    show?.show?.genres?.map(genre => {
                        return (
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                                {genre}
                            </span>
                        )
                    })
                }


            </div>
        </div>
    )
}

export default MovieCard