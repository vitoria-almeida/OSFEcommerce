import { useState } from 'react'

function ReadMore({children, limit}) {
    const text = children

    const [isReadMoreShown, setReadMoreShown] = useState(false)
    
    const toggleBtn = () => {
        setReadMoreShown(prevState => !prevState)
    }
    
    return (
        <div className='productDetailedReadMore'>
            {isReadMoreShown ? text: text.substr(0, limit)}
            <button onClick={toggleBtn}>{isReadMoreShown ? 'Read Less' : '...Read More'}</button>
        </div>
    
    )
}

export default ReadMore