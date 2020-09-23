import React, { useState } from 'react'
import Layout from '../components/layout'
import LoginWrapper from '../components/LoginWrapper'
import SEO from '../components/seo'
import { getCurrentUser, updateUser } from '../util/storage'

const SettingsPage = () => {
  const siteName = getCurrentUser().siteName
  const siteAPI = getCurrentUser().siteAPI
  const [siteNameState, setSiteNameState] = useState(siteName)
  const [siteAPIState, setSiteAPIState] = useState(siteAPI)

  const handleSubmit = (event) => {
    event.preventDefault()
    updateUser({
      guid: getCurrentUser().guid,
      siteName: siteNameState,
      siteAPI: siteAPIState,
    })
  }

  return (
    <LoginWrapper>
      <Layout>
        <SEO title="Site Settings" />
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
              <input className={`form-control`} type="text" name="siteAPI" value={siteAPIState} onChange={event => setSiteAPIState(event.target.value)} />
            </label>
          </div>
          <input className={`btn btn-block btn-primary text-uppercase`} type="submit" value="Update Settings" />
        </form>
      </Layout>
    </LoginWrapper>
  )
}

export default SettingsPage
