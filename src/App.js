import React from "react";
import { render } from "react-dom";
import ImageList from "./containers/imageList";
import Search from "./components/Search";

const App = () => {
  return (
    <div>
      App
      <Search />
      <ImageList />{" "}
    </div>
  );
};

export default App;
