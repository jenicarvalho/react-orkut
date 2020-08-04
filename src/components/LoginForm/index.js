import React from 'react';
import './style.scss'
import i_blau1 from '../../assets/i_blau1.gif'
import i_blau2 from '../../assets/i_blau2.gif'
import nb_signin from '../../assets/nb_signin.gif'
import i_lock from '../../assets/i_lock.gif'

const LoginForm = () => {
  return (
    <div id="login-form">
        <div id="form-imgs">
          <img src={i_blau1} alt=""/>
          <img src={i_blau2} alt=""/>
        </div>
        <form action="" id="login-form">
          <label for="username">username:</label>
          <input type="text" id="username"/>
          <br/>
          <label for="password">password:</label>
          <input type="password" id="password"/>
          <br/>
          <input name="submit" src={nb_signin} type="image" alt="submit" />
          <img src={i_lock} alt="SSL Secured"/>
          <br/>        
          <input type="checkbox" name="remember me" id="remember-me"/>
          <label for="remember-me">remember me</label>
          <p>[ forgot your password? ]</p>
          <p>Join orkut to expand the circumference of your social circle.</p>
          
        </form>
        
      </div>
  )
}

export default LoginForm;