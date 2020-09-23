import React from 'react'

import Layout from '../components/layout'
import LoginWrapper from '../components/LoginWrapper'
import { navigate } from 'gatsby'

const LogoutPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
    localStorage.removeItem(`ghostwhisperUser`)
    navigate(`/login`)
  }
  return (
    <LoginWrapper>
      <Layout>
        <h6 className="text-uppercase">Logout</h6>
        <p className="mb-5">Are you sure you want to logout?</p>
        <form
          className={`form`}
          method="post"
          onSubmit={(event) => {
            handleSubmit(event)
            //navigate(`/`)
          }}>
          <button className="btn btn-block btn-primary">Logout</button>
        </form>
      </Layout>
    </LoginWrapper>
  )
}

export default LogoutPage
