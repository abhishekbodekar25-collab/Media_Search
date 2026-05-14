import React from 'react'
import { useDispatch } from 'react-redux'
import { addCollection, addedToast } from '../redux/features/collectionSlice'

const ResultCard = ({item}) => {


  const dispatch = useDispatch()


  function addToCollection(item){
    dispatch(addCollection(item))
    dispatch(addedToast())
  }


  return (
    <div className='w-[17vw] relative h-60 bg-white rounded overflow-hidden '>
      
      <a target='_blank' className='h-full' href={item.url}>

        {item.type == 'photo'?<img className='h-full w-full object-cover object-center' src={item.src} alt="" />:''}
        {item.type == 'video'?<video className='h-full w-full object-cover object-center' autoPlay loop muted src={item.src}></video>:''}

      </a>

      
      <div id='bottom' className='gap-3 flex justify-between items-center text-white w-full px-4 py-5 absolute bottom-0'>
        <h2 className='text-xs font-semibold capitalize overflow-hidden'>{item.title}</h2>

        <button onClick={()=>{
          addToCollection(item)
        }}
         className='bg-blue-500 active:scale-95 text-white rounded px-2 py-0.8 font-medium cursor-pointer'>
          SAVE
        </button>
      </div>
    </div>
  )
}

export default ResultCard