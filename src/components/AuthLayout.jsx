//this is used as mechanisum for proetction of layout and authentication sevice 
import React from 'react'
import { useEffect,useState } from 'react'
import { UseSelector, useSelector } from 'react-redux'
import {useNavigate} from "react-router-dom";


function Protected({children, authentication=true}) {

    const navigate =useNavigate();
    const [loader , setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(()=>{

        if(authentication && authStatus !== authentication){
            navigate("/login")
        }else if(!authentication && authStatus !== authentication){
            navigate("/")
        }

    },[authStatus,navigate, authentication])
  return loader ? <h1>Loading...</h1> :<>{children}</>
}

export default Protected