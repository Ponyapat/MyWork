import React, { useState } from 'react';
import {  Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import Input from './Input';


const Auth = () => {
    const classes = useStyles();
    const [showPassword, setshowPassword] = useState(false)

    const isSignup = true;

    const handleSubmit = () => {
        
    };

    const handleChange = () => {

    };

    const handleShowPassword = () => setshowPassword((prevShowPassword) => !prevShowPassword)


    return (
        <div>
            <Container component='main' maxWidth='xs'>
                <Paper className={classes.paper} elevation={3}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>

                    <Typography variant='h5'>
                        {isSignup ? 'Sign Up' : 'Sign In ' }
                    </Typography>

                    <form className={classes.form} onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            {isSignup && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                                </>
                            )}

                            <Input name='email' 
                            label='Emaill Address' 
                            handleChange={handleChange} 
                            type='email' />

                            <Input name='password' 
                            label='Password' 
                            handlechange={handleChange} 
                            type={showPassword ? 'text' : 'password'} 
                            handleShowPassword={handleShowPassword} />

                            { isSignup && <Input name='confirmPassword' 
                            label='Repeat Password' 
                            handlechange={handleChange}
                            type='password' />}

                        </Grid>
                        <Button type='submit' 
                        fullWidth 
                        variant='contained' 
                        color='primary' 
                        className={classes.submit}>
                            { isSignup ? 'Sign up' : 'Sign In' }
                        </Button>
                    </form>

                </Paper>
            </Container>
        </div>
    )
}

export default Auth
