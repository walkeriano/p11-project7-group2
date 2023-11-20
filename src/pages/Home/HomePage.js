import React from 'react'
import ListRecipes from '../../components/ListRecipes/ListRecipes'
import Banner from '../../components/Banner/Banner'

export default function Home() {
  return (
    <div>
      <Banner />
      <ListRecipes />
    </div>
  )
}
