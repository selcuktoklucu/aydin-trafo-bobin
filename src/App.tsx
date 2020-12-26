import React, { useState, Suspense  } from 'react'
// import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import SignUp from './auth/components/SignUp'
import { createBrowserHistory } from 'history'
import SignIn from './auth/components/SignIn'
import Header from './shared/Header'
import AuthenticatedRoute from './shared/AuthenticatedRoute'
import AutoDismissAlert from './shared/autoDismissAlert'
import { AlertProps } from 'react-bootstrap/Alert'
import NewOrder from './neworder/components/NewOrder'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import MainPage from './containers/components/MainPage'
import './i18n'
import ContactUs from './containers/ContactUs'
const App: React.FC = () => {
  const [user, setUser] = useState()
  const [alerts, setAlerts] = useState([])

  return (
    <Suspense fallback={null}>
    <div className="App">
      <main className="container-fluid">
        <ToastContainer />
        <Router>
          <Header user={user}></Header>
          {alerts.length > 0 &&
            alerts.map((alert: AlertProps, index) => (
              <AutoDismissAlert
                key={index}
                dismissible
                onClose={() => setAlerts([])}
                alert={alert}
              >
                <p>{alert.title}</p>
              </AutoDismissAlert>
            ))}
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                  <MainPage />
              )}
            />
            <Route
              path="/technical-resources"
              render={() => (
                <div>
                  <h1>Teknik Bilgiler</h1>
                </div>
              )}
            />
            <Route
              path="/services"
              render={() => (
                <div>
                  <h1>Services Under Construction</h1>
                </div>
              )}
            />
            <Route
              path="/references"
              render={() => (
                <div>
                  <h1>İş Ortaklarımız</h1>
                </div>
              )}
            />
            <Route
              path="/contact-us"
              render={() => (
                <ContactUs />
              )}
            />
            <AuthenticatedRoute
              user={user}
              exact
              path="/new-order"
              render={() => (
                <NewOrder
                  alerts={alerts}
                  setAlerts={setAlerts}
                  user={user}
                ></NewOrder>
              )}
            />
            <AuthenticatedRoute
              user={user}
              exact
              path="/change-password"
              render={() => (
                <div>
                  <h1>Under Construction</h1>
                </div>
              )}
            />
            <Route
              path="/sign-up"
              render={() => (
                <SignUp
                  alerts={alerts}
                  setAlerts={setAlerts}
                  setUser={setUser}
                />
              )}
            />
            {!user ? (
              <Route
                path="/sign-in"
                render={() => (
                  <SignIn
                    alerts={alerts}
                    setAlerts={setAlerts}
                    setUser={setUser}
                  />
                )}
              />
            ) : null}
          </Switch>
        </Router>
      </main>
    </div>
    </Suspense>
  )
}

export default App
