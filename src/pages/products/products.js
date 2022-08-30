import './products.scss'
import 'react-tabs/style/react-tabs.scss';

import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { HiPlusSm, HiMinusSm } from 'react-icons/hi'
import { FaPinterestP, FaFacebookF, FaGooglePlusG, FaTwitter } from 'react-icons/fa'
import { BsArrowClockwise } from 'react-icons/bs'

import ReadMore from './readmore'

import { popularItensData } from '../../services/popularItensData.js'

import cardiganBlack from '../../assets/products/cardigan1.jpg'
import cardiganBlack2 from '../../assets/products/cardigan3.jpg'
import cardiganBlue from '../../assets/products/cardigan5.jpg'
import cardiganBlue2 from '../../assets/products/cardigan7.jpg'
import focus from '../../assets/service-focus.png'
import method from '../../assets/service-method.png'
import knowledge from '../../assets/service-knowledge.png'

// import plus from '../../assets/plus.png'
// import heart from '../../assets/heart.png' 

function ProductDetailedPage() {
    const images = [
        {"url": `${cardiganBlack}`, "alt": "Woman wearing a cardigan"},
        {"url": `${cardiganBlack2}`, "alt": "Woman wearing a cardigan"},
        {"url": `${cardiganBlue}`, "alt": "Woman wearing a cardigan"},
        {"url": `${cardiganBlue2}`, "alt": "Woman wearing a cardigan"}
    ]

    const [selectedImage, setSelectedImage] = useState(images[0].url)

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
        <div className='productDetailedContainer'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li>/</li>
                <li><Link to='/category'>OSF Theme</Link></li> 
                <li>/</li>
                <li>Ruffle Front V-Neck Cardigan</li>         
            </ul>

            <div className='productBorder'></div>
            <h1 className='title'>Ruffle Front V-Neck Cardigan</h1>

            <div className='productDetailedCard'>
                <div className='productDetailedCardImage'>
                    <img src={selectedImage} alt='Woman wearing a cardigan'/>
                </div>

                <div className='productDetailedCardZoom'>
                    <div className='containerImages'>
                        {images.map((img, index) => (
                            <div key={index} >
                                <img 
                                    src={img.url} 
                                    alt={img.alt} 
                                    onClick={() => setSelectedImage(img.url)}
                                    className={selectedImage !== img.url ? 'img' : 'imgSelected'}
                                />  
                                <div className={selectedImage !== img.url ? 'overlay' : 'overlaySelected'}></div>
                            </div>  
                        ))} 
                    </div>              
                </div>

                <div className='productDetailedCardText'>
                    <h1>$299.99</h1>   
                    <form action=''>
                        <select id='color' name='color'>
                            <option value='darkGray'>Dark Gray</option>
                        </select>
                    </form>   
                    <div className='productDetailedCardButtons'>
                        <button type='button'><HiMinusSm/>2<HiPlusSm/></button>
                        <button type='button'>ADD TO CART</button>
                    </div>

                    <ReadMore limit={185}>                       
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum nec risus ac sollicitudin. Cras vel enim lacinia, scelerisque sem quis, tempus tellus. Nam ac molestie tellus. Nunc dolor libero, luctus varius massa nec, bibendum pretium sem. Nullam vulputate vestibulum pharetra.
                    </ReadMore>

                    <div className='productDetailedIcons'>
                        <ul className='socialIcons'>
                            <li>SHARE</li>
                            <li><a href='https://www.facebook.com/' rel='noreferrer' target='_blank'><FaFacebookF size={20} color={'rgba(69, 65, 62, 0.7)'}/></a></li>
                            <li><a href='https://myaccount.google.com/' rel='noreferrer' target='_blank'><FaGooglePlusG size={30} color={'rgba(69, 65, 62, 0.7)'}/></a></li>
                            <li><a href='https://twitter.com/' rel='noreferrer' target='_blank'><FaTwitter size={20} color={'rgba(69, 65, 62, 0.7)'}/></a></li>
                            <li><a href='https://br.pinterest.com/' rel='noreferrer' target='_blank'><FaPinterestP size={20} color={'rgba(69, 65, 62, 0.7)'}/></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <Tabs className='tabs' selectedTabClassName='tabSelected'>
                <TabList className='tabList'>
                    <Tab className='tab'>Description</Tab>
                    <Tab className='tab'>Additional Information</Tab>
                    <Tab className='tab'>Reviews (3)</Tab>
                </TabList>

                <TabPanel className='tabPanel'>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis in dui at interdum. Nunc tempor ac libero quis congue. <br/>Vestibulum ut nulla at nulla mollis placerat et et dolor. Cras mi augue, suscipit eget tortor sed.</p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis in dui at interdum. Nunc tempor ac libero quis congue. <br/>Vestibulum ut nulla at nulla mollis placerat et et dolor. Cras mi augue, suscipit eget tortor sed.</p>
                    </div>            
                </TabPanel>
                <TabPanel className='tabPanel'>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis in dui at interdum. Nunc tempor ac libero quis congue. <br/>Vestibulum ut nulla at nulla mollis placerat et et dolor. Cras mi augue, suscipit eget tortor sed.</p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis in dui at interdum. Nunc tempor ac libero quis congue. <br/>Vestibulum ut nulla at nulla mollis placerat et et dolor. Cras mi augue, suscipit eget tortor sed.</p>
                    </div>            
                </TabPanel>
                <TabPanel className='tabPanel'>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis in dui at interdum. Nunc tempor ac libero quis congue. <br/>Vestibulum ut nulla at nulla mollis placerat et et dolor. Cras mi augue, suscipit eget tortor sed.</p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis in dui at interdum. Nunc tempor ac libero quis congue. <br/>Vestibulum ut nulla at nulla mollis placerat et et dolor. Cras mi augue, suscipit eget tortor sed.</p>
                    </div>            
                </TabPanel>
            </Tabs>

            <div className='productDetailedPopular'>
                <div className='popularText'>
                    <div className='productBorder'></div>
                    <h1>POPULAR ITEMS</h1>
                </div>

                <div className='popularCards'>
                    {slice.map((data, index) => (
                        <div className={`card ${slideIndex === index + 1 ? 'slide activeAnimate' : 'slide'}`} key={data.id}>
                            <div className='cardImage'>
                                <img src={data.path} alt=''/> 
                            </div>

                            <div className='cardText'>
                                <h3>{data.name}</h3>
                                <div className={data.classnameCardText}>
                                    <h4>$ {data.price}</h4>
                                    <div className='border'></div>
                                    <span><Link to='/products' onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}>{data.span}</Link></span>
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

            <button className='scrollBtn' onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}>
                SCROLL TO TOP
            </button>

            <div className='productDetailedBenefits'>
                <div className='benefitsContent'>
                    <div className='benefitsImage'>
                        <img src={focus} alt='Focus Icon'/>
                    </div>
                    <div className='benefitsText'>
                        <h1>FOCUS</h1>
                        <p>Our unwavering focus on superior service delivery and building next generation competences</p>
                    </div>
                </div>

                <div className='benefitsContent'>
                    <div className='benefitsImage'>
                        <img src={method} alt='Method Icon'/>
                    </div>
                    <div className='benefitsText'>
                        <h1>METHOD</h1>
                        <p>A standardized methodology designed to delivery measurable business results and predictable costs</p>
                    </div>
                </div>

                <div className='benefitsContent'>
                    <div className='benefitsImage'>
                        <img src={knowledge} alt='Knowledge Icon'/>
                    </div>
                    <div className='benefitsText'>
                        <h1>KNOWLEDGE</h1>
                        <p>A highly skilled, proactive workforce that rellably improves each client's ROI while mitigating thir business risk</p>
                    </div>
                </div>
            </div>       
        </div>
    )
}

export default ProductDetailedPage