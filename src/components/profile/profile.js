import './profile.scss'

import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5'

import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Profile({ id='modal', onClose = () => {} }) {
    const handleOutsideClick = (e) => {
        if(e.target.id === id) {
            onClose()
        }
    }

    const [show, setShow] = useState(false)
    const handleShow = () => {
        setShow(!show)
    }

    const initialValues = {email: '', password: ''}
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormValues({...formValues, [name]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()  
        setFormErrors(validate(formValues))
        setIsSubmit(true)
    }

    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit) {
            window.location.reload()
        }
    })

    const validate = (values) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
        var regex2 = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/

        if(!values.email) {
            errors.email = 'Email is required'
        } else if (!regex.test(values.email)) {
            errors.email = 'This is not a valid email format'
        }

        if(!values.password) {
            errors.password = 'Password is required'
        } else if(values.password.length < 6) {
            errors.password = 'Password must be more than 6 characters'
        } else if(!regex2.test(values.password)) {
            errors.password = 'Password must contain at least 1 special character and 1 number'
        }

        return errors
    }

    return (
        <div id={id} className='profileContainer' onClick={handleOutsideClick}>
            <div className='profileContent'>
                <h1>Sign in</h1>

                <form action='#' onSubmit={handleSubmit}>
                        <label htmlFor='email'>
                            Email
                        </label>
                        <div>
                            <input 
                                type='email' 
                                id='email' 
                                name='email' 
                                required 
                                autoComplete='off' 
                                value={formValues.email}
                                onChange={handleChange}
                            /> 
                        </div> 
                        <p>{formErrors.email}</p>            
         
                        <label htmlFor='password'>
                            Password
                            <span>
                                <Link to='/' target='_blank'>forgot password</Link>
                            </span>
                        </label>
                        <div class='passDiv'>
                            <input 
                                type={show ? 'text' : 'password'} 
                                id='password' 
                                name='password' 
                                required
                                value={formValues.password}
                                onChange={handleChange}
                            />
                            <div className='icon'>
                                {!show ? (<IoEyeOutline size={20} color={'rgba(54, 51, 50, 0.4)'} onClick={handleShow}/>)  : (<IoEyeOffOutline size={20} color={'rgba(54, 51, 50, 0.4)'} onClick={handleShow}/>)}
                            </div>
                        </div>
                        <p>{formErrors.password}</p>      

                    <button type='submit'>LOGIN</button>                                  
                </form>         

                <Link to='/' target='_blank'>I don't have an account</Link>
            </div>
        </div>
    )
}

export default Profile