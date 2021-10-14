import { Button, createTheme, TextField, ThemeProvider } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';
import React from 'react'
import { useState , useEffect} from 'react';
import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPagination from '../../components/Pagination/CustomPagination';




const darkTheme = createTheme({
    palette: {
        type: "dark",
        primary: {
            main: "#nnn", 
        }
    }
})



function Search() {

    
    const [searchText, setSearchText] = useState("")
    const [content, setContent] = useState()
    const [page, setPage] = useState(1);
    const [numOfPages, setNumOfPages] = useState()
    
    const fetchSearch= async()=>{
        const {data} = await axios.get(
            `
            https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchText}&page=${page}&include_adult=false`
        )
        setContent(data.results);
        setNumOfPages(data.total_pages)
    }

    useEffect(() => {
        window.scroll(0,0);
        fetchSearch();
    }, [page])
    
    return (
        <div>
            <ThemeProvider theme={darkTheme}>
                <div style={{ display: "flex", margin: "15px 0" }}>
                    <TextField className="text" onChange={(e)=>setSearchText(e.target.value)} fullWidth label="Search" variant="filled" margin="normal" sx={{backgroundColor:"white"}}/>
                    <Button onClick={fetchSearch} variant="contained" style={{ marginLeft: 10 , backgroundColor:"white"}} ><SearchIcon /></Button>
                </div>
            </ThemeProvider>
            <div className="home">
                {content && content.map((a) => (
                    <SingleContent key={a.id} id={a.id} poster={a.poster_path}  />
                ))}
            </div>
            {numOfPages > 1 && (<CustomPagination setPage={setPage} numOfPages={numOfPages}/>)}
            


        </div>
    )
}

export default Search
 