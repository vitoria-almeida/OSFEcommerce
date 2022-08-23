import './carouselBanner.scss'

import Button from '../button/button'

import { useState } from 'react'
import { Link } from 'react-router-dom'

import slider1 from '../../assets/slider1.png'
import slider2 from '../../assets/slider2.png'
import slider3 from '../../assets/slider3.png'

function CarouselBanner() {
    const slides = [
        {url: `${slider1}`, title:'Bags'},
        {url: `${slider2}`, title:'Office'},
        {url: `${slider3}`, title:'Buildings'},
        {url: `${slider1}`, title:'Bags'},
        {url: `${slider2}`, title:'Office'}
    ]

    const [slideIndex, setSlideIndex] = useState(1)

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className='carouselContainer'>
            {slides.map((obj, index) => {
                return (
                    <div key={index} className={slideIndex === index + 1 ? 'slide activeAnimate' : 'slide'}>
                        <img src={obj.url} alt={obj.title}/>
                    </div>
                )
            })}

            <div className='containerText'>
                <h1>Control and manage any device with cloud solutions</h1>
                <h4>Improve business performance and the user experience with the right mix of IoT technology and processes</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis in dui at interdum. Nunc tempor ac libero quis congue. Vestibulum ut nulla at nulla mollis placerat et et dolor. Cras mi augue, suscipit eget tortor sed.</p>
                <div className='containerBtn'>
                    <Link to='/category'>
                        <Button style={{borderColor: 'white', color: 'white', padding: '10px 0'}} text='VIEW MORE'/>
                    </Link>
                </div>
            </div>

            <div className='containerDots'>
                {Array.from({length: 5}).map((item, index) => (
                   <div onClick={() => moveDot(index + 1)} key={index} className={slideIndex === index + 1 ? 'dotActive' : 'dot'}>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CarouselBanner