import './banner.scss'

import banner from '../../assets/banner.png'

function Banner() {
    return (
        <div className='bannerContainer'>
            <img src={banner} alt='Banner Background'/> 

            <div className='bannerText'>
                <h1>Banner OSF Theme</h1>
                <h3>Sed ut perspiciatis unde omnis iste natus error sit volup-tatem accusantium</h3>
            </div>
        </div>
    )
}

export default Banner