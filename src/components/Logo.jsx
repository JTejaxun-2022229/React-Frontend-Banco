/* eslint-disable react/prop-types */
import logo from '../assets/img/logoLogin.png'

export const Logo = ({text}) => {
  return (
    <div className='auth-form-logo-container'>
        <img src={logo} alt="KHA" />
        <span>{text}</span>
    </div>
  )
}