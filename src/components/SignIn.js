import { Button, Grid, Paper, TextField, Typography, Link, Avatar } from '@material-ui/core'

import React from 'react'

const SignIn = () => {
    const paperStyle = { padding: '30px 20px', width: 500, margin: '20px auto', alignItems: 'centre' }
    return (
        <div>
            <Grid align='center'>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
                <Typography component='h1' variant='h5'>Sign in</Typography>
                <Paper elevation={15} style={paperStyle}>
                    <Grid align='center'>


                        <TextField required fullWidth id="outlined-basic" label='Email' variant='outlined' margin='normal'></TextField>
                        <TextField required fullWidth id="outlined-basic" label='Password' variant='outlined' margin='normal'></TextField>
                        <Button fullWidth variant='contained' size='large' sx={{ mt: 3, mb: 2 }}>Sign In</Button>
                        <Grid item>
                            <Link href="#" variant="body1">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </div >
    )
}

export default SignIn
