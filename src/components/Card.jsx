import React from 'react';


  function Card(props) {
    return(
      <div>
        <div className="card">
          <div className="top">
            <h2 className="name">{props.name}</h2>
            <img class = "circle-img"
              src={props.urlimg}
              alt="avatar_img"
            />
          </div>
          <div className="bottom">
            <p class="info">{props.tel}</p>
            <p class="info">{props.email}</p>
          </div>
        </div>
      </div>  
    )
  }
  export default Card;

