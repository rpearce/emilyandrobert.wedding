'use strict'

function home() {
  return `
    <main>
      <header>
        <h1>
          <div class="fancy">Emily & Robert</div>
          <small>Are Getting Married</small>
        </h1>
        <div>
          <div class="fancy">Auckland</div>
          <div>February 18<sup>th</sup> 2018</div>
        </div>
        <div>
          <div class="fancy">Charleston</div>
          <div>March 3<sup>rd</sup> 2018</div>
        </div>
      </header>
      <section>
        <img src="images/kumeu.jpg" alt="Kumeu Valley Estate" />
        <h2>Kumeu Valley Estate</h3>
        <ul>
          <li>
            <a href="https://www.kumeuvalley.co.nz/">
              Website
            </a>
          </li>
          <li>
            <a href="https://www.google.co.nz/maps/place/Kumeu+Valley+Estate/@-36.74204,174.5089526,17z/data=!4m13!1m7!3m6!1s0x6d0d13e2a8bebcf9:0x72cb9cd0bdfe7b12!2s972+Old+N+Rd,+Huapai,+Waimauku+0882!3b1!8m2!3d-36.74204!4d174.5111413!3m4!1s0x6d0d13e2a8bebcf9:0x78e8ec38867eff09!8m2!3d-36.74204!4d174.5111413">
              972 Old North Road, Waimauku, Auckland
            </a>
          </li>
        </ul>
      </section>
      <section>
        <h2 class="fancy">Flight Information</h2>
      </section>
      <section>
        <h2 class="fancy">Car Rental</h2>
      </section>
      <section>
        <h2 class="fancy">Auckland Accomodation</h2>
      </section>
      <section>
        <h2 class="fancy">Things To Do</h2>
        <div>
          <h3>Around Auckland</h3>
        </div>
        <div>
          <h3>Day Trips From Auckland</h3>
        </div>
        <div>
          <h3>Further Afoot</h3>
        </div>
      </div>
    </main>
  `
}

module.exports = home
