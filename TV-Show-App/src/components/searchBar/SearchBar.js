import React, { useState } from "react";
import { Search } from "react-bootstrap-icons";
import style from "./style.module.css";

const SearchBar = ({ onSearch }) => {
  const [value, setValue] = useState("");
  const search = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSearch(e.target.value);
      setValue("");
    }
  };

  const handleChange = (e) => {
    setValue(e);
  };
  return (
    <div>
      <Search size={22} className={style.icon} />
      <input
        className={style.input}
        type="text"
        placeholder="Search The TV Show You May Like ..."
        onKeyUp={(e) => search(e)}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
