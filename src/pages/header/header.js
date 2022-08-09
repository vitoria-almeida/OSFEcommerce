import { useRef, useState } from 'react';
import { Link } from 'react-router-dom'

import { productCategories } from '../../services/servicesData.js'

import './header.scss'
import './dropdown.scss'

import logo from '../../assets/osfLogo.png'
import arrow from '../../assets/arrow1.png'
import searchIcon from '../../assets/searchIcon.png'
import cartIcon from '../../assets/cartIcon.png'
import wishlistIcon from '../../assets/wishlistIcon.png'
import profileIcon from '../../assets/profileIcon.png'

function Header() {
    const dropDownRef = useRef(null)
    const [isActive, setIsActive] = useState(false)
    const onClick = () => setIsActive(!isActive)

    return (
        <div className='container'>
        <header>
            <nav className='nav'>
                <ul>
                    <li><Link to='/'><img src={logo} alt="OSF Logotype"/></Link></li>
                </ul>

                <ul>
                    <li onClick={onClick} className='menu-dropdown'>SERVICES <img src={arrow} alt="Arrow" />
                        <ul ref={dropDownRef} className={`menu ${isActive ? 'active' : 'inactive'}`} id="menuDropdown">
                            <li className="productCategories">PRODUCT CATEGORIES
                                <ul>
                                    {productCategories.map((productsData) => (
                                        <li>{productsData}</li>
                                    ))}
                                </ul>
                            </li>
                            <li>SALES
                                <ul>
                                    <li>a</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>COMPANY</li>
                    <li>LIBRARY</li>
                    <li>CONTACT US</li>
                    <li className='currency'>EN <img src={arrow} alt="Arrow"/></li>
                    <li className='currency'>$ US <img src={arrow} alt="Arrow"/></li>
                </ul>

                <ul>
                    <li><img src={searchIcon} alt="Search Icon"/></li>
                    <li><img src={profileIcon} alt="Profile Icon"/></li>
                    <li><img src={wishlistIcon} alt="Heart Icon"/></li>
                    <li><img src={cartIcon} alt="Cart Icon"/></li>
                </ul>

                <div></div>
            </nav>
        </header>
        </div>
    )
}

export default Header