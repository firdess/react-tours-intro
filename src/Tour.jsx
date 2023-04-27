import { useState } from "react"

export default function Tour({ id, image, name, price, info,removeTour }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <div className="tour-footer">
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={()=>setReadMore(!readMore)}>
            {readMore ? `show less` : `Read more`}
          </button>
        </p>

        <button className="delete-btn" onClick={()=>removeTour(id)}>not interested</button>
      </div>
    </article>
  )
}
