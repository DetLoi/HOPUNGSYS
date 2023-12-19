import React from 'react';
import Hero from '../components/hjem/Hero';
import Searchbar from '../components/hjem/Searchbar';
import HoldSlides_0 from '../components/hjem/HoldSlides_0';
import KlubberSlides from '../components/hjem/KlubberSlides';
import Info from '../components/hjem/info';
import Section_Navigation from '../components/hjem/Section_Navigation';
import Info_2 from '../components/hjem/info-2';
import Instagram from '../components/hjem/Instagram';

function hjem() {
  
  return (
    <div className="hjem">

      <div className='landingpage'>
      <Hero/>
      <Searchbar/>
      </div>
      <div className='forside-indhold'>
      <HoldSlides_0 title="TRENDING"/>
      <KlubberSlides title="KLUBBER"/>
      <Info title="AFDELINGER"/>
      <Section_Navigation/>
      <Info_2 title="OM UNG FAXE"/>
      <Instagram title="Følg os på Instagram!"/>
      </div>
    </div>


  );
}

export default hjem;
