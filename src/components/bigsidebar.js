import React from 'react'
import Wrapper from '../assets/wrappers/BigSidebar'
import Navlink from '../pages/Dashboard/navlink'
import Logo from './logo'
import { useSelector } from 'react-redux'

const Bigsidebar = () => {
    const {issidebar}=useSelector((store)=>store.user)
  return (
    <Wrapper>
    <div className={issidebar?'sidebar-container':'sidebar-container show-sidebar'}>
      <div className='content'>
        <header>
            <Logo/>
        </header>
        <Navlink/>
      </div>
    </div>

    </Wrapper>
  )
}

export default Bigsidebar