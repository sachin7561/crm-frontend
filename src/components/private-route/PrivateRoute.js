import React from 'react'
import { Route,Redirect, Navigate, Routes } from 'react-router-dom'
import { DefaultLayout } from '../../layout/DefaultLayout'

const isAuth=true;
export const PrivateRoute = ({children, ...rest}) => {
  return (
    <Routes>
    <Route 
    {...rest}
    render={()=>(isAuth?
        <DefaultLayout> {children} </DefaultLayout>  :<Navigate to="/" />)}/>
   </Routes>
  )
}
