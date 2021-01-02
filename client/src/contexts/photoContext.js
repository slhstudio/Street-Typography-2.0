import { useState, useEffect, createContext } from 'react'
import { findAllPhotos } from '../utilities/api'

export const PhotoContext = createContext()

export const PhotoProvider = ({children}) => {
  const [photos, setPhotos ] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
		const getAllPhotos = async () => {
			try {
				const allPhotos = await findAllPhotos()
			  setPhotos(allPhotos.data)
				setLoading(false)
			} catch(e) {
					console.log(e)
			}
		}
		getAllPhotos()
	}, [])
 
  return (
    <PhotoContext.Provider value={{photos, setPhotos, loading}}>
      { children }
    </PhotoContext.Provider>
  )
}