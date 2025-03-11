import { signOut } from '@junobuild/core'

export function Logout() {
  const handleLogout = async () => {
    try {
      await signOut()
    } catch (err) {
      console.error('Logout failed:', err)
    }
  }

  return (
    <button onClick={() => void handleLogout()} className='text-white'>Sign Out</button>
  )
} 