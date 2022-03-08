import React from 'react'
import carList from './CarList'

const Categories = ({filterCarCategories}) => {
  return (
    <div>{carList.map((car)=>(<div onClick={filterCarCategories}>{car.category}</div>))}</div>
  )
}

export default Categories