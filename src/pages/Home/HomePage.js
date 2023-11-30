import React, { useState } from 'react';
import ListRecipes from '../../components/ListRecipes/ListRecipes';
import Banner from '../../components/BannerHome/Banner';
import ListCategories from '../../components/ListCategories/ListCategories';
import Footer from '../../components/Footer/Footer';
import ContinentCarrusel from '../../components/ContinentCarrusel/ContinentCarrusel';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);


  return (
    <section className='section-general-app'> 
      <Banner />    
      <ContinentCarrusel/>
      <ListCategories onCategoryClick={setSelectedCategory} />
      <ListRecipes selectedCategory={selectedCategory} />
      <Footer />
    </section>
  )
}
