import { useEffect, useState } from "react"

const usePasswordValidate = (val) =>{
    const [passErrr , setPassErr] = useState('')
    const [showErr ,setShowErr] = useState(false)

    const handler = (password) =>{
        let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/gm
        if(!password)
            setPassErr("Please enter the password")
        else if (!pattern.test(password))
            setPassErr("Password must contain atleast 8 characters, a capital letter,a symobol and a number.");
        else setPassErr("");
    }
    useEffect(()=>{
        setShowErr(true)
        if(showErr)
            handler(val)
    },[val])
    return passErrr
}

export default usePasswordValidate;