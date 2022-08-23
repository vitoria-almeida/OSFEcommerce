import './asideContent.scss'

import sales from '../../assets/sales.png'

import { FaFacebookF } from 'react-icons/fa'

function AsideContent() {
    return (
        <div className='asideContent'>
            <img src={sales} alt='Summer Sales Banner'/>
            <h4>Folow us on Facebook</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button><FaFacebookF size={18}/> FOLLOW</button>
        </div>
    )
}

export default AsideContent