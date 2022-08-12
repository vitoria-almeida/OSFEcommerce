import {Routes, Route} from 'react-router-dom'

import Home from '../pages/home/home'
import ErrorMessage from '../components/error/error'

function RoutesPath() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>} exact/>
                <Route path='/error' element={<ErrorMessage/>}/>
                <Route path='*' element={<ErrorMessage/>}/>
            </Routes>
        </>
    )
}

export default RoutesPath