import { ReactNode } from 'react'
import { signIn } from '@junobuild/core'

interface LoginProps {
  loginComponent?: ReactNode
  errorMessage?: string
}

export function Login(props: LoginProps) {
  const { loginComponent, errorMessage } = props
  const handleLogin = async () => {
    try {
      await signIn()
    } catch (err) {
      console.error('Login failed:', err)
    }
  }

  if (loginComponent) {
    return <>{loginComponent}</>
  }

  return (
    <div>
      <p className='text-white'>{errorMessage ?? 'Please sign in to continue'}</p>
      <button onClick={() => void handleLogin()} className='text-white'>Sign In</button>
    </div>
  )
} 