import {Routes, Route} from 'react-router-dom'

import Home from '../pages/home/home'
import ErrorMessage from '../components/error/error'
import Category from '../pages/category/category'

function RoutesPath() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>} exact/>
                <Route path='/error' element={<ErrorMessage/>}/>
                <Route path='*' element={<ErrorMessage/>}/>
                <Route path='/category' element={<Category/>}/>
            </Routes>
        </>
    )
}

export default RoutesPath