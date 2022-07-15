import { Button } from '@mui/material'
import React from 'react'
import Input from '../layouts/Input'
import DeleteIcon from '@mui/icons-material/Delete';

const EducationInput = ({edu,errors,inputHandleEducation,removeItem}) => {
    return (
        <div className="row mb-3">
            <div className='col-lg-4' >
                <Input
                    type={'text'}
                    value={edu?.qualification}
                    id={'qualification'}
                    label={'Qualification'}
                    placeholder={'Qualification here.'}
                    error={errors?.qualification}
                    inputHandler={inputHandleEducation}
                />
            </div>
            <div className='col-lg-4' >
                <Input
                    type={'text'}
                    value={edu?.institution}
                    id={'institution'}
                    label={'Institution'}
                    placeholder={'Institution name here.'}
                    error={errors?.institution}
                    inputHandler={inputHandleEducation}
                />
            </div>
            <div className='col-lg-4' >
                <Input
                    type={'text'}
                    value={edu?.board_university}
                    id={'board_university'}
                    label={'Board University'}
                    placeholder={'Board University here.'}
                    error={errors?.board_university}
                    inputHandler={inputHandleEducation}
                />
            </div>
            <div className='col-lg-4 mt-3'>
                <Input
                    type={'text'}
                    value={edu?.division}
                    id={'division'}
                    label={'Division'}
                    placeholder={'Division here.'}
                    error={errors?.division}
                    inputHandler={inputHandleEducation}
                />
            </div>
            <div className='col-lg-4 mt-3'>
                <Input
                     inputProps={{ maxLength: 4 }}
                    type={'text'}
                    value={edu?.percentage}
                    id={'percentage'}
                    label={'Percentage'}
                    placeholder={'Percentage here.'}
                    error={errors?.percentage}
                    inputHandler={inputHandleEducation}
                />
            </div>
            <div className='col-lg-4 mt-3 pt-2'>
            <Button variant='contained' size='small' onClick={removeItem} endIcon={<DeleteIcon/>} color={'warning'} >Remove</Button>

            </div>
            <hr style={{color:'orange'}} className="mt-2 mb-1"/>
        </div>
    )
}

export default EducationInput