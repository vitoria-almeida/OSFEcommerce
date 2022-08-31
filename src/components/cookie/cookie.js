import './cookie.scss';

import { CgClose } from 'react-icons/cg'
import { Link } from 'react-router-dom'

function Cookie({ onClose = () => {} }) {   
    return (
        <div className='cookieContainer'>
            <div className='cookieContent'>
                <div>
                    <CgClose onClick={onClose} size={25} cursor='pointer'/>
                </div>
                <h2>
                    This website uses cookies
                </h2>
                <p>
                    OSF uses its own and third-party cookies for statistical purposes, to know your preferences, for website performance<br/> and interaction with social media offering publicity tailored to your interests. If you continue browsing, we consider that you accept its use.
                </p>
                <p>
                    You can expand this information consulting our <Link to='/' target='_blank'>Cookies Policy Page</Link>
                </p>
                <div>
                    <button onClick={onClose}>ACCEPT</button>
                </div>
            </div>
        </div>
    )
}

export default Cookie