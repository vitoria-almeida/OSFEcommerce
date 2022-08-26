import './category.scss'

import { Link } from 'react-router-dom'
import { useState } from 'react'

import { popularItensData } from '../../services/popularItensData'
import FeaturedProducts from '../../components/featured/featured'

function CategoryLandingPage() {  
    const colors = ['white', '#43c0cf', '#3d402f', '#4aaf00', '#315bbd', '#ec6115', '#dc041d', '#efead7']
    const [background, setBackground] = useState('white')

    const [next, setNext] = useState(4);
    const slice = popularItensData.slice(0, next)
    const loadMore = () => {
        setNext(next + 4)
    }

    return (
        <div className='categoryContainer'>
            <ul>
                <Link to='/'><li>Home</li></Link> /
                <li>Category Landing</li>
            </ul>
            <h1>Services</h1>

            <div className='categoryFilters' style={{background: background}}>
                <form action=''>
                    <label htmlFor='price'>Price</label>
                    <select id='price' name='price'>
                        <option value='0-100'>$0.00 — $100.00</option>
                        <option value='100-500'>$100.00 — $500.00</option>
                        <option value='500-1000'>$500.00 — $1000.00</option>
                    </select>
                </form>

                <form action=''>
                    <label htmlFor='color'>Color</label>
                    <div className='dots'>
                        {colors.map((color, index) => (
                            <div 
                            style={{background: color, borderColor: color === background ? 'black' : color}}
                            className='dot' 
                            key={index} 
                            onClick={() => setBackground(color)}></div>
                        ))}                              
                    </div>
                </form>

                <form action=''>
                    <label htmlFor='brands'>Brands</label>
                    <select id='brands' name='brands'>
                        <option value='ukraine'>Ukraine sport</option>
                        <option value='brazil'>Brazil sport</option>
                        <option value='germany'>Germany sport</option>
                    </select>
                </form>

                <form action=''>
                    <label htmlFor='sort'>Sort by</label>
                    <select id='sort' name='sort'>
                        <option value='price'>Price</option>
                        <option value='date'>Date</option>
                        <option value='size'>Size</option>
                    </select>
                </form>

                <form action=''>
                    <label htmlFor='size'>Size</label>
                    <select id='size' name='size'>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
                </form>

                <form action=''>
                    <label htmlFor='show'>Show</label>
                    <select id='show' name='show'>
                        <option value='16p'>16 per page</option>
                        <option value='24p'>24 per page</option>
                        <option value='32p'>32 per page</option>
                    </select>
                </form>
            </div>

            <h4>12,931 results in apparel</h4>

            <div className='categoryCards'>
                {slice.map((data) => (
                    <div className='card' key={data.id}>
                        <div className='cardImage'>
                            <img src={data.path} alt=''/> 
                        </div>

                        <div className='cardText'>
                            <h3>{data.name}</h3>
                            <h4>$ {data.price}</h4>
                        </div> 
                    </div>
                ))}
            </div>
            
            <button className='loadMoreButton' onClick={() => loadMore()}>LOAD MORE</button>

            {/* <FeaturedProducts/> */}
        </div>
    )
}

export default CategoryLandingPage