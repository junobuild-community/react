import { signIn } from '@junobuild/core'
import { Button } from './Button'
import { FC } from 'react'

export const Login: FC = () => {

  return <Button onClick={signIn}>Sign in</Button>
}
