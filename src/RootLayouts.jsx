import React from 'react'
import { Box } from './components/Box'
import { Outlet } from 'react-router-dom'
import { Box2 } from './components/Box2'


export const RootLayouts = () => {
  return (
    <>
    <Box/>
    <Outlet/>
    <Box2/>
    </>
  )
}
