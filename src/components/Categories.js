import React from 'react'
import carList from './CarList'

const Categories = ({filterCarCategories}) => {

    const uniqueCategories = new Set(['all', ...carList])

  return (
    <div>{uniqueCategories.map((car)=>(<button key = {car.category} onClick={() => filterCarCategories(car.category)}>{car.category}</button>))}</div>
  )
}

export default Categories