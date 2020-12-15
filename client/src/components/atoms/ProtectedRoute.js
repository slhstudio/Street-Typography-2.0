import { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../../contexts/authContext'


const ProtectedRoute = ({children}) => {
  const user = useContext(AuthContext)
  return user ? children : <Redirect to={'/logIn'}/>
}

export default ProtectedRoute