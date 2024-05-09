import React from 'react'
// import MainPage from '../MainPage/MainPage';
import MainPage from '../Components/MainPage/MainPage.jsx'
import Popular from '../Components/Popular/Popular.jsx';
import Offers from '../Components/Offers/Offers.jsx';
import NewCollections from '../Components/NewCollections/NewCollections.jsx';
import NewsLetter from '../Components/NewsLetter/NewsLetter.jsx';


const Shop = () => {
  return (
    <div>
      <MainPage/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}

export default Shop



