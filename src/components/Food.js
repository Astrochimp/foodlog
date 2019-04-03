import React from 'react'
import FoodSearch from './FoodSearch'
import FoodList from './FoodList'
import FoodDetail from './FoodDetail'

const Food = () => {
  return (
    <div className='foodlog--layout'>
      <div>
        <FoodSearch />
        <FoodList />
      </div>
      <FoodDetail />
    </div>
  )
}

export default Food
