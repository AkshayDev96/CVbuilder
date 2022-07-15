

export const getUserData = ()=>{
    let userData = false
    if(JSON.parse(localStorage?.getItem("userLogin"))?.token){
        userData = JSON.parse(localStorage.getItem("userLogin"))
    }
    return userData
}