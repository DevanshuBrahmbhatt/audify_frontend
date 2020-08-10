module.exports = {
    script: "serve",
    name: "Audify Frontend",
    env: {
      PM2_SERVE_PATH: './dist/',
      PM2_SERVE_PORT: 5002,
      PM2_SERVE_SPA: 'true',
      PM2_SERVE_HOMEPAGE: '/index.html'
    }
  }