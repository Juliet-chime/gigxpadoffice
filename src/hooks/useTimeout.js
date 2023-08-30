import { useEffect, useState } from "react"


export const useErrorTimeout = (duration=3000) => {
    const [message,setMessage] = useState('')
    const [status,setStatus] = useState('')

    useEffect(()=>{
        if(message){
            const errorTimeoutId = setTimeout(()=>{
                setMessage('')
                setStatus('')
            },duration)
            return () => clearTimeout(errorTimeoutId)
        }
    },[message,duration])

    return [message,setMessage,status,setStatus]
}