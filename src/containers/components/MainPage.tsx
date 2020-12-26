import React, { useState, useEffect } from 'react'
// import { History } from 'history'
import { useHistory } from 'react-router-dom'

//import { signIn } from '../api'
import { Credentials, User } from '../../shared/types'
import Button from 'react-bootstrap/Button'
import { AlertProps } from 'react-bootstrap/Alert'
// import { default as NumberFormat } from 'react-number-format'
import { ToastContainer, toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'

type Props = {
}
type Suggestion = {

}

const MainPage: React.FC<Props> = props => {

  const cleanFields = () => {
  }
  const { t, i18n } = useTranslation()

  useEffect(() => {}, [])

  return (
    <div className="col m-auto py-3">
        <div className="row">
            <div className="col-6 mx-auto">
                <h1>
                    {t("about-us.title")}
                </h1>
            </div>
            <div className="col-6 mx-auto">
                <p>
                    {t("about-us.label")}
                </p>
            </div>

        </div>
    </div>
  )
}
export default MainPage
