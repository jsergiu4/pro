import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react'
import '../../components/SingleContent/SingleContent'
import SingleContent from '../../components/SingleContent/SingleContent';
import './Home.css'

function Home() {

    const [page, setPage] = useState(1)
    const [content, setContent] = useState([])

    const fetchHome = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`)

        // console.log(data);
        setContent(data.results);
    };

    useEffect(() => {
        fetchHome();
    }, [page]);


    return (
        <div>
            <span className="pageTitle">Trending Movies</span>
            <div className="home">
                {content && content.map((a) => (
                    <SingleContent key={a.id} id={a.id} poster={a.poster_path} />
                ))}
            </div> 
            
        </div>
    ) 
}

export default Home 
