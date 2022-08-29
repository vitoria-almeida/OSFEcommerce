import {Routes, Route} from 'react-router-dom'

import Home from '../pages/home/home'
import ErrorMessage from '../components/error/error'
import Category from '../pages/category/category'
import Profile from '../components/profile/profile'
import Products from '../pages/products/products'

function RoutesPath() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>} exact/>
                <Route path='/error' element={<ErrorMessage/>}/>
                <Route path='*' element={<ErrorMessage/>}/>
                <Route path='/category' element={<Category/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/products' element={<Products/>}/>
            </Routes>
        </>
    )
}

export default RoutesPath