import './popular.scss'

import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { BsArrowClockwise } from 'react-icons/bs'

import { popularItensData } from '../../services/popularItensData.js'
import { CartContext } from '../../contexts/CartContext'

import line from '../../assets/line.png'
import plus from '../../assets/plus.png'
import heart from '../../assets/heart.png' 

function PopularItens() {
    const [slideIndex, setSlideIndex] = useState(1)

    const moveDot = (index) => {
        setSlideIndex(index)
    }

    const [next, setNext] = useState(8);
    const slice = popularItensData.slice(0, next)
    const loadMore = () => {
        setNext(next + 4)
    }

    const {cart, setCart} = useContext(CartContext)
    const addToCart = (data) => {
        setCart([...cart, data])
    }

    const {wishlist, setWishlist} = useContext(CartContext)
    const addToWishlist = (data) => {
        setWishlist([...wishlist, data])
    }
    
    return (
        <div className='popularContainer'>
            <div className='popularText'>
                <img src={line} alt='White Line' className='line'/>
                <h1>Popular Items</h1>
                <img src={line} alt='White Line' className='line'/>
            </div>

            <div className='popularCards'>
                {slice.map((data, index) => (
                    <div className={`card ${slideIndex === index + 1 ? 'slide activeAnimate' : 'slide'}`} key={data.id}>
                        <div className='cardImage'>
                            <img src={data.path} alt=''/> 
                            <div className={`overlay ${data.classnameCardImage}`}>
                                <div>
                                    <img src={plus} alt='Plus Icon' onClick={() => addToCart(data)}/>
                                </div>
                                <div>
                                    <img src={heart} alt='Heart Icon' onClick={() => addToWishlist(data)}/>
                                </div>
                            </div>
                        </div>

                        <div className='cardText'>
                            <h3>{data.name}</h3>
                            <div className={data.classnameCardText}>
                                <h4>$ {data.price}</h4>
                                <div className='border'></div>
                                <span><Link to='/products'>{data.span}</Link></span>
                            </div>
                        </div> 
                    </div>
                ))}
            </div>

            <div className='popularDots'>
                {Array.from({length: 12}).map((item, index) => (
                   <div onClick={() => moveDot(index + 1)} key={index} className={slideIndex === index + 1 ? 'dotActive' : 'dot'}>
                    </div>
                ))}
            </div>

            <button className='loadButton' onClick={() => loadMore()}>
                LOAD MORE <BsArrowClockwise className='arrow' size={20}/>
            </button>
        </div>
    )   
}

export default PopularItens