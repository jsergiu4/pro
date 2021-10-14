import { Pagination } from '@material-ui/core'
import React from 'react'


const CustomPagination = ({setPage,numOfPages=10}) => {

    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0,0);
    }


    return (
        <div
         style={{
             width:"100%",
             display:"flex",
             justifyContent:"center",
             marginTop:10,
         }}
        >
            <Pagination 
            count={numOfPages} 
            onChange={(e) => handlePageChange(e.target.textContent)} 
            variant='outlined' 
            shape='rounded'
            color="primary"
            style={{  }}
            hideNextButton
            hidePrevButton
            />
        </div>
    )
}

export default CustomPagination
  