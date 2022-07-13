import {  useEffect } from 'react'
import { toast } from 'react-toastify'
import { getRequest } from '../../api'
import { USER_AUTH } from '../../api/endPoints'
import {useNavigate} from 'react-router-dom'

const ProtectRoute = ({children}) => {
    const navigate = useNavigate()
    useEffect(() => {
        // getRequest(USER_AUTH)
        //     .then((response) => {
        //         // if(response?.data?.message){
        //         //     toast.success(response?.data?.message)
        //         // }
        //         if(response?.data?.data?.user){
        //             localStorage.setItem("userLogin",JSON.stringify(response?.data?.data?.user))
        //         }
        //     }).catch((e) => {
        //         if (e?.response?.data?.errorMessage) {
        //             navigate('/login')
        //         }
        //     })
        fetch(`${process.env.REACT_APP_SERVER}${USER_AUTH}`, {
            method: "GET",
            credentials: "include",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Credentials": true,
            },
          })
            .then((response) => {
              if (response.status === 200) return response.json();
              throw new Error("authentication has been failed!");
            })
            .then((resObject) => {
                if(resObject?.data?.user){
                    localStorage.setItem("userLogin",JSON.stringify(resObject?.data?.user))
                }
            })
            .catch((err) => {
              console.log(err);
              navigate('/login')
            });
    },[])

    return  children
}

export default ProtectRoute