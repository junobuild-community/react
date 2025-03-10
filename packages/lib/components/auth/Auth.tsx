import { authSubscribe, User } from '@junobuild/core'
import { createContext, PropsWithChildren, useEffect, useState, ReactNode } from 'react'
import { Login } from './Login'
import { Logout } from './Logout'

export interface AuthContextType {
  user: User | null | undefined
}

export const AuthContext = createContext<AuthContextType>({ user: null })

interface AuthProps extends PropsWithChildren {
  // For unauthenticated users
  loginComponent?: ReactNode
  // For authenticated users who need to log out
  logoutComponent?: ReactNode
  // Alternative to loginComponent for custom messaging
  errorMessage?: string
  // Optional callback when auth state changes
  onAuthStateChange?: (isAuthenticated: boolean) => void
}

export function Auth(props: AuthProps) {
  const { children, loginComponent, logoutComponent, errorMessage } = props
  const [user, setUser] = useState<AuthContextType>({ user: null })

  useEffect(() => {
    const sub = authSubscribe((user) => {
      setUser({ user })
      props.onAuthStateChange?.(!!user)
    })

    return () => { sub() }
  }, [props.onAuthStateChange])

  return (
    <AuthContext.Provider value={user}>
      {user.user ? (
        <div>
          {children}

          {logoutComponent ?? <Logout />}
        </div>
      ) : (
        <Login loginComponent={loginComponent} errorMessage={errorMessage} />
      )}
    </AuthContext.Provider>
  )
}
