import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

const SearchBar = () => {

    const [text, setText] = useState('')

    const dispatch = useDispatch()


    function submitHandler(e){
        e.preventDefault()
        dispatch(setQuery(text))
        setText('')
        
    }


  return (
    <div>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }} className='flex bg-gray-950 p-10 gap-5'>

            <input
            value={text}
            onChange={(e)=>{
                setText(e.target.value);
                
            }}
            required className='w-full border-2 px-4 py-2 text-xl rounded outline-none' 
            type="text" 
            placeholder='Search anything..' />

            

            <button className='border-2 px-4 py-2 text-xl rounded outline-none cursor-pointer active:scale-95'>Search</button>

        </form>
    </div>
  )
}

export default SearchBar