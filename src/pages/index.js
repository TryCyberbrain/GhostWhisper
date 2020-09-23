import React from 'react'
import SEO from '../components/seo'
import LoginWrapper from '../components/LoginWrapper'
import CreatePost from '../components/CreatePost'

const IndexPage = () => (
  <LoginWrapper>
    <SEO title="Share something..." />
    <CreatePost />
  </LoginWrapper>
)

export default IndexPage
