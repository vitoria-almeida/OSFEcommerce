import './profile.scss'

import { IoEyeOutline } from 'react-icons/io5'

import { Link } from 'react-router-dom'

function Profile({ id='modal', onClose = () => {} }) {
    const handleOutsideClick = (e) => {
        if(e.target.id === id) {
            onClose()
        }
    }

    return (
        <div id={id} className='profileContainer' onClick={handleOutsideClick}>
            <div className='profileContent'>
                <h1>Sign in</h1>
                <form>
                    <label for='email'>
                        Email
                    </label>
                    <input type='email' id='email' name='email' required autoFocus autoComplete='off'/>
                    
                    <label for='password'>
                        Password
                        <span><Link to='/' target='_blank'>forgot password</Link></span>
                    </label>
                    <input type='password' id='password' name='password' required/>

                    <div className='icon'>
                        <IoEyeOutline size={20} color={'rgba(54, 51, 50, 0.4)'}/>                     
                    </div>

                    <button type='submit'>LOGIN</button>             
                </form>             
                <Link to='/' target='_blank'>I don't have an account</Link>
            </div>
        </div>
    )
}

export default Profile