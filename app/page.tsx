const livingText = [
  'A spacious, open-concept living area centered around a 100 inch high def television and premium audio setup. Black steel wall panels, natural wood floors, and oversized leather seating create a bold yet comfortable environment.',
  'Floor-to-ceiling glass garage doors bring in natural light and connect the indoors with the surrounding landscape, making the space feel both expansive and inviting.',
  'A secondary seating area anchored by a modern fireplace is framed with curated artwork and warm wood accents. High ceilings and an oversized fan enhance airflow and scale, while accent lighting creates a relaxed, evening-ready atmosphere—ideal for conversation or unwinding.',
  'The space is open, comfortable, and easy to settle into, with plenty of seating and a layout that makes it a great place to hang out, watch something, or simply relax.',
  'A high-end stereo system fills the space with rich, full sound—whether you are listening to background music or turning up your favorite song.',
  'Multiple seating areas feel connected but not crowded. Clean lines, warm wood, and delightful details throughout.',
  'A space that feels relaxed during the day and cozy at night, with a blanket warmer for added comfort.'
]

export default function Page() {
  return (
    <main className="page">
      <section className="hero">
        <img src="/exterior-firepit.jpg" alt="The Station exterior with fire pit at dusk" />
        <div className="heroOverlay" />
        <div className="heroText">
          <div className="heroKicker">Nunica wedding stay</div>
          <h1 className="heroTitle">The Station</h1>
          <p className="heroSubtitle">
            A private, comfortable residence with bold design, warm gathering spaces, and room to unwind before and after the celebration.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="intro copy">
          <p>
            A wedding is a happy and busy event for both the wedding party and the guests. Convenience and accessibility go a long way towards making that special day less stressful. The Station is your exclusive option to stay close to your Nunica wedding venue as well as enjoy a large comfortable space during your stay. This is so much more than a hotel room, it is a complete residence providing everything necessary for your stay and furnished to accommodate a small group of guests.
          </p>
          <p>
            Perfect for a couple who want to stay close, unwind in comfort, and enjoy a private space before and after the celebration.
          </p>
        </div>
      </section>

      <section className="section">
        <h2 className="sectionHeading">Living Space</h2>
        <div className="grid2">
          <img src="/living-hero.jpg" alt="Living room with large television and premium stereo" />
          <div className="stack">
            <img src="/living-alt.jpg" alt="Alternate wide angle of living room" />
            <img src="/living-lounge.jpg" alt="Fireplace lounge with red chair" />
          </div>
        </div>
        <div className="singleImage">
          <img src="/living-ambience.jpg" alt="Indoor tree casting dramatic ceiling shadows" />
        </div>
        <div className="singleImage">
          <img src="/living-detail.jpg" alt="Stereo speakers and console detail" />
        </div>
        <div className="featureCard copy">
          {livingText.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="sectionHeading">Kitchen &amp; Dining</h2>
        <div className="mosaic">
          <img src="/kitchen-main.jpg" alt="Kitchen and dining area" />
          <div className="mosaicRight">
            <img src="/kitchen-alt.jpg" alt="Kitchen with island and shelving" />
            <img src="/kitchen-dining-detail.jpg" alt="Dining nook by the window" />
          </div>
        </div>
        <div className="featureCard copy">
          <p>The kitchen is stylish, modern and open to the living space.</p>
          <p>It’s easy to cook, gather, or just have a drink at the table.</p>
          <p>A functional layout with ample counter space and bar seating around an island makes it just as comfortable for a quick drink as it is for preparing a full meal. The kitchen is fully stocked and equipped for all your needs.</p>
          <p>Near the kitchen is a stylish half bath accessible to guests</p>
          <p>Bright during the day and warm in the evening.</p>
          <p>The lighting shifts at night and makes the space feel more relaxed and inviting.</p>
        </div>
      </section>

      <section className="section">
        <h2 className="sectionHeading">Bedroom</h2>
        <div className="grid2">
          <img src="/bedroom-main.jpg" alt="Bedroom with white bedding" />
          <img src="/bedroom-alt.jpg" alt="Bedroom alternate bedding setup" />
        </div>
        <div className="featureCard copy">
          <p>A quiet, comfortable bedroom with just what you need to rest and reset.</p>
          <p>Clean and cozy with a queen size bed and en suite full bath.</p>
        </div>
      </section>

      <section className="section">
        <h2 className="sectionHeading">Shower &amp; Bath</h2>
        <div className="grid3">
          <img src="/bath-vanity.jpg" alt="Master bath vanity" />
          <img src="/bath-wide.jpg" alt="Master bath wide view" />
          <img src="/bath-shower.jpg" alt="Master shower" />
        </div>
        <div className="featureCard copy">
          <p>A clean, well-appointed full bath designed for comfort and indulgence.</p>
          <p>An oversized shower with multiple heads and plenty of hot water.</p>
          <p>Fresh towels, towel warmer and quality fixtures, create a layout that’s easy to use and enjoy.</p>
          <p>A full size washer and dryer are conveniently accessible through this space.</p>
        </div>
      </section>

      <section className="section">
        <h2 className="sectionHeading">Half Bath</h2>
        <div className="grid2">
          <img src="/half-bath-main.jpg" alt="Half bath interior" />
          <img src="/half-bath-entry.jpg" alt="Hallway view to half bath" />
        </div>
      </section>

      <section className="section">
        <h2 className="sectionHeading">Outdoor</h2>
        <div className="grid2">
          <img src="/exterior-dusk.jpg" alt="Exterior at dusk" />
          <img src="/exterior-front.jpg" alt="Exterior front view at blue hour" />
        </div>
        <div className="grid2" style={{ marginTop: 18 }}>
          <img src="/exterior-window-view.jpg" alt="View through glass garage door into living room" />
          <img src="/exterior-night.jpg" alt="Exterior at night with dramatic lighting" />
        </div>
        <div className="featureCard copy">
          <p>The outside has a strong, simple look that retains some of the vintage charm of the original service station.</p>
          <p>In the warmer months the flowers and greenery soften everything and make it feel private and inviting.</p>
          <p>Enjoy the outdoor seating around the fire pit and help yourself to the provided firewood.</p>
          <p>Park in your private indoor garage stall as well as off street parking for several additional vehicles.</p>
        </div>
      </section>
      <div className="footerSpace" />
    </main>
  )
}
