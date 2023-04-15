import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showstats } from '../../featureuser/alljob/alljobslice'
import { ChartContainer, StatsContainer,loading } from '../../components'
const Stats = () => {
  const {isloading, monthlyApplications}=useSelector((store)=>store.alljobs)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(showstats())
    console.log(showstats())
  },[])
  console.log(monthlyApplications)
  return (
    <>
    <StatsContainer/>
    { 
    monthlyApplications.length > 0 && <ChartContainer/>
    
    }
    {console.log(monthlyApplications.length)}
    </>
  )
}

export default Stats