import { Link } from 'react-router-dom'

import './error.scss'

import searchIcon from '../../assets/searchIcon.png'

function ErrorMessage() {
    return (
        <>
            <div className='errorContainer'>
                <ul>
                    <Link to='/'><li>Home</li></Link> /
                    <li>404</li>
                </ul>

                <div className='errorBorder'></div>
                <h1>404</h1>

                <div className='errorContent'>
                    <div>
                        <h2>Oops!</h2>
                    </div>
                    <div>
                        <h3>Sorry, this page could not be found!</h3>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac orci non tellus accumsan vestibulum at quis arcu.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac orci non tellus accumsan vestibulum at quis arcu.</p>
                        
                        <Link to='/'><h5>Go back to Homepage</h5></Link>
                        
                        <div className='errorInput'>
                            <label for='search'>Search our site</label><br/>
                            <input id='search' name='search' placeholder='SEARCH'/>
                            <img src={searchIcon} alt='Search Icon'></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ErrorMessage