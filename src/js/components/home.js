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
          <div class="row row--middled">
            <div class="row__half">
              <h2>Kumeu Valley Estate</h3>
              <p>Located admist the vineyards of the Kumeu Valley just 20 minutes from Auckland city, the venue contains an outdoor ceremony area, a modernised farm house and a barn complete with an outdoor patio.</p>
              <p>
                It is located at <a href="https://www.google.co.nz/maps/place/Kumeu+Valley+Estate/@-36.74204,174.5089526,17z/data=!4m13!1m7!3m6!1s0x6d0d13e2a8bebcf9:0x72cb9cd0bdfe7b12!2s972+Old+N+Rd,+Huapai,+Waimauku+0882!3b1!8m2!3d-36.74204!4d174.5111413!3m4!1s0x6d0d13e2a8bebcf9:0x78e8ec38867eff09!8m2!3d-36.74204!4d174.5111413">972 Old North Road, Waimauku, Auckland</a>,
                and more information and photos can be found on the <a href="https://www.kumeuvalley.co.nz/">Kumeu Valley Estate website</a>.
              </p>
            </div>
            <div class="row__half">
              <img src="images/kumeu.jpg" alt="Kumeu Valley Estate" />
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
