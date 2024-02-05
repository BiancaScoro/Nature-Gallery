import React, {useState, useEffect} from 'react'
import './App.css';
import Liked from './Liked';

function App() {

  const [photos, setPhotos] = useState([])

  useEffect(() => {
  const fetchPhotos = async () => {
  const apiKey = 'uHlVB7O3ELiL3C5pZboqKIrCRWG3JREKfJ5H8QEnezRImxq7ekPnb7eA';
  const apiURL = 'https://api.pexels.com/v1/search?query=nature&per_page=12';

  try{
  const response = await fetch(apiURL, {
    headers: {
      Authorization: apiKey,
    },
  });

  if (!response.ok){
    throw new Error("Error fetching data from Pexels API")
  }

  const data = await response.json();
  setPhotos(Array.isArray(data.photos) ? data.photos : []);
  console.log(data);
} catch (error) {
  console.log('ERROR', error);
}
}

fetchPhotos();
}, []);

  return (
    <div className="App">
      <h1 className="title">Nature Gallery</h1>
       <div className="image-container">
      {Array.isArray(photos) && photos.map((photo) => (
         <div key={photo.id}>
        <img key={photo.id} src={photo.src.original} alt={photo.photographer}  className="resized-image" />
        <Liked />
        </div>
      ))
    }
    </div>
    </div>
  );
}

export default App;
