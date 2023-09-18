export interface IUser {
  name: string
  email: string
  password_hash: string
}

export interface DbUser extends IUser {
  id: number
}
