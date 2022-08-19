import './home.scss'

import CarouselBanner from '../../components/carouselBanner/carouselBanner'
import AsideContent from '../../components/asideContent/asideContent'
import Benefits from '../../components/benefits/benefits'

function Home() {
    return (
        <div className='home'>
            <div className='slideHome'>
                <div className='carousel'>
                    <CarouselBanner/>
                </div>

                <div className='asideContent'>
                    <AsideContent/>
                </div>
            </div>

            <div>
                <Benefits/>
            </div>
        </div>

        
    )
}

export default Home