import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import { User } from './types'
import logo from '../assets/header/logo.png'

const authenticatedOptions = (
  <React.Fragment>
    <Link to="/new-order">Yeni Sipariş</Link>
    <Link to="/change-password">Parolayı Değiştir</Link>
    <Link to="/sign-out">Çıkış yap</Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-in">Üye Müşteri Girişi</Link>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <Link to="/">Ana sayfa</Link>
    <Link to="/technical_resources">Teknik Bilgiler</Link>
    <Link to="/services">Hizmetler</Link>
    <Link to="/referenaces">İş Ortaklarımız</Link>
    <Link to="/contact_us">İletişim</Link>
  </React.Fragment>
)

type Props = {
  user: User
}

const Header: React.FC<Props> = props => {
  const { user } = props
  //console.log(user)
  return (
    <header className="main-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Aydın Elektro Mekanik Bobinaj</h1>
      <nav>
        {user && <span>Hoşgeldiniz, {user.email}</span>}
        {user ? authenticatedOptions : unauthenticatedOptions}
        {alwaysOptions}
      </nav>
    </header>
  )
}

export default Header
