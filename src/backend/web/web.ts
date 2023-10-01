import express from 'express'
import bcrypt from 'bcrypt'
import type { Express } from 'express'
import type { AppConfigT } from '../config/config'
import type { DBApp } from '../db/db'
import cors from 'cors'
import jwt from 'jsonwebtoken'

export class WebApp {
  app: Express
  port: number
  apiUrl = '/api'
  db: DBApp
  constructor(config: AppConfigT, dbApp: DBApp) {
    this.app = express()
    this.port = config.web.port
    this.db = dbApp
  }

  async init() {
    const corsOptions = {
      origin: 'http://localhost:5173',
      credentials: true,
    }

    this.app.use(cors(corsOptions))

    this.app.get(`${this.apiUrl}/users`, async (_, res) => {
      const users = await this.db.users.all()
      res.send(users)
    })

    this.app.get(`${this.apiUrl}/reviews`, async (req, res) => {
      // req.search.params =>
      const reviews = await this.db.reviews.all()
      res.send(reviews)
    })

    this.app.post(`${this.apiUrl}/signup`, express.json(), async (req, res) => {
      const email = req.body.email
      const name = req.body.name
      const password = await bcrypt.hash(req.body.password, 10)

      try {
        const dbUser = await this.db.users.add({
          name,
          email,
          password_hash: password,
        })
        console.log('dbuser', dbUser)
        res
          .cookie('user', req.body.email, {
            maxAge: 1 * 24 * 60 * 60 * 1000,
            httpOnly: true,
          })
          .send(dbUser)
        console.log('senTTT')
      } catch (err) {
        if (err.code == '23505') {
          console.error('Email or Name Already Exists!')
          res.sendStatus(409)
        } else {
          console.error('Something Went Wrong!')
          res.sendStatus(500)
        }
      }
    })

    this.app.post(`${this.apiUrl}/login`, express.json(), async (req, res) => {
      const email = req.body.email
      const password = req.body.password
      const dbUser = await this.db.users.findByEmail(email)
      const accessTokenSecret = ''

      if (dbUser != null) {
        const isSamePassword = await bcrypt.compare(password, dbUser.password_hash)
        if (isSamePassword) {
          const accessToken = jwt.sign({ useremail: email }, accessTokenSecret)
          res
            .json({
              accessToken,
            })
            .send(dbUser)
        } else {
          res.status(401).send()
          console.error('Invalid password')
        }
      } else {
        console.error('An error occured')
        res.sendStatus(401)
      }
    })

    this.app.get(`${this.apiUrl}/logout`, async (req, res) => {
      res.clearCookie('user')
      res.header('Cache-Control', 'no-cache, no-store')
      console.error('Logout successfull')
      res.sendStatus(200)
    })

    await new Promise<void>((resolve) => {
      this.app.listen(this.port, () => {
        console.log(`Express app listen on ${this.port}`)
        resolve()
      })
    })
  }

  async destroy() {}
}
