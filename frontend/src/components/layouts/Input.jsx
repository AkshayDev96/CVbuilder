import React from 'react'
import { TextField } from '@mui/material'
import PropTypes from 'prop-types'
import { color } from '@mui/system'


const Input = ({id,type,label,placeholder,inputHandler,value,error,inputProps}) => {
  return (
    <TextField focused autoComplete='off'  value={value} onChange={inputHandler} 
      color={'warning'}
      placeholder={placeholder}
      error={error?true:false}
      helperText={error}
    sx={{ input: { color: 'white' }}}
    inputProps={inputProps?inputProps:{}}
    type={type} fullWidth label={label} id={id} />

  )
}

Input.prototype = {
    type:PropTypes.string,
    label:PropTypes.string,
    id:PropTypes.string,
    value:PropTypes.string,
    placeholder:PropTypes.string,
    error:PropTypes.string||PropTypes.bool,
    inputHandler:PropTypes.func,
    inputProps:PropTypes.object
} 

export default Input