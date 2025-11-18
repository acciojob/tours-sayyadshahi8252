import React, { useState } from "react";

function Tour({ id, name, info, image, price, removeTour }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <article>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <h4>${price}</h4>

      <p>
        {readMore ? info : `${info.substring(0, 200)}`}
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? "Show Less" : "Show More"}
        </button>
      </p>

      <button onClick={() => removeTour(id)}>Not Interested</button>
    </article>
  );
}

export default Tour;
