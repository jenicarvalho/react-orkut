import React from 'react'
import ExternalMenu from '../../components/ExternalMenu'
import BannerIntro from '../../components/BannerIntro'
import LoginForm from '../../components/LoginForm'
import Footer from '../../components/Footer'
import './style.scss'

function Login() {
  return (
  <>
  <ExternalMenu />
  <div class="login-wrapper">
    <BannerIntro />
    <LoginForm />    
  </div>
  <Footer />
  </>
  )
}

export default Login