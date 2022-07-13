import { Box, Paper, Grid, Button, Typography, Checkbox, Divider } from '@mui/material'
import React from 'react'
import Input from '../layouts/Input'
import LockIcon from '@mui/icons-material/Lock';
import validate from '../../helpers/validate'
import { toast } from 'react-toastify';
import {
  Link
} from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { postRequest } from '../../api';
import { USER_LOGIN } from '../../api/endPoints';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [errors, setErrors] = React.useState()
  const [user, setUser] = React.useState({
    username: '', password:''
  })

const navigate = useNavigate()

  const inputHandler = (e) => {
    setUser(() => ({
      ...user, [e.target.id]: e.target.value
    }))
  }

  const valid = () => {
    const errors = validate(user)
    setErrors(errors?.errors)
    if (errors.isError) {
      toast.error("Please provide valid credentials!")
    }
    return !errors?.isError
  }

  const submit = () => {
    if(valid()){
        let payload ={
          username:user?.username,
          password:user?.password
        }
        postRequest(USER_LOGIN,payload).then((response)=>{
          if(response?.data?.message){
            toast.success(response?.data?.message)
            setTimeout(()=>navigate('/dashboard'),2000)
          }
        }).catch(e=>{
          if(e?.response?.data?.errorMessage){
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
            <Paper elevation={3} style={{ width: 400, marginTop: 150, height: errors?.password?360:325,borderRadius:15,padding: '10px 20px', background: '#000' }}>
              <Typography align='center' variant='h5' color={'white'}>Login (CV Builder)</Typography>
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
                  
                    <Box
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                      }}
                    >
                      <Button style={{marginBottom:5}} onClick={submit} variant='contained' color={'warning'} endIcon={<LockIcon />}>Login</Button>
                    </Box>
                    <Divider><Typography align='center' variant='span' color={'orange'}>OR</Typography></Divider>
                    <div style={{marginTop:5}}>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                        <Button onClick={googleLogin} style={{width:'100%'}} size='small' variant='contained' color={'warning'} endIcon={<GoogleIcon />}>Google</Button>
                        </Grid>
                        <Grid item xs={6}>
                        <Button onClick={facebookLogin } style={{width:'100%'}} size="small" variant='contained' color={'warning'} endIcon={<FacebookIcon />}>Facebook</Button>
                        </Grid>
                      </Grid>
                      <div style={{marginBottom:10}} >
                   <Link to="/register"><Typography align='center' variant='span' color={'orange'}>Register as new user</Typography></Link>
                  </div>
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

export default Login