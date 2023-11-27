import React from 'react'
import Button from '../../components/Button/Button';

import './SearchBar.css';

export default function SearchBar () {
  return (
    <div className='search'>
      <input type="search" id="site-search" name="q" className='searchBar'/> 
      < Button text='Search'/>  
    </div>
  )
}
