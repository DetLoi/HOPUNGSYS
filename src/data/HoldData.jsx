import hold_1 from '../images/hold1.jpg';
import hold_2 from '../images/hold2.jpg';
import hold_3 from '../images/hold3.png';
import hold_4 from '../images/hold4.jpg';
import hold_5 from '../images/hold5.jpg';
import hold_6 from '../images/hold6.jpg';
import hold_7 from '../images/hold7.jpg';
import hold_8 from '../images/hold8.jpg';

const Nyheder = [
    { 
        src: hold_1, 
        title: 'CAMP WAUW 2024',
        id: 'campwauw2024', 
        status: 'few spots' 
      },
      { 
        src: hold_2, 
        title: 'UNGE KOKKE', 
        id: 'ungekokke'
      },
      { 
        src: hold_3, 
        title: 'UNGFEST',
        id: 'ungfest', 
        status: 'sold out' 
      }, 
      { 
        src: hold_4, 
        title: 'MOTORCROSS ÅBEN FORÅR',
        id: 'motorcross', 
        status: 'few spots' 
      },
      { 
        src: hold_5, 
        title: 'KERAMIK',
        id: 'keramik', 
        status: 'few spots'
      },
      { 
        src: hold_6, 
        title: 'NEGLEWORKSHOP',
        id: 'negleworkshop' 
      },
      { 
        src: hold_7, 
        title: 'BEATS OG LYRIK',
        id: 'beatsoglyrik'
      },
      { 
        src: hold_8, 
        title: 'GAMINGCREW',
        id: 'gamingcrew', 
        status: 'sold out' 
      },
    // ... rest of the holds
  ];

  const subImages_1 = [hold_1, hold_2, hold_3, hold_4, hold_5]; 
  const subImages_2 = [hold_2, hold_1, hold_2, hold_3, hold_4]; 
  const subImages_3 = [hold_3, hold_1, hold_2, hold_4, hold_5]; 
  const subImages_4 = [hold_4, hold_1, hold_2, hold_3, hold_5]; 
  const subImages_5 = [hold_5, hold_1, hold_2, hold_3, hold_4]; 
  const subImages_6 = [hold_6, hold_1, hold_2, hold_4, hold_3]; 
  const subImages_7 = [hold_7, hold_5, hold_4, hold_6, hold_1]; 
  const subImages_8 = [hold_8, hold_3, hold_2, hold_4, hold_5]; 

  const Trending = [
    { 
        src: hold_1,
        subImages: subImages_1, 
        title: 'CAMP WAUW 2024',
        id: 'campwaow2024', 
        status: 'few spots',
        description: 'Brænder du for make-up, hår styling, negleworkshop, fotoshot, catwalk, modeshow og masser af pige-hygge? For kun 600,- kr. vil du sammen med over 100 andre piger lære en masse på Beauty Campen!' 
      },
      { 
        src: hold_2,
        subImages: subImages_2,  
        title: 'UNGE KOKKE', 
        id: 'ungekokke',
        description: 'Brænder du for make-up, hår styling, negleworkshop, fotoshot, catwalk, modeshow og masser af pige-hygge? For kun 600,- kr. vil du sammen med over 100 andre piger lære en masse på Beauty Campen!'
      },
      { 
        src: hold_3,
        subImages: subImages_3,  
        title: 'UNGFEST',
        id: 'ungfest', 
        status: 'sold out',
        description: 'Brænder du for make-up, hår styling, negleworkshop, fotoshot, catwalk, modeshow og masser af pige-hygge? For kun 600,- kr. vil du sammen med over 100 andre piger lære en masse på Beauty Campen!' 
      }, 
      { 
        src: hold_4,
        subImages: subImages_4,  
        title: 'MOTORCROSS ÅBEN FORÅR',
        id: 'motorcross', 
        status: 'few spots',
        description: 'Brænder du for make-up, hår styling, negleworkshop, fotoshot, catwalk, modeshow og masser af pige-hygge? For kun 600,- kr. vil du sammen med over 100 andre piger lære en masse på Beauty Campen!'
      },
      { 
        src: hold_5,
        subImages: subImages_5,   
        title: 'KERAMIK',
        id: 'keramik', 
        status: 'few spots',
        description: 'Brænder du for make-up, hår styling, negleworkshop, fotoshot, catwalk, modeshow og masser af pige-hygge? For kun 600,- kr. vil du sammen med over 100 andre piger lære en masse på Beauty Campen!'
      },
      { 
        src: hold_6,
        subImages: subImages_6,   
        title: 'NEGLEWORKSHOP',
        id: 'negleworkshop', 
        description: 'Brænder du for make-up, hår styling, negleworkshop, fotoshot, catwalk, modeshow og masser af pige-hygge? For kun 600,- kr. vil du sammen med over 100 andre piger lære en masse på Beauty Campen!'
      },
      { 
        src: hold_7, 
        subImages: subImages_7, 
        title: 'BEATS OG LYRIK',
        id: 'beatsoglyrik',
        description: 'Brænder du for make-up, hår styling, negleworkshop, fotoshot, catwalk, modeshow og masser af pige-hygge? For kun 600,- kr. vil du sammen med over 100 andre piger lære en masse på Beauty Campen!'
      },
      { 
        src: hold_8, 
        subImages: subImages_8, 
        title: 'GAMINGCREW',
        id: 'gamingcrew', 
        status: 'sold out', 
        description: 'Brænder du for make-up, hår styling, negleworkshop, fotoshot, catwalk, modeshow og masser af pige-hygge? For kun 600,- kr. vil du sammen med over 100 andre piger lære en masse på Beauty Campen!'
      },
    // ... rest of the holds
  ];
  
  const EventsOgTure = [
    { 
        src: hold_1, 
        title: 'CAMP WAUW 2024',
        id: 'campwaow2024', 
        status: 'few spots' 
      },
      { 
        src: hold_2, 
        title: 'UNGE KOKKE', 
        id: 'ungekokke'
      }
     
  ];
  const Action = [
    { 
        src: hold_1, 
        title: 'CAMP WAUW 2027',
        id: 'campwaow2024', 
        status: 'few spots' 
      },
      { 
        src: hold_2, 
        title: 'UNGE KOKKE', 
        id: 'ungekokke'
      },
      { 
        src: hold_3, 
        title: 'UNGFEST',
        id: 'ungfest', 
        status: 'sold out' 
      }, 
      { 
        src: hold_4, 
        title: 'MOTORCROSS ÅBEN FORÅR',
        id: 'motorcross', 
        status: 'few spots' 
      },
      { 
        src: hold_5, 
        title: 'KERAMIK',
        id: 'keramik', 
        status: 'few spots'
      },
      { 
        src: hold_6, 
        title: 'NEGLEWORKSHOP',
        id: 'negleworkshop' 
      },
      { 
        src: hold_7, 
        title: 'BEATS OG LYRIK',
        id: 'beatsoglyrik'
      },
      { 
        src: hold_8, 
        title: 'GAMINGCREW',
        id: 'gamingcrew', 
        status: 'sold out' 
      },
    // ... rest of the holds
  ];
  const Kreativ = [
    { 
        src: hold_1, 
        title: 'CAMP WAUW 2024',
        id: 'campwaow2024', 
        status: 'few spots' 
      },
      { 
        src: hold_2, 
        title: 'UNGE KOKKE', 
        id: 'ungekokke'
      },
      { 
        src: hold_3, 
        title: 'UNGFEST',
        id: 'ungfest', 
        status: 'sold out' 
      }, 
      { 
        src: hold_4, 
        title: 'MOTORCROSS ÅBEN FORÅR',
        id: 'motorcross', 
        status: 'few spots' 
      },
      { 
        src: hold_5, 
        title: 'KERAMIK',
        id: 'keramik', 
        status: 'few spots'
      },
      { 
        src: hold_6, 
        title: 'NEGLEWORKSHOP',
        id: 'negleworkshop' 
      },
      { 
        src: hold_7, 
        title: 'BEATS OG LYRIK',
        id: 'beatsoglyrik'
      },
      { 
        src: hold_8, 
        title: 'GAMINGCREW',
        id: 'gamingcrew', 
        status: 'sold out' 
      },
    // ... rest of the holds
  ];
  
  export  {Nyheder, Trending, EventsOgTure, Action, Kreativ};