import React from 'react'
import {useSelector} from 'react-redux'

function Paragraph({html}) {

 
  const text = useSelector(state => state.text.items);
    
  return (
    <div className='text'>
        { 
            
            <p>
              {html === 'true' ? `<p>${text}</p>` : `${text}` }
            </p>
          }
    </div>
  )
}

export default Paragraph