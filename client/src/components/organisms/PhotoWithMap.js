import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import styled from '@emotion/styled'
import { Box } from '@rebass/emotion'
import { AuthContext } from '../../contexts/authContext'
import Photo from '../molecules/Photo'
import Map from '../molecules/Map'
import Edit from '../molecules/Edit'

const Container = styled(Box)`
  max-width: 800px;
  margin: 2rem auto;
`

const PhotoWithMap = () => {
  const user = useContext(AuthContext)

  //not using api func findThisPhoto anymore
  //const { photo } = useParams()
  //const pic = await findThisPhoto(photo)

  //get photo that is passed via Link
  const {
    state: { item },
  } = useLocation()

  const [lng, lat] = item.location.coordinates

  const staticMap = ([lng, lat]) => {
    //for testing purposes only: comment out
    //const MAP_KEY = 'xyz'
    return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=800x200&key=${process.env.REACT_APP_MAP_KEY}&markers=${lat},${lng}&scale=2`
  }

  return (
    <Container>
      <Photo photo={item.photo} />
      <Map map={staticMap([lng, lat])} />
      {user && user === item.author ? (
        <Box>
          <Edit info={item.notes} photo={item.photo} />
        </Box>
      ) : (
        <p>{item.notes}</p>
      )}
    </Container>
  )
}

export default PhotoWithMap
