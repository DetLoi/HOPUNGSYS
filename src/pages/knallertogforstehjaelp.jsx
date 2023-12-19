import React from 'react';
import '../css/findhold.css'; 
import Searchbar_findhold from '../components/findhold/Searchbar_findhold';;
import HoldSlides_1 from '../components/findhold/HoldSlides_1';
import HoldSlides_2 from '../components/findhold/HoldSlides_2';
import HoldSlides_3 from '../components/findhold/HoldSlides_3';

function knallert() {
  return (
    <div className="knallert" aria-label="Knallert Side">
      <h1 className='page-title' aria-label="Sidetitel">Knallert og Førstehjælp</h1>
      <Searchbar_findhold className="searchbar" aria-label="Søgebjælke"/>
      <div className='white-bg' aria-label="Indholdssektion">
        <HoldSlides_1 title="Alle hold" aria-label="Alle Hold Slide"/>
        <HoldSlides_2 title="Mere info om knallert" aria-label="Mere Info om Knallert Slide"/>
        <HoldSlides_3 title="Knallert kørekort" aria-label="Knallert Kørekort Slide"/>
      </div>
    </div>
  );
}

export default knallert;
