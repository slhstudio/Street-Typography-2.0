import { useState, useEffect } from 'react'
import Loading from '../atoms/Loading'
import { findMine } from '../../utilities/api'
import PhotoGrid from '../organisms/PhotoGrid'
//import PropTypes from 'prop-types';

const Mine = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [photos, setPhotos] = useState([])

  //const [page, setPage] = useState('')

  useEffect(() => {
    const findMyPhotos = async () => {
      try {
        const pics = await findMine()
        setLoading(false)
        setPhotos(pics.data)
      } catch (error) {
        console.warn(error.message)
        setError('Please try again.')
      }
    }
    findMyPhotos()
  }, [])

  return (
    <>
      {loading ? (
        <Loading />
      ) : !photos.length ? (
        <p>You haven't added any photos yet. Get Going!</p>
      ) : (
        <PhotoGrid photos={photos} />
      )}
    </>
  )
}

export default Mine
