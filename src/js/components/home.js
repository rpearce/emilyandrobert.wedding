'use strict'

module.exports = () => `
  <div class="home">
    <header class="home__header">
      <div class="l--constrained">
        <div class="home__headerContent">
          <h1>
            <div>Emily &amp; Robert</div>
            <small>Are Getting Married</small>
          </h1>
          <div class="wedding__info">
            <div class="wedding__infoLocation">Auckland</div>
            <div class="wedding__infoDate">February 18<sup>th</sup> 2018</div>
          </div>
          <div class="wedding__info">
            <div class="wedding__infoLocation">Charleston</div>
            <div class="wedding__infoDate">March 3<sup>rd</sup> 2018</div>
          </div>
        </div>
      </div>
    </header>
    <main class="home__main">
      <nav>
        <ul class="home__nav">
          <li class="home__navItem">
            <a class="home__navLink" href="new-zealand.html">
              <span>New Zealand</span>
            </a>
          </li>
          <li class="home__navItem">
            <a class="home__navLink" href="charleston.html">
              <span>Charleston</span>
            </a>
          </li>
        </ul>
      </nav>
    </main>
  </div>
`
