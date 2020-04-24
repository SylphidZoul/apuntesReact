import React from 'react'
import Carrousel from './Carrousel'

const AppCarrousel = () => {

  return (
    <div>
      <Carrousel
        images={['https://images.pexels.com/photos/3068107/pexels-photo-3068107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                 'https://images.pexels.com/photos/2886284/pexels-photo-2886284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                 'https://images.pexels.com/photos/3617460/pexels-photo-3617460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940']} />
    </div>
  )
}
export default AppCarrousel