// import { http } from 'node:http';
import express from 'express';
import type { Express } from 'express';
import type { AppConfigT } from '../config/config';
import type { DBApp } from '../db/db';

export class WebApp {
  app: Express
  // server: http.Server
  port: number
  apiUrl = '/api'
  db: DBApp
  constructor (config: AppConfigT, dbApp: DBApp) {
    this.app = express()
    this.port = config.web.port
    this.db = dbApp
  }

  async init () {
    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', "*")
      console.log('Got', req.url)
      next()
    });

    this.app.get(`${this.apiUrl}/users`, async (_, res) => {
      const users = await this.db.users.all()
      res.send(users)
    })

    this.app.get(`${this.apiUrl}/reviews`, async (_, res) => {
      const reviews = await this.db.reviews.all()
      res.send(reviews)
    })

    this.app.get(`${this.apiUrl}/login`, async (req, res) => {
      // re
      req.body
      // res.send(reviews)
    })

    await new Promise<void>((resolve, reject) => {
      this.app.listen(this.port, () => {
        console.log(`Express app listen on ${this.port}`)
        resolve()
      })
    })
  }

  async destroy() {
    
  }
}

