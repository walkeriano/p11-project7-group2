import React, { useEffect } from 'react'
import ListRecipes from '../../components/ListRecipes/ListRecipes'
import ListCategories from '../../components/ListCategories/ListCategories'


export default function Home() {

  return (
    <section>
      <ListCategories />
      <ListRecipes />
    </section>
  )
}
