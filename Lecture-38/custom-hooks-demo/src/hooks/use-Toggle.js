import  { useState } from 'react'

const useToggle = (initialState = false) => {
    const [toggle, setToggle] = useState(initialState);

    const changeToggle = () => {
        setToggle(() => !toggle);   
    }
    return [toggle, changeToggle ];
}

export default useToggle;