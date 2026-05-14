import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CollectionCard from '../components/CollectionCard'
import { clearCollection } from '../redux/features/collectionSlice'

const CollectionPage = () => {

  const collection = useSelector(state => state.collection.items)

  const dispatch = useDispatch()

  return (
   <div className='overflow-auto px-10 py-6'>

    {collection.length>0? <div className='flex justify-between mb-6'>
      <h2 className='font-medium text-xl'>Your Collections</h2>

      <button
      onClick={()=>{
        dispatch(clearCollection())
      }}
      className='bg-red-800 text-white px-5 py-2 text-base font-medium rounded active:scale-95 cursor-pointer transition'>
        Clear Collection
      </button>
    </div> : <h2 className='font-medium text-5xl py-10 text-center'>
        Empty Collection
      </h2>}

    <div className='flex justify-start w-full flex-wrap gap-6'>
      {collection.map((item,idx) => {
        return (
          <div key={idx}>
            <CollectionCard item={item} />
          </div>
        )
      })}
    </div>

   </div>
  )
}

export default CollectionPage