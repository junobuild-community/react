import { authSubscribe, User } from '@junobuild/core'
import { createContext, PropsWithChildren, useEffect, useState, FC } from 'react'
import { Login } from './Login'
import { Logout } from './Logout'

export interface AuthContextType {
  user: User | null | undefined
}

export const AuthContext = createContext<AuthContextType>({ user: null })

export const Auth: FC<PropsWithChildren> = (props) => {
  const { children } = props
  const [user, setUser] = useState<AuthContextType>({ user: null })

  console.log('Auth')
  console.log(user)

  useEffect(() => {
    const sub = authSubscribe((user) => setUser({ user }))

    return () => sub()
  }, [])

  return (
    <AuthContext.Provider value={user}>
      {user !== undefined && user !== null ? (
        <div>
          {children}

          <Logout />
        </div>
      ) : (
        <Login />
      )}
    </AuthContext.Provider>
  )
}
