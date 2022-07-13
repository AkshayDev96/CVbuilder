import { Box, Paper, Grid, Button, Typography, Checkbox, Divider } from '@mui/material'
import React, { useEffect } from 'react'
import Input from '../layouts/Input'
import LockIcon from '@mui/icons-material/Lock';
import validate from '../../helpers/validate'
import { toast } from 'react-toastify';
import {
  Link,useNavigate
} from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import validator from 'validator'
import { USER_LOGIN, USER_REGISTER } from '../../api/endPoints';
import { postRequest } from '../../api';

const Register = () => {

  const initialState = {
    username: '', email: "", contactNo: "", password: '', confirm_password: ""
  }
  const [errors, setErrors] = React.useState({})
  const [isError, setError] = React.useState(false)
  const [user, setUser] = React.useState(initialState)

const navigate = useNavigate()

  useEffect(() => {
    return () => {
      setErrors({})
      setError(false)
      setUser(initialState)
    };
  }, [])

  const inputHandler = (e) => {
    if ([e.target.id] == 'contactNo') {
      setUser(() => ({
        ...user, [e.target.id]: validator.isNumeric(e.target.value + "") ? e.target.value : ""
      }))
    } else {
      setUser(() => ({
        ...user, [e.target.id]: e.target.value
      }))
    }
  }

  const valid = () => {
    const errors = validate(user)
    setErrors(errors?.errors)
    if (errors.isError) {
      toast.error("Please provide valid credentials!")
    }
    setError(errors?.isError)
    return !errors?.isError
  }

  const submit = () => {
    if (valid()) {
      let payload = {
        username: user?.username,
        password: user?.password,
        contactNo:user?.contactNo,
        email:user?.email
      }
      postRequest(USER_REGISTER, payload).then((response) => {
        if(response?.data?.message){
          toast.success(response?.data?.message)
          //after signUp login
          setTimeout(() => {
            postRequest(USER_LOGIN,payload).then((response)=>{
              if(response?.data?.message){
                toast.success(response?.data?.message)
                setTimeout(()=>{
                  navigate('/dashboard')
                },1500)
              }
            }).catch(e=>{
              if(e?.response?.data?.errorMessage){
                toast.error(e?.response?.data?.errorMessage)
              }
            })
          }, 2000);
        }
      }).catch(e => {
        if (e?.response?.data?.errorMessage) {
          toast.error(e?.response?.data?.errorMessage)
        }
      })
    }
  }

  const googleLogin = ()=>{
    window.open(`${process.env.REACT_APP_SERVER}/auth/google`,"_self")
  }

  const facebookLogin=()=>{
    window.open(`${process.env.REACT_APP_SERVER}/auth/facebook`,"_self")
  }
  return (
    <div className='container-fluid bg-dark'>
      <div className='row'>
        <div className='col-lg-12'>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              '& > :not(style)': {
                m: 1,
                width: 128,
                height: 128,
              },
              justifyContent: 'center'
            }}
          >
            <Paper elevation={3} style={{ width: 400, marginTop: 20, height: isError ? 643 : 540, borderRadius: 15, padding: '10px 20px', background: '#000' }}>
              <Typography align='center' variant='h5' color={'white'}>Register (CV Builder)</Typography>
              <div className='container'>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Input
                      type={'text'}
                      value={user?.username}
                      id={'username'}
                      label={'Username'}
                      placeholder={'Enter your username/email'}
                      error={errors?.username}
                      inputHandler={inputHandler}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Input
                      type={'email'}
                      value={user?.email}
                      placeholder={'Enter your email'}
                      id={'email'}
                      label={'Email'}
                      error={errors?.email}
                      inputHandler={inputHandler}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Input
                      type={'text'}
                      value={user?.contactNo}
                      placeholder={'Enter your contact number'}
                      id={'contactNo'}
                      label={'Contact Number'}
                      error={errors?.contactNo}
                      inputProps={{ maxLength: 10 }}
                      inputHandler={inputHandler}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Input
                      type={'text'}
                      value={user?.password}
                      placeholder={'Enter your password'}
                      id={'password'}
                      label={'Password'}
                      error={errors?.password}
                      inputHandler={inputHandler}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Input
                      type={'text'}
                      value={user?.confirm_password}
                      placeholder={'Enter your confirm password'}
                      id={'confirm_password'}
                      label={'Confirm Password'}
                      error={errors?.confirm_password}
                      inputHandler={inputHandler}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <div style={{ marginBottom: 10 }} >
                      <Link to="/"><Typography align='center' variant='span' color={'orange'}>Already have an account?</Typography></Link>
                    </div>
                    <Box
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                      }}
                    >
                      <Button onClick={submit} variant='contained' color={'warning'} endIcon={<LockIcon />}>Register</Button>
                    </Box>
                    <Divider><Typography align='center' variant='span' color={'orange'}>OR</Typography></Divider>
                    <div style={{ marginTop: 5 }}>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <Button onClick={googleLogin} style={{ width: '100%' }} size='small' variant='contained' color={'warning'} endIcon={<GoogleIcon />}>Google</Button>
                        </Grid>
                        <Grid item xs={6}>
                          <Button onClick={facebookLogin} style={{ width: '100%' }} size="small" variant='contained' color={'warning'} endIcon={<FacebookIcon />}>Facebook</Button>
                        </Grid>
                      </Grid>

                    </div>
                  </Grid>
                </Grid>
              </div>
            </Paper>
          </Box>
        </div>
      </div>
    </div>
  )
}

export default Register