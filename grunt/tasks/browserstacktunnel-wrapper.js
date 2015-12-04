module.exports = {
  options: {
    key: '<%= browserstack.credentials.accessKey %>',
    localIdentifier: '<%= browserstack.localIdentifier %>',
    proxyHost: '<%= browserstack.proxy.host %>',
    proxyPort: '<%= browserstack.proxy.port %>'
  }
}
