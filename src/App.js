import React, { Suspense, useEffect } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProtectedRoute from './ProtectedRoute'
import { CSpinner, useColorModes } from '@coreui/react'
import './scss/style.scss'
import about from './views/pages/about/about'
import privacypolicy from './views/pages/privacypolicy/privacypolicy'
import TermsAndConditions from './views/pages/termsandcondition/termsandcondition'

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
const About = React.lazy(() => import('./views/pages/about/about'))
const Privacypolicy = React.lazy(() => import('./views/pages/privacypolicy/privacypolicy'))
const Termsandcondition = React.lazy(() => import('./views/pages/termsandcondition/termsandcondition'))
const Deleteaccountpolicy = React.lazy(() => import('./views/pages/deleteaccountpolicy/Deleteaccountpolicy'))

const App = () => {
  const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
  const storedTheme = useSelector((state) => state.theme)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split('?')[1])
    const theme = urlParams.get('theme') && urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0]
    if (theme) {
      setColorMode(theme)
    }

    if (isColorModeSet()) {
      return
    }

    setColorMode(storedTheme)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <HashRouter>
      <Suspense
        fallback={
          <div className="pt-3 text-center">
            <CSpinner color="primary" variant="grow" />
          </div>
        }
      >
        <Routes>
          <Route exact path="/login" name="Login Page" element={<Login />} />
          <Route exact path="/register" name="Register Page" element={<Register />} />
          <Route exact path="/404" name="Page 404" element={<Page404 />} />
          <Route exact path="/500" name="Page 500" element={<Page500 />} />
          <Route exact path="/about-page" name="About Page" element={<About />} />
          <Route exact path="/privacy-policy" name="Privacypolicy Page" element={<Privacypolicy />} />
          <Route exact path="/terms-and-condition" name="Termsandcondition Page" element={<TermsAndConditions />} />
          <Route exact path="/delete-account-policy" name="Delete-account-policy Page" element={<Deleteaccountpolicy />} />
          <Route element={<ProtectedRoute />}>
            <Route path="*" name="Home" element={<DefaultLayout />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  )
}

export default App
