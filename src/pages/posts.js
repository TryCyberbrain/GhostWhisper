import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import LoginWrapper from '../components/LoginWrapper'
import PostsList from '../components/PostsList'

const IndexPage = () => (
  <LoginWrapper>
    <Layout>
      <SEO title="Home" />
      <h6 className="text-uppercase">My Posts</h6>
      <PostsList />
    </Layout>
  </LoginWrapper>
)

export default IndexPage
