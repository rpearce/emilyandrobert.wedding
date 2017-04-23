'use strict'

function home() {
  return `
    <main>
      <header class="hero">
        <h1>
          <div>Emily &amp; Robert</div>
          <small>Are Getting Married</small>
        </h1>
        <div class="hero__info">
          <div class="hero__infoLocation">Auckland</div>
          <div class="hero__infoDate">February 18<sup>th</sup> 2018</div>
        </div>
        <div class="hero__info">
          <div class="hero__infoLocation">Charleston</div>
          <div class="hero__infoDate">March 3<sup>rd</sup> 2018</div>
        </div>
      </header>
      <section>
        <div class="l--constrained">
          <div class="row">
            <div class="row__half">
              <h2>Kumeu Valley Estate</h3>
              <p>Located admist the vineyards of the Kumeu Valley just 20 minutes from Auckland city, the venue contains an outdoor ceremony area, a modernised farm house and a barn complete with an outdoor patio.</p>
              <p>
                It is located at <a href="https://www.google.co.nz/maps/place/Kumeu+Valley+Estate/@-36.74204,174.5089526,17z/data=!4m13!1m7!3m6!1s0x6d0d13e2a8bebcf9:0x72cb9cd0bdfe7b12!2s972+Old+N+Rd,+Huapai,+Waimauku+0882!3b1!8m2!3d-36.74204!4d174.5111413!3m4!1s0x6d0d13e2a8bebcf9:0x78e8ec38867eff09!8m2!3d-36.74204!4d174.5111413">972 Old North Road, Waimauku, Auckland</a>,
                and more information and photos can be found on the <a href="https://www.kumeuvalley.co.nz/">Kumeu Valley Estate website</a>.
              </p>
            </div>
            <div class="row__half row__half--first">
              <img src="images/kumeu.jpg" alt="Kumeu Valley Estate" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="l--constrained">
          <div class="row">
            <div class="row__half row__half--first">
              <img src="https://image.staah.net/images/WebsiteImages/4087/slider_32_4087_MsZqfnPtHW_Spencer%20on%20Byron%20Penthouse-15.jpg" alt="View of Takapuna & Rangitoto" />
            </div>
            <div class="row__half">
              <h2>Takapuna Accomodation</h2>
              <p>Takapuna is a thriving hub on the water with boutique shopping, nightlife and great views of Rangitoto, a massive island-volcano situated in the harbour.</p>
              <p>Since Auckland covers a large amount of area, we recommend guests stay in an area called Takapuna. It is a twenty minute drive to Auckland City as well as the venue. Additionally, there will be transport after the wedding back to Takapuna.</p>
              <ul class="accomodation">
                <li>
                  <a href="http://www.spencerhotel.co.nz/">Spencer Apartments</a>
                </li>
                <li>
                  <a href="http://www.spencerhotel.co.nz/">The Spencer on Byron Hotel</a>
                </li>
                <li>
                  <a href="https://www.airbnb.co.nz/s/Takapuna--Auckland/homes">Takapuna on AirBnB</a>
                </li>
                <li>
                  <a href="http://www.takapunamotorlodge.co.nz/?gclid=CIqfv7_ps9MCFdgkvQod8aQKGQ">Takapuna Motor Lodge</a>
                </li>
                <li>
                  <a href="http://www.anzac-court.co.nz/">ANZAC Court Motel</a>
                </li>
                <li>
                  <a href="http://takapunainternational.co.nz/">Takapuna International Motor Lodge</a>
                </li>
                <li>
                  <a href="http://parklane.co.nz/">Parklane Motor Inn</a>
                </li>
                <li>
                  <a href="http://cityofsailsmotel.co.nz/">City of Sails Motel</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  `
}

module.exports = home

      //<section>
      //  <div class="l--constrained">
      //    <h2>Flight Information</h2>
      //  </div>
      //</section>
      //<section>
      //  <div class="l--constrained">
      //    <h2>Car Rental</h2>
      //  </div>
      //</section>
      //<section>
      //  <div class="l--constrained">
      //    <h2>Auckland Accomodation</h2>
      //  </div>
      //</section>
      //<section>
      //  <div class="l--constrained">
      //    <h2>Things To Do</h2>
      //    <div>
      //      <h3>Around Auckland</h3>
      //    </div>
      //    <div>
      //      <h3>Day Trips From Auckland</h3>
      //    </div>
      //    <div>
      //      <h3>Further Afoot</h3>
      //    </div>
      //  </div>
      //</section>
