import PropTypes from 'prop-types'
import React from 'react'

const PostItem = ({ data }) => {
  const post = data
  console.log(data)
  return (
    <>
      <div className="card mb-2" key={post.id}>
        {post.title}
      </div>
    </>
  )
}

PostItem.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
}

PostItem.defaultProps = {
  data: ``,
}

export default PostItem
