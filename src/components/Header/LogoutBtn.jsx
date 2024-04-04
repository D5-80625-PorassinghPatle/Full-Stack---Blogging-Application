import React from 'react'
import {useDispatch} from "react-redux";
import authService from "../../appWrite/config.js"
import {logout} from "../../store/authSlice.js"

export default function LogoutBtn() {

    const dispatch= useDispatch();

    const logoutHandler = ()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
        //it is promise within itself
    }
  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
        LOGOUT
    </button>
  )
}
