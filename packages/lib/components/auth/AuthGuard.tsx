import { authSubscribe } from '@junobuild/core'
import { PropsWithChildren, useEffect, useState, ReactNode } from 'react'
import { AuthContext, AuthContextType } from '../../contexts/auth'
interface AuthProps extends PropsWithChildren {
  failedAuthComponent?: ReactNode
  errorMessage?: string
}

export function AuthGuard(props: AuthProps) {
  const { children, failedAuthComponent, errorMessage } = props
  const [auth, setAuth] = useState<AuthContextType>({
    user: null
  })

  useEffect(() => {
    const sub = authSubscribe((user) => {
      setAuth({
        user
      })
    })

    return () => { sub() }
  }, [])

  return (
    <AuthContext.Provider value={auth}>
      {auth.user ? (
        <div>
          {children}
        </div>
      ) : (
        failedAuthComponent ?? <div>{errorMessage ?? "Please authenticate to access this page."}</div>
      )}
    </AuthContext.Provider>
  )
}
