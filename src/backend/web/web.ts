// import { http } from 'node:http';
import express from 'express'
import type { Express } from 'express'
import type { AppConfigT } from '../config/config'
import type { DBApp } from '../db/db'

export class WebApp {
  app: Express
  // server: http.Server
  port: number
  apiUrl = '/api'
  db: DBApp
  constructor(config: AppConfigT, dbApp: DBApp) {
    this.app = express()
    this.port = config.web.port
    this.db = dbApp
  }

  async init() {
    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*')
      res.header('Access-Control-Allow-Headers', '*')
      res.header('Access-Control-Allow-Methods', '*')
      console.log('Got', req.url, req.method)
      next()
    })

    this.app.get(`${this.apiUrl}/users`, async (_, res) => {
      const users = await this.db.users.all()
      res.send(users)
    })

    this.app.get(`${this.apiUrl}/reviews`, async (_, res) => {
      const reviews = await this.db.reviews.all()
      res.send(reviews)
    })

    this.app.post(`${this.apiUrl}/signup`, express.json(), async (req, res) => {
      const email = req.body.email
      const name = req.body.name

      try {
        const addUser = await this.db.users.add({
          name: name,
          email: email,
          password_hash: req.body.password,
        })
        res.send(addUser)
      } catch (err) {
        if (err.code == '23505') {
          console.error('Email Already Exists!')
          res.sendStatus(409)
          // status(409).send()
        } else {
          console.error('Something Went Wrong!')
          res.sendStatus(500)
        }
      }

      // res.cookie('session', 'ok', { maxAge: ..., httpOnly: true })
      // return to browser new db user
    })

    this.app.post(`${this.apiUrl}/login`, async (req, res) => {
      // nameOrEmail
      // get user by email from db
      // get user by name from db
      // user not found => res.status(401).send("An error occured");
      // res.cookie('session', 'ok', { maxAge: ..., httpOnly: true })
      // user found => 200 res.send(dbUser)
    })

    this.app.get(`${this.apiUrl}/logout`, async (req, res) => {
      // Cache-Control: no-cache no-store
      // res.clearCookie('session')
      // res.send()
    })

    await new Promise<void>((resolve, reject) => {
      this.app.listen(this.port, () => {
        console.log(`Express app listen on ${this.port}`)
        resolve()
      })
    })
  }

  async destroy() {}
}
