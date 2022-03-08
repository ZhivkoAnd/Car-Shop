import React from 'react'
import styled from 'styled-components'
import Categories from '../Categories'

const NavMenu = ({filterCarCategories}) => {
  return (
    <NavWrapper>
        <Categories filterCarCategories = {filterCarCategories}/>
        <ul>
            <li>
                hey
            </li>
            <li>
                hey
            </li>
        </ul>
    </NavWrapper>
  )
}

export default NavMenu


const NavWrapper = styled.div``