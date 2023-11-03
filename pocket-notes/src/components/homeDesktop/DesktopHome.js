import React from 'react'
import "./DesktopHome.css"
import homebackground from '../../assets/homebackground.png'
import lock from '../../assets/lock.png'

function DesktopHome() {
  return (
    <div className='home-container'>
      <img src={homebackground} alt="home" />
      <h1>Pocket Notes</h1>
      <p>Send and receive messages without keeping your phone online.<br/>Use Pocket Notes on up to 4 linked Devices and 1 mobile phone.</p>
      <div className="home-bottom">
        <img src={lock} alt="lock" />
        <span>end-to-end encrypted</span>
      </div>
    </div>
  )
}

export default DesktopHome