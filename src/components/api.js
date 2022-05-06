import axios from "axios";
import { useState, useEffect } from "react";

function LoadImages() {
  const [image, setImage] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/photos?client_id=y-qA6u80JlVunq5M9ZPUUctKq4vE7jGVRPY9tJWjYjU"
      )
      .then((data) => {
        console.log(data);
        setImage(data.data);
      });
  }, []);
  return image;
}

function SearchImages(query) {
  const [search, setSearch] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/search/photos?query=" +
          query +
          "&client_id=y-qA6u80JlVunq5M9ZPUUctKq4vE7jGVRPY9tJWjYjU"
      )
      .then((data) => {
        console.log(data);
        setSearch(data.data.results);
      });
  }, [query]);
  return search;
}

export { LoadImages, SearchImages };
