import { Container, Box, Avatar, Typography, TextField, Button, CssBaseline, Link } from '@material-ui/core'
//import { Copyright } from '@material-ui/icons'
import React from 'react'

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="/">
          FakeFilms
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }


function SignUp() {
    return (
        <div>
            
            <Container maxWidth="xs">
                <CssBaseline/>
                <Box sx={{
                    marginTop: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <Avatar sx={{m: 1,bgcolor:'black'}}></Avatar>
                    <Typography variant='h5'>Sign Up</Typography>
                    <TextField margin='normal' required fullWidth label="Username" ></TextField>
                    <TextField margin='normal' required fullWidth label="Email" autoFocus></TextField>
                    <TextField margin='normal' required fullWidth label="Password" ></TextField>
                    <Button type='submit' fullWidth variant='contained' size='large' sx={{mt:3,mb:2}} >Sign Up</Button>
                    <Copyright sx={{ mt: 8, mb: 4 }}></Copyright>
                </Box> 

            </Container>
        </div>
    )
}
 
export default SignUp
