import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import CustomPagination from '../../components/Pagination/CustomPagination'
import SingleContent from '../../components/SingleContent/SingleContent'



function Movies() {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();
    
    
    const fetchMovies = async () => {
    const { data } = await axios.get(`
    https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`)
        
    //console.log(data);
    setContent(data.results);
    setNumOfPages(data.total_pages);

    }

    useEffect(()=>{
        fetchMovies();
    },[page])

    return (
        <div>
            <div className="home">
                {content && content.map((a) => (
                    <SingleContent key={a.id} id={a.id} poster={a.poster_path} />
                ))}
            </div>
            <CustomPagination setPage={setPage} numOfPages={numOfPages}/>
        </div>
    )
}

export default Movies
