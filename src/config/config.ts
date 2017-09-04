const env = process.env.NODE_ENV || 'development'

let config = {
  development: {
    port: 3777,
    mongodb:`mongodb://localhost:27017`
  }
}

export default config[env]