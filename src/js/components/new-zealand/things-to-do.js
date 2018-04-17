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
    <header class="hero" style="background-image: url(../images/roys-peak.jpg)">
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
      <section>
        <div class="l--constrained">
          <h2>NZ Trip Ideas</h2>
          <section>
            <h3>&quot;Up North&quot;</h3>
            <p>
              Take your time enjoying the beautiful scenery and nature of Northland!
            </p>
            <p>
              There are plenty of gas station and places to stop for food along the way! Also worth noting is the brown signs that you’ll see along the way which signify tourist spots/things worth seeing.
            </p>
            <p>
              Make your way up North from Auckland on State highway one, stopping at Matakana Town for a great coffee!
            </p>
            <p>
              Mangawhai is a great place to stop and spend a night or two, with beautiful beaches and hikes.
            </p>
            <p>
              Continue making your way up north on State Highway 1 towards Paihia for some great beaches and stunning scenery, and then take the time to walk around the Waitangi Treaty grounds to learn about some important NZ history.
            </p>
            <p>
              After this head north to Kerikeri, a great place to base yourself for a night or two, famous for its oranges and ideally situated to explore the beautiful Bay of Islands.
            </p>
            <p>
              Leaving Kerikeri head north on State Highway 10, which will take you to Doubtless Bay, a great place to stop for lunch at the famous Mangonui Fish and Chip Shop.
            </p>
            <p>
              Full of good food, make your way up the northern-most part of NZ – Cape Reinga. Here you’ll be able to see the iconic lighthouse, and the point at which the Pacific and Indian Oceans meet!
            </p>
            <p>
              On your way back down, make sure to stop at the giant sand dunes (Te Paki) where you can wander around and even rent a board for some sand boarding.
            </p>
            <p>
              Driving back down, you could stay somewhere for a night or two near 90 mile beach and enjoy this amazing beach, which is a pubic road! You can take bus tours which will drive you down the length of the beach!
            </p>
            <p>
              Taking the west coast route back, you’ll pass through the Waipoua Forest where there are plenty of great hikes, and NZ’s oldest and largest kauri tree!
            </p>
            <p>
              On your way back into Auckland, taking the west coast route, you’ll past through the area of Kumeu which is full of many great vineyards. Also worth stopping at for dinner is the Hallertau Brewery – great atmosphere, live music and awesome food and beer!
            </p>
          </section>
          <section>
            <h3>&quot;North Island Adventure&quot;</h3>
            <p>
              Make your way down South of Auckland on State Highway 1 towards Hamilton, with the option of stopping at place like Hobbiton or Waitomo caves along the way. Stay for a night or two in this general area, maybe near to Waitomo caves for nice countryside, or in Matamata or Tauranga.
            </p>
            <p>
              From here make your way to Rotorua, a great place to stay for a couple of nights. Here you can experience Maori culture by vising a cultural experience centre, and also see all of the natural spring based attractions that this geothermal area has to offer.
            </p>
            <p>
              From here you can either make your way to the Coromandel peninsula, famous for its amazing beaches, before heading back to Auckland.
            </p>
            <p>
              Instead of this, you could potentially work your way down the country – attempting the Tongariro Crossing hike (do-able in a day) and making your way down to Wellington (our capital). From here you can either leave your rental car and fly back up to Auckland, or drive back up to Auckland.
            </p>
          </section>
          <section>
            <h3>&quot;South Island Highlights&quot;</h3>
            <p>
              Fly down to Queenstown and drive your way back up to Auckland, do a loop or pick a few of the things that sound the best to you and get on the road!
            </p>
            <p>
              Here are our top picks for things to see and do in the south island of NZ, listed from South-North.
            </p>
            <h4>Milford Sound</h4>
            <p>
              Fill up your tank in Te Anau and head through magical scenery to the beautiful Milford Sound! Make sure to stop at Mirror Lake, and in Milford Sound you can go on a kayaking tour, out on a boat cruise or there are plenty of hikes! Either stay down in Milford sound, or base yourself in the nearest town (Te Anau) to drive in.
            </p>
            <h4>Queenstown</h4>
            <p>
              The adventure capital of NZ! In the winter it’s a great little ski town, in the summer it’s the place to be for adrenaline junkies and nature lovers! To name a few things to do here:
              <ul>
                <li>Take the gondola up Bob’s Peak for amazing views, bungee jumping and lugeing down the mountain!</li>
                <li>Sit in one of the many amazing bars around the harbour</li>
                <li>Grab a burger at the famous Fergburger</li>
                <li>Wander around the Gardens</li>
                <li>Loads of bike and hiking trails</li>
                <li>Shotover gorge jet boat (it’s amazing).</li>
                <li>Various other places to skydive and bungee jump.</li>
              </ul>
            </p>
            <h4>Wanaka</h4>
            <p>
              Another great little town on a lake, with a tonne of amazing hikes including Roy’s Peak (a moderately difficult hike with an incredible view).
            </p>
            <h4>Christchurch</h4>
            <p>
              A city that was brought down by two major earthquakes that is now in the process of reinventing itself – a really awesome place!
            </p>
            <h4>Kaikoura</h4>
            <p>
              The perfect place to do some whale and dolphin watching!
            </p>
            <h4>Picton</h4>
            <p>
              Cute little town, worth a visit really only if you’re planning on taking the inter-island ferry over to Wellington!
            </p>
          </section>
        </div>
      </section>
    </main>
  </div>
`
