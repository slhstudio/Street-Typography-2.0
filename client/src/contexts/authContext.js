import { useState, useEffect, createContext } from 'react'
import { isSignedIn } from '../utilities/api'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
  const [user, setUser ] = useState(null)
  
  useEffect(() => {
    const checkAuth = async () => {
      const currUser = await isSignedIn()
      console.log('user', currUser)
      setUser(currUser)
    }

   checkAuth()
  }, [])
 
  return (
    <AuthContext.Provider value={user}>
    { children }
    </AuthContext.Provider>
  )
}