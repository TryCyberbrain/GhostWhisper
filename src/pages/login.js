import React, { useState } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { getCurrentUser, handleLogin } from '../util/storage'
import { navigate } from 'gatsby'
import { isLoggedIn } from '../util/storage'

const LoginPage = () => {
  const siteName = getCurrentUser().siteName
  const siteAPI = getCurrentUser().siteAPI
  const [siteNameState, setSiteNameState] = useState(siteName)
  const [siteAPIState, setSiteAPIState] = useState(siteAPI)

  if (isLoggedIn()) {
    navigate(`/`)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleLogin({
      siteName: siteNameState,
      siteAPI: siteAPIState,
    })
    navigate(`/`)
  }

  return (
    <>
      <Layout>
        <SEO title="Login" />
        <form
          className={`form`}
          method="post"
          onSubmit={(event) => {
            handleSubmit(event)
            //navigate(`/`)
          }}>
          <div className="form-group">
            <label className={`label d-block`}>
              URL
              <input className={`form-control`} type="text" name="siteName" value={siteNameState} onChange={event => setSiteNameState(event.target.value)} />
            </label>
          </div>
          <div className="form-group">
            <label className={`label d-block`}>
              API Key
              <textarea className={`form-control`} type="text" name="siteAPI" value={siteAPIState} onChange={event => setSiteAPIState(event.target.value)} />
            </label>
          </div>
          <input className={`btn btn-block btn-primary`} type="submit" value="Log In" />
        </form>

        <p className="pt-2"><Link to="/about/">What is this?</Link></p>
      </Layout>
    </>
  )
}

export default LoginPage
