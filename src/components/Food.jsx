import React from 'react'
import FoodItem from './FoodItem'
import Skeleton from '../UI/Skeleton'
const fakeArray = [1, 2, 4, 9, 5, 7, 34, 2342, 234234, 12]
const Food = ({Food, loading }) => {
  console.log(Food);
  return (
    <div className='food'>
     {loading 
     ? fakeArray.map(item => <Skeleton key={item} />)
     : Food?.map(item => <FoodItem key={item.imdbId} item={item} />)
     }
    </div>
  )
}

export default Food