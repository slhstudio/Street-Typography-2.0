import { useState, useEffect, useRef, createContext } from 'react'
import { isSignedIn } from '../utilities/api'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
  const [auth, setAuth ] = useState(null)
  
  useEffect(() => {
    const checkAuth = async () => {
      const user = await isSignedIn()
      console.log('user', user)
      setAuth(user)
    }

   checkAuth()
  }, [])
 
  return (
    <AuthContext.Provider value={auth}>
    { children }
    </AuthContext.Provider>
  )
}