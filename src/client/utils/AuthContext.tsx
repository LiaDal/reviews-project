import { createContext, SetStateAction, ReactNode, useState, Dispatch } from 'react'

type Props = {
  children?: ReactNode
}

type IAuthContext = {
  authenticated: boolean
  setAuthenticated: Dispatch<SetStateAction<boolean>>
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

const AuthProvider = ({ children }: Props) => {
  const [authenticated, setAuthenticated] = useState(false)

  return <AuthContext.Provider value={{ authenticated, setAuthenticated }}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
