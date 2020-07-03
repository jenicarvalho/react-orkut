import React from 'react'
import ExternalMenu from '../../components/ExternalMenu'
import BannerIntro from '../../components/BannerIntro'
import LoginForm from '../../components/LoginForm'
import './style.scss'

function Login() {
  return (
  <>
  <ExternalMenu />
  <div class="container-intro">
    <BannerIntro />
    <LoginForm />
  </div>
  </>
  )
}

export default Login