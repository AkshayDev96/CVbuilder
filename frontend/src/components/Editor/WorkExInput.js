import { Button } from '@mui/material'
import React from 'react'
import Input from '../layouts/Input'
import DeleteIcon from '@mui/icons-material/Delete';

const WorkExInput = ({work,errors,inputHandleWork,removeItem}) => {
    return (
        <div className="row mb-3">
            <div className='col-lg-4' >
                <Input
                    type={'text'}
                    value={work?.organization}
                    id={'organization'}
                    label={'Organization'}
                    placeholder={'Organization here.'}
                    error={errors?.organization}
                    inputHandler={inputHandleWork}
                />
            </div>
            <div className='col-lg-4' >
                <Input
                    type={'text'}
                    value={work?.joining_location}
                    id={'joining_location'}
                    label={'Joining Location'}
                    placeholder={'Joining location here.'}
                    error={errors?.joining_location}
                    inputHandler={inputHandleWork}
                />
            </div>
            <div className='col-lg-4' >
                <Input
                    type={'text'}
                    value={work?.ctc}
                    id={'ctc'}
                    label={'CTC'}
                    placeholder={'CTC here.'}
                    error={errors?.ctc}
                    inputHandler={inputHandleWork}
                />
            </div>
            <div className='col-lg-4 mt-3'>
                <Input
                    type={'date'}
                    value={work?.joining_date}
                    id={'joining_date'}
                    label={'Joining date'}
                    placeholder={'joining date here.'}
                    error={errors?.joining_date}
                    inputHandler={inputHandleWork}
                />
            </div>
            <div className='col-lg-4 mt-3'>
                <Input
                    type={'date'}
                    value={work?.leaving_date}
                    id={'leaving_date'}
                    label={'Leaving date'}
                    placeholder={'Leaving date here.'}
                    error={errors?.leaving_date}
                    inputHandler={inputHandleWork}
                />
            </div>
            <div className='col-lg-4 mt-3'>
                <Input
                    type={'text'}
                    value={work?.technologies_worked_on}
                    id={'technologies_worked_on'}
                    label={'Technologies worked on'}
                    placeholder={'Technologies worked on here.'}
                    error={errors?.technologies_worked_on}
                    inputHandler={inputHandleWork}
                />
            </div>
            <div className='col-lg-4 mt-3 pt-2'>
            <Button variant='contained' size='small' onClick={removeItem} endIcon={<DeleteIcon/>} color={'warning'} >Remove</Button>

            </div>
            <hr style={{color:'orange'}} className="mt-2 mb-1"/>
        </div>
    )
}

export default WorkExInput