import React from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSelector = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (event: any) => {
    i18n.changeLanguage(event.target.value)
  }

  return (
    <div onChange={changeLanguage}>
      <input type="radio" value="en" name="language" /> Eng
      <input type="radio" value="tr" name="language" defaultChecked /> Tr
    </div>
  )
}

export default LanguageSelector