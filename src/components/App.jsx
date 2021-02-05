import React from "react";
import Card from './Card';

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card 
        name = 'Beyonce'
        urlimg = "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        tel = "+123 456 789"
        email = "b@beyonce.com"
      />
      <Card 
        name = 'Jack Bauer'
        urlimg = "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
        tel = "+123 456 789"
        email = "b@beyonce.com"
      />
      <Card 
        name = 'Chuck Norris'
        urlimg = "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
        tel = "+123 456 789"
        email = "b@beyonce.com"
      />
    </div>

  );
}

export default App;
