import axios from 'axios';
import { useState, useEffect } from 'react'
import "../Cast/Cast.css"


const Cast = ({ media_type, id }) => {

    const [credits, setCredits] = useState();


    const items = credits?.map((c) => (
        <div>
            <span className="b">{c?.name}</span>
        </div>
    ));

    const fetchCast = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)

        //console.log(data);
        setCredits(data.cast);
    }  

    useEffect(() => {
        fetchCast();

    }, [])

    return (
        <div>
            <span className="title">Cast:</span>
            <div className="name">
                {items}
            </div>

        </div>

    );

}

export default Cast
