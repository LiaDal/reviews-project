import express, { Express } from 'express'
import { AppConfigT } from '../config/config'
import { DBApp } from '../db/db'

export class WebApp {
    app: Express
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

        await this.app.listen(this.port, () => {
            console.log(`Express app listen on ${this.port}`)
        })
    }
}