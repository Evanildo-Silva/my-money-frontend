import React from 'react'
import '../common/template/dependencies'

import Messages from '../common/messages/messages'
import Footer from '../common/template/footer'
import Header from '../common/template/hearder'
import SideBar from '../common/template/sideBar'
import Routes from './routes'

export default props => {
  return (
    <div className='wrapper'>
      <Header />
      <SideBar />
      <div className='content-wrapper'>
        <Routes />
      </div>
      <Footer />
      <Messages />
    </div>
  )
}
