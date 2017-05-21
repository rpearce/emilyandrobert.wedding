'use strict'

const items = [
  {
    title: 'Sky Tower',
    image: '/images/sky-tower.jpg',
    body: 'Take the elevator up the top for views and a glass floor. There is also a revolving restaurant near the top!',
    link: 'https://www.skycityauckland.co.nz'
  },
  {
    title: 'Auckland Museum',
    image: '/images/auckland-war-museum.jpg',
    body: 'Museum with NZ history, natural history, as well as military history. There are also botanical gardens, walking areas and great views.',
    link: 'http://www.aucklandmuseum.com'
  },
  {
    title: 'Viaduct Harbour',
    image: '/images/viaduct-harbour.jpg',
    body: 'An attractive area to walk around with many restaurants, cafes and boat tours. The nearby Wynyard quarter sports many restaurants and occasional outdoor activities.',
    link: 'https://www.viaduct.co.nz'
  },
  {
    title: 'North Shore beaches',
    image: '/images/orewa-beach.jpg',
    body: 'There are many beaches along the North Shore, and many of them are lined with cafes, restaurants/bars and small shops.',
    link: 'http://www.newzealand.com/int/feature/aucklands-north-shore-beaches'
  },
  {
    title: 'Mt. Eden',
    image: '/images/mt-eden.jpg',
    body: 'Mt. Eden is a dormant volcano near central Auckland that can be driven or walked up. It is the highest land in Auckland, and as such, has great landscape views.',
    link: 'http://www.aucklandcouncil.govt.nz/EN/parksfacilities/premierparks/Pages/mteden.aspx'
  },
  {
    title: 'Devonport',
    image: '/images/devonport.jpg',
    body: 'The Devonport area is an attractive suburb on the water with many shops and cafes. You can get there via car or even ferry from the city!',
    link: 'http://www.visitdevonport.co.nz'
  },
  {
    title: 'Waiheke Island',
    image: '/images/mudbrick-waiheke.jpg',
    body: 'A short ferry ride from Auckland city, this island is full of vineyards, wineries, breweries and beaches. A must do.',
    link: 'https://www.waiheke.co.nz'
  },
  {
    title: 'Rangitoto Island',
    image: '/images/rangitoto.jpg',
    body: 'Rangitoto is a dormant island-volcano in the Auckland harbour. It is accessible only by ferry and has a few different hiking trails. The summit is gorgeous and overlooks the entire area.',
    link: 'http://www.doc.govt.nz/rangitoto'
  },
  {
    title: 'West Coast Beaches',
    image: '/images/piha.jpg',
    body: 'These beautiful, rugged black-sand beaches with strong surf are great for hiking, walking and (for the bold) surfing.',
    link: 'http://regionalparks.aucklandcouncil.govt.nz/piha'
  },
  {
    title: 'Auckland Bridge',
    image: '/images/auckland-bridge-bungy.jpg',
    body: 'This bridge is one of the main thoroughfares into and out of Auckland city. But why drive over it when you can <a href="http://www.bungy.co.nz/auckland-bridge/auckland-bridge-climb">climb it</a> or <a href="http://www.bungy.co.nz/auckland-bridge/auckland-bridge-bungy">jump off it?</a>',
    link: 'http://www.bungy.co.nz/auckland-bridge/auckland-bridge-bungy'
  }
]

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
            ${items.map(buildItem).join('')}
          </ul>
        </div>
      </section>
    </main>
  </div>
`
