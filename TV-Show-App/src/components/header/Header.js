import React from "react";
import SearchBar from "../searchBar/SearchBar";

const Header = ({ onSearch }) => {
  return (
    <div className="row">
      <div className="col-md-12 col-lg-4">
        <p>TV Show App</p>
      </div>
      <div className="col-md-12 col-lg-4">
        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
};

export default Header;
