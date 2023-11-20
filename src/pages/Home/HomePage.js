import React, { useEffect } from 'react'
import ListRecipes from '../../components/ListRecipes/ListRecipes'
import Banner from '../../components/Banner/Banner'
import ListCategories from '../../components/ListCategories/ListCategories'

export default function Home() {

  return (
    <section> 
      <Banner />    
      <ListCategories />
      <ListRecipes />
    </section>
  )
}
