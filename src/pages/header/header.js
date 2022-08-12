import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import { productCategories } from '../../services/productsData.js'
import {sales} from '../../services/salesData'

import './header.scss'
import './dropdown.scss'

import logo from '../../assets/logo.png'
import osfLogo from '../../assets/osfLogo.png'
import downArrow from '../../assets/arrow1.png'
import upArrow from '../../assets/arrow2.png'
import navGirl from '../../assets/nav-girl.png'
import searchIcon from '../../assets/searchIcon.png'
import cartIcon from '../../assets/cartIcon.png'
import wishlistIcon from '../../assets/wishlistIcon.png'
import profileIcon from '../../assets/profileIcon.png'

import { FaBars, FaTimes } from 'react-icons/fa'

function Header() {
    const [navState, setNavState] = useState(false)

    const [arrow, setArrow] = useState(true)

    const [arrowProducts, setArrowProducts] = useState(true)

    const [arrowSales, setArrowSales] = useState(true)

    return (
        <div className='container'>
            <header>
                <div>
                    <div className='toggle'>{navState ? (<FaTimes size={22} onClick={() => setNavState(false)}/> ) : (<FaBars size={22} onClick={() => setNavState(true)}/>)}</div>            
                    
                    <Link to='/'>
                        <picture>
                            <source srcSet={osfLogo} media='(min-width: 1024px)'/>
                            <img src={logo} alt='OSF Logotype' className='osfLogo'/>
                        </picture>
                    </Link>
                </div>

                <nav className={`nav-links ${navState ? 'responsive-toggle' : ''}`}>                   
                    <ul className='nav-ul'>
                        <li className='menu-dropdown nav-li'>SERVICES {arrow ? (<img src={downArrow} alt="Down Arrow" onClick={() => setArrow(false)}/>) : (<img src={upArrow} alt='Up Arrow' onClick={() => setArrow(true)}/>)}                
                            <ul className={`${arrow ? 'dropdown-menu' : 'menu'}`}>
                                <h2 className='dropdown-title'>PRODUCT CATEGORIES {arrowProducts ? (<img src={downArrow} alt="Down Arrow" onClick={() => setArrowProducts(false)}/>) : (<img src={upArrow} alt='Up Arrow' onClick={() => setArrowProducts(true)}/>)}</h2>
                                <li className={`${arrowProducts ? 'dropdown-products-off' : ''}`}>
                                    <ul>
                                        {productCategories.map((productsData, i) => (
                                            <Link to='/error'><li key={i}>{productsData}</li></Link>
                                        ))}
                                    </ul>
                                </li>

                                <h2 className='dropdown-title'>SALES {arrowSales ? (<img src={downArrow} alt="Down Arrow" onClick={() => setArrowSales(false)}/>) : (<img src={upArrow} alt='Up Arrow' onClick={() => setArrowSales(true)}/>)}</h2>
                                <li className={`${arrowSales ? 'sales-off' : 'sales-on'}`}>
                                    <ul>
                                        {sales.map((sales, i) => (
                                            <Link to='/error'><li key={i}>{sales}</li></Link>
                                        ))}    
                                    </ul>
                                </li>
            
                                <div className={`dropdown-image ${arrow ? 'dropdown-image-off' : ''}`}><img src={navGirl} alt='Nav Girl'/></div>
                            </ul>
                        
                        </li>
                        <li className='nav-li'>COMPANY <img src={downArrow} alt="Down Arrow"></img></li>
                        <li className='nav-li'>LIBRARY <img src={downArrow} alt="Down Arrow"></img></li>
                        <li className='nav-li'>CONTACT US <img src={downArrow} alt="Down Arrow"></img></li>
                        <li className='nav-li'>EN <img src={downArrow} alt="Down Arrow"/></li>
                        <li className='nav-li'>$ US <img src={downArrow} alt="Down Arrow"/></li>
                    </ul>
                </nav>

                <div className='nav-icons'>
                    <ul className='nav-ul-icons'>
                        <li><img src={searchIcon} alt="Search Icon"/></li>
                        <li><img src={profileIcon} alt="Profile Icon"/></li>
                        <li><img src={wishlistIcon} alt="Heart Icon"/></li>
                        <li><img src={cartIcon} alt="Cart Icon"/></li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Header