import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import { User } from './types'
import logo from '../assets/header/logo.png'
import LanguageSelector from '../containers/components/LanguageSelector'
import { useTranslation } from 'react-i18next'

type Props = {
  user: User
}
const Header: React.FC<Props> = props => {

  const { t, i18n } = useTranslation()
  const authenticatedOptions = (
  <React.Fragment>
    <Link to="/new-order">Yeni Sipariş</Link>
    <Link to="/change-password">Parolayı Değiştir</Link>
    <Link to="/sign-out">Çıkış yap</Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-in">{t("customer.login.label")}</Link>
  </React.Fragment>
)


const alwaysOptions = (
  <React.Fragment>
    <Link to="/">{t("main-page.label")}</Link>
    <Link to="/technical-resources">{t("technical-resources.label")}</Link>
    <Link to="/services">{t("services.label")}</Link>
    <Link to="/references">{t("references.label")}</Link>
    <Link to="/contact-us">{t("contact-us.label")}</Link>
    <LanguageSelector />
  </React.Fragment>
)


  const { user } = props
  //console.log(user)
  return (
    <header className="main-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className={"hidden-md-down"}>Aydın Elektro Mekanik Bobinaj</h1>
      <nav>
        {user && <span>Hoşgeldiniz, {user.email}</span>}
        {user ? authenticatedOptions : unauthenticatedOptions}
        {alwaysOptions}
      </nav>
    </header>
  )
}

export default Header
