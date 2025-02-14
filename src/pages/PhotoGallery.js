import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
// import fetch from 'node-fetch';
// global.fetch = fetch;
import Unsplash, {
    toJson
} from 'unsplash-js';
import { useSelector, useDispatch } from 'react-redux';
import { updateData } from './../features/counter/counterSlice';
import './PhotoGallery.css';



const unsplash = new Unsplash({ 
	accessKey: 'UNn5owZvWC7Ia3Wq6ucOuhKo-lm9qC_OGaZwbBBmt6g',
	secret: 'oirSNKhRzQ36g4X8N-uT0_UynAKtu-T2vw9Leo9tVs0',
	callbackUrl: 'http://localhost:3000/'
});

unsplash.photos.listPhotos(2, 10, "latest")
  .then(toJson)
  .then(json => {
    console.log(json[0]);
  });

const authenticationUrl = unsplash.auth.getAuthenticationUrl([
  "public",
  "read_user",
  "write_user",
  "read_photos",
  "write_photos"
]);
console.log(authenticationUrl)


const numbers = [1, 2, 3, 4, 5];


function PhotoGallery() {
  const dispatch = useDispatch()
  
	const [LatestPhotos, setLatestPhotos] = useState([]);    
    unsplash.photos.listPhotos(2, 10, "latest")
    .then(toJson)
    .then(json => {
       setLatestPhotos(json)
    });
    // dispatch(updateData())
    
    
    const listItems = LatestPhotos.map((item, index) =>
       <li key={index} className="item">
        <Link to={`/photo/${item.id}`}>
        	<a href="./PhotoPage.js"><img src={item.urls.thumb} alt="item.description" /></a>
          <br /><a href={item.user.links.html}>{item.user.name}</a>
          <p>{item.created_at}</p>
          <p>&#9829; {item.likes}</p>
        </Link>
       </li>
    );
    const wlistItems = numbers.map((number, index) =>
       <li key={index}>
        	{number}
       </li>
    );

	return (		
		<ul className="container">
		    {listItems}
		</ul> 
    )
}

export default PhotoGallery;

