import { useContext } from 'react'
import { PhotoContext } from '../../contexts/photoContext'
import Loading from '../atoms/Loading'
import PhotoGrid from '../organisms/PhotoGrid'

const Home = () => {
  const { photos, loading, error } = useContext(PhotoContext)

  return <>{loading ? <Loading /> : error ? <div>{error}</div> : <PhotoGrid photos={photos} />}</>
}

export default Home
