import { useState } from 'react'
import { Link } from 'react-router-dom'

import downArrow from '../../assets/darkDownArrow.png'
import upArrow from '../../assets/darkUpArrow.png'

import { productCategories } from '../../services/productsData'

import { FaPinterestP, FaFacebookF, FaGooglePlusG, FaTwitter } from 'react-icons/fa'

import './footer.scss'

function Footer() {
    const date = new Date()
    const year = date.getFullYear()
    
    const [arrowContact, setArrowContact] = useState(true)
    const [arrowCategoriest, setArrowCategoriest] = useState(true)
    const [arrowAbout, setArrowAbout] = useState(true)

    return (
        <footer>
            <div>
                <h4>© Copyright {year}.<br/> All Rights Reserved.</h4>

                <h3>CONTACT {arrowContact ? (<img src={downArrow} alt='Down Arrow' onClick={() => setArrowContact(false)}/>) : (<img src={upArrow} alt='Up Arrow' onClick={() => setArrowContact(true)}/>)}</h3>

                <ul className={`${arrowContact ? 'dropdown-contact-off' : 'dropdown-contact-on'}`}>
                    <li>Headquarters: <br/> 5600, Blvd, des Galeries, Bur 530<br/> Québec, Québec G2K 2H6</li>
                    <li>contact@osf-global.com</li>
                    <li>+1 (888) 548-4344</li>
                </ul>
            </div>

            <div>
                <h3>CATEGORIEST {arrowCategoriest ? (<img src={downArrow} alt='Down Arrow' onClick={() => setArrowCategoriest(false)}/>) : (<img src={upArrow} alt='Up Arrow' onClick={() => setArrowCategoriest(true)}/>)}</h3>

                <ul className={`${arrowCategoriest ? 'dropdown-categoriest-off' : 'dropdown-categoriest-on'}`}>
                    {productCategories.map((categoriestData, i) => (
                        <li key={i}><Link to='/error'>{categoriestData}</Link></li>
                    ))}
                </ul>
            </div>

            <div>
                <h3>ABOUT {arrowAbout ? (<img src={downArrow} alt='Down Arrow' onClick={() => setArrowAbout(false)}/>) : (<img src={upArrow} alt='Up Arrow' onClick={() => setArrowAbout(true)}/>)}</h3>

                <ul className={`${arrowAbout ? 'dropdown-about-off' : 'dropdown-about-on'}`}>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Testimonials</li>
                    <li>Contact</li>
                </ul>
                
            </div>

            <div>
                <ul className='socialIcons'>
                    <li><a href='https://www.facebook.com/' rel='noreferrer' target='_blank'><FaFacebookF size={20} color={'rgba(69, 65, 62, 0.7)'}/></a></li>
                    <li><a href='https://myaccount.google.com/' rel='noreferrer' target='_blank'><FaGooglePlusG size={30} color={'rgba(69, 65, 62, 0.7)'}/></a></li>
                    <li><a href='https://twitter.com/' rel='noreferrer' target='_blank'><FaTwitter size={20} color={'rgba(69, 65, 62, 0.7)'}/></a></li>
                    <li><a href='https://br.pinterest.com/' rel='noreferrer' target='_blank'><FaPinterestP size={20} color={'rgba(69, 65, 62, 0.7)'}/></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer