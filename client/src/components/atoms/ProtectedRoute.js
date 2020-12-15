import { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../../contexts/authContext'


const ProtectedRoute = ({children}) => {
  const auth = useContext(AuthContext)
 
  return auth ? children : <Redirect to={'/logIn'}/>
}

export default ProtectedRoute