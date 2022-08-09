import { useState, useEffect } from 'react';

export const DropDownMenu = (element, initialState) => {
    const [isActive, setIsActive] = useState(initialState)

    useEffect(() => {
        const onClick = e => {
            if (element.current !== null && !element.current.contains(e.target)){
                setIsActive(!isActive)
            }
        }

        if (isActive) {
            window.addEventListener('onclick', onClick)
        }

        return () => {
            window.removeEventListener('onclick', onClick)
        }
    }, [isActive, element])

    return[isActive, setIsActive]
}