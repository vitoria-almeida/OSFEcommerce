import './home.scss'

import { useState, useEffect } from 'react'

import CarouselBanner from '../../components/carouselBanner/carouselBanner'
import AsideContent from '../../components/asideContent/asideContent'
import Benefits from '../../components/benefits/benefits'
import Banner from '../../components/banner/banner'
import PopularItens from '../../components/popular/popular'
import FeaturedProducts from '../../components/featured/featured'
import Cookie from '../../components/cookie/cookie'

function Home() {
    const [isModalVisible, setIsModalVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setIsModalVisible(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='home'>
            <div className='slideHome'>
                <div className='carousel'>
                    <CarouselBanner/>
                </div>

                <div className='asideContent'>
                    <AsideContent/>
                </div>
                {isModalVisible ? <Cookie onClose={() => setIsModalVisible(false)}/> : null} 
            </div>        
            <PopularItens/>       
            <Banner/>                    
            <Benefits/>        
            <FeaturedProducts/>   
        </div>       
    )
}

export default Home