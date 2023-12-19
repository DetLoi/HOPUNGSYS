import React from 'react';
import '../css/findhold.css'; 
import Searchbar_findhold from '../components/findhold/Searchbar_findhold';;
import HoldSlides_Banner from '../components/findhold/HoldSlides_Banner';
import HoldSlides_1 from '../components/findhold/HoldSlides_1';
import HoldSlides_2 from '../components/findhold/HoldSlides_2';
import HoldSlides_Stor_1 from '../components/findhold/HoldSlides_Stor_1';
import HoldSlides_3 from '../components/findhold/HoldSlides_3';
import Section_Navigation_Findhold from '../components/findhold/Section_Navigation_Findhold';



function findhold({title}) {
  return (
    <div className="findhold">
          <h1 className='page-title'>{title}</h1>
          <Searchbar_findhold className="searchbar"/>
          <div className='white-bg'>
          <HoldSlides_Banner/>
          <HoldSlides_1 title="Trending"/>
          <HoldSlides_2 title="Events og Ture"/>
          <HoldSlides_Stor_1 title="Action"/>
          <HoldSlides_3 title="Kreativ"/>
          <Section_Navigation_Findhold title="Læs mere"/>
          </div>
    </div>


  );
}

export default findhold;
