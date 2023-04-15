import React from 'react'
import { BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer } from 'recharts'

const Barchartcomponent = ({data}) => {
  return (
<ResponsiveContainer width='100%' height={300}>
    <BarChart data={data}>
        <CartesianGrid strokeDasharray='10 10'/>
        <XAxis dataKey='date'/>
        <YAxis allowDecimals={false}/>
        <Tooltip/>
        <Bar dataKey='count' fill='#2cb1bc' barSize={75}/>

    </BarChart>

</ResponsiveContainer>
  )
}

export default Barchartcomponent