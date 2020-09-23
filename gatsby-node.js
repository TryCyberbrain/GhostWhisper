// eslint-disable-next-line no-unused-vars
exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {
  const config = getConfig()
  config.node = {
    fs: `empty`,
  }
}
