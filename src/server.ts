import dotenv from 'dotenv'
dotenv.config()

import http from 'http'
import express from 'express'
import { ROUTER } from './router'
import helmet from 'helmet'
import compression from 'compression'

const app = express()

const server = () => {
  app.use(helmet())
  app.use(compression())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  ROUTER.forEach(route => {
    app.use(route.path, route.router)
  })

  const port = process.env.PORT || 3000
  http.createServer(app).listen(port, () => {
    console.log(`Server is listening on port ${port}`)
  })
}

server()
