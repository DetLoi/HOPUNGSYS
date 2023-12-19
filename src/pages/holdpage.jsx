import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Trending } from '../data/HoldData';
import mobilepay from '../images/mobilepay2.png';
import creditcard from '../images/creditcards.png';
import Breadcrumb from '../components/BreadCrumb';
import HoldSlides_0 from '../components/hjem/HoldSlides_0';
import placeholder_img from '../images/man.jpg'

import '../css/HoldPage.css';
import ImageCarousel from '../components/ImageCarousel';
import YoutubeEmbed from '../components/YoutubeVideo';

const HoldPage = () => {
  const { holdId: paramHoldId } = useParams();
  const hold = Trending.find((hold) => hold.id === paramHoldId);
  if (!hold) {
    return <div className='mangler'><h1>Holdet eksistere ikke</h1>.<Link to='/'><button className='button_second'>Tilbage til forsiden</button></Link>
    </div>;
  }
  const breadcrumbPaths = [
    { text: 'Forside', url: '/', 'aria-label': 'Link to Homepage' },
    { text: 'Find hold', url: '/findhold', 'aria-label': 'Link to Find Hold Page' },
    { text: hold.title, url: `/findhold/${hold.id}`, 'aria-label': `Link to ${hold.title} Page` },
  ];

  return (
    <div className="holdpage" aria-label="Hold Page">
      <div className='breadcrumb-container' aria-label="Breadcrumb Navigation">
        <Breadcrumb paths={breadcrumbPaths}/>
      </div>
      <div className='tilmelding-container' aria-label="Tilmelding Section">
        <div className='image-carousel-container' aria-label="Image Carousel Section">
          <ImageCarousel hold={hold} />
        </div>
        <div className='tilmelding-hold-info-container' aria-label="Hold Information Section">
        <div className='hold-info-container' aria-label="Holdoplysninger">
  <div className='holdtitel-og-kategori-container' aria-label="Holdtitel og kategori">
    <h2 className="hold-title" aria-label="Holdtitel">{hold.title}</h2>
    <h5 className='kategori-titel' aria-label="Holdkategori">Trending</h5>
  </div>
  <div className='description-container' aria-label="Hold beskrivelse">
    <p>{hold.description}</p>
  </div>
  <div className="hold-detaljer" aria-label="Holddetaljer">
    <div className="holdinfo-item">
      <div className="holdinfo-title">
        <p aria-label="dato">Dato:</p>
      </div>
      <div className="holdinfo-content">
        <p aria-label="Onsdag den 18. oktober kl. 18.30 til fredag den 20. oktober kl. 19.30"> Onsdag den 18. oktober kl. 18.30 til fredag den 20. oktober kl. 19.30</p>
      </div>
    </div>
    <div className="holdinfo-item">
      <div className="holdinfo-title">
        <p aria-label="sted">Sted:</p>
      </div>
      <div className="holdinfo-content">
        <p aria-label="Midtjysk Efterskole">Midtjysk Efterskole</p>
      </div>
    </div>
    <div className="holdinfo-item" >
      <div className="holdinfo-title">
        <p aria-label="Pladser">Pladser:</p>
      </div>
      <div className="holdinfo-content">
        <p className='available' aria-label="Der er 10 pladser tilbage"> Der er 10 pladser tilbage</p>
      </div>
    </div>
  </div>

          
            </div>
            <div className='tilmelding-formular-container' aria-label="Tilmelding Form Section">
            <div aria-label="Tilmeldingstitel">
    <h3>Tilmeld dig her:</h3>
    <div className='input-container'>
      <div>
        <input type="text" className='tilmelding-input' placeholder="Elevens fulde navn *" aria-label="Elevens fulde navn" /><br />
        <input type="text" className='tilmelding-input' placeholder="Elevens CPR-nummer *" aria-label="Elevens CPR-nummer" /><br />
        <input type="text" className='tilmelding-input' placeholder="Elevens mobilnummer *" aria-label="Elevens mobilnummer" /><br />
      </div>
      <div>
        <input type="text" className='tilmelding-input' placeholder="Forældre 1 mobilnummer *" aria-label="Forældre 1 mobilnummer" /><br />
        <input type="text"  className='tilmelding-input' placeholder="Forældre 2 mobilnummer *" aria-label="Forældre 2 mobilnummer" /><br />
        <input type="text" className='tilmelding-input' placeholder="Forældres fulde navn *" aria-label="Forældres fulde navn" /><br />
      </div>
    </div>
    <label className="checkbox-label">
      <input type="checkbox" className='large-checkbox' aria-label="Betingelser" />
      <p aria-label="Betingelser tekst">
        Jeg har læst og accepterer&nbsp;  <a className="link" href="#" aria-label="Betingelser link"> betingelserne (læs dem her)</a>&nbsp;for at deltage.
      </p>
    </label>
  </div>
  <div>
    <div className='payment-titel'>
      <h5>Betalingsmuligheder:</h5>
    </div>
    <div className="payment-options-container">
      <div className='mobilepay'>
        <img className="mp-image" src={mobilepay} alt="Mobilepay logo" />
        <p>Mobilepay</p>
      </div>
      <div className='creditcards'>
        <img className="cc-image" src={creditcard} alt="VISA eller Mastercard logo" />
        <p>VISA eller Mastercard</p>
      </div>
    </div>
    <div className="hold-cta-buttons" aria-label="Betalingsknapper">
      <button aria-label="Videre til betaling">Videre til betaling</button>
      <span>eller</span>
      <button className='button_second' aria-label="Udfyld via UNI-Login">Udfyld via UNI-Login</button>
    </div>
  </div>
        </div>
            </div>
          </div>
          <div className='detailed-description' aria-label="Detailed Description Section">
      <div className='detailed-description-coloum-1'>
      <div className="description-component" aria-label="Beskrivelse">
                <h3>Beskrivelse</h3>
                <div>
      <p>
        Odder ungdomsskole inviterer alle unge fra 7. til 9. klasse til den <strong>VILDESTE UNGFEST!</strong>
        <br />
        Festen afholdes fredag d. 19. januar på <strong>PARKVEJENSSKOLE</strong> i trygge rammer. Festen er alkohol- og røgfri.
      </p>
      <p>
        Festen vil være fuldt med det vildeste diskotek klar til jer og masser af underholdning:
        <br />
        - <strong>Tivoli</strong> med boksemaskine, bamsekran!<br />
        - <strong>Silent Disco</strong> og <strong>MySelfie</strong> med live DJ<br />
        - <strong>Festival makeup</strong> med professionel makeupartist
      </p>
      <p>
        I baren kan du købe snacks, sodavand, slush ice mm.
      </p>
      <p>
        <strong>BEGRÆNSET ANTAL PLADSER - MAX 200 pladser</strong>
      </p>
      <p>
        <strong>BEMÆRK</strong>
        <br />
        Dørene lukker kl. 21.00, og du kan IKKE komme ind efter.
        <br />
        Når man først er kommet ind til festen, er det ikke muligt at gå ud igen, først når du tager hjem :)
      </p>
    </div>
              </div>
              <div className="description-component lektionsplan" aria-label="Lektionsplan">
              <h3>Lektionsplan</h3>
              <div>
  <p>
    <strong>Dato:</strong> 15. december 2023
    <br />
    <strong>Tidsramme:</strong> 09:00 - 10:30
  </p>

  <p>
    <strong>Mål:</strong>
    <ul>
      <li><strong>Gennemgå og forstå brøker</strong></li>
      <li><strong>Øve regning med brøker</strong></li>
    </ul>
  </p>

  <p>
    <strong>Aktiviteter:</strong>
    <ol>
      <li>
        <strong>Introduktion til brøker (09:00 - 09:15)</strong>
        <ul>
          <li>Præsentation af brøker med eksempler</li>
          <li>Diskussion om brøkdeling</li>
        </ul>
      </li>

      <li>
        <strong>Øvelser med brøker (09:15 - 10:00)</strong>
        <ul>
          <li>Udfyldning af brøkopgaver i arbejdsbogen</li>
          <li>Gruppearbejde med brøker på tavlen</li>
        </ul>
      </li>

      <li>
        <strong>Spørgsmål og evaluering (10:00 - 10:15)</strong>
        <ul>
          <li>Gennemgang af svære områder</li>
          <li>Elevernes spørgsmål og diskussion</li>
        </ul>
      </li>

      <li>
        <strong>Afslutning og opsummering (10:15 - 10:30)</strong>
        <ul>
          <li>Opsamling af dagens emner</li>
          <li>Hjemmearbejde og næste lektions forventninger</li>
        </ul>
      </li>
    </ol>
  </p>
</div>

              </div>

              <div className="description-component" aria-label="Dokumenter">
              <h3>Dokumenter</h3>
                <p className='link'>Deltagerinfo.pdf</p>
                <p className='link'>Program.pdf</p>

              </div>
             
              </div>
              <div className='detailed-description-coloum-2'>
              

              <div className="description-component video-component" aria-label="Video">
                <h3>Video</h3>
                <YoutubeEmbed/>
              </div>



              <div className="description-component" aria-label="Åbningstider">
              <h3>Åbningstider</h3>
              <ul className="aabningstider-list">
              <li><span className="dag">Mandag</span><span>09:00 - 17:00</span></li>
        <li><span className="dag">Tirsdag</span><span>09:00 - 17:00</span></li>
        <li><span className="dag">Onsdag</span><span>09:00 - 17:00</span></li>
        <li><span className="dag">Torsdag</span><span>09:00 - 17:00</span></li>
        <li><span className="dag">Fredag</span><span>09:00 - 17:00</span></li>
        <li><span className="dag">Lørdag</span><span>Lukket</span></li>
        <li><span className="dag">Søndag</span><span>Lukket</span></li>
      </ul>

              </div>
              <div className="description-component" aria-label="Medarbejdere">
              <h3>Medarbejdere</h3>
              <div className=' employee-container'>
              <div className='employee'> 
                <div className='employee-img'><img src={placeholder_img}/>
                </div>
                <h5>Hans Nielsen</h5>
              </div>
              <div className='employee'> 
                <div className='employee-img'><img src={placeholder_img}/>
                </div>
                <h5>Hans Nielsen</h5>
              </div>
              <div className='employee'> 
                <div className='employee-img'><img src={placeholder_img}/>
                </div>
                <h5>Hans Nielsen</h5>
              </div>
              <div className='employee'> 
                <div className='employee-img'><img src={placeholder_img}/>
                </div>
                <h5>Hans Nielsen</h5>
              </div>
              <div className='employee'> 
                <div className='employee-img'><img src={placeholder_img}/>
                </div>
                <h5>Hans Nielsen</h5>
              </div>
          
                
              </div>
              </div>
              </div>
        </div>
        <HoldSlides_0 title="Andre hold i samme kategori"/>
    </div>
  );
};

export default HoldPage;
