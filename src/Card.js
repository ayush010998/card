import React from 'react'


const Card = ({tours}) => {
  return (
    <div>
      {
        tours.map((place)=>{
            const{id,name,info,image,price}=place;
            return(
                <article key={id} className="card">
              <img src={image} alt="place" />

              <h3>{name}</h3>
              <p>{info}</p>
              <p>Price: ${price}</p>
            </article>
            )
        })
      }
    </div>
  )
}

export default Card
