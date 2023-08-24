import { cosmiconfigSync } from 'cosmiconfig'

export interface InitialDBConfigT {
  host: string
  port: number
  database: string
  user: string
  password: string
  secret: string
}

export type DBConfigT = InitialDBConfigT

export interface InitialAppConfigT {
  db_section: InitialDBConfigT
}

export interface AppConfigT {
  db: DBConfigT
}

export function createAppConfig (): AppConfigT {
  const config = cosmiconfigSync(process.env.CONFIG ?? 'app_').search()
    ?.config as InitialAppConfigT
  const retConfig = {
    db: config.db_section
  }
  return retConfig as AppConfigT
}
