import {  useEffect } from 'react'
import { toast } from 'react-toastify'
import { getRequest } from '../../api'
import { USER_AUTH } from '../../api/endPoints'
import {useNavigate} from 'react-router-dom'

const ProtectRoute = ({children}) => {
    const navigate = useNavigate()
    useEffect(() => {
        getRequest(USER_AUTH)
            .then((response) => {
                // if(response?.data?.message){
                //     toast.success(response?.data?.message)
                // }
                if(response?.data?.data?.user){
                    localStorage.setItem("userLogin",JSON.stringify(response?.data?.data?.user))
                }
            }).catch((e) => {
                if (e?.response?.data?.errorMessage) {
                    navigate('/login')
                }
            })
    },[])

    return  children
}

export default ProtectRoute