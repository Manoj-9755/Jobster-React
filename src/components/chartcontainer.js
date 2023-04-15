import React, { useState } from 'react'
import Barchart from './barchart'
import Areachart from './areachart'
import Wrapper from '../assets/wrappers/ChartsContainer'
import { useSelector } from 'react-redux'

const ChartContainer = () => {
  const [barchart,setbarchart]=useState(true)
  const{monthlyApplications:data}=useSelector((store)=>store.alljobs)
  console.log(data)
  return (
    <Wrapper>
      <h4>Monthly Application</h4>
      <button type='button ' onClick={()=>setbarchart(!barchart)}>
        {barchart?'area chart':'bar chart'}
      </button>
      {console.log(data)}
      {barchart?<Barchart data={data}/>:<Areachart data={data}/>}
    </Wrapper>
  )
}

export default ChartContainer