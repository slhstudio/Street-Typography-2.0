import { useContext} from 'react'
import { PhotoContext } from '../../contexts/photoContext'
import Loading from '../atoms/Loading';
import PhotoGrid from '../organisms/PhotoGrid';

const Home = () => {
	const { loading, error } = useContext(PhotoContext)
	
	return (
		<div>
			{loading 
			? <Loading /> 
			: error 
				? <div>{error}</div> 
				: <PhotoGrid />}
		</div>
	)
}


export default Home


