import React from 'react'
import Hoc from './Hoc'
import Auth from './Auth'

function New() {
  return (
      <Auth>
        <Hoc>
            <div>
                <p>hello mani</p>
                <p>authorization succesfull</p>
            </div>
        </Hoc>
      </Auth>
  
  )
}

export default New
