import './asideContent.scss'

import sales from '../../assets/sales.png'

import { FaFacebookF } from 'react-icons/fa'

function AsideContent() {
    return (
        <div className='asideContent'>
            {/* <div className='divAsideContent'> */}
                <img src={sales} alt='Summer Sales Banner'/>
                <h4>Folow us on Facebook</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button><FaFacebookF size={18}/> FOLLOW</button>
            {/* </div> */}
        </div>
    )
}

export default AsideContent