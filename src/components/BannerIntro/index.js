import React from 'react';
import './style.scss'
import Logo from '../../assets/logo.gif'
import WDYK from '../../assets/i_wdyk.jpg'

const BannerIntro = () => {
  return (
    <div id="text-intro">
      <p><img src={Logo} alt="Orkut" /> is an online community that connects people through a network of trusted friends.</p>
      <p>We are committed to providing an online meeting place where people can socialize, make new acquaintances and find others who share their interests.</p>
      <img src={WDYK} alt="Who do you know?" id="wdyk" />
    </div>
  )
}

export default BannerIntro;