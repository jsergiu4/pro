import * as React from 'react';
import { Box, Modal } from '@material-ui/core';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { img_300, img_500, unavailable } from '../SingleContent/SingleContent';
import './MainModal.css';
import Cast from '../Cast/Cast';



const style = {
    width: '70%',
    height: '80%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: '#3b416b',
    border: '2px solid #000',
    boxShadow: 24, 
    p: 4,
     
};

export default function TransitionsModal({ children, media_type, id }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [content, setContent] = useState()
    
    
    const fetchData = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US}`)

        //console.log(data);
        
        setContent(data);
    }

    useEffect(() => {
        fetchData();
        
      
    }, [])

    return (
        <div>
            <div className='first' onClick={handleOpen}>
                {children}
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {content && (
                        <div className="main">
                              
                            <img
                            alt={content.name || content.title}
                            className="Image_portrait"
                            src={
                                content.poster_path
                                ?`${img_500}/${content.poster_path}`
                                : unavailable
                            }
                            />
                            {/* <img 
                            
                            src={
                                content.backdrop_path
                                ? `${img_500}/${content.backdrop_path}`
                                : unavailable
                            } 
                            alt={content.name || content.title}
                            className="Image_landscape"
                            /> */}

                            <div className="Modal__about">
                                <span className="Modal__title">
                                    {content.name || content.title}(
                                    {(
                                        content.first_air_date ||
                                        content.release_date ||
                                        "-----"
                                    ).substring(0, 4)}
                                    )

                                </span>
                                {content.tagline && (
                                    <i className="tagline">{content.tagline}</i>
                                )}

                                <span className="Modal__description">
                                    {content.overview}
                                </span>
                                <Cast  id={id}></Cast>
                            </div>
                        </div>
                    )}
                </Box>
            </Modal>
        </div>
    );
}