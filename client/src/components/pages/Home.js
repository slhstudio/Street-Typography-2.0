import { useContext} from 'react'
import { PhotoContext } from '../../contexts/photoContext'
import Loading from '../atoms/Loading';
import PhotoGrid from '../organisms/PhotoGrid';

const Home = () => {
	const { loading } = useContext(PhotoContext)
	
    return (
      <div>
        {loading ? <Loading /> : <PhotoGrid />}
      </div>
    )
}


export default Home


