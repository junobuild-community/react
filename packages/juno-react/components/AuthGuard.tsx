import { authSubscribe } from '@junobuild/core'
import { PropsWithChildren, useEffect, useState, FC, ReactNode } from 'react'
import { AuthContext, AuthContextType } from '../contexts/authContext'

interface AuthProps extends PropsWithChildren {
  failedAuthComponent?: ReactNode
  errorMessage?: string
}

export const AuthGuard: FC<AuthProps> = (props) => {
  const { children, failedAuthComponent, errorMessage } = props
  const [user, setUser] = useState<AuthContextType>({ user: null })

  useEffect(() => {
    const sub = authSubscribe((user) => { setUser({ user }) })

    return () => { sub() }
  }, [])

  return (
    <AuthContext.Provider value={user}>
      {user.user ? (
        <div>
          {children}
        </div>
      ) : (
        failedAuthComponent ?? <div>{errorMessage ?? "Please authenticate to access this page."}</div>
      )}
    </AuthContext.Provider>
  )
}
