import './featured.scss'

import { useRef } from 'react'

import { featuredData } from '../../services/featuredProducts'

import line from '../../assets/line.png'
import icon from '../../assets/icon.png'
import arrow_1 from '../../assets/arrow_1.png'
import arrow_2 from '../../assets/arrow_2.png'

function FeaturedProducts() {
    const carousel = useRef(null)

    const handleLeftClick = (e) => {
        e.preventDefault()
        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }
    
    const handleRightClick = (e) => {
        e.preventDefault()
        carousel.current.scrollLeft += carousel.current.offsetWidth
    }

    return (
        <div className='featuredContainer'>
            <h1>Featured Products</h1>
            <h4>Unde omnis iste natus error sit voluptatem</h4>

            <div className='featuredIcons'>
                <button onClick={handleLeftClick}><img src={arrow_1} alt='Scroll Left'/></button>
                <img src={line} alt='White Line' className='line'/>
                <img src={icon} alt='Three Vertical Bars'/>
                <img src={line} alt='White Line' className='line'/>
                <button onClick={handleRightClick}><img src={arrow_2} alt='Scroll Right'/></button>
            </div>
            
            <div className='featuredCards' ref={carousel}>
                {featuredData.map(data => (
                    <div className='card' key={data.id}>
                            <div className='cardImage'>
                                <img src={data.path} alt=''/>
                            </div>

                            <div className='cardText'>
                                <h3>{data.name}</h3>
                                <h4>{data.category}</h4>
                            </div>     
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeaturedProducts