import React from 'react'
import Statitem from './statsitem'
import Wrapper from '../assets/wrappers/StatsContainer'
import { FaSuitcaseRolling,FaCalendarCheck,FaBug } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const StatsContainer = () => {
  const {stats}=useSelector((store)=>store.alljobs)
  console.log(stats)
  const defaultStats=[
    {
      title:'pending application',
      count:stats.pending || 0,
      icon:<FaSuitcaseRolling/>,
      color:'#e9b949',
      bcg:'#fcefc7'
    },
     {
      title:'interviews scheduled',
      count:stats.interview || 0,
      icon:<FaCalendarCheck/>,
      color:'#647acb',
      bcg:'#e0e8f9'
    },
    {
      title:'job declined',
      count:stats.declined || 0,
      icon:<FaBug/>,
      color:'#d66a6a',
      bcg:'#ffeeee'
    }
  ]
  return (
    <Wrapper>
      {
      defaultStats.map((item,i)=>{
        return <Statitem key={i} {...item}/>
      })
    }
    </Wrapper>
   
  )
}

export default StatsContainer
