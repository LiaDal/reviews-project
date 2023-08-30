import { cosmiconfigSync } from 'cosmiconfig'

export interface DBConfigT {
  host: string
  port: number
  database: string
  user: string
  password: string
  secret: string
}

export interface WebConfigT {
  port: number
}

export interface InitialAppConfigT {
  db_section: DBConfigT
  web_section: WebConfigT
}

export interface AppConfigT {
  db: DBConfigT
  web: WebConfigT
}

export function createAppConfig (): AppConfigT {
  const config = cosmiconfigSync(process.env.CONFIG ?? 'app_').search()
    ?.config as InitialAppConfigT
  const retConfig = {
    db: config.db_section,
    web: config.web_section
  }
  return retConfig as AppConfigT
}
