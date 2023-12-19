import React from 'react';
import Omungfaxe from '../components/Info-3';
import {Info_4, Info_5} from '../components/info-4';
import Section_Navigation from '../components/hjem/Section_Navigation_Om';

function om() {
  return (
    <div className="om-3">
<div>
  <h1 className='page-title'>Om Ung Faxe</h1>
  <div>
    <Omungfaxe/>
  </div>
</div>
<div className='white-bg'>
  <div className='info-container'>
<Info_4/>
</div>
<div className='info-container'>
<Info_5/>
</div>
<Section_Navigation/>
</div>
    </div>


  );
}

export default om;
