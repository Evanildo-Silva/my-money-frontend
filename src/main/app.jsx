import React from 'react'
import '../common/template/dependencies'
import Header from '../common/template/hearder'
import SideBar from '../common/template/sideBar'

export default props => {
  return (
    <div className='wrapper'>
      <Header />
      <SideBar />
    </div>
  )
}
