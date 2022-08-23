import './home.scss'

import CarouselBanner from '../../components/carouselBanner/carouselBanner'
import AsideContent from '../../components/asideContent/asideContent'
import Benefits from '../../components/benefits/benefits'
import Banner from '../../components/banner/banner'
import PopularItens from '../../components/popular/popular'
import FeaturedProducts from '../../components/featured/featured'

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
                <Banner/>
            </div>
            
            <div>
                <Benefits/>
            </div>

            <div>
                <FeaturedProducts/>
            </div>
            
        </div>

        
    )
}

export default Home