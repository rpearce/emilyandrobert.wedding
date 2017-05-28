'use strict'

const { auckland, dayTrips } = require('./to-do')

const buildItem = item => `
  <li class="grid__item grid__item--1of3">
    <a href="${item.link}" target="_blank">
      <div class="grid__image" style="background-image: url(${item.image})"></div>
    </a>
    <h3>
      <a href="${item.link}" target="_blank">${item.title}</a>
      <span>&rarr;</span>
    </h3>
    <p>${item.body}</p>
  </li>
`

module.exports = () => `
  <div>
    <header class="hero" style="background-image: url(/images/roys-peak.jpg)">
      <div class="l--constrained">
        <div class="hero__content">
          <h1>NZ – Things To Do & See</h1>
        </div>
      </div>
    </header>
    <main>
      <section>
        <div class="l--constrained">
          <h2>Auckland</h2>
          <ul class="grid">
            ${auckland.map(buildItem).join('')}
          </ul>
        </div>
      </section>
      <section>
        <div class="l--constrained">
          <h2>Day Trips From Auckland</h2>
          <ul class="grid">
            ${dayTrips.map(buildItem).join('')}
          </ul>
        </div>
      </section>
    </main>
  </div>
`
