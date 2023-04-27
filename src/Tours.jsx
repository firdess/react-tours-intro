import Tour from "./Tour"

export default function Tours({ tours,removeTour }) {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div className="tours">
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} removeTour={removeTour} />
        )
        )}
      </div>

    </section>
  )
}
