import validator from "validator";

const errorCheck = (obj, value) => {
    switch (obj) {
        case 'username':
            return (validator.isEmpty(value + "") || (value + "")?.trim()?.length === 0) ? `Username/email is required` : false
        case 'password':
            return (validator.isEmpty(value + "") || (value + "")?.trim()?.length === 0) ? `Password is required` : false
        case 'confirm_password':
            return (validator.isEmpty(value + "") || (value + "")?.trim()?.length === 0) ? `Confirm password is required` : false
        case 'email':
            if ((validator.isEmpty(value + "") || (value + "")?.trim()?.length === 0)) {
                return "Email is required"
            } else if (!validator.isEmail(value + "")) {
                return "Invalid email address"
            } else {
                return false
            }
        case 'contactNo':
            if ((validator.isEmpty(value + "") || (value + "")?.trim()?.length === 0)) {
                return "Contact number is required"
            } else if (!validator.isNumeric(value + "")) {
                return "Contact no must be in number"
            } else if ((value + "")?.trim()?.length != 10) {
                return "Contact no must be 10 digit number"
            } else {
                return false
            }
        default:
            return false
    }
}

const validate = (state) => {
    let errors = {}
    let isError = false
    //validate each field passed
    Object.keys(state).forEach((key) => {
        errors[key] = errorCheck(key, state[key])
    })
    Object.keys(errors).forEach((key) => {
        if (errors[key]) {
            isError = true
        }
    })

    if((state?.confirm_password && state?.password) && (state?.confirm_password!=state?.password)){
        isError=true
        errors['password'] = "Password not matched"
    }

    return { isError, errors }
}

export default validate