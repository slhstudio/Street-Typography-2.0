import { useContext } from 'react'
import { Route } from 'react-router-dom'
import { AuthContext } from '../../contexts/authContext'
import { Box, Flex } from '@rebass/emotion'
import LogIn from '../pages/LogIn'

const ProtectedRoute = ({ children, path }) => {
  const user = useContext(AuthContext)
  const action = path === '/add' ? 'add' : 'see your'
  return user ? (
    <Route>{children}</Route>
  ) : (
    <Box>
      <LogIn />
      <Flex alignItems="center" justifyContent="center">
        <p>{`You must be logged in to ${action} photos.`}</p>
      </Flex>
    </Box>
  )
}

export default ProtectedRoute
