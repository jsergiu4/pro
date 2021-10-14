import * as React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MovieIcon from '@material-ui/icons/Movie';
import HomeIcon from '@material-ui/icons/Home';
import { BottomNavigationAction , BottomNavigation , Box } from '@material-ui/core';
import { useHistory } from 'react-router';
import { useEffect } from 'react';
 

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const history = useHistory();
  useEffect(()=>{
    if(value===0)
    history.push('/')
    else if (value===1) history.push('/movies')
    else if (value===2) history.push('/search')
  },[value,history])

  return (
    <Box sx={{ width: '100%' , position:'fixed', bottom:0, zIndex:100 }}>
      <BottomNavigation
        sx={{backgroundColor:'#2d313a' }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction sx={{color:'white'}}label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction sx={{color:'white'}}label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction sx={{color:'white'}}label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
    </Box>
  );
} 