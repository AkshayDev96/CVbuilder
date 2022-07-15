import { Button } from '@mui/material'
import React from 'react'
import Input from '../layouts/Input'
import DeleteIcon from '@mui/icons-material/Delete';

const ProjectInput = ({data,errors,inputHandle,removeItem}) => {
    return (
        <div className="row mb-3">
            <div className='col-lg-4' >
                <Input
                    type={'text'}
                    value={data?.title}
                    id={'title'}
                    label={'Project title'}
                    placeholder={'Title here.'}
                    error={errors?.title}
                    inputHandler={inputHandle}
                />
            </div>
            <div className='col-lg-4' >
                <Input
                    type={'text'}
                    value={data?.teamSize}
                    id={'teamSize'}
                    label={'Team size'}
                    placeholder={'Team size here.'}
                    error={errors?.teamSize}
                    inputHandler={inputHandle}
                />
            </div>
            <div className='col-lg-4' >
                <Input
                    type={'text'}
                    value={data?.duration}
                    id={'duration'}
                    label={'Duration'}
                    placeholder={'Duration here.'}
                    error={errors?.duration}
                    inputHandler={inputHandle}
                />
            </div>
            <div className='col-lg-4 mt-3'>
                <Input
                    type={'text'}
                    value={data?.technologies}
                    id={'technologies'}
                    label={'Technologies'}
                    placeholder={'Technologies here.'}
                    error={errors?.technologies}
                    inputHandler={inputHandle}
                />
            </div>
            <div className='col-lg-4 mt-3'>
                <Input
                    type={'text'}
                    value={data?.description}
                    id={'description'}
                    label={'Description'}
                    placeholder={'Description here.'}
                    error={errors?.description}
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

export default ProjectInput