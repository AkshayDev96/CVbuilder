import { Button } from '@mui/material'
import React,{useState} from 'react'
import { postRequest } from '../../api'
import { CHANGE_LAYOUT } from '../../api/endPoints'
import CVTemplate from '../CVTemplate'
import CVTemplate2 from '../CVTemplate2'
import Layout from '../Layout'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getUserData } from '../../helpers'

const CVLayout = () => {

    const navigate = useNavigate()
    const [defaultLayout,setLayout] = useState(getUserData()?.defaultLayout)

    const Changer = (layoutName)=>{
        postRequest(CHANGE_LAYOUT,{
            defaultLayout:layoutName
        }).then((response)=>{
            setLayout(layoutName)
            // console.log(response?.data?.message)
            if(response?.data?.message){
                toast.success(response?.data?.message)
            }
        }).catch((e)=>{
            //if session outs
            if(e?.response?.status==404){
                setTimeout(()=>navigate('/login'),2000)
            }
            if(e?.response?.data?.errorMessage){
                toast.error(e.response?.data?.errorMessage)
            }
        })
    }

    return (
        <Layout>
            <h4>Choose your default layout</h4>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 mb-5' >
                        <h5 className='text-center'>Layout 1</h5>
                        <div className='mb-4'>
                        <CVTemplate />
                        </div>
                        <Button disabled={defaultLayout=="layout1"} onClick={()=>Changer('layout1')} sx={{display:'block',margin:'auto'}} variant='contained'> Active default Layout 1</Button>
                    </div>
                    <div className='col-lg-12'>
                    <h5 className='text-center'>Layout 2</h5>
                    <div className='mb-4'>
                        <CVTemplate2 />
                        </div>
                        <Button disabled={defaultLayout=="layout2"} onClick={()=>Changer('layout2')} sx={{display:'block',margin:'auto'}} variant='contained'> Active default Layout 2</Button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CVLayout