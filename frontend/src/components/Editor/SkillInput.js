import { Button } from '@mui/material'
import React from 'react'
import Input from '../layouts/Input'
import DeleteIcon from '@mui/icons-material/Delete';

const SkillInput = ({data,errors,inputHandle,removeItem}) => {
    return (
        <div className="row mb-3">
            <div className='col-lg-4' >
                <Input
                    type={'text'}
                    value={data?.name}
                    id={'name'}
                    label={'Skill name'}
                    placeholder={'Skill name here.'}
                    error={errors?.skill_name}
                    inputHandler={inputHandle}
                />
            </div>
            <div className='col-lg-4' >
                <Input
                    type={'text'}
                    value={data?.percentage}
                    id={'percentage'}
                    inputProps={{ maxLength: 4 }}
                    label={'Percentage'}
                    placeholder={'Skill percentage here.'}
                    error={errors?.skill_percentage}
                    inputHandler={inputHandle}
                />
            </div>
          
            <div className='col-lg-4 mt-3 pt-2'>
            <Button variant='contained' size='small' onClick={removeItem} endIcon={<DeleteIcon/>} color={'warning'} >Remove</Button>

            </div>
            <hr style={{color:'orange'}} className="mt-2 mb-1"/>
        </div>
    )
}

export default SkillInput