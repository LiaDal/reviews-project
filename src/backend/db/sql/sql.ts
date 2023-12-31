import { QueryFile, IQueryFileOptions } from 'pg-promise'
import { join } from 'path'

export const users = {
  create: sql('users/create.sql'),
  add: sql('users/add.sql'),
  all: sql('users/all.sql'),
  deleteAll: sql('users/deleteAll.sql'),
  findByEmail: sql('users/findByEmail.sql'),
}

export const reviews = {
  create: sql('reviews/create.sql'),
  add: sql('reviews/add.sql'),
  all: sql('reviews/all.sql'),
  deleteAll: sql('reviews/deleteAll.sql'),
}

export const tags = {
  create: sql('tags/create.sql'),
  add: sql('tags/add.sql'),
}

function sql(file: string): QueryFile {
  const fullPath: string = join(__dirname, file)

  const options: IQueryFileOptions = {
    minify: true,
  }

  const qf: QueryFile = new QueryFile(fullPath, options)

  if (qf.error) {
    throw qf.error
  }

  return qf
}
