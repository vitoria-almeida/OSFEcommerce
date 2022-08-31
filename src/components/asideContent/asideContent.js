import './asideContent.scss'

import { FaFacebookF } from 'react-icons/fa'

import sales from '../../assets/sales.png'

function AsideContent() {
    return (
        <div className='asideContent'>
            <img src={sales} alt='Summer Sales Banner'/>
            <h4>Folow us on Facebook</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href='https://www.facebook.com/' rel='noreferrer' target='_blank'>
                <button><FaFacebookF size={18}/> FOLLOW</button>
            </a>
        </div>
    )
}

export default AsideContent