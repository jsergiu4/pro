import React from 'react'
import './SingleContent.css'
import MainModal from "../Modal/MainModal"

function SingleContent({id,poster,title,media_type,date}) {
    return (
        <MainModal className="first" media_type={media_type} id={id}>
           <img
           className='poster'
           src={poster ? `${img_300}${poster}` : unavailable}  />
          
           
        </MainModal>
    )
}
export const img_300 = "https://image.tmdb.org/t/p/w300";
export const img_500 = "https://image.tmdb.org/t/p/w500";
export const unavailable ="https://www.movienewz.com/img/films/poster-holder.jpg";
export default SingleContent
