import './popular.scss'

import { useState } from 'react'

import { BsArrowClockwise } from 'react-icons/bs'

import { popularItensData } from '../../services/popularItensData.js'

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
    
    return (
        <div className='popularContainer'>
            <div className='popularText'>
                <img src={line} alt='White Line' className='line'/>
                <h1>Popular Itens</h1>
                <img src={line} alt='White Line' className='line'/>
            </div>

            <div className='popularCards'>
                {slice.map((data, index) => (
                    <div className={`card ${slideIndex === index + 1 ? 'slide activeAnimate' : 'slide'}`} key={data.id}>
                        <div className='cardImage'>
                            <img src={data.path} alt=''/> 
                            <div className='overlay'>
                                <div>
                                    <img src={plus} alt='Plus Icon'/>
                                </div>
                                <div>
                                    <img src={heart} alt='Heart Icon'/>
                                </div>
                            </div>
                        </div>

                        <div className='cardText'>
                            <h3>{data.name}</h3>
                            <h4>$ {data.price}</h4>
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