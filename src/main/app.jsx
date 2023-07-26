import React from 'react'
import '../common/template/dependencies'
import Footer from '../common/template/footer'
import Header from '../common/template/hearder'
import SideBar from '../common/template/sideBar'

export default props => {
  return (
    <div className='wrapper'>
      <Header />
      <SideBar />
      <div className='content-wrapper'>
        <h1>Conteúdo</h1>
      </div>
      <Footer />
    </div>
  )
}
