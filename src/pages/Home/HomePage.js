import React, { useState } from 'react';
import ListRecipes from '../../components/ListRecipes/ListRecipes';
import Banner from '../../components/BannerHome/Banner';
import ListCategories from '../../components/ListCategories/ListCategories';
import Footer from '../../components/Footer/Footer';


export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);


  return (
    <section> 
      <Banner />    
      <ListCategories onCategoryClick={setSelectedCategory} />
      <ListRecipes selectedCategory={selectedCategory} />
      <Footer />
    </section>
  )
}
