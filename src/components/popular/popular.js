import './popular.scss'

import popularData from '../../services/popularItensData.json'

function PopularItens() {

    return (
        <div className='popularContainer'>
            <div className='popularBorder'></div>
            <h1>Popular Itens</h1>

            <div className='popularCards'>
                
            </div>
        </div>
    )
    
}

export default PopularItens