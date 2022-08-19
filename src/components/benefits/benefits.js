import './benefits.scss'

import focus from '../../assets/service-focus.png'
import method from '../../assets/service-method.png'
import knowledge from '../../assets/service-knowledge.png'

function Benefits() {
    return (
        <div className='benefits'>
            <div className='benefitsContent'>
                <div className='benefitsImage'>
                    <img src={focus} alt='Focus Icon'/>
                </div>
                <div className='benefitsText'>
                    <h1>FOCUS</h1>
                    <p>Our unwavering focus on superior service delivery and building next generation competences</p>
                </div>
            </div>

            <div className='benefitsContent'>
                <div className='benefitsImage'>
                    <img src={method} alt='Method Icon'/>
                </div>
                <div className='benefitsText'>
                    <h1>METHOD</h1>
                    <p>A standardized methodology designed to delivery measurable business results and predictable costs</p>
                </div>
            </div>

            <div className='benefitsContent'>
                <div className='benefitsImage'>
                    <img src={knowledge} alt='Knowledge Icon'/>
                </div>
                <div className='benefitsText'>
                    <h1>KNOWLEDGE</h1>
                    <p>A highly skilled, proactive workforce that rellably improves each client's ROI while mitigating thir business risk</p>
                </div>
            </div>
        </div>
    )
}

export default Benefits