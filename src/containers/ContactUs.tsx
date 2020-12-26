import React, { useState, useEffect } from 'react'
// import { History } from 'history'
import { useHistory } from 'react-router-dom'

//import { signIn } from '../api'
import { Credentials, User } from '../shared/types'
import Button from 'react-bootstrap/Button'
import { AlertProps } from 'react-bootstrap/Alert'
// import { default as NumberFormat } from 'react-number-format'
import { ToastContainer, toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'
import GoogleMapReact from 'google-map-react'
import Map from './components/Map'
type Props = {
}
type Suggestion = {

}

const ContactUs: React.FC<Props> = props => {

  const cleanFields = () => {
  }
  const { t, i18n } = useTranslation()

  useEffect(() => {}, [])

  return (
    <div className="col m-auto py-3">
        <div className="row">
            <div className="col-3 mx-auto">
                <p>
                    {t("contact.address.label")}{":"} {t("contact.address")}
                </p>
                <p>
                    {t("contact.telephone.label")}{":"} {t("contact.telephone")}
                </p>
                <p>
                    {t("contact.fax.label")}{":"} {t("contact.fax")}
                </p>
                <p>
                    {t("contact.email.label")}{":"} {t("contact.email")}
                </p>
            </div>
            <div className="col-9 mx-auto">
                <Map></Map>
            </div>

        </div>
    </div>
  )
}
export default ContactUs
