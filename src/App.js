import { useState } from "react";
import "./App.css";
import { LoadImages, SearchImages } from "./components/api";
import Images from "./components/images";

function App() {
  const [searchImg, setSearchImg] = useState();
  const [imagesSearch, setImagesSearch] = useState();
  const data = LoadImages();
  console.log(searchImg);

  const handleClick = () => {
    setImagesSearch(searchImg);
  };

  const searchData = SearchImages(imagesSearch);
  console.log(searchData);
  return (
    <div>
      <div className=" input-wrap">
        <input
          placeholder="Search for anything"
          className="input-field"
          type="text"
          onChange={(e) => setSearchImg(e.target.value)}
        />
        <button className="search" onClick={handleClick}>
          Search
        </button>
      </div>
      <div className="images">
        {searchImg
          ? searchData.map((i) => <Images src={i.urls.thumb} />)
          : data.map((i) => <Images src={i.urls.thumb} />)}
      </div>
    </div>
  );
}

export default App;
